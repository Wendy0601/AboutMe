"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Research", path: "/research" },
  { name: "Publications", path: "/publications" },
  { name: "Contact", path: "/contact" },
]

export default function Header() {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full border-b border-gray-200 bg-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-wide text-academic-blue">
          WENTING LI
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                  pathname === item.path
                    ? "text-academic-blue after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-academic-blue"
                    : "text-dark-gray hover:text-academic-blue"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-dark-gray hover:bg-gray-100">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMobile && isMenuOpen && (
        <nav className="absolute left-0 z-50 w-full bg-white shadow-md">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 text-lg font-medium ${
                      pathname === item.path ? "text-academic-blue" : "text-dark-gray"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  )
}
