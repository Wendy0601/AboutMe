import { CalendarDays, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NewsHighlight() {
  const newsItems = [
    {
      title: "Co-organizing Grid Science Winter School 2025",
      date: "January 6, 2025",
      excerpt:
        "Co-organizing the 2025 Grid Science Winter School at Sante Fe with invited professors in formal verification and graph neural networks.",
      link: "/news/grid-science-winter-school-2025",
    },
    {
      title: "AI for Science Reading Group Launch",
      date: "January 5, 2024",
      excerpt: "Initiated a new weekly reading group about AI for Science with about six presenters and 50+ members.",
      link: "/news/ai-science-reading-group",
    },
    {
      title: "Best Paper Award at ICML Climate Change Workshop",
      date: "July 15, 2021",
      excerpt:
        'Our paper "Physics-Informed Graph Neural Networks for Fault Location in Power Grids" received the Best Paper Award at the ICML Climate Change Workshop.',
      link: "/news/best-paper-icml",
    },
  ]

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {newsItems.map((item, index) => (
        <div
          key={index}
          className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="p-6">
            <div className="mb-2 flex items-center text-sm text-medium-gray">
              <CalendarDays className="mr-2 h-4 w-4" />
              {item.date}
            </div>
            <h3 className="mb-3 text-xl font-semibold text-dark-gray">{item.title}</h3>
            <p className="mb-4 text-medium-gray">{item.excerpt}</p>
            <Button
              asChild
              variant="outline"
              className="group w-full justify-between border-academic-blue text-academic-blue hover:bg-academic-blue hover:text-white"
            >
              <a href={item.link}>
                Read more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
