import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  role: string
  affiliation: string
  duration: string
  description: string
  tags: string[]
}

export default function ProjectCard({ title, role, affiliation, duration, description, tags }: ProjectCardProps) {
  return (
    <div className="rounded-lg border border-gray-800 bg-midnight-blue/50 p-6 shadow-glow transition-all hover:-translate-y-1 hover:shadow-glow-intense">
      <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
      <div className="mb-1 text-sm text-electric-blue">
        {role} • {affiliation}
      </div>
      <div className="mb-3 text-xs text-gray-400">{duration}</div>
      <p className="mb-4 text-sm text-gray-300">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Badge key={index} variant="outline" className="border-gray-700 bg-midnight-blue/70 text-xs text-gray-300">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  )
}
