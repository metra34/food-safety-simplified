"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import logo from "@/app/assets/logo-sm-nobg.png"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Me", href: "/about" },
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
        "text-base font-bold whitespace-nowrap underline-offset-4 transition-colors",
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
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 pl-4 pr-6">
        <div className="flex min-w-0 items-center gap-3">
          <Link href="/" className="shrink-0">
            <Image
              src={logo}
              alt="Food Safety Simplified"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <Link href="/" className="flex min-w-0 flex-col">
            <span className="text-base leading-none font-extrabold sm:text-lg lg:text-xl tracking-tight text-primary">
              Food Safety <i>Simplified</i>
            </span>
            <span className="mt-1 text-xs font-bold tracking-wide text-leaf-deep uppercase">
              Compliance &amp; Quality Advisory
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-center">
          <ul className="flex items-center gap-6 lg:mr-16 lg:gap-8">
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

        <div ref={menuRef} className="shrink-0 md:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="inline-flex size-9 items-center justify-center text-foreground"
          >
            {isMenuOpen ? (
              <Icon name="close" />
            ) : (
              <Icon name="menu" />
            )}
          </button>

          {isMenuOpen && (
            <div className="absolute top-full right-0 w-87.5 max-w-full border border-border bg-background">
              <nav className="flex flex-col gap-4 px-4 py-4 sm:px-6">
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
                  className="max-w-2xl"
                >
                  Contact
                </Button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
