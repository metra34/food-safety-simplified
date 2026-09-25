import * as React from "react"
import { cn } from "@/lib/utils"

import { Card } from "@/components/ui/card"

export function CardBorderedCorner({
  hoverable = false,
  className,
  ...props
}: React.ComponentProps<typeof Card> & { hoverable?: boolean }) {
  return (
    <Card
      data-hoverable={hoverable || undefined}
      className={cn(
        "rounded-none border border-border ring-0",
        hoverable
          ? "shadow-none transition-shadow duration-150 hover:shadow-[4px_4px_0px_var(--primary)]"
          : "shadow-[4px_4px_0px_var(--primary)]",
        className
      )}
      {...props}
    />
  )
}
