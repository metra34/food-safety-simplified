import Image from "next/image"
import Link from "next/link"

import logo from "@/app/assets/logo-nobg.png"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex grow flex-col items-center justify-center gap-4 px-6 text-center">
      <Image
        src={logo}
        alt="Food Safety Simplified"
        priority
        className="h-auto w-full max-w-xl"
      />
      <h1 className="text-4xl font-extrabold tracking-tight text-primary z-10 -mt-14">
        Page Not Found
      </h1>
      <Button nativeButton={false} className="text-base" variant="link" render={<Link href="/" />}>
        Back To Home
      </Button>
    </div>
  )
}
