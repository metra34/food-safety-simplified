import Image from "next/image"
import Link from "next/link"

import logo from "./assets/logo.png"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Icon } from "@/components/ui/icon"

const metrics = [
  { label: "Documentation", value: "100% Audit-Ready", className: "text-primary" },
  { label: "Application", value: "Floor-Validated", className: "text-leaf-accent" },
]

export default function Page() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-4 py-8 sm:px-6 lg:grid-cols-12 lg:py-20">
      <div className="flex flex-col justify-center gap-6 lg:col-span-7 md:col-span-6">
        <p className="text-2xl font-bold text-leaf-accent md:text-3xl lg:text-4xl">
          Food safety doesn&apos;t have to be complicated to be effective.
        </p>
        <p className="max-w-2xl text-lg text-slate-body">
          Food safety standards, regulations, certification requirements, and
          technical documentation can be complex. Our role is to make them
          clear, practical, and achievable for the people responsible for food
          safety every day.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button
            variant="outline-primary"
            size="lg"
            nativeButton={false}
            render={<Link href="/contact" />}
          >
            <Icon name="mail" data-icon="inline-start" />
            Get in Touch
          </Button>
          <Button size="lg" nativeButton={false} render={<Link href="/services" />}>
            Explore all Services
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center lg:col-span-5 md:col-span-6">
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
            <div className="grid grid-cols-2 gap-4 border-t border-border pt-4">
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
    </section>
  )
}
