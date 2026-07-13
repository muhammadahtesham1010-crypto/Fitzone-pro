"use client";

import { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MessageCircle, Send, Trash2, Plus, Menu, Loader2, ChevronLeft, Bot, User } from "lucide-react";
import { GradientText } from "@/components/shared/gradient-text";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { toast } from "sonner";

interface Conversation {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

interface Message {
  id: string;
  conversationId: string;
  role: "user" | "assistant";
  content: string;
  createdAt: string;
}

export default function ChatPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [sending, setSending] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const prevMessagesLength = useRef(0);

  const scrollToBottom = () => {
    const el = messagesContainerRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  };

  useEffect(() => {
    if (messages.length > prevMessagesLength.current) {
      scrollToBottom();
    }
    prevMessagesLength.current = messages.length;
  }, [messages]);

  const loadConversations = async () => {
    try {
      const res = await fetch("/api/chat");
      if (res.ok) {
        const data = await res.json();
        setConversations(data);
      }
    } catch (e) {
      console.error("Failed to load conversations", e);
    }
  };

  const loadMessages = async (id: string) => {
    try {
      const res = await fetch(`/api/chat/${id}`);
      if (res.ok) {
        const data = await res.json();
        setMessages(data.messages);
      }
    } catch (e) {
      console.error("Failed to load messages", e);
    }
  };

  useEffect(() => {
    if (status === "loading") return;
    if (!session) { router.push("/login"); return; }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadConversations().finally(() => setFetching(false));
  }, [status, session, router]);

  useEffect(() => {
    if (!activeId || messages.some((m) => m.conversationId === activeId)) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadMessages(activeId).finally(() => setLoading(false));
  }, [activeId, messages]);

  const handleSend = async () => {
    const msg = input.trim();
    if (!msg || sending) return;
    setInput("");
    setSending(true);

    const userMessage: Message = {
      id: "temp-" + Date.now(),
      conversationId: activeId || "",
      role: "user",
      content: msg,
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg, conversationId: activeId }),
      });

      if (!res.ok) throw new Error("Failed to send");

      const data = await res.json();

      setMessages((prev) =>
        prev
          .filter((m) => m.id !== userMessage.id)
          .concat(data.userMessage, data.assistantMessage)
      );

      if (!activeId || activeId !== data.conversation.id) {
        setActiveId(data.conversation.id);
        setConversations((prev) => {
          const exists = prev.find((c) => c.id === data.conversation.id);
          if (exists) return prev.map((c) => c.id === data.conversation.id ? data.conversation : c);
          return [data.conversation, ...prev];
        });
      } else {
        setConversations((prev) =>
          prev.map((c) => c.id === data.conversation.id ? data.conversation : c)
        );
      }
    } catch {
      setMessages((prev) =>
        prev.filter((m) => m.id !== userMessage.id)
      );
      toast.error("Failed to send message");
    } finally {
      setSending(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/chat/${id}`, { method: "DELETE" });
      if (res.ok) {
        setConversations((prev) => prev.filter((c) => c.id !== id));
        if (activeId === id) {
          setActiveId(null);
          setMessages([]);
        }
      }
    } catch (e) {
      console.error("Failed to delete", e);
    }
  };

  const handleNew = () => {
    setActiveId(null);
    setMessages([]);
    setSidebarOpen(false);
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    const now = new Date();
    const diff = now.getTime() - d.getTime();
    if (diff < 86400000) return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    return d.toLocaleDateString([], { month: "short", day: "numeric" });
  };

  if (status === "loading") {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-emerald-400" />
      </div>
    );
  }

  return (
    <div className="flex h-full gap-4">
      <div className={`
        fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-emerald-500/10 bg-card transition-transform duration-300 lg:static lg:translate-x-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="flex items-center justify-between border-b border-emerald-500/10 p-4">
          <h2 className="flex items-center gap-2 font-semibold">
            <MessageCircle className="h-4 w-4 text-emerald-400" /> Chats
          </h2>
          <button onClick={() => setSidebarOpen(false)} className="rounded-lg p-1 text-muted-foreground hover:bg-emerald-500/10 lg:hidden">
            <ChevronLeft className="h-4 w-4" />
          </button>
        </div>

        <div className="p-3">
          <button
            onClick={handleNew}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 transition-all hover:bg-emerald-500/20"
          >
            <Plus className="h-4 w-4" /> New Chat
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 pb-3">
          {fetching ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
          ) : conversations.length === 0 ? (
            <div className="py-8 text-center text-sm text-muted-foreground">
              No conversations yet
            </div>
          ) : (
            <div className="space-y-1">
              {conversations.map((conv) => (
                <div key={conv.id} className="group flex items-center">
                  <button
                    onClick={() => { setLoading(true); setActiveId(conv.id); setSidebarOpen(false); }}
                    className={`flex-1 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                      activeId === conv.id
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "text-muted-foreground hover:bg-emerald-500/5 hover:text-foreground"
                    }`}
                  >
                    <div className="truncate font-medium">{conv.title}</div>
                    <div className="mt-0.5 text-xs opacity-60">{formatDate(conv.updatedAt)}</div>
                  </button>
                  <button
                    onClick={() => handleDelete(conv.id)}
                    className="ml-1 rounded-lg p-1.5 text-muted-foreground transition-all hover:bg-red-500/10 hover:text-red-400 sm:opacity-0 sm:group-hover:opacity-100"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-emerald-500/10 bg-card">
        <div className="flex items-center gap-3 border-b border-emerald-500/10 p-4">
          <button onClick={() => setSidebarOpen(true)} className="rounded-lg p-1 text-muted-foreground hover:bg-emerald-500/10 lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <MessageCircle className="h-5 w-5 text-emerald-400" />
            <GradientText>FitBot</GradientText>
          </h2>
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-400">AI</span>
        </div>

        <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4">
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="h-6 w-6 animate-spin text-emerald-400" />
            </div>
          ) : !activeId ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-4 rounded-full bg-emerald-500/10 p-6">
                <Bot className="h-12 w-12 text-emerald-400" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Ask <GradientText>FitBot</GradientText></h3>
              <p className="mb-6 max-w-md text-muted-foreground">
                Your AI fitness assistant. Ask about workouts, nutrition, form tips, or anything fitness-related.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Best chest exercises?", "How to start running?", "Meal prep tips?", "Fix my squat form?"].map((q) => (
                  <button
                    key={q}
                    onClick={() => { setInput(q); }}
                    className="rounded-full border border-emerald-500/20 px-3 py-1.5 text-sm text-muted-foreground transition-all hover:border-emerald-500/40 hover:text-emerald-400"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          ) : messages.length === 0 ? (
            <div className="flex h-full items-center justify-center text-muted-foreground">
              Start a conversation with FitBot
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "assistant" && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                      <Bot className="h-4 w-4 text-emerald-400" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] min-w-0 rounded-2xl px-4 py-3 sm:max-w-[70%] ${
                      msg.role === "user"
                        ? "bg-emerald-500 text-white"
                        : "border border-emerald-500/10 bg-white/5"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <div className="prose prose-sm prose-invert max-w-none overflow-x-auto prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-emerald-400 prose-code:bg-emerald-500/10 prose-code:rounded prose-code:px-1 prose-a:text-emerald-400 prose-li:text-muted-foreground prose-pre:bg-emerald-950/50 prose-pre:border prose-pre:border-emerald-500/10">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {msg.content}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      <p className="text-sm">{msg.content}</p>
                    )}
                  </div>
                  {msg.role === "user" && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
              ))}
              {sending && (
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                    <Bot className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div className="flex items-center gap-1 rounded-2xl border border-emerald-500/10 bg-white/5 px-4 py-3">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-400" style={{ animationDelay: "0ms" }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-400" style={{ animationDelay: "150ms" }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-400" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="border-t border-emerald-500/10 p-4">
          <div className="flex items-end gap-2 rounded-xl border border-emerald-500/20 bg-white/5 p-2 focus-within:border-emerald-500/40">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask FitBot anything about fitness..."
              rows={1}
              className="flex-1 resize-none bg-transparent px-2 py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              style={{ minHeight: "44px", maxHeight: "120px" }}
              onInput={(e) => {
                const el = e.currentTarget;
                el.style.height = "auto";
                el.style.height = Math.min(el.scrollHeight, 120) + "px";
              }}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || sending}
              className="flex shrink-0 items-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-2 text-sm font-medium text-white transition-all hover:bg-emerald-600 disabled:opacity-50"
            >
              {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </button>
          </div>
          <p className="mt-1.5 text-center text-xs text-muted-foreground">
            FitBot may occasionally make mistakes. Verify important advice with a professional.
          </p>
        </div>
      </div>
    </div>
  );
}
