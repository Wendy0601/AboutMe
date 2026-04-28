"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { TensorflowLogo, PytorchLogo, PythonLogo, MatlabLogo, CppLogo, GitLogo } from "./tech-logos"

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("ai")

  const tabs = [
    { id: "ai", label: "AI & ML" },
    { id: "programming", label: "Programming" },
    { id: "simulation", label: "Simulation" },
  ]

  const techStacks = {
    ai: [
      { name: "TensorFlow", icon: <TensorflowLogo className="h-10 w-10" />, level: 90 },
      { name: "PyTorch", icon: <PytorchLogo className="h-10 w-10" />, level: 85 },
      { name: "Scikit-Learn", icon: null, level: 80 },
      { name: "Keras", icon: null, level: 85 },
      { name: "LangGraph (AI Agent Platform)", icon: null, level: 75 },
    ],
    programming: [
      { name: "Python", icon: <PythonLogo className="h-10 w-10" />, level: 95 },
      { name: "C/C++", icon: <CppLogo className="h-10 w-10" />, level: 75 },
      { name: "MATLAB", icon: <MatlabLogo className="h-10 w-10" />, level: 85 },
      { name: "Git", icon: <GitLogo className="h-10 w-10" />, level: 80 },
      { name: "Julia", icon: null, level: 65 },
    ],
    simulation: [
      { name: "MATLAB Simulink", icon: <MatlabLogo className="h-10 w-10" />, level: 90 },
      { name: "Power System Toolbox", icon: null, level: 95 },
      { name: "OpenDSS", icon: null, level: 70 },
      { name: "Pyomo", icon: null, level: 85 },
      { name: "PSCAD", icon: null, level: 65 },
      { name: "PSSE", icon: null, level: 75 },
    ],
  }

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? "default" : "outline"}
            onClick={() => setActiveTab(tab.id)}
            className={activeTab === tab.id ? "bg-academic-blue text-white" : "border-academic-blue text-dark-gray"}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {techStacks[activeTab as keyof typeof techStacks].map((tech, index) => (
          <div
            key={tech.name}
            className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="mb-3 flex items-center gap-3">
              {tech.icon || (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-academic-blue/10 text-academic-blue">
                  {tech.name.charAt(0)}
                </div>
              )}
              <h3 className="text-lg font-medium text-dark-gray">{tech.name}</h3>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full bg-academic-blue transition-all duration-800"
                style={{ width: `${tech.level}%` }}
              />
            </div>
            <div className="mt-1 text-right text-xs text-medium-gray">Proficiency: {tech.level}%</div>
          </div>
        ))}
      </div>
    </div>
  )
}
