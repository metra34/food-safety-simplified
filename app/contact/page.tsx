import { ContactForm } from "@/components/contact-form"

export default function Page() {
  return (
    <section className="w-full bg-surface-container-low">
      <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-8 md:px-16 md:py-16 lg:px-6 lg:py-20">
        <h1 className="text-center text-3xl font-extrabold tracking-tight text-primary md:text-4xl">
          Get in Touch
        </h1>
        <ContactForm />
      </div>
    </section>
  )
}
