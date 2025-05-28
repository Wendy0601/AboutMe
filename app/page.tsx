import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Github, Linkedin, Mail, LineChart, Network, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import ImpactMetrics from "@/components/impact-metrics"
import QuoteCard from "@/components/quote-card"
import FeaturedPublication from "@/components/featured-publication"
import TechStack from "@/components/tech-stack"
import NewsHighlight from "@/components/news-highlight"

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-[3fr_2fr] md:items-start">
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold text-academic-blue md:text-5xl">Wenting Li</h1>
            <p className="text-xl font-medium text-dark-gray">Research Scientist, University of Texas at Austin</p>

            <div className="rounded-lg bg-muted-teal/5 p-4 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-academic-blue">My Vision</h3>
              <p className="text-dark-gray">
                Through my work, I aim to bridge the gap between theoretical advances in machine learning and practical
                implementations that can withstand the complexities and uncertainties of the physical world, with a
                particular focus on power grid applications and safety-critical systems.
              </p>
            </div>

            <div className="pt-2">
              <h2 className="mb-3 text-xl font-semibold text-dark-gray">Research Interests</h2>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <li className="flex items-center rounded-md bg-gray-50 px-3 py-2 text-dark-gray shadow-sm">
                  <ShieldCheck className="mr-2 h-5 w-5 text-academic-blue" />
                  <span>Trustworthy AI & Machine Learning</span>
                </li>
                <li className="flex items-center rounded-md bg-gray-50 px-3 py-2 text-dark-gray shadow-sm">
                  <Network className="mr-2 h-5 w-5 text-academic-blue" />
                  <span>Neural Network Verification & Robustness</span>
                </li>
                <li className="flex items-center rounded-md bg-gray-50 px-3 py-2 text-dark-gray shadow-sm">
                  <LineChart className="mr-2 h-5 w-5 text-academic-blue" />
                  <span>Physics-Informed Machine Learning</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <h2 className="mb-3 text-xl font-semibold text-dark-gray">Three Minute Thesis Talk</h2>
              <p className="text-dark-gray">
                Watch my award-winning Three Minute Thesis presentation where I explain my research on agile and fast
                machine learning technology to prevent blackouts in just three minutes:
              </p>
              <a
                href="https://mediasite.mms.rpi.edu/mediasite/Play/acbcaa7d77284c8789d17108813df2fd1d"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center text-academic-blue hover:underline"
              >
                <span className="mr-1">View Presentation</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild className="bg-academic-blue text-white hover:bg-academic-blue/90">
                <Link href="/research">
                  View Research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-academic-blue text-academic-blue hover:bg-academic-blue/10"
              >
                <Link href="/publications">Publications</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-academic-blue text-academic-blue hover:bg-academic-blue/10"
              >
                <Link href="/code-demos">Code & Demos</Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <Link
                href="https://scholar.google.com/citations?user=acgZVaoAAAAJ&hl=en"
                className="rounded-full bg-gray-50 p-2 text-medium-gray transition-colors hover:bg-academic-blue/10 hover:text-academic-blue"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Scholar"
              >
                <BookOpen className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/wendy0601"
                className="rounded-full bg-gray-50 p-2 text-medium-gray transition-colors hover:bg-academic-blue/10 hover:text-academic-blue"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/"
                className="rounded-full bg-gray-50 p-2 text-medium-gray transition-colors hover:bg-academic-blue/10 hover:text-academic-blue"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:liwenting0601@gmail.com"
                className="rounded-full bg-gray-50 p-2 text-medium-gray transition-colors hover:bg-academic-blue/10 hover:text-academic-blue"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="mx-auto flex flex-col space-y-4 md:mx-0">
            <div className="overflow-hidden rounded-lg border-2 border-academic-blue shadow-lg transition-transform hover:scale-[1.02]">
              <Image
                src="/AboutMe/images/me_sport.jpg"
                alt="Wenting Li"
                width={300}
                height={400}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            <div className="rounded-lg bg-academic-blue/5 p-4 shadow-sm">
              <p className="text-lg leading-relaxed text-dark-gray">
                I am a research scientist specializing in AI, trustworthy machine learning, and cyber-physical systems.
                My research focuses on developing robust and verifiable AI systems that can be safely deployed in
                critical infrastructure and complex environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Highlights Section */}
      <section className="bg-academic-blue/5 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-2xl font-semibold text-academic-blue md:text-3xl">Impact Highlights</h2>
          <p className="mb-8 text-dark-gray">Key contributions and achievements in the field</p>

          <ImpactMetrics />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Publications Impact */}
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <h3 className="mb-4 text-xl font-semibold text-academic-blue">Publications Impact</h3>
              <div className="relative h-60 w-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/citation-LTSZeKJYvK2PJ4GJkcBPcEu5T5pYml.png"
                  alt="Citations per year"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-dark-gray">
                My research has generated over 500 citations, with particular impact in physics-informed machine
                learning and power grid applications.
              </p>
              <Button asChild className="mt-4 bg-academic-blue text-white hover:bg-academic-blue/90">
                <Link href="/publications">
                  View Publications
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Research Methodology */}
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <h3 className="mb-4 text-xl font-semibold text-academic-blue">Research Methodology</h3>
              <div className="relative h-60 w-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PIML_color-rN8cdLCIh9vvZBY9ts0v1lWiQ6A8aL.png"
                  alt="Physics-informed machine learning methodology"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-dark-gray">
                My approach integrates formal verification methods with physics-informed neural networks to ensure
                safety and reliability in critical systems.
              </p>
              <Button asChild className="mt-4 bg-academic-blue text-white hover:bg-academic-blue/90">
                <Link href="/research">
                  Explore Methods
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-2xl font-semibold text-academic-blue md:text-3xl">Featured Work</h2>

        <div className="mb-10">
          <FeaturedPublication />
        </div>

        <QuoteCard
          quote="Wenting's work on physics-informed neural networks represents a significant advancement in making AI systems more reliable for critical infrastructure."
          author="Dr. Jane Reynolds"
          role="Research Director, Power Systems Laboratory"
        />
      </section>

      {/* Tech Stack Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-semibold text-academic-blue md:text-3xl">Technical Expertise</h2>
          <TechStack />
        </div>
      </section>

      {/* News Highlights */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-academic-blue md:text-3xl">Latest News</h2>
          <Link href="/news" className="text-academic-blue hover:underline flex items-center">
            View all news
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <NewsHighlight />
      </section>

      {/* Education Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-semibold text-academic-blue">Education</h2>
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <h3 className="text-lg font-semibold text-dark-gray">Ph.D. in Electrical Engineering</h3>
              <p className="text-medium-gray">Rensselaer Polytechnic Institute, 2020</p>
              <p className="mt-2 text-dark-gray">
                Dissertation: Physics-Informed Machine Learning for Power Grid Monitoring
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <h3 className="text-lg font-semibold text-dark-gray">M.S. in Applied Mathematics</h3>
              <p className="text-medium-gray">Rensselaer Polytechnic Institute, 2019</p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <h3 className="text-lg font-semibold text-dark-gray">B.S. in Electrical Engineering</h3>
              <p className="text-medium-gray">Harbin Institute of Technology, 2013</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-2xl font-semibold text-academic-blue">Awards & Honors</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-lg font-semibold text-dark-gray">Best Paper Award</h3>
            <p className="text-medium-gray">ICML Climate Change Workshop, 2021</p>
            <p className="mt-2 text-dark-gray">
              For "Physics-Informed Graph Neural Networks for Fault Location in Power Grids"
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-lg font-semibold text-dark-gray">Founders Award of Excellence</h3>
            <p className="text-medium-gray">Rensselaer Polytechnic Institute, 2018</p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-lg font-semibold text-dark-gray">
              DisrupTECH and UC - LANL Postdoc Entrepreneur Fellowship
            </h3>
            <p className="text-medium-gray">Final Round, 2021</p>
          </div>
        </div>
      </section>
    </main>
  )
}
