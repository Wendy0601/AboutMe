interface QuoteCardProps {
  quote: string
  author: string
  role: string
}

export default function QuoteCard({ quote, author, role }: QuoteCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-md">
      <h3 className="mb-4 text-2xl font-semibold text-academic-blue">Research Philosophy</h3>
      <p className="mb-6 text-lg text-dark-gray">
        My research is driven by the belief that AI systems must be both powerful and trustworthy. I focus on developing
        machine learning methods that incorporate domain knowledge and formal guarantees, ensuring they perform reliably
        in critical applications like power systems and infrastructure monitoring.
      </p>
      <p className="mb-6 text-lg text-dark-gray">
        I am particularly interested in the intersection of physics-informed machine learning and formal verification,
        where we can leverage both data and domain expertise to build systems that are not only accurate but also
        robust, interpretable, and verifiable.
      </p>
      <div className="flex items-center justify-end">
        <div className="text-right">
          <p className="font-semibold text-academic-blue">Wenting Li, Ph.D.</p>
          <p className="text-sm text-medium-gray">Research Scientist, University of Texas at Austin</p>
        </div>
      </div>
    </div>
  )
}
