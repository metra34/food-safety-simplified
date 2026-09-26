import { CardBorderedCorner } from "@/components/cards/card-bordered-corner"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icon } from "@/components/ui/icon"
import { cn } from "@/lib/utils"

const outcomes = [
  {
    icon: "account_tree",
    title: "Practical and effective safety systems",
    description:
      "Systems that are simple to follow, easy to maintain, and built to work in real production environments.",
  },
  {
    icon: "groups",
    title: "Engaged and informed employees",
    description:
      "Your team understands what to do, why it matters, and how to keep food safety on track each day.",
  },
  {
    icon: "school",
    title: "Targeted training that sticks",
    description:
      "Training focused on the essentials, delivered in a way people remember and can apply right away.",
  },
  {
    icon: "verified_user",
    title: "Strong food safety culture",
    description:
      "Food safety becomes part of daily habits, not just a checklist, creating consistency across your operation.",
  },
  {
    icon: "build",
    title: "Sustainable corrective actions",
    description:
      "Issues are fixed in an effective, long‑term way so the same problems do not keep returning.",
  },
  {
    icon: "trending_up",
    title: "Continuous improvement",
    description:
      "Small, steady improvements that strengthen your programs over time and keep you ready for audits.",
  },
]

const variantStyles = {
  primary: "text-primary group-hover/card:text-primary-hover",
  secondary: "text-leaf-deep group-hover/card:text-secondary-hover",
} as const

export function OutcomesGrid() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {outcomes.map((outcome, index) => {
        const variant = index % 2 === 0 ? "primary" : "secondary"

        return (
          <li key={outcome.title} className="flex">
            <CardBorderedCorner
              variant={variant}
              hoverable
              className="w-full gap-3 [--card-spacing:--spacing(6)]"
            >
              <CardHeader>
                <Icon
                  name={outcome.icon}
                  size={28}
                  className={cn(
                    "transition-colors duration-150",
                    variantStyles[variant]
                  )}
                />
                <CardTitle
                  className={cn(
                    "text-lg leading-snug font-bold transition-colors duration-150",
                    variantStyles[variant]
                  )}
                >
                  {outcome.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-foreground">
                {outcome.description}
              </CardContent>
            </CardBorderedCorner>
          </li>
        )
      })}
    </ul>
  )
}
