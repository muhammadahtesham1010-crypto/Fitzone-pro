import { getFitnessResponse } from "./fitness-knowledge";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function getGeminiResponse(messages: Message[]): Promise<string> {
  const userMessage = messages.find((m) => m.role === "user");
  if (!userMessage) {
    return "Hi! I'm FitBot. Ask me anything about fitness, workouts, nutrition, or recovery.";
  }

  const lastUserMessage = [...messages].reverse().find((m) => m.role === "user");
  return getFitnessResponse(lastUserMessage?.content ?? userMessage.content);
}
