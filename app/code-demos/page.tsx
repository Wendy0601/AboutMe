import Link from "next/link"
import { Github, ExternalLink, ArrowRight, Star, GitFork, Eye, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Repository {
  name: string
  description: string
  url: string
  stars: number
  forks: number
  watchers: number
  languages: string[]
  updatedAt: string
  demoUrl?: string
}

export default function CodeDemosPage() {
  const repositories: Repository[] = [
    {
      name: "LEVIS",
      description:
        "Large Exact Verifiable Input Spaces for neural networks, providing significantly faster verification capabilities.",
      url: "https://github.com/wendy0601/LEVIS",
      stars: 142,
      forks: 38,
      watchers: 15,
      languages: ["Python", "C++", "MATLAB"],
      updatedAt: "2024-12-15",
      demoUrl: "/demos/levis",
    },
    {
      name: "PIGNN",
      description: "Physics-Informed Graph Neural Networks for real-time fault location in power distribution systems.",
      url: "https://github.com/wendy0601/PIGNN",
      stars: 87,
      forks: 23,
      watchers: 9,
      languages: ["Python", "PyTorch"],
      updatedAt: "2023-09-22",
      demoUrl: "/demos/pignn",
    },
    {
      name: "PMU_Placement",
      description: "Optimal PMU placement algorithms using convolutional neural networks for power grid monitoring.",
      url: "https://github.com/wendy0601/PMU_Placement",
      stars: 56,
      forks: 18,
      watchers: 7,
      languages: ["Python", "TensorFlow"],
      updatedAt: "2022-06-30",
    },
    {
      name: "physics-constrained-ibp",
      description:
        "Physics-Constrained Interval Bound Propagation for robustness verifiable neural networks in power grids.",
      url: "https://github.com/wendy0601/physics-constrained-ibp",
      stars: 43,
      forks: 12,
      watchers: 5,
      languages: ["Python", "PyTorch", "MATLAB"],
      updatedAt: "2023-05-18",
      demoUrl: "/demos/ibp",
    },
    {
      name: "adversarial-power-grids",
      description: "Perturbation-robust neural networks for stochastic power grid systems and sensor networks.",
      url: "https://github.com/wendy0601/adversarial-power-grids",
      stars: 35,
      forks: 9,
      watchers: 8,
      languages: ["Python", "TensorFlow", "MATLAB"],
      updatedAt: "2023-02-10",
    },
    {
      name: "psmlearn",
      description: "Fast energy disaggregation at substations with behind-the-meter solar generation.",
      url: "https://github.com/wendy0601/psmlearn",
      stars: 29,
      forks: 7,
      watchers: 3,
      languages: ["Python", "Scikit-Learn"],
      updatedAt: "2022-11-05",
    },
  ]

  const interactiveDemos = [
    {
      title: "Neural Network Verification Explorer",
      description:
        "Interactive visualization of verification bounds for neural networks with different perturbation levels.",
      image: "/images/verification_diagram.png",
      url: "/demos/verification-explorer",
      tags: ["Neural Networks", "Verification", "Visualization"],
    },
    {
      title: "Power Grid Fault Locator",
      description: "Interactive demo showcasing real-time fault location using Physics-Informed Graph Neural Networks.",
      image: "/images/methodology-diagram.png",
      url: "/demos/fault-locator",
      tags: ["Graph Neural Networks", "Power Systems", "Fault Analysis"],
    },
    {
      title: "Adversarial Attack Simulator",
      description:
        "Simulate various adversarial attacks on neural networks and see how robust training methods can defend against them.",
      image: "/images/citation-chart.png",
      url: "/demos/adversarial-simulator",
      tags: ["Adversarial ML", "Security", "Robustness"],
    },
  ]

  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 text-3xl font-semibold text-academic-blue md:text-4xl">Code & Demos</h1>

        <section className="mb-16">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-dark-gray">GitHub Repositories</h2>
              <p className="text-medium-gray">Open-source implementations of my research projects</p>
            </div>
            <Link href="https://github.com/wendy0601" className="flex items-center text-academic-blue hover:underline">
              <Github className="mr-2 h-5 w-5" />
              View all repositories
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {repositories.map((repo) => (
              <div
                key={repo.name}
                className="group flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="mb-2 text-xl font-semibold text-dark-gray">{repo.name}</h3>
                <p className="mb-4 flex-grow text-medium-gray">{repo.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {repo.languages.map((lang) => (
                    <Badge key={lang} variant="outline" className="border-gray-200 bg-gray-50 text-academic-blue">
                      {lang}
                    </Badge>
                  ))}
                </div>

                <div className="mb-4 flex flex-wrap items-center justify-between text-sm text-medium-gray">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4" />
                      {repo.stars}
                    </div>
                    <div className="flex items-center">
                      <GitFork className="mr-1 h-4 w-4" />
                      {repo.forks}
                    </div>
                    <div className="flex items-center">
                      <Eye className="mr-1 h-4 w-4" />
                      {repo.watchers}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    <time dateTime={repo.updatedAt}>
                      {new Date(repo.updatedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-academic-blue text-academic-blue hover:bg-academic-blue hover:text-white"
                  >
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {repo.demoUrl && (
                    <Button
                      asChild
                      variant="default"
                      className="flex-1 bg-academic-blue text-white hover:bg-academic-blue/90"
                    >
                      <a href={repo.demoUrl} className="flex items-center justify-center">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-gray">Interactive Demos</h2>
            <p className="text-medium-gray">Explore my research through interactive visualizations and demos</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {interactiveDemos.map((demo, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-academic-blue/10" />
                  <img
                    src={
                      demo.image?.startsWith("/AboutMe")
                        ? demo.image
                        : `/AboutMe${demo.image}` || "/AboutMe/placeholder.svg"
                    }
                    alt={demo.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-dark-gray">{demo.title}</h3>
                  <p className="mb-4 text-medium-gray">{demo.description}</p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {demo.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-gray-200 bg-gray-50 text-academic-blue">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button asChild className="w-full bg-academic-blue text-white hover:bg-academic-blue/90">
                    <a href={demo.url} className="flex items-center justify-center">
                      Launch Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
