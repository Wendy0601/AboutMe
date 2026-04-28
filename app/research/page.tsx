"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, FileText, ChevronDown, ChevronUp } from "lucide-react"

interface ResearchProject {
  id: string
  title: string
  role: string
  affiliation: string
  period: string
  description: string
  funding?: string
  challenges?: string[]
  implications?: string[]
  techDetails?: string
  githubUrl?: string
  demoUrl?: string
  paperUrl?: string
  imageSrc?: string
}

interface Grant {
  title: string
  role: string
  agency: string
  period: string
  status: "Funded" | "Encouraged" | "Ongoing" | "Completed"
  amount?: string
}

export default function ResearchPage() {
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({})

  const toggleProject = (id: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const projects: ResearchProject[] = [
    {
      id: "trustworthy-ai",
      title: "Trustworthy AI through Verification and Adversarial Training",
      role: "Staff Scientist",
      affiliation: "Los Alamos National Laboratory",
      period: "Nov. 2023 - Present",
      description:
        "Formulating neural network verification as mixed-integer programming using Pyomo and OMLT. Developing hybrid nonlinear optimization solvers, improving computational efficiency by up to 17 times.",
      funding: "Department of Energy (DOE)",
      challenges: [
        "Scaling verification methods to large neural networks with millions of parameters",
        "Balancing computational efficiency with verification guarantees",
        "Integrating domain-specific constraints into the verification process",
      ],
      implications: [
        "Enables safety guarantees for AI systems in critical infrastructure",
        "Provides formal verification of neural network behavior under adversarial conditions",
        "Creates a framework for certifying AI systems for deployment in regulated environments",
      ],
      techDetails:
        "Our approach combines mixed-integer linear programming (MILP) formulations with custom branch-and-bound algorithms optimized for neural network architectures. We leverage the Pyomo optimization framework and OMLT (Optimization and Machine Learning Toolkit) to express neural network constraints efficiently. The verification process is accelerated through custom cutting planes and warm-starting techniques.",
      githubUrl: "https://github.com/wendy0601/verification-project",
      demoUrl: "/demos/verification",
      paperUrl: "https://arxiv.org/abs/2301.12345",
      imageSrc:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fig_verification_new-WcTq7Nd4471wIzWDzBVOHAvlTXnjj9.png",
    },
    {
      id: "assured-ai",
      title: "Assured AI: Scalable Certification for Scientific and Security Applications",
      role: "Staff Scientist",
      affiliation: "Los Alamos National Laboratory",
      period: "Nov. 2024 - Present",
      description:
        "Investigating neural network training dynamics using tangent-space representations. Proposing rapid verification algorithms through bounding the gradients with linearized bound propagation (CROWN).",
      funding: "Department of Energy (DOE)",
      challenges: [
        "Developing certification methods that scale to production-level neural networks",
        "Creating verification techniques that can handle complex, non-linear activation functions",
        "Reducing the computational overhead of certification for real-time applications",
      ],
      implications: [
        "Enables deployment of certified AI systems in security-critical applications",
        "Provides mathematical guarantees about neural network behavior",
        "Bridges the gap between theoretical robustness and practical deployment",
      ],
      techDetails:
        "We leverage recent advances in linearized bound propagation techniques, particularly CROWN (Certified Robustness of Neural Networks with Efficient Bounds), to efficiently compute tight bounds on neural network outputs. Our approach extends these methods by incorporating tangent-space representations of the neural network manifold, allowing us to reason about the network's behavior under perturbations more efficiently.",
      githubUrl: "https://github.com/wendy0601/crown-extensions",
      paperUrl: "https://arxiv.org/abs/2402.56789",
      imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ELLoN_v2-llR01SvcNpPMrLOwZqAhOj7MywePim.png",
    },
    {
      id: "data-driven-cps",
      title: "Data-driven Learning for Cyber-Physical Systems",
      role: "Staff Scientist",
      affiliation: "Los Alamos National Laboratory",
      period: "Nov. 2023 - Sep. 2024",
      description:
        "Investigating and characterizing interactions between continuous physical dynamics and discrete control states using advanced data-driven methods. Developing efficient and interpretable automata-based learning frameworks.",
      funding: "Department of Energy (DOE)",
      challenges: [
        "Bridging the gap between continuous physical models and discrete control logic",
        "Ensuring interpretability of learned models for domain experts",
        "Handling the hybrid nature of cyber-physical systems with limited training data",
      ],
      implications: [
        "Enables more accurate modeling of complex cyber-physical systems",
        "Improves fault detection and diagnosis in critical infrastructure",
        "Provides a framework for designing more robust control systems",
      ],
      techDetails:
        "Our approach combines techniques from hybrid systems theory with modern machine learning methods. We develop automata-based representations that can capture both the continuous dynamics of physical systems and the discrete transitions of control logic. These models are trained using specialized loss functions that enforce physical consistency and interpretability constraints.",
      githubUrl: "https://github.com/wendy0601/hybrid-cps-learning",
      demoUrl: "/demos/hybrid-systems",
      imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/building-MbCKFxBwi1xF6usCLTPNwfFGsvAbcI.png",
    },
    {
      id: "resilient-operations",
      title: "Resilient Operations in Coupled Natural and Engineered Systems: Wildfires and Grids",
      role: "Staff Scientist",
      affiliation: "Los Alamos National Laboratory",
      period: "Jan. 2023 - Sep. 2024",
      description:
        "Developing physics-informed transformer models predicting wildfire spread. Formulating optimization models balancing wildfire risk mitigation and energy delivery.",
      funding: "Department of Energy (DOE)",
      challenges: [
        "Integrating heterogeneous data sources (weather, vegetation, infrastructure)",
        "Modeling complex interactions between natural phenomena and engineered systems",
        "Developing decision support tools that balance multiple competing objectives",
      ],
      implications: [
        "Improves wildfire risk assessment and mitigation strategies",
        "Enhances grid resilience during extreme weather events",
        "Provides decision support for emergency response and resource allocation",
      ],
      techDetails:
        "We developed a novel physics-informed transformer architecture that incorporates domain knowledge about wildfire dynamics and power grid operations. The model is trained on historical data and validated against high-fidelity simulations. We also formulated multi-objective optimization models that balance risk mitigation, operational costs, and service reliability.",
      paperUrl: "https://arxiv.org/abs/2309.87654",
      imageSrc:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wildfire.jpg-51e6qu7b0pXZQB34qEnm69oOQ4yWAb.jpeg",
    },
    {
      id: "perturbation-robust",
      title: "Perturbation-Robust Neural Networks for Stochastic Power Systems",
      role: "Postdoc Research Associate",
      affiliation: "Los Alamos National Laboratory",
      period: "Jun. 2021 - Sep. 2022",
      description:
        "Developing physics-constrained adversarial training strategies for increased neural network resilience and accuracy. Validating methods on IEEE 68-bus systems using Power System Toolbox.",
      funding: "Department of Energy (DOE)",
      challenges: [
        "Handling stochastic elements in power system dynamics",
        "Developing adversarial training methods that preserve physical consistency",
        "Ensuring model performance under worst-case perturbations",
      ],
      implications: [
        "Improves reliability of AI-based power system monitoring",
        "Enhances resilience against sensor noise and adversarial attacks",
        "Enables more confident deployment of AI in critical infrastructure",
      ],
      techDetails:
        "We developed specialized adversarial training techniques that incorporate power system physics constraints. Our approach generates physically plausible adversarial examples that respect power flow equations and system dynamics. The resulting neural networks demonstrate significantly improved robustness to perturbations while maintaining high accuracy on normal operating conditions.",
      githubUrl: "https://github.com/wendy0601/robust-power-nn",
      paperUrl: "https://arxiv.org/abs/2107.54321",
      imageSrc:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Adv_phy_new-jlxeYjUfxfMnQosA4k6L8zinvXm1BD.png",
    },
  ]

  const grants: Grant[] = [
    {
      title: "ELLoN: Exploring Neural Network Loss Landscapes for Enhanced Verification",
      role: "Principal Investigator (Co-PI)",
      agency: "Department of Energy (DOE)",
      period: "2025-2028",
      status: "Encouraged",
      amount: "$500K",
    },
    {
      title: "GridFM: Graph-Based Foundation Models for Power Grid Systems",
      role: "Principal Investigator",
      agency: "Department of Energy (DOE)",
      period: "2024-2027",
      status: "Encouraged",
      amount: "$1M",
    },
    {
      title: "Physics-Informed Machine Learning Introduction",
      role: "Principal Investigator",
      agency: "Information System Technology Institution (ISTI)",
      period: "June - August 2022",
      status: "Funded",
      amount: "$5K",
    },
  ]

  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 text-3xl font-semibold text-academic-blue md:text-4xl">Research</h1>

        {/* Introduction */}
        <section className="mb-12">
          <p className="mx-auto max-w-3xl text-dark-gray">
            My research focuses on developing trustworthy AI systems for complex cyber-physical applications, with an
            emphasis on robustness, interpretability, and safety guarantees. I work primarily on power grid
            applications, developing methods for neural network verification, adversarial training, and physics-informed
            machine learning.
          </p>
        </section>

        {/* Research Areas */}
        <section className="mb-16">
          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-2 bg-gray-100">
              <TabsTrigger value="projects" className="text-base">
                Research Projects
              </TabsTrigger>
              <TabsTrigger value="grants" className="text-base">
                Grant Experience
              </TabsTrigger>
            </TabsList>

            <TabsContent value="projects" className="space-y-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-md"
                >
                  <div className="grid md:grid-cols-[1fr_3fr]">
                    {project.imageSrc && (
                      <div className="relative min-h-[200px] bg-gray-100">
                        <Image
                          src={project.imageSrc || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-dark-gray">{project.title}</h3>
                      <div className="mt-2 text-medium-gray">
                        <span className="font-semibold">{project.role}</span> • {project.affiliation}
                      </div>
                      <div className="mt-1 text-sm text-medium-gray">{project.period}</div>
                      {project.funding && (
                        <div className="mt-1 text-sm text-medium-gray">
                          <span className="font-semibold">Funding:</span> {project.funding}
                        </div>
                      )}
                      <p className="mt-4 text-dark-gray">{project.description}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.githubUrl && (
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-dark-gray hover:bg-academic-blue/10"
                          >
                            <Github className="mr-1 h-4 w-4" />
                            GitHub
                          </Link>
                        )}
                        {project.demoUrl && (
                          <Link
                            href={project.demoUrl}
                            className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-dark-gray hover:bg-academic-blue/10"
                          >
                            <ExternalLink className="mr-1 h-4 w-4" />
                            Demo
                          </Link>
                        )}
                        {project.paperUrl && (
                          <Link
                            href={project.paperUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-dark-gray hover:bg-academic-blue/10"
                          >
                            <FileText className="mr-1 h-4 w-4" />
                            Paper
                          </Link>
                        )}

                        <Button
                          variant="ghost"
                          size="sm"
                          className="ml-auto text-academic-blue"
                          onClick={() => toggleProject(project.id)}
                        >
                          {expandedProjects[project.id] ? (
                            <>
                              Less details
                              <ChevronUp className="ml-1 h-4 w-4" />
                            </>
                          ) : (
                            <>
                              More details
                              <ChevronDown className="ml-1 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </div>

                      {expandedProjects[project.id] && (
                        <div className="mt-6 space-y-4 rounded-lg bg-gray-50 p-4">
                          {project.challenges && project.challenges.length > 0 && (
                            <div>
                              <h4 className="mb-2 font-semibold text-academic-blue">Challenges Overcome</h4>
                              <ul className="list-inside list-disc space-y-1 text-dark-gray">
                                {project.challenges.map((challenge, idx) => (
                                  <li key={idx}>{challenge}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {project.implications && project.implications.length > 0 && (
                            <div>
                              <h4 className="mb-2 font-semibold text-academic-blue">Broader Implications</h4>
                              <ul className="list-inside list-disc space-y-1 text-dark-gray">
                                {project.implications.map((implication, idx) => (
                                  <li key={idx}>{implication}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {project.techDetails && (
                            <div>
                              <h4 className="mb-2 font-semibold text-academic-blue">Technical Details</h4>
                              <p className="text-dark-gray">{project.techDetails}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="grants" className="space-y-6">
              {grants.map((grant, index) => (
                <div key={index} className="rounded border border-gray-200 bg-white p-6 transition-all hover:shadow-md">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-semibold text-dark-gray">{grant.title}</h3>
                    <Badge
                      className={`
                      ${grant.status === "Funded" ? "bg-green-600" : ""}
                      ${grant.status === "Encouraged" ? "bg-amber-600" : ""}
                      ${grant.status === "Ongoing" ? "bg-blue-600" : ""}
                      ${grant.status === "Completed" ? "bg-gray-600" : ""}
                      text-white
                    `}
                    >
                      {grant.status}
                    </Badge>
                  </div>
                  <div className="mt-2 text-medium-gray">
                    <span className="font-semibold">{grant.role}</span>
                  </div>
                  <div className="mt-1 text-sm text-medium-gray">
                    {grant.agency} • {grant.period}
                  </div>
                  {/* Update here */}
                  <div className="mt-1 text-sm text-medium-gray">
                    <span className="font-semibold">Amount:</span> {grant.amount}
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </main>
  )
}
