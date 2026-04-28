import { CalendarDays, Award, GraduationCap, Briefcase } from "lucide-react"

interface TimelineEvent {
  date: string
  title: string
  organization: string
  description: string
}

interface TimelineProps {
  events: TimelineEvent[]
}

export default function Timeline({ events }: TimelineProps) {
  const getIcon = (title: string) => {
    if (title.includes("Award")) return Award
    if (title.includes("Ph.D.") || title.includes("M.S.") || title.includes("B.S.")) return GraduationCap
    return Briefcase
  }

  const getDescription = (event: TimelineEvent) => {
    // Special case for Staff Scientist at LANL
    if (event.title === "Staff Scientist" && event.organization.includes("Los Alamos")) {
      return "Leading research in trustworthy AI through adversarial training and formal verification."
    }

    // Special case for Ph.D.
    if (event.title === "Ph.D. in Electrical Engineering") {
      return "Dissertation on Physics-Informed Machine Learning for Power Grid Monitoring"
    }

    return event.description
  }

  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:left-9 before:ml-px before:h-full before:w-0.5 before:bg-electric-blue/30 md:before:left-1/2 md:before:-ml-px">
      {events.map((event, index) => {
        const Icon = getIcon(event.title)
        return (
          <div
            key={index}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-electric-blue shadow-glow md:absolute md:left-1/2 md:-ml-4">
              <Icon className="h-4 w-4 text-midnight-blue" />
            </div>

            <div className="ml-14 w-[calc(100%-3.5rem)] md:ml-0 md:w-[calc(50%-2.5rem)]">
              <div className="flex items-center text-sm text-gray-400">
                <CalendarDays className="mr-1 h-3 w-3" />
                {event.date}
              </div>
              <h3 className="text-lg font-semibold text-white">{event.title}</h3>
              <p className="text-sm text-electric-blue">{event.organization}</p>
              <p className="mt-1 text-sm text-gray-300">{getDescription(event)}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
