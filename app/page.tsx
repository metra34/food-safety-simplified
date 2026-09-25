import Image from "next/image"
import Link from "next/link"

import logo from "./assets/logo.png"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Icon } from "@/components/ui/icon"

const metrics = [
  {
    label: "Documentation",
    value: "100% Audit-Ready",
    className: "text-primary",
  },
  {
    label: "Application",
    value: "Floor-Validated",
    className: "text-leaf-deep",
  },
]

export default function Page() {
  return (
    <section className="w-full bg-surface-container-low">
      <div className="mx-auto grid max-w-7xl gap-12 bg-surface-container-low px-4 py-6 md:px-16 md:py-12 lg:grid-cols-12 lg:px-6 lg:py-10">
        <div className="flex flex-col items-center gap-5 text-center lg:col-span-7 lg:items-start lg:text-left">
          <Badge
            variant="primary"
            className="h-auto gap-2 px-3 py-1.5 whitespace-normal has-data-[icon=inline-start]:pl-2.5"
          >
            <Icon name="verified_user" data-icon="inline-start" size={18} />
            SPECIALIZED TECHNICAL CONSULTING & AUDIT READINESS
          </Badge>
          <p className="max-w-2xl text-2xl font-bold text-leaf-deep md:text-3xl lg:text-4xl">
            Food safety doesn&apos;t have to be <i>complicated.</i>
          </p>
          <p className="max-w-2xl text-lg text-slate-body">
            Compliance standards, regulations, and certification requirements
            can feel overwhelming. Our role is to make them clear, practical,
            and achievable for the people responsible for food safety every day.
          </p>
          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button
              variant="outline-primary"
              size="lg"
              nativeButton={false}
              render={<Link href="/contact" />}
            >
              <Icon name="mail" data-icon="inline-start" size={18} />
              Get in Touch
            </Button>
            <Button
              size="lg"
              nativeButton={false}
              render={<Link href="/services" />}
            >
              Explore all Services
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center lg:col-span-5">
          <Card className="w-full max-w-2xl rounded-none border border-border shadow-[4px_4px_0px_var(--primary)] ring-0 [--card-spacing:--spacing(6)] lg:[--card-spacing:--spacing(8)]">
            <CardContent>
              <div className="flex w-full items-center justify-center bg-surface-container-low p-6">
                <Image
                  src={logo}
                  alt="Food Safety Simplified Logo"
                  className="h-auto max-h-72 w-full object-contain drop-shadow-sm"
                  priority
                />
              </div>
            </CardContent>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 justify-items-center border-t border-border pt-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="space-y-1">
                    <span className="text-base font-bold text-muted-foreground uppercase">
                      {metric.label}
                    </span>
                    <p className={`text-xs font-bold ${metric.className}`}>
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
