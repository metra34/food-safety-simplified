import { cn } from "@/lib/utils"

function Icon({
  name,
  size,
  className,
  style,
  ...props
}: Omit<React.ComponentProps<"span">, "children"> & {
  name: string
  size?: number
}) {
  return (
    <span
      data-slot="icon"
      aria-hidden="true"
      className={cn("material-symbols-outlined select-none", className)}
      style={size ? { fontSize: size, ...style } : style}
      {...props}
    >
      {name}
    </span>
  )
}

export { Icon }
