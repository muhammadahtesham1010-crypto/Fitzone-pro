import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-emerald-500/10 bg-white/5 p-6 backdrop-blur-xl",
        "dark:bg-emerald-950/10 dark:border-emerald-400/10",
        hover && "transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/10 hover:shadow-lg hover:shadow-emerald-500/5",
        className
      )}
    >
      {children}
    </div>
  );
}
