export function LegalSection({
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
      <div className="mb-3 flex items-start gap-3">
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
