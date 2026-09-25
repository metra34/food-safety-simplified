import { ContactForm } from "@/components/contact-form"

export default function Page() {
  return (
    <>
      <section className="w-full">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-4 text-center md:px-16 md:py-10 lg:px-6">
          <h1 className="text-2xl leading-tight font-bold tracking-tight text-on-surface md:text-3xl">
            Have a food safety question, preparing for an audit, developing a
            food safety program, or looking for ongoing FSQA support?
          </h1>
          <p className="pt-2 text-xl leading-tight font-bold tracking-tight text-on-surface md:text-2xl">
            We&rsquo;re here to help.
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            Whether you need a one-time consultation or ongoing food safety
            support, tell us a little about your needs and we&rsquo;ll get back
            to you to discuss how we can help.
          </p>
        </div>
      </section>

      <section className="w-full bg-surface-container-low">
        <div className="mx-auto max-w-3xl px-4 py-4 md:px-16 lg:px-6 lg:py-10">
          <ContactForm
            title={
              <h2 className="relative w-fit pt-2 pb-2 text-2xl font-semibold tracking-tight text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/2 after:bg-leaf-accent">
                Get in Touch
              </h2>
            }
          />
        </div>
      </section>
    </>
  )
}
