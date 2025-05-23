import type React from "react"
import { Lora, Open_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./globals.css"

// Load Lora font
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
})

// Load Open Sans font
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-opensans",
  display: "swap",
})

export const metadata = {
  title: "Wenting Li | Academic Portfolio",
  description:
    "Academic portfolio of Wenting Li, a research scientist specializing in AI, trustworthy machine learning, and cyber-physical systems.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lora.variable} ${openSans.variable}`}>
      <body className="min-h-screen bg-off-white font-opensans text-dark-gray">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
