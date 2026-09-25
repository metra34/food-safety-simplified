import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-footer">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-4 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/60 sm:flex-row">
          <p>
            © 2026 Food Safety Simplified. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <span>•</span>
            <Link href="/legal" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/legal" className="transition-colors hover:text-white">
              Regulatory Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
