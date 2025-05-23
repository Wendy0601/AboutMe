import Link from "next/link"
import { CalendarDays, Clock, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  categories: string[]
  featured?: boolean
}

export default function ThoughtsPage() {
  const blogPosts: BlogPost[] = [
    {
      slug: "future-of-neural-network-verification",
      title: "The Future of Neural Network Verification in Critical Systems",
      excerpt:
        "As AI systems become increasingly integrated into critical infrastructure, the need for formal verification methods has never been more important. Here's my perspective on where the field is heading.",
      date: "2025-01-10",
      readingTime: "8 min read",
      categories: ["AI Safety", "Verification", "Research"],
      featured: true,
    },
    {
      slug: "physics-informed-ml-revolution",
      title: "How Physics-Informed Machine Learning is Revolutionizing Scientific Computing",
      excerpt:
        "The integration of physical laws and constraints into machine learning models is creating a new paradigm for scientific computing and simulation.",
      date: "2024-12-05",
      readingTime: "12 min read",
      categories: ["Physics-Informed ML", "Scientific Computing"],
    },
    {
      slug: "graph-neural-networks-power-systems",
      title: "Graph Neural Networks: A Game Changer for Power System Analysis",
      excerpt:
        "Graph neural networks are particularly well-suited for power system applications due to their ability to model complex network topologies and physical relationships.",
      date: "2024-10-22",
      readingTime: "10 min read",
      categories: ["Graph Neural Networks", "Power Systems"],
    },
    {
      slug: "adversarial-robustness-critical-infrastructure",
      title: "Adversarial Robustness in Critical Infrastructure: Beyond Academic Exercises",
      excerpt:
        "While adversarial examples are often treated as academic curiosities, they represent real security concerns for AI systems deployed in critical infrastructure.",
      date: "2024-09-15",
      readingTime: "15 min read",
      categories: ["Adversarial ML", "Security", "Critical Infrastructure"],
    },
    {
      slug: "explainable-ai-power-grid",
      title: "Making AI Explainable for Power Grid Operators",
      excerpt:
        "For AI to be trusted in power grid operations, operators need to understand why the AI makes specific recommendations. Here's how we're addressing this challenge.",
      date: "2024-08-03",
      readingTime: "7 min read",
      categories: ["Explainable AI", "Power Systems", "Human-AI Interaction"],
    },
    {
      slug: "formal-methods-meet-deep-learning",
      title: "When Formal Methods Meet Deep Learning: Challenges and Opportunities",
      excerpt:
        "The intersection of formal verification methods and deep learning presents unique challenges but also exciting opportunities for building more trustworthy AI systems.",
      date: "2024-07-12",
      readingTime: "11 min read",
      categories: ["Formal Methods", "Deep Learning", "Verification"],
    },
  ]

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-semibold text-academic-blue md:text-4xl">Thoughts & Insights</h1>
          <p className="text-lg text-medium-gray">
            Perspectives on AI, machine learning, and cyber-physical systems from my research and experience
          </p>
        </div>

        {featuredPost && (
          <div className="mb-12">
            <h2 className="mb-6 text-xl font-medium text-dark-gray">Featured Article</h2>
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
              <div className="grid md:grid-cols-[3fr_2fr]">
                <div className="p-8">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <div className="flex items-center text-sm text-medium-gray">
                      <CalendarDays className="mr-1 h-4 w-4" />
                      {new Date(featuredPost.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center text-sm text-medium-gray">
                      <Clock className="mr-1 h-4 w-4" />
                      {featuredPost.readingTime}
                    </div>
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold text-dark-gray">{featuredPost.title}</h3>
                  <p className="mb-6 text-medium-gray">{featuredPost.excerpt}</p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {featuredPost.categories.map((category) => (
                      <Badge
                        key={category}
                        className="bg-academic-blue/10 text-academic-blue hover:bg-academic-blue/20"
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>

                  <Link
                    href={`/thoughts/${featuredPost.slug}`}
                    className="inline-flex items-center text-academic-blue hover:underline"
                  >
                    Read full article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="relative hidden bg-gray-100 md:block">
                  <div className="absolute inset-0 flex items-center justify-center bg-academic-blue/5 p-8">
                    <div className="text-center">
                      <div className="mb-4 text-6xl font-bold text-academic-blue/20">AI</div>
                      <div className="text-4xl font-bold text-academic-blue/20">SAFETY</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map((post) => (
            <div
              key={post.slug}
              className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <div className="flex items-center text-xs text-medium-gray">
                  <CalendarDays className="mr-1 h-3 w-3" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center text-xs text-medium-gray">
                  <Clock className="mr-1 h-3 w-3" />
                  {post.readingTime}
                </div>
              </div>

              <h3 className="mb-3 text-xl font-semibold text-dark-gray">{post.title}</h3>
              <p className="mb-4 flex-grow text-medium-gray">{post.excerpt}</p>

              <div className="mb-4 flex flex-wrap gap-2">
                {post.categories.slice(0, 2).map((category) => (
                  <Badge key={category} variant="outline" className="border-gray-200 text-academic-blue">
                    {category}
                  </Badge>
                ))}
                {post.categories.length > 2 && (
                  <Badge variant="outline" className="border-gray-200 text-medium-gray">
                    +{post.categories.length - 2}
                  </Badge>
                )}
              </div>

              <Link
                href={`/thoughts/${post.slug}`}
                className="inline-flex items-center text-academic-blue hover:underline"
              >
                Read article
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
