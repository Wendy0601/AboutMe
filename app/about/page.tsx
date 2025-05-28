import Timeline from "@/components/timeline"
import SkillCategory from "@/components/skill-category"
import ImageGallery from "@/components/image-gallery"

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="mb-12 text-center text-4xl font-bold uppercase tracking-wider text-white md:text-5xl">About Me</h1>

      {/* Core Competencies Section */}
      <section className="mb-20">
        <h2 className="mb-8 text-2xl font-semibold uppercase tracking-wide text-electric-blue md:text-3xl">
          Core Competencies & Technical Stack
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <SkillCategory
            title="AI & Machine Learning"
            skills={[
              "Deep Learning & Neural Networks",
              "Reinforcement Learning",
              "Adversarial Machine Learning",
              "Trustworthy AI & Robustness",
              "Explainable AI (XAI)",
              "Verification & Validation",
            ]}
          />
          <SkillCategory
            title="Programming & Software"
            skills={[
              "Python, TensorFlow, PyTorch",
              "MATLAB, Simulink",
              "C/C++, Java",
              "Data Analysis & Visualization",
              "High-Performance Computing",
            ]}
          />
          <SkillCategory
            title="Cyber-Physical Systems"
            skills={[
              "Control Systems",
              "System Modeling & Simulation",
              "Embedded Systems",
              "Real-time Systems",
              "Sensor Networks",
              "IoT Security",
            ]}
          />
          <SkillCategory
            title="Research & Communication"
            skills={[
              "Scientific Writing & Publication",
              "Grant Writing & Proposal Development",
              "Technical Presentations",
              "Collaborative Research",
              "Project Management",
              "Mentoring & Teaching",
            ]}
          />
        </div>
      </section>

      {/* Personal Gallery Section */}
      <section className="mb-20">
        <h2 className="mb-8 text-2xl font-semibold uppercase tracking-wide text-electric-blue md:text-3xl">
          Beyond Research
        </h2>
        <div className="space-y-6">
          <p className="text-gray-300">
            Outside of my academic and professional pursuits, I enjoy exploring the outdoors and challenging myself with
            various activities. These experiences help me maintain a balanced perspective and often inspire creative
            approaches to my research problems.
          </p>

          <ImageGallery
            images={[
              {
                src: "/AboutMe/images/me_sport.jpg",
                alt: "Sandboarding on dunes",
                caption: "Exploring the physics of motion while sandboarding in the dunes",
              },
              {
                src: "/AboutMe/images/hiking_highest.jpeg",
                alt: "Mountain summit with research team",
                caption: "Reaching new heights with my research team at the mountain summit",
              },
              {
                src: "/AboutMe/images/riding.jpeg",
                alt: "Cycling with colleagues",
                caption: "Weekend cycling expedition with fellow researchers",
              },
              {
                src: "/AboutMe/images/hiking_stone.jpeg",
                alt: "Exploring unique geological formations",
                caption: "Investigating natural patterns at a fascinating geological site",
              },
            ]}
          />
        </div>
      </section>

      {/* Timeline Section */}
      <section>
        <h2 className="mb-8 text-2xl font-semibold uppercase tracking-wide text-electric-blue md:text-3xl">
          My Journey - A Timeline of Growth & Achievement
        </h2>
        <Timeline
          events={[
            {
              date: "2024 - Present",
              title: "Staff Scientist",
              organization: "Los Alamos National Laboratory",
              description: "Leading research in trustworthy AI for critical infrastructure protection.",
            },
            {
              date: "2021 - 2023",
              title: "Postdoctoral Researcher",
              organization: "Stanford University",
              description: "Conducted research on robust machine learning for cyber-physical systems.",
            },
            {
              date: "2015 - 2019",
              title: "Ph.D. in Electrical Engineering",
              organization: "Rensselaer Polytechnic Institute",
              description: "Dissertation on adversarial machine learning for autonomous systems.",
            },
            {
              date: "2018",
              title: "Founders Award of Excellence",
              organization: "Rensselaer Polytechnic Institute",
              description: "Recognized for contributions to a excellent academic performance.",
            },
            {
              date: "2017 - 2019",
              title: "M.S. in Applied Mathematics",
              organization: "Rensselaer Polytechnic Institute",
              description: "Specialized in optimization and machine learning.",
            },
            {
              date: "2009 - 2013",
              title: "B.S. in Electrical Engineering",
              organization: "Harbin Institute of Technology",
              description: "Graduated with honors, focus on automation and control.",
            },
          ]}
        />
      </section>
    </main>
  )
}
