import Link from "next/link"
import { Github, BookOpen, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-medium-gray">&copy; {currentYear} Wenting Li. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/wendy0601"
              className="text-medium-gray transition-colors hover:text-academic-blue"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://scholar.google.com/citations?user=acgZVaoAAAAJ&hl=en"
              className="text-medium-gray transition-colors hover:text-academic-blue"
              aria-label="Google Scholar"
            >
              <BookOpen className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/"
              className="text-medium-gray transition-colors hover:text-academic-blue"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:liwenting0601@gmail.com"
              className="text-medium-gray transition-colors hover:text-academic-blue"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
