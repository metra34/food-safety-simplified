import { Icon } from "@/components/ui/icon"

export function ModalityCard({
  icon,
  title,
  accent,
  children,
}: {
  icon: string
  title: string
  accent: "primary" | "leaf"
  children: React.ReactNode
}) {
  return (
    <div
      className={
        accent === "primary"
          ? "flex flex-col gap-3 border border-t-4 border-border border-t-primary bg-surface-card p-5"
          : "flex flex-col gap-3 border border-t-4 border-border border-t-leaf-deep bg-surface-card p-5"
      }
    >
      <div className="flex items-center gap-2">
        <Icon
          name={icon}
          size={22}
          className={accent === "primary" ? "text-primary" : "text-leaf-deep"}
        />
        <h3 className="text-lg font-bold text-on-surface">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-foreground">{children}</p>
    </div>
  )
}
