import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { conversations, messages } from "@/lib/db/schema";
import { auth } from "@/lib/auth";
import { eq } from "drizzle-orm";
import { getGeminiResponse } from "@/lib/gemini";

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await db.query.conversations.findMany({
      where: (c, { eq }) => eq(c.userId, session.user.id),
      orderBy: (c, { desc }) => [desc(c.updatedAt)],
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Chat list error:", error);
    return NextResponse.json({ error: "Failed to fetch conversations" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { message, conversationId } = body as {
      message: string;
      conversationId?: string;
    };

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    let conversation;
    if (conversationId) {
      const existing = await db.query.conversations.findFirst({
        where: (c, { eq, and }) =>
          and(eq(c.id, conversationId), eq(c.userId, session.user.id)),
      });
      if (!existing) {
        return NextResponse.json({ error: "Conversation not found" }, { status: 404 });
      }
      conversation = existing;
    } else {
      const [newConvo] = await db
        .insert(conversations)
        .values({ userId: session.user.id })
        .returning();
      conversation = newConvo;
    }

    const [userMsg] = await db
      .insert(messages)
      .values({
        conversationId: conversation.id,
        role: "user",
        content: message.trim(),
      })
      .returning();

    const history = await db.query.messages.findMany({
      where: (m, { eq }) => eq(m.conversationId, conversation.id),
      orderBy: (m, { asc }) => [asc(m.createdAt)],
    });

    const geminiMessages = history.map((m) => ({
      role: m.role as "user" | "assistant",
      content: m.content,
    }));

    const aiContent = await getGeminiResponse(geminiMessages);

    const [aiMsg] = await db
      .insert(messages)
      .values({
        conversationId: conversation.id,
        role: "assistant",
        content: aiContent,
      })
      .returning();

    const isFirstMessage = history.length <= 1;
    if (isFirstMessage) {
      const title = message.trim().length > 50
        ? message.trim().slice(0, 50) + "..."
        : message.trim();
      await db
        .update(conversations)
        .set({ title, updatedAt: new Date() })
        .where(eq(conversations.id, conversation.id));
      conversation.title = title;
    } else {
      await db
        .update(conversations)
        .set({ updatedAt: new Date() })
        .where(eq(conversations.id, conversation.id));
    }

    return NextResponse.json({
      userMessage: userMsg,
      assistantMessage: aiMsg,
      conversation,
    });
  } catch (error) {
    console.error("Chat send error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
