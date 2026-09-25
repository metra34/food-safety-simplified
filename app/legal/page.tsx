import type { Metadata } from "next"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Icon } from "@/components/ui/icon"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Regulatory Disclaimer & Terms of Service | Food Safety Simplified",
  description:
    "Advisory nature, limitations, and liability terms for Food Safety Simplified consulting services.",
}

function LegalSection({
  id,
  number,
  title,
  children,
}: {
  id: string
  number: number
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20">
      <div className="mb-4 flex items-start gap-3">
        <span className="flex size-8 shrink-0 items-center justify-center bg-primary text-sm font-bold text-primary-foreground">
          {number}
        </span>
        <h2
          id={`${id}-title`}
          className="pt-0.5 text-xl font-bold tracking-tight text-primary md:text-2xl"
        >
          {title}
        </h2>
      </div>
      <div className="flex flex-col gap-4 text-base leading-relaxed text-foreground md:pl-11">
        {children}
      </div>
    </section>
  )
}

function Limitation({
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

function ModalityCard({
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

export default function Page() {
  return (
    <>
      <section className="w-full">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 py-10 text-center md:px-16 md:py-14 lg:px-6">
          <h1 className="text-3xl font-extrabold tracking-tight text-primary md:text-4xl">
            Regulatory Disclaimer &amp; Terms of Service
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Please read these terms carefully. They explain the advisory scope
            of our services and the limits of what any consultant can
            guarantee.
          </p>
        </div>
      </section>

      <section className="w-full bg-surface-container-low">
        <div className="mx-auto max-w-4xl px-4 py-10 md:px-16 md:py-14 lg:px-6">
          <Card className="rounded-none border border-border shadow-[4px_4px_0px_var(--primary)] ring-0 [--card-spacing:--spacing(6)] md:[--card-spacing:--spacing(10)]">
            <CardContent className="flex flex-col gap-10">
              <LegalSection
                id="advisory-nature"
                number={1}
                title="Advisory Nature of Consulting Services"
              >
                <p>
                  The information, content, and materials available on this
                  website—including all descriptions of services covering{" "}
                  <strong className="font-bold text-primary">
                    Audit Preparation
                  </strong>{" "}
                  (GFSI, CFIA, Third-Party, Customer Audits),{" "}
                  <strong className="font-bold text-primary">
                    Programs Development
                  </strong>{" "}
                  (SQF, SFCR, BRC, FSMA, HACCP), and{" "}
                  <strong className="font-bold text-primary">Training</strong>{" "}
                  (HACCP, GMPs)—are provided for general informational and
                  educational purposes only.
                </p>
                <Alert variant="primary" role="note" className="px-4 py-3">
                  <Icon name="info" size={22} />
                  <AlertTitle className="text-base font-bold">
                    Our services are purely advisory.
                  </AlertTitle>
                  <AlertDescription className="text-sm/relaxed text-foreground">
                    We do not act as regulatory enforcement officers, government
                    inspectors, or official representatives of any accreditation
                    body.
                  </AlertDescription>
                </Alert>
              </LegalSection>

              <Separator />

              <LegalSection
                id="no-guarantee"
                number={2}
                title="No Guarantee of Regulatory Compliance or Certification"
              >
                <p>
                  While our consulting programs are designed to align your
                  facility with global standards and federal laws, passing a
                  mock audit, gap assessment, or readiness review conducted by
                  us{" "}
                  <strong className="font-bold text-destructive">
                    does not guarantee
                  </strong>
                  :
                </p>
                <ul className="flex flex-col gap-3">
                  <Limitation>
                    A passing score or formal certification in an official
                    third-party or GFSI audit (e.g., SQF, BRC).
                  </Limitation>
                  <Limitation>
                    Compliance approval during official government inspections,
                    including those conducted by the{" "}
                    <strong className="font-semibold">
                      Canadian Food Inspection Agency (CFIA)
                    </strong>{" "}
                    or the{" "}
                    <strong className="font-semibold">
                      U.S. Food and Drug Administration (FDA)
                    </strong>
                    .
                  </Limitation>
                </ul>
                <Alert variant="primary" role="note" className="px-4 py-3">
                  <Icon name="account_balance" size={22} />
                  <AlertDescription className="text-sm/relaxed text-foreground">
                    <strong className="font-bold text-primary">
                      Final interpretation, regulatory enforcement decisions,
                      and licensing approvals
                    </strong>{" "}
                    rest solely with the respective government inspectors,
                    agency officials, or accredited certification bodies.
                  </AlertDescription>
                </Alert>
              </LegalSection>

              <Separator />

              <LegalSection
                id="service-modalities"
                number={3}
                title="Scope of Service Modalities (On-Site & Remote)"
              >
                <p>
                  Clients and website visitors acknowledge that food safety
                  consulting operates under specific operational limitations
                  depending on the delivery format:
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <ModalityCard
                    icon="factory"
                    title="On-Site Consulting & Inspections"
                    accent="primary"
                  >
                    Physical facility walkthroughs and live employee
                    observations provide a{" "}
                    <strong className="font-semibold">
                      snapshot of operational conditions at a single point in
                      time
                    </strong>
                    . They do not ensure future daily compliance or uncover
                    latent structural or environmental defects.
                  </ModalityCard>
                  <ModalityCard
                    icon="videocam"
                    title="Remote Auditing & Virtual Assessments"
                    accent="leaf"
                  >
                    Digital record reviews and video-assisted assessments{" "}
                    <strong className="font-semibold">
                      rely entirely on the accuracy, completeness, and honesty
                      of data provided by the client
                    </strong>
                    . Remote assessments lack the physical sensory context
                    (such as ambient temperature, localized odors, or tactile
                    confirmation) inherent to physical walkthroughs.
                  </ModalityCard>
                </div>
              </LegalSection>

              <Separator />

              <LegalSection
                id="liability"
                number={4}
                title="Cross-Border Legal Frame & Limitation of Liability"
              >
                <p>
                  Our services reference complex regulatory frameworks,
                  including the{" "}
                  <strong className="font-bold text-primary">
                    Safe Food for Canadians Regulations (SFCR)
                  </strong>{" "}
                  in Canada and the{" "}
                  <strong className="font-bold text-primary">
                    Food Safety Modernization Act (FSMA)
                  </strong>{" "}
                  in the United States. Regulations change frequently, and
                  interpretations can vary by jurisdiction.
                </p>
                <p>
                  Under no circumstances shall our consulting firm, its
                  employees, or its contractors be held liable for any direct,
                  indirect, or consequential losses, including but not limited
                  to: official regulatory citations, administrative monetary
                  penalties, food safety product recalls, facility closures, or
                  foodborne illness outbreaks.
                </p>
                <Alert variant="leaf" role="note" className="px-4 py-3">
                  <Icon name="verified_user" size={22} />
                  <AlertTitle className="text-base font-bold">
                    Responsibility rests with the facility
                  </AlertTitle>
                  <AlertDescription className="text-sm/relaxed text-foreground">
                    The ultimate legal responsibility for day-to-day food safety
                    execution, record-keeping, and operational sanitary control
                    rests entirely with the food manufacturing or processing
                    facility.
                  </AlertDescription>
                </Alert>
              </LegalSection>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
