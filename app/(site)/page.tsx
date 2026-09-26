import Image from "next/image"
import Link from "next/link"

import logo from "@/app/assets/logo.png"
import { CardBorderedCorner } from "@/components/cards/card-bordered-corner"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Icon } from "@/components/ui/icon"

import { OutcomesGrid } from "@/components/lists/outcomes-grid"

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

const standards = ["SQF", "BRCGS", "FSSC 22000", "FDA FSMA"]

export default function Page() {
  return (
    <>
      <section className="w-full">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-6 md:px-16 md:py-10 lg:grid-cols-12 lg:px-6 lg:py-14">
          <div className="flex flex-col items-start gap-5 text-left lg:col-span-7">
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
              and achievable for the people responsible for food safety every
              day.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
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
            <CardBorderedCorner className="w-full max-w-full [--card-spacing:--spacing(6)] lg:[--card-spacing:--spacing(8)]">
              <CardContent>
                <div className="flex w-full items-center justify-center bg-surface-container-low p-6">
                  <Image
                    src={logo}
                    alt="Food Safety Simplified Logo"
                    className="h-auto max-h-80 w-full object-contain drop-shadow-sm"
                    priority
                  />
                </div>
              </CardContent>
              <CardContent>
                <div className="grid grid-cols-2 justify-items-center gap-4 border-t border-border pt-4">
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
            </CardBorderedCorner>
          </div>
        </div>
      </section>

      <Alert
        variant="primary"
        role="note"
        className="block border-x-0 px-0 py-3"
      >
        <AlertDescription className="mx-auto flex max-w-7xl items-center gap-3 px-4 text-sm/relaxed text-foreground md:px-16 lg:px-6">
          <Icon name="fact_check" size={24} className="shrink-0 text-primary" />
          <div className="flex flex-1 flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
            <div>
              <strong className="mr-1 font-bold tracking-wider text-primary uppercase">
                Direct Field Experience:
              </strong>
              Supporting processing facilities, packaging operations, cold
              chain, and food manufacturers nationwide.
            </div>
            <ul className="flex shrink-0 flex-wrap items-center gap-x-5 gap-y-2 text-xs font-bold tracking-wider text-muted-foreground uppercase">
              {standards.map((standard) => (
                <li key={standard} className="flex items-center gap-1">
                  <Icon name="task_alt" size={16} className="text-leaf-deep" />
                  {standard}
                </li>
              ))}
            </ul>
          </div>
        </AlertDescription>
      </Alert>

      <section className="w-full">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-16 lg:px-6 lg:py-14">
          <OutcomesGrid />
        </div>
      </section>
    </>
  )
}
