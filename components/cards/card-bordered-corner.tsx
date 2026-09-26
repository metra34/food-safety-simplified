import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

import { Card } from "@/components/ui/card"

const cardBorderedCornerVariants = cva(
  "rounded-none border border-border ring-0",
  {
    variants: {
      variant: {
        primary: "",
        secondary: "",
      },
      hoverable: {
        true: "shadow-none transition-shadow duration-150",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        hoverable: false,
        className: "shadow-[4px_4px_0px_var(--primary)]",
      },
      {
        variant: "secondary",
        hoverable: false,
        className: "shadow-[4px_4px_0px_var(--leaf-deep)]",
      },
      {
        variant: "primary",
        hoverable: true,
        className: "hover:shadow-[4px_4px_0px_var(--primary-hover)]",
      },
      {
        variant: "secondary",
        hoverable: true,
        className: "hover:shadow-[4px_4px_0px_var(--secondary-hover)]",
      },
    ],
    defaultVariants: {
      variant: "primary",
      hoverable: false,
    },
  }
)

export function CardBorderedCorner({
  variant = "primary",
  hoverable = false,
  className,
  ...props
}: React.ComponentProps<typeof Card> &
  VariantProps<typeof cardBorderedCornerVariants>) {
  return (
    <Card
      data-variant={variant}
      data-hoverable={hoverable || undefined}
      className={cn(
        cardBorderedCornerVariants({ variant, hoverable }),
        className
      )}
      {...props}
    />
  )
}
