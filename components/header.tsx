"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { RiCloseLine, RiMenuLine } from "@remixicon/react"

import logo from "@/app/assets/logo-sm-fff.png"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
]

function isRouteActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href)
}

function NavLink({
  href,
  isActive,
  onClick,
  children,
}: {
  href: string
  isActive: boolean
  onClick?: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "text-sm font-semibold underline-offset-4 transition-colors",
        isActive
          ? "text-primary underline"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {children}
    </Link>
  )
}

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    function handlePointerDown(event: PointerEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("pointerdown", handlePointerDown)
    return () => document.removeEventListener("pointerdown", handlePointerDown)
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-8xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <div className="flex shrink-0 items-center gap-3">
          <Link href="/">
            <Image
              src={logo}
              alt="Food Safety Simplified"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <Link href="/" className="flex flex-col">
            <span className="text-xl leading-none font-extrabold tracking-tight text-primary">
              Food Safety Simplified
            </span>
            <span className="mt-1 text-[11px] font-bold tracking-wider text-leaf-deep uppercase">
              Compliance &amp; Quality Advisory
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-center">
          <ul className="flex items-center gap-8 mr-16">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  isActive={isRouteActive(pathname, item.href)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 md:block">
          <Button nativeButton={false} render={<Link href="/contact" />}>
            Contact
          </Button>
        </div>

        <div ref={menuRef} className="md:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="inline-flex size-9 items-center justify-center text-foreground"
          >
            {isMenuOpen ? (
              <RiCloseLine className="size-6" aria-hidden="true" />
            ) : (
              <RiMenuLine className="size-6" aria-hidden="true" />
            )}
          </button>

          <div
            className={cn(
              "absolute inset-x-0 top-full grid bg-background transition-[grid-template-rows] duration-300 ease-in-out",
              isMenuOpen
                ? "grid-rows-[1fr] border-t border-border"
                : "grid-rows-[0fr]"
            )}
            aria-hidden={!isMenuOpen}
            inert={!isMenuOpen}
          >
            <nav className="overflow-hidden">
              <div className="flex flex-col gap-4 px-4 py-4 sm:px-6">
                <ul className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <NavLink
                        href={item.href}
                        isActive={isRouteActive(pathname, item.href)}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <Button
                  nativeButton={false}
                  render={
                    <Link
                      href="/contact"
                      onClick={() => setIsMenuOpen(false)}
                    />
                  }
                  className="w-full"
                >
                  Contact
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
