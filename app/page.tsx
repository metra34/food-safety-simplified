import Image from "next/image"

import logo from "./assets/logo.png"

export default function Page() {
  return (
    <div className="flex grow flex-col items-center justify-center px-6 text-center">
      <Image
        src={logo}
        alt="Food Safety Simplified"
        priority
        className="h-auto w-full max-w-3xl"
      />
      <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-6xl">
        COMING SOON
      </h1>
    </div>
  )
}
