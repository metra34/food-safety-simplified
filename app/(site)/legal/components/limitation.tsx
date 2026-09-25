import { Icon } from "@/components/ui/icon"

export function Limitation({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <li className="flex items-start gap-3">
      <Icon
        name="block"
        size={20}
        className="mt-0.5 shrink-0 text-destructive"
      />
      <span>{children}</span>
    </li>
  )
}
