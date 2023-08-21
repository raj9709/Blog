import "@/styles/global.css"
import Header from "@/components/Header"
import { Inter } from "next/font/google"
import Banner from "@/components/Banner"
import { Providers } from "@/components/Providers"

// const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "GenZworld",
  description: "Blog App",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto">
        <Providers>
        <Header />
          
        <Banner />
        {/* Todo Banner */}
        {children}
        </Providers>
      </body>
    </html>
  )
}
