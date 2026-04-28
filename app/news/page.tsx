import Link from "next/link"
import { CalendarDays, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NewsItem {
  date: string
  content: string
  links?: {
    text: string
    url: string
  }[]
}

export default function NewsPage() {
  const newsItems: NewsItem[] = [
    {
      date: "01/06/2025",
      content:
        "Co-organize the 2025 Grid Science Winter School 2025 at Sante Fe. Invited Professors in formal verification and graph neural networks.",
    },
    {
      date: "12/21/2024",
      content:
        "Accomplish the annual appraisal of the largest DI project on AI, introducing our poster and know about other research groups.",
    },
    {
      date: "11/03/2024",
      content:
        "Present our latest work on formal verification for input space at LANL, receiving increasing attention and constructive feedback.",
    },
    {
      date: "10/20/2024",
      content:
        "Host two meetings in INFORMS 2024 about Graph neural networks, warmly discusing the generalization, computing efficiency, robustness of GNN.",
    },
    {
      date: "07/21/2024",
      content: "Present at PES General Meeting at Seattle.",
    },
    {
      date: "07/01/2024",
      content:
        "Our pre-proposal working with UT Austin, Georgeo Tech, OSU, and BNL for the DOE SciDAC project was encouraged!",
    },
    {
      date: "06/12/2024",
      content: "My intern student Mohamad from UT Austin joined us, welcome!",
    },
    {
      date: "01/05/2024",
      content: "Initiate a new weekly reading group about AI for Science with about six presenters and 50+ members.",
    },
    {
      date: "04/05/2023",
      content:
        'Talk on "Physics-Informed Machine Learning for Enhancing Robustness and Verification" at NASPI Workshop and Vendor Show.',
    },
    {
      date: "03/22/2023",
      content:
        'Give a talk on "Physics-Preserved Graph Learning for Robust Fault Location in Distribution Systems" at Huston University',
    },
    {
      date: "02/13/2023",
      content:
        'My co-worker Krishnamurthy (Dj) Dvijotham presents our research on "Physics-Constrained Interval Bound Propagation for Robustness Verifiable Neural Networks in Power Grids" at AI for Energy Innovation held in conjunction with 37th AAAI Conference on Artificial Intelligence.',
      links: [
        {
          text: "Dvijotham",
          url: "https://dj-research.netlify.app/",
        },
      ],
    },
    {
      date: "02/01/2022",
      content:
        'Our paper of "Physics-Constrained Adversarial Training for Neural Networks in Stochastic Power Grids" is accepted by Transaction on Artificial Intelligence.',
    },
    {
      date: "01/03/2022",
      content:
        'My co-worker Deepjyoti Deka presents our paper "PPGN: Physics-Preserved Graph Networks for Real-Time Fault Location in Distribution Systems with Limited Observation and Labels" on Hawaii International Conference on System Sciences (HICSS) conference.',
      links: [
        {
          text: "Deepjyoti Deka",
          url: "https://www.linkedin.com/in/deepjyoti-deka-8a44388",
        },
      ],
    },
    {
      date: "07/01/2022",
      content: "Organize the 4-week Physics-Informed Machine Learning Training at LANL",
    },
    {
      date: "03/11/2021",
      content:
        "Talk on a latest paper on neural networks verification for the optimization machine learning (OPTML) reading group.",
    },
    {
      date: "02/24/2021",
      content:
        "A lighting talk for the DisrupTech: Robust fault location through graph-based learning at low label rates",
    },
    {
      date: "08/03/2020",
      content:
        "Big Data Analytics Sessions during the 2020 PES general meeting: Identifying Overlapping Successive Events Using a Shallow Convolutional Neural Network",
      links: [
        {
          text: "here",
          url: "https://pes-gm.org/2020/",
        },
      ],
    },
    {
      date: "07/14/2020",
      content:
        "Los Alamos National Laboratory Postdoc Seminar: Physics-informed Neural Networks for High Impedance Fault Detection.",
    },
    {
      date: "11/01/2019",
      content:
        "CURENT Power and Energy Seminar: Real-time and Agile Data-driven Approaches Enabling Power Grids to be Smart.",
      links: [
        {
          text: "here",
          url: "https://curent.utk.edu/news/press-releases/wenting-li-rpi-give-curent-power-and-energy-seminar-fri-nov-1/",
        },
      ],
    },
  ]

  // Function to format the content with links
  const formatContent = (item: NewsItem) => {
    if (!item.links || item.links.length === 0) {
      return item.content
    }

    let content = item.content
    item.links.forEach((link) => {
      content = content.replace(
        `[${link.text}]`,
        `<a href="${link.url}" class="text-academic-blue hover:underline" target="_blank" rel="noopener noreferrer">${link.text}</a>`,
      )
    })
    return content
  }

  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8 flex items-center">
          <Button asChild variant="ghost" className="mr-4 p-2">
            <Link href="/" className="flex items-center text-academic-blue">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl font-semibold text-academic-blue md:text-4xl">News & Updates</h1>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative space-y-6 before:absolute before:left-4 before:top-0 before:h-full before:w-0.5 before:bg-gray-200 md:before:left-6">
            {newsItems.map((item, index) => {
              // Parse the date
              const dateParts = item.date.split("/")
              const dateObj = new Date(
                Number.parseInt(dateParts[2]),
                Number.parseInt(dateParts[0]) - 1,
                Number.parseInt(dateParts[1]),
              )

              // Format the date
              const formattedDate = dateObj.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })

              return (
                <div key={index} className="relative pl-12 md:pl-16">
                  <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-academic-blue bg-white md:left-2">
                    <CalendarDays className="h-4 w-4 text-academic-blue" />
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
                    <div className="mb-2 text-sm font-medium text-academic-blue">{formattedDate}</div>
                    <p className="text-dark-gray" dangerouslySetInnerHTML={{ __html: formatContent(item) }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
