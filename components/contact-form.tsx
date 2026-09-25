"use client"

import { useId, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Icon } from "@/components/ui/icon"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const preferredTimes = [
  { value: "weekday-morning", label: "Weekday morning (8am – 12pm)" },
  { value: "weekday-afternoon", label: "Weekday afternoon (12pm – 5pm)" },
  { value: "weekday-evening", label: "Weekday evening (5pm – 8pm)" },
  { value: "weekend", label: "Weekend" },
  { value: "anytime", label: "Any time" },
]

const contactMethods = [
  { value: "email", label: "Email", icon: "mail" },
  { value: "phone", label: "Phone", icon: "call" },
  { value: "video", label: "Video Call", icon: "videocam" },
] as const

const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your name.")
    .max(100, "Name must be at most 100 characters."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address."),
  company: z
    .string()
    .trim()
    .max(100, "Company name must be at most 100 characters."),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more (at least 10 characters).")
    .max(2000, "Message must be at most 2000 characters."),
  preferredTime: z.string().min(1, "Please select a preferred time."),
  contactMethod: z
    .enum(["email", "phone", "video"])
    .or(z.literal("")),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

function FieldTag({ required }: { required?: boolean }) {
  return (
    <span className="text-[11px] font-bold tracking-[0.06em] text-muted-foreground uppercase">
      {required ? "Required" : "Optional"}
    </span>
  )
}

export function ContactForm({
  title,
  onSubmit,
  className,
}: {
  title?: React.ReactNode
  onSubmit?: (values: ContactFormValues) => Promise<void> | void
  className?: string
}) {
  const id = useId()
  const [isSent, setIsSent] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
      preferredTime: "",
      contactMethod: "",
    },
  })

  async function handleSubmit(values: ContactFormValues) {
    await onSubmit?.(values)
    form.reset()
    setIsSent(true)
  }

  return (
    <Card
      className={cn(
        "w-full rounded-none border border-t-4 border-border border-t-primary ring-0 shadow-none [--card-spacing:--spacing(6)] lg:[--card-spacing:--spacing(8)]",
        className
      )}
    >
      {title && <CardHeader>{title}</CardHeader>}
      <CardContent>
        <form
          noValidate
          onSubmit={form.handleSubmit(handleSubmit)}
          onChange={() => setIsSent(false)}
        >
          <FieldGroup>
            <div className="grid gap-5 sm:grid-cols-2">
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={`${id}-name`}>
                      Name <FieldTag required />
                    </FieldLabel>
                    <Input
                      {...field}
                      id={`${id}-name`}
                      aria-invalid={fieldState.invalid}
                      autoComplete="name"
                      placeholder="Your Name"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={`${id}-email`}>
                      Email Address <FieldTag required />
                    </FieldLabel>
                    <Input
                      {...field}
                      id={`${id}-email`}
                      type="email"
                      aria-invalid={fieldState.invalid}
                      autoComplete="email"
                      placeholder="you@company.com"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            <Controller
              name="company"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={`${id}-company`}>
                    Company Name <FieldTag />
                  </FieldLabel>
                  <Input
                    {...field}
                    id={`${id}-company`}
                    aria-invalid={fieldState.invalid}
                    autoComplete="organization"
                    placeholder="Your Company"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={`${id}-message`}>
                    How Can We Help? <FieldTag required />
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id={`${id}-message`}
                    aria-invalid={fieldState.invalid}
                    rows={5}
                    placeholder="Tell us about your question, challenge, project, or food safety needs."
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="preferredTime"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={`${id}-preferred-time`}>
                    Preferred Time to Contact You <FieldTag required />
                  </FieldLabel>
                  <Select
                    items={preferredTimes}
                    value={field.value || null}
                    onValueChange={(value) => {
                      field.onChange(value ?? "")
                      setIsSent(false)
                    }}
                    inputRef={field.ref}
                  >
                    <SelectTrigger
                      id={`${id}-preferred-time`}
                      aria-invalid={fieldState.invalid}
                      onBlur={field.onBlur}
                      className="w-full"
                    >
                      <SelectValue placeholder="Select your preferred day/time" />
                    </SelectTrigger>
                    <SelectContent alignItemWithTrigger={false}>
                      {preferredTimes.map((time) => (
                        <SelectItem key={time.value} value={time.value}>
                          {time.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="contactMethod"
              control={form.control}
              render={({ field, fieldState }) => (
                <FieldSet data-invalid={fieldState.invalid}>
                  <FieldLegend className="flex items-center gap-2 font-bold text-on-surface">
                    Preferred Contact Method <FieldTag />
                  </FieldLegend>
                  <RadioGroup
                    name={field.name}
                    value={field.value}
                    onValueChange={(value) => {
                      field.onChange(value)
                      setIsSent(false)
                    }}
                    aria-invalid={fieldState.invalid}
                    className="grid gap-3 sm:grid-cols-3"
                  >
                    {contactMethods.map((method) => (
                      <FieldLabel
                        key={method.value}
                        htmlFor={`${id}-contact-${method.value}`}
                      >
                        <Field orientation="horizontal">
                          <RadioGroupItem
                            value={method.value}
                            id={`${id}-contact-${method.value}`}
                          />
                          <FieldTitle>
                            <Icon
                              name={method.icon}
                              size={20}
                              className="text-primary"
                            />
                            {method.label}
                          </FieldTitle>
                        </Field>
                      </FieldLabel>
                    ))}
                  </RadioGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </FieldSet>
              )}
            />

            <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
              <Button
                type="submit"
                size="lg"
                variant="leaf"
                disabled={form.formState.isSubmitting}
                className="w-full font-bold tracking-[0.08em] uppercase sm:w-auto"
              >
                Send Message
                <Icon name="send" data-icon="inline-end" />
              </Button>
              {isSent && (
                <p
                  role="status"
                  className="flex items-center gap-2 text-sm font-bold text-leaf-deep"
                >
                  <Icon name="check_circle" size={20} />
                  Thanks! We&apos;ll be in touch soon.
                </p>
              )}
            </div>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
