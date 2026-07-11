"use client";

import { GlassCard } from "@/components/shared/glass-card";
import { Mail, MailOpen } from "lucide-react";

const messages = [
  { name: "John Doe", email: "john@example.com", subject: "Membership Question", message: "I'd like to upgrade my plan...", date: "2 hours ago", read: false },
  { name: "Jane Smith", email: "jane@example.com", subject: "Trainer Booking", message: "Can I book a session with Alex?", date: "5 hours ago", read: false },
  { name: "Mike Johnson", email: "mike@example.com", subject: "Feature Request", message: "It would be great if you could add...", date: "1 day ago", read: true },
];

export default function AdminMessagesPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Contact Messages</h2>
      <div className="space-y-3">
        {messages.map((msg) => (
          <GlassCard key={msg.email + msg.subject} hover className="cursor-pointer">
            <div className="flex items-start gap-4">
              <div className={`mt-1 ${msg.read ? "text-muted-foreground" : "text-emerald-400"}`}>
                {msg.read ? <MailOpen className="h-5 w-5" /> : <Mail className="h-5 w-5" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <span className={`font-medium ${msg.read ? "" : "text-emerald-400"}`}>{msg.name}</span>
                    <span className="text-xs text-muted-foreground ml-2">{msg.email}</span>
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0">{msg.date}</span>
                </div>
                <p className="text-sm font-medium mb-1">{msg.subject}</p>
                <p className="text-sm text-muted-foreground truncate">{msg.message}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
