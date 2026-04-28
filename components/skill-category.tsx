import { Check } from "lucide-react"

interface SkillCategoryProps {
  title: string
  skills: string[]
}

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="rounded-lg border border-gray-800 bg-midnight-blue/50 p-6 shadow-glow transition-all hover:shadow-glow-intense">
      <h3 className="mb-4 text-xl font-semibold text-electric-blue">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-start group hover:bg-midnight-blue/30 p-1 rounded transition-colors">
            <Check className="mr-2 h-5 w-5 shrink-0 text-electric-blue" />
            <span className="text-gray-300">
              {skill === "AI Agent Platform (e.g. LangGraph)" ? (
                <>
                  <span className="font-medium text-electric-blue">AI Agent Platform</span>
                  <span className="text-sm text-gray-400"> (e.g. LangGraph)</span>
                </>
              ) : skill.includes("(") ? (
                <>
                  <span className="font-medium text-electric-blue">{skill.split("(")[0].trim()}</span>
                  <span className="text-sm text-gray-400"> ({skill.split("(")[1].replace(")", "")})</span>
                </>
              ) : (
                skill
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
