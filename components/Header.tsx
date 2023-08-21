import React from "react"
import Link from "next/link"
import Image from "next/image"
import ThemeButton from "./ThemeButton"

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex aligns-center space-x-2">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="branding-icon"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>
        <Link href={"/"}>
        <h1 className="flex items-center justify-between space-x-2 font-bold text-branding px-5 py-5">
          GenZworld</h1>
        </Link>
      </div>

      <div className="px-5 py-3 text-sm md:text-base flex items-center">
        <ThemeButton/>
      </div>
    </header>
  )
}

export default Header
