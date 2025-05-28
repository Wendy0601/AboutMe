import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FeaturedPublication() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
      <div className="grid md:grid-cols-[2fr_3fr]">
        <div className="relative min-h-[300px] bg-academic-blue p-6 text-white">
          <h3 className="mb-4 text-2xl font-bold">LEVIS: Large Exact Verifiable Input Spaces for Neural Networks</h3>
          <p className="mb-6 text-white/80">
            A novel approach for formal verification of neural networks with significantly larger coverage of input
            spaces.
          </p>
          <div className="mb-4 space-y-2">
            <div className="flex items-center">
              <span className="mr-2 font-semibold">Status:</span>
              <span className="rounded-full bg-white/20 px-3 py-1 text-sm">Submitted to ICML 2025</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 font-semibold">Collaborators:</span>
              <span>Los Alamos National Laboratory, Stanford University</span>
            </div>
          </div>
          <Button asChild variant="outline" className="mt-4 border-white text-white hover:bg-white/20 hover:text-white">
            <Link href="/publications" className="flex items-center">
              <span>Read full paper</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <div className="absolute bottom-6 right-6 opacity-10">
            <Network className="h-32 w-32" />
          </div>
        </div>
        <div className="p-6">
          <h4 className="mb-3 text-xl font-semibold text-academic-blue">Key Innovation</h4>
          <p className="mb-6 text-dark-gray">
            LEVIS combines formal methods with novel optimization techniques to provide 17x faster verification of
            neural networks while expanding the verifiable input space by an order of magnitude compared to previous
            approaches.
          </p>

          <div className="mb-6">
            <h4 className="mb-2 font-semibold text-academic-blue">Impact</h4>
            <p className="text-dark-gray">
              This breakthrough enables safety guarantees for neural networks in critical infrastructure like power
              grids and autonomous systems, where reliability is paramount.
            </p>
          </div>

          <div className="relative mb-6 h-64 w-full rounded overflow-hidden border border-gray-200">
            <Image
              src="/AboutMe/images/verification_diagram.png"
              alt="Neural network verification diagram"
              fill
              className="object-contain p-2"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="https://github.com/LEVIS-LANL/LEVIS/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-sm text-dark-gray hover:bg-academic-blue/10"
            >
              <Github className="mr-2 h-4 w-4" />
              View Code Repository
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const Network = (props: any) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="5" r="2" />
    <circle cx="19" cy="12" r="2" />
    <circle cx="12" cy="19" r="2" />
    <circle cx="5" cy="12" r="2" />
    <path d="M12 7v4" />
    <path d="M17 12h-4" />
    <path d="M12 15v4" />
    <path d="M7 12h4" />
  </svg>
)
