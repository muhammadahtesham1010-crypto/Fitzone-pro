"use client";

import { GlassCard } from "@/components/shared/glass-card";

const payments = [
  { id: "#INV-001", user: "John Doe", plan: "Pro", amount: "$49.99", status: "Completed", date: "2024-01-15" },
  { id: "#INV-002", user: "Jane Smith", plan: "Elite", amount: "$99.99", status: "Completed", date: "2024-01-14" },
  { id: "#INV-003", user: "Mike Johnson", plan: "Basic", amount: "$19.99", status: "Pending", date: "2024-01-13" },
  { id: "#INV-004", user: "Sarah Williams", plan: "Pro", amount: "$49.99", status: "Completed", date: "2024-01-12" },
  { id: "#INV-005", user: "Alex Brown", plan: "Elite", amount: "$99.99", status: "Failed", date: "2024-01-11" },
];

export default function AdminPaymentsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Payments</h2>
      <GlassCard className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-emerald-500/10 bg-emerald-500/5">
                <th className="p-4 text-left font-medium">Invoice</th>
                <th className="p-4 text-left font-medium">User</th>
                <th className="p-4 text-left font-medium">Plan</th>
                <th className="p-4 text-left font-medium">Amount</th>
                <th className="p-4 text-left font-medium">Status</th>
                <th className="p-4 text-left font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p) => (
                <tr key={p.id} className="border-b border-emerald-500/5 hover:bg-emerald-500/5">
                  <td className="p-4 font-medium">{p.id}</td>
                  <td className="p-4 text-muted-foreground">{p.user}</td>
                  <td className="p-4">{p.plan}</td>
                  <td className="p-4">{p.amount}</td>
                  <td className="p-4">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      p.status === "Completed" ? "bg-emerald-500/10 text-emerald-400" :
                      p.status === "Pending" ? "bg-yellow-500/10 text-yellow-400" :
                      "bg-red-500/10 text-red-400"
                    }`}>{p.status}</span>
                  </td>
                  <td className="p-4 text-muted-foreground">{p.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}
