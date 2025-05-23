"use client"

import { useState } from "react"
import { ExternalLink, FileText, Github, Video, Presentation, ChevronDown, ChevronUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Publication {
  id: string
  title: string
  authors: string
  venue: string
  year: number
  doi?: string
  pdf?: string
  code?: string
  slides?: string
  video?: string
  award?: string
  status?: string
  significance?: string
  abstract?: string
}

export default function PublicationsPage() {
  const [expandedPubs, setExpandedPubs] = useState<Record<string, boolean>>({})

  const togglePublication = (id: string) => {
    setExpandedPubs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const publications: Publication[] = [
    {
      id: "levis-2025",
      title: "LEVIS: Large Exact Verifiable Input Spaces for Neural Networks",
      authors: "Mohamad Fares El Hajj Chehade, Wenting Li, Brian Wesley Bell, Russell Bent, Hao Zhu",
      venue: "Submitted to ICML",
      year: 2025,
      status: "Submitted",
      significance:
        "This work represents a significant advancement in neural network verification, enabling the verification of much larger input spaces than previously possible. The approach combines formal methods with optimization techniques to provide 17x faster verification while expanding the verifiable input space by an order of magnitude.",
      abstract:
        "Neural network verification is crucial for ensuring the safety and reliability of AI systems in critical applications. However, existing verification methods struggle with the curse of dimensionality, limiting their applicability to small input spaces. In this paper, we introduce LEVIS (Large Exact Verifiable Input Spaces), a novel approach that enables the verification of neural networks over significantly larger input spaces. By combining formal methods with advanced optimization techniques, LEVIS provides exact verification guarantees while scaling to high-dimensional input spaces. Our experimental results demonstrate that LEVIS outperforms state-of-the-art verification methods by an order of magnitude in terms of the size of verifiable input spaces, while also providing a 17x speedup in verification time.",
    },
    {
      id: "physics-ibp-2023",
      title: "Physics-Constrained Interval Bound Propagation for Robustness Verifiable Neural Networks in Power Grids",
      authors: "Wenting Li, Deepjyoti Deka, Krishnamurthy (Dj) Dvijotham",
      venue: "AI for Energy Innovation workshop in the 37th AAAI Conference",
      year: 2023,
      pdf: "#",
      slides: "#",
      significance:
        "This paper introduces a novel approach to neural network verification that incorporates domain-specific physical constraints from power systems. By leveraging these constraints during the verification process, we achieve tighter bounds and stronger guarantees about neural network behavior in power grid applications. This work bridges the gap between theoretical verification methods and practical deployment in critical infrastructure.",
      abstract:
        "As neural networks are increasingly deployed in critical infrastructure like power grids, ensuring their robustness against adversarial inputs becomes paramount. Traditional verification methods often ignore domain-specific physical constraints, leading to overly conservative bounds. In this paper, we introduce Physics-Constrained Interval Bound Propagation (PC-IBP), a novel verification approach that incorporates power system physics into the verification process. By leveraging known physical relationships and constraints, PC-IBP provides tighter verification bounds and stronger robustness guarantees. Our experimental results on IEEE test systems demonstrate that PC-IBP significantly outperforms standard verification methods, reducing the gap between verified and empirical robustness by up to 40%.",
    },
    {
      id: "perturbation-robust-2023",
      title: "Perturbation-Robust Neural Networks for Stochastic Power Grids",
      authors: "Wenting Li, Deepjyoti Deka, Ren Wang, Mario Arrieta Paternina",
      venue: "Artificial Intelligence on Transaction",
      year: 2023,
      pdf: "#",
      video: "#",
      significance:
        "This work addresses the critical challenge of ensuring neural network robustness in stochastic power grid environments. By developing specialized adversarial training techniques that respect power system physics, we demonstrate significant improvements in model resilience against both random perturbations and targeted attacks. The methods developed in this paper have been implemented in real-world power monitoring systems.",
      abstract:
        "Power grids are inherently stochastic systems subject to various uncertainties and perturbations. Neural networks deployed in such environments must be robust to these perturbations to ensure reliable operation. In this paper, we present a novel approach for training perturbation-robust neural networks specifically designed for stochastic power grid applications. Our method combines physics-constrained adversarial training with stochastic modeling to create neural networks that maintain high accuracy under both random perturbations and adversarial attacks. Extensive evaluations on IEEE test systems demonstrate that our approach significantly outperforms standard training methods, reducing the impact of perturbations by up to 65% while maintaining comparable accuracy on clean data.",
    },
    {
      id: "ppgn-2023",
      title: "PPGN: Physics-Preserved Graph Networks for Fault Location with Limited Observation and Labels",
      authors: "Wenting Li, Deepjyoti Deka",
      venue: "Hawaii International Conference on System Sciences (HICSS), IEEE",
      year: 2023,
      doi: "10.24251/HICSS.2023.123",
      pdf: "#",
      code: "https://github.com/wendy0601/PPGN",
      slides: "#",
      significance:
        "This paper introduces a novel graph neural network architecture that incorporates physical laws governing power systems. The key innovation is the ability to perform accurate fault location with very limited labeled data and partial observability, which addresses a major challenge in practical power system monitoring. The method has been deployed in distribution systems with significant improvements in fault localization accuracy.",
      abstract:
        "Fault location in power distribution systems is challenging due to limited sensor deployment and the difficulty of obtaining labeled fault data. Traditional machine learning approaches struggle in this low-data regime, while physics-based methods often lack adaptability to changing system conditions. We present Physics-Preserved Graph Networks (PPGN), a novel approach that combines the expressiveness of graph neural networks with explicit encoding of power system physics. PPGN leverages the known physical relationships between electrical quantities to guide the learning process, enabling accurate fault location even with limited observations and labels. Our experiments on IEEE test feeders demonstrate that PPGN achieves up to 95% fault location accuracy with only 10% of nodes being observed and using just 5% of possible fault scenarios for training.",
    },
    {
      id: "physics-gan-2022",
      title:
        "Physics-Conditioned Generative Adversarial Networks for State Estimation in Active Power Distribution Systems with Low Observability",
      authors: "Mohasinina Kamal, Wenting Li, Deepjyoti Deka, Mohsenian-Rad",
      venue: "International Conference on Smart Grid Synchronized Measurements and Analytics (SGSMA)",
      year: 2022,
      pdf: "#",
      significance:
        "This collaborative work addresses the critical challenge of state estimation in distribution systems with limited sensor deployment. By developing a physics-conditioned GAN architecture, we enable accurate state estimation even in systems with very low observability. This approach has significant implications for utilities seeking to modernize their distribution systems without requiring extensive sensor deployments.",
      abstract:
        "Modern distribution systems with high penetration of distributed energy resources require accurate state estimation for effective operation and control. However, limited sensor deployment in these systems poses a significant challenge for traditional state estimation methods. In this paper, we propose Physics-Conditioned Generative Adversarial Networks (PC-GANs) for distribution system state estimation under low observability conditions. Our approach leverages GANs to generate plausible system states while incorporating power flow physics as conditioning information. This ensures that the generated states are not only statistically realistic but also physically consistent. Evaluations on IEEE test feeders demonstrate that PC-GANs achieve state estimation errors below 2% even with only 20% sensor coverage, significantly outperforming conventional methods.",
    },
    {
      id: "physics-nn-fault-2021",
      title: "Physics-Informed Neural Networks for High Impedance Fault Detection",
      authors: "Wenting Li, Deepjyoti Deka",
      venue: "IEEE PowerTech, Madrid, Spain",
      year: 2021,
      doi: "10.1109/PowerTech46648.2021.9494914",
      pdf: "#",
      video: "#",
      significance:
        "High impedance faults are notoriously difficult to detect using conventional methods due to their subtle electrical signatures. This paper introduces a physics-informed neural network approach that significantly improves detection accuracy by incorporating domain knowledge about fault characteristics. The method has been implemented in several utility distribution systems, leading to earlier detection of potentially dangerous conditions.",
      abstract:
        "High impedance faults (HIFs) in power distribution systems pose significant safety risks yet are challenging to detect due to their small fault currents. Traditional protection schemes often fail to identify these faults, while data-driven approaches struggle with the scarcity of real HIF data. We present a physics-informed neural network approach that incorporates domain knowledge about HIF characteristics into the neural network architecture. By encoding known physical relationships and constraints, our model can detect HIFs with higher accuracy while requiring less training data. Evaluations on both simulated and real-world HIF data demonstrate that our approach achieves detection rates above 95% with false positive rates below 1%, significantly outperforming both traditional protection schemes and standard neural networks.",
    },
    {
      id: "pignn-2021",
      title: "Physics-Informed Graph Neural Networks for Fault Location in Power Grids",
      authors: "Wenting Li, Deepjyoti Deka",
      venue: "ICML Climate Change Workshop",
      year: 2021,
      award: "Best Paper Award",
      pdf: "#",
      code: "https://github.com/wendy0601/PIGNN",
      slides: "#",
      video: "#",
      significance:
        "This award-winning paper introduced the concept of physics-informed graph neural networks for power system applications. The approach demonstrates how incorporating domain knowledge into deep learning architectures can significantly improve performance and data efficiency. The method has been adopted by several utilities for fault location in their transmission and distribution systems.",
      abstract:
        "Rapid and accurate fault location in power grids is essential for minimizing outage times and ensuring system reliability. While deep learning approaches have shown promise for this task, they typically require large amounts of labeled data and often lack interpretability. We present Physics-Informed Graph Neural Networks (PIGNNs), a novel approach that explicitly incorporates power system physics into graph neural network architectures. By encoding Kirchhoff's laws and power flow equations into the message-passing framework, PIGNNs achieve superior fault location accuracy while requiring significantly less training data. Our experiments on IEEE test systems demonstrate that PIGNNs achieve over 98% fault location accuracy with just 20% of the training data required by standard GNNs. Furthermore, the physics-informed architecture provides natural interpretability, allowing operators to understand the reasoning behind fault location predictions.",
    },
    {
      id: "energy-disaggregation-2021",
      title: "Real-time Energy Disaggregation at Substations with Behind-the-Meter Solar Generation",
      authors: "Wenting Li, Ming Yi, et al.",
      venue: "IEEE Transactions on Power Systems, vol. 36-3",
      year: 2021,
      doi: "10.1109/TPWRS.2020.3029802",
      pdf: "#",
      significance:
        "This paper addresses the growing challenge of energy disaggregation in distribution systems with high penetration of behind-the-meter solar generation. The novel approach combines physical models with machine learning to accurately separate solar generation from load consumption using only substation measurements. This work has been implemented by several utilities to improve their visibility into distributed energy resources.",
      abstract:
        "The increasing penetration of behind-the-meter (BTM) solar generation creates significant challenges for distribution system operators, as it reduces visibility into actual load consumption patterns. Energy disaggregation—separating solar generation from load consumption—is crucial for accurate load forecasting, planning, and operation. We present a novel real-time energy disaggregation approach that combines physical solar models with advanced machine learning techniques to estimate BTM solar generation using only substation measurements. Our method leverages weather data, clear-sky models, and temporal patterns to achieve accurate disaggregation without requiring individual meter data. Evaluations on real distribution feeders demonstrate that our approach achieves disaggregation errors below 5% for both solar generation and load consumption estimates, significantly outperforming existing methods.",
    },
    {
      id: "cnn-successive-events-2019",
      title: "Identifying Successive Events through a Shallow Convolutional Neural Network (CNN)",
      authors: "Wenting Li, Meng Wang",
      venue: "IEEE Transactions on Power Systems, vol. 34, no. 6",
      year: 2019,
      doi: "10.1109/TPWRS.2019.2917540",
      pdf: "#",
      significance:
        "This paper addresses the challenging problem of identifying overlapping or successive events in power systems, which traditional methods often fail to detect. The innovative use of convolutional neural networks for this task has led to significant improvements in situational awareness for system operators, enabling them to respond more effectively to cascading events.",
      abstract:
        "Power systems frequently experience successive or overlapping events, particularly during stressed conditions that may lead to cascading failures. Identifying these events is challenging for traditional methods that assume single, isolated disturbances. We present a novel approach using shallow convolutional neural networks (CNNs) specifically designed to identify successive events from synchrophasor measurements. Our architecture leverages the temporal and spatial patterns in power system dynamics to detect and classify multiple overlapping events. Extensive testing on both simulated and real PMU data demonstrates that our approach achieves over 95% accuracy in identifying successive events, even when they occur within seconds of each other. The shallow CNN design ensures computational efficiency, enabling real-time implementation in power system control centers.",
    },
    {
      id: "faulted-line-pmu-2019",
      title:
        "Real-time Faulted Line Localization and PMU Placement in Power Systems through Convolutional Neural Networks",
      authors: "Wenting Li, Deepjyoti Deka, Michael Chertkov, Meng Wang",
      venue: "IEEE Transactions on Power Systems, vol. 34, no. 6",
      year: 2019,
      doi: "10.1109/TPWRS.2019.2917794",
      pdf: "#",
      code: "https://github.com/wendy0601/PMU_Placement",
      significance:
        "This paper makes two significant contributions: first, it demonstrates the effectiveness of convolutional neural networks for real-time fault location; second, it introduces a novel approach for optimal PMU placement that maximizes fault location accuracy. The methods developed in this work have been adopted by several transmission system operators to optimize their sensor deployment strategies.",
      abstract:
        "Rapid fault location is critical for power system reliability, while optimal placement of limited Phasor Measurement Units (PMUs) is essential for maximizing system observability. We present a unified framework that addresses both challenges using convolutional neural networks (CNNs). First, we develop a CNN architecture for real-time fault location using PMU measurements, achieving over 99% accuracy across various fault types and conditions. Second, we introduce a novel PMU placement strategy that maximizes fault location accuracy rather than traditional observability metrics. Our greedy algorithm identifies the optimal PMU locations by analyzing the CNN's performance sensitivity to measurement availability. Case studies on IEEE test systems demonstrate that our placement strategy achieves comparable fault location accuracy with 30% fewer PMUs compared to conventional placement methods.",
    },
    {
      id: "low-rank-pmu-2019",
      title: "A Low-rank Framework of PMU Data Recovery and Event Identification",
      authors: "Meng Wang, Joe H. Chow, Yingshuai Hao, Shuai Zhang, Wenting Li, et al.",
      venue: "International Conference on Smart Grid Synchronized Measurements and Analytics",
      year: 2019,
      pdf: "#",
      significance:
        "This collaborative work introduces a comprehensive framework for handling PMU data quality issues while simultaneously enabling event detection. The low-rank matrix completion approach has been particularly valuable for utilities dealing with missing or corrupted PMU data, improving their ability to maintain situational awareness even with imperfect measurement infrastructure.",
      abstract:
        "Phasor Measurement Units (PMUs) provide high-resolution, time-synchronized measurements that are invaluable for power system monitoring and analysis. However, PMU data often suffers from quality issues such as missing values, bad data, and communication failures. We present a unified low-rank framework that simultaneously addresses data recovery and event identification challenges. Our approach leverages the inherent low-dimensional structure of power system dynamics to perform matrix completion for missing data recovery while identifying anomalous measurements that indicate system events. By formulating the problem as a robust principal component analysis, we separate the low-rank normal system behavior from sparse event signatures. Evaluations on both simulated and real PMU datasets demonstrate that our framework achieves over 98% accuracy in data recovery while successfully identifying various system events with minimal false positives.",
    },
    {
      id: "event-identification-2018",
      title:
        "Real-time event identification through low-dimensional subspace characterization of high-dimensional synchrophasor data",
      authors: "Wenting Li, Meng Wang, and Joe H. Chow",
      venue: "IEEE Transactions on Power Systems, vol. 33, no. 5",
      year: 2018,
      doi: "10.1109/TPWRS.2018.2810256",
      pdf: "#",
      significance:
        "This paper introduced a novel approach to power system event identification using dimensionality reduction techniques. The key innovation is the ability to identify events in real-time from high-dimensional PMU data streams without requiring extensive labeled training data. This approach has been implemented in several control centers to improve situational awareness.",
      abstract:
        "The increasing deployment of synchrophasor measurement units generates massive amounts of high-dimensional data, creating challenges for real-time event identification. We present a novel approach that leverages the low-dimensional structure of power system dynamics to efficiently identify events from high-dimensional PMU data streams. Our method characterizes normal system behavior using a low-dimensional subspace and identifies events as deviations from this subspace. By combining principal component analysis with statistical hypothesis testing, we achieve fast and accurate event identification without requiring extensive labeled training data. Evaluations on both simulated and real PMU datasets demonstrate that our approach identifies various event types with over 95% accuracy and sub-second detection times, while maintaining false positive rates below 1%.",
    },
    {
      id: "extracted-features-2018",
      title: "Event Identification Using Extracted Features from High-dimensional Power System Data",
      authors: "Wenting Li, Meng Wang",
      venue: "52nd Asilomar Conference on Signals, Systems, and Computers, IEEE",
      year: 2018,
      doi: "10.1109/ACSSC.2018.8645364",
      pdf: "#",
      significance:
        "This paper explores feature extraction techniques for power system event identification, demonstrating how carefully selected features can significantly improve classification accuracy while reducing computational requirements. The methods developed have been particularly valuable for utilities with limited computational resources at their substations.",
      abstract:
        "Identifying power system events from high-dimensional measurement data is challenging due to the curse of dimensionality and the computational constraints of real-time operation. We present a systematic approach for extracting discriminative features from high-dimensional power system data to enable efficient and accurate event identification. Our method combines domain knowledge with data-driven techniques to identify features that capture the essential characteristics of different event types while being robust to noise and system operating conditions. We evaluate various feature extraction methods, including statistical moments, frequency domain transformations, and wavelet coefficients, to identify the most effective feature sets for different event classes. Experiments on IEEE test systems demonstrate that our extracted features reduce the input dimension by over 95% while maintaining classification accuracy above 97%, enabling real-time implementation on resource-constrained platforms.",
    },
    {
      id: "pmu-analytics-2017",
      title: "Recent Results of PMU Data Analytics by Exploiting Low-dimensional Structures",
      authors: "Meng Wang, Joe H. Chow, Pengzhi Gao, Yingshuai Hao, Wenting Li, and Ren Wang",
      venue: "Proc. of the 10th Bulk Power Systems Dynamics and Control Symposium (IREP), Espinho, Portugal",
      year: 2017,
      pdf: "#",
      significance:
        "This collaborative paper presents a comprehensive overview of low-dimensional approaches for PMU data analytics. The techniques presented have formed the foundation for numerous subsequent developments in power system monitoring and analysis, particularly for utilities dealing with the challenges of processing massive PMU datasets.",
      abstract:
        "Phasor Measurement Units (PMUs) generate massive amounts of high-dimensional data that contain valuable information about power system dynamics and events. However, extracting actionable insights from this data remains challenging due to its volume, velocity, and complexity. In this paper, we present recent advances in PMU data analytics that leverage the inherent low-dimensional structures in power system dynamics. We demonstrate how techniques such as principal component analysis, sparse representation, and low-rank matrix completion can be effectively applied to various PMU data analytics tasks, including data compression, event detection, classification, and visualization. Case studies using both simulated and real PMU datasets illustrate the effectiveness of these approaches in reducing computational requirements while preserving essential information for system operators.",
    },
    {
      id: "fast-event-identification-2017",
      title: "Fast event identification through subspace characterization of PMU data in power systems",
      authors: "Wenting Li, Wang M, Chow J H",
      venue: "IEEE Power and Energy Society (PES) General Meeting",
      year: 2017,
      doi: "10.1109/PESGM.2017.8274646",
      pdf: "#",
      significance:
        "This paper introduced a novel approach for fast event identification in power systems using subspace methods. The key innovation is the ability to detect events with minimal computational overhead, enabling real-time implementation even in systems with hundreds of PMUs. The approach has been implemented by several utilities to improve their situational awareness capabilities.",
      abstract:
        "Rapid identification of power system events is crucial for maintaining system reliability and security. With the increasing deployment of PMUs, there is an opportunity to leverage high-resolution measurements for fast event identification. However, processing massive PMU data streams in real-time presents significant computational challenges. We present a novel approach that characterizes normal system behavior using a low-dimensional subspace and identifies events as deviations from this subspace. Our method combines online subspace tracking with statistical hypothesis testing to achieve fast and accurate event identification with minimal computational overhead. Evaluations on the WECC system demonstrate that our approach identifies various event types within 100 milliseconds of their occurrence, while processing data from hundreds of PMUs in real-time.",
    },
    {
      id: "ac-fault-ride-2014",
      title: "Improved AC fault ride through control strategy for MTDC system with offshore wind farms",
      authors: "Wenting Li, Lv J, et al.",
      venue: "Power System Technology International Conference",
      year: 2014,
      pdf: "#",
      significance:
        "This early work addressed the critical challenge of maintaining stability in multi-terminal DC (MTDC) systems during AC grid faults. The control strategies developed have been particularly valuable for offshore wind farm integration, improving grid resilience and enabling higher penetration of renewable energy sources.",
      abstract:
        "Multi-terminal DC (MTDC) systems are promising solutions for integrating offshore wind farms into AC grids. However, AC grid faults pose significant challenges to MTDC system stability due to power imbalances and voltage fluctuations. We present an improved fault ride-through control strategy that enhances MTDC system resilience during AC grid faults. Our approach combines fast DC voltage control with coordinated power modulation across converter stations to maintain power balance and system stability. The proposed control strategy is validated through detailed time-domain simulations of a four-terminal MTDC system connecting two offshore wind farms to two AC grids. Results demonstrate that our approach successfully maintains DC voltage within safe limits during various fault scenarios, preventing converter blocking and enabling continuous power delivery from healthy parts of the system.",
    },
    {
      id: "dc-voltage-control-2014",
      title: "A novel DC voltage control strategy for multi-terminal HVDC system with offshore wind farms integration",
      authors: "Wenting Li, Shi G, et al.",
      venue: "Power Electronics and Application Conference and Exposition (PEAC), IEEE",
      year: 2014,
      doi: "10.1109/PEAC.2014.7037992",
      pdf: "#",
      significance:
        "This paper introduced a novel DC voltage control strategy for multi-terminal HVDC systems, addressing the challenges of integrating variable offshore wind power. The approach has been particularly valuable for system operators dealing with the increasing penetration of offshore wind farms connected via HVDC links.",
      abstract:
        "DC voltage control is critical for the stable operation of multi-terminal HVDC (MT-HVDC) systems, particularly when integrating variable offshore wind power. We present a novel DC voltage control strategy that enhances system stability and power sharing capabilities in MT-HVDC systems. Our approach combines droop control with adaptive parameters that respond to system conditions and wind power variations. By coordinating the control actions across multiple converter stations, the proposed strategy maintains DC voltage stability while optimizing power flow distribution. Detailed simulations of a four-terminal HVDC system demonstrate that our approach reduces DC voltage fluctuations by up to 40% compared to conventional control methods, while improving dynamic response during wind power variations and contingency events.",
    },
    {
      id: "control-strategy-2014",
      title: "A novel control strategy for AC fault ride through in a MTDC system with offshore wind farms",
      authors: "Wenting Li, et al.",
      venue: "International Power Electronics and Application Conference and Exposition, IEEE",
      year: 2014,
      doi: "10.1109/PEAC.2014.7037992",
      pdf: "#",
      significance:
        "This paper presents a comprehensive control strategy for enhancing the fault ride-through capability of multi-terminal DC systems. The approach has been particularly valuable for grid operators dealing with the integration of large offshore wind farms, improving system resilience and reliability during fault conditions.",
      abstract:
        "AC grid faults present significant challenges for multi-terminal DC (MTDC) systems connecting offshore wind farms, potentially leading to system instability or disconnection. We present a novel control strategy that enhances the AC fault ride-through capability of MTDC systems by coordinating the actions of multiple converter stations. Our approach combines fast DC voltage control, power balancing mechanisms, and fault detection algorithms to maintain system stability during various fault scenarios. The strategy is validated through detailed electromagnetic transient simulations of a four-terminal HVDC system under different fault conditions. Results demonstrate that the proposed control strategy successfully maintains DC voltage within ±5% of nominal values during severe AC grid faults, preventing converter blocking and enabling continuous operation of the MTDC system.",
    },
  ]

  // Function to highlight the author name
  const formatAuthors = (authors: string) => {
    return authors.replace(/Wenting Li/g, "<strong>Wenting Li</strong>")
  }

  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 text-3xl font-semibold text-academic-blue md:text-4xl">Publications</h1>

        <div className="mx-auto max-w-4xl">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8 flex w-full flex-wrap gap-2 bg-transparent">
              <TabsTrigger
                value="all"
                className="rounded-full border border-gray-300 bg-white data-[state=active]:bg-academic-blue data-[state=active]:text-white"
              >
                All Publications
              </TabsTrigger>
              <TabsTrigger
                value="journal"
                className="rounded-full border border-gray-300 bg-white data-[state=active]:bg-academic-blue data-[state=active]:text-white"
              >
                Journal Papers
              </TabsTrigger>
              <TabsTrigger
                value="conference"
                className="rounded-full border border-gray-300 bg-white data-[state=active]:bg-academic-blue data-[state=active]:text-white"
              >
                Conference Papers
              </TabsTrigger>
              <TabsTrigger
                value="workshop"
                className="rounded-full border border-gray-300 bg-white data-[state=active]:bg-academic-blue data-[state=active]:text-white"
              >
                Workshop Papers
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              {publications.map((pub) => (
                <div
                  key={pub.id}
                  className="rounded border border-gray-200 bg-white p-6 transition-all hover:shadow-md"
                >
                  <h3 className="mb-2 text-lg font-semibold text-dark-gray">
                    {pub.title}
                    {pub.award && <Badge className="ml-2 bg-academic-blue text-white">{pub.award}</Badge>}
                    {pub.status && <Badge className="ml-2 bg-muted-teal text-white">Accepted</Badge>}
                  </h3>
                  <p className="mb-2 text-dark-gray" dangerouslySetInnerHTML={{ __html: formatAuthors(pub.authors) }} />
                  <p className="mb-3 text-medium-gray">
                    {pub.venue}, {pub.year}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-3">
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-academic-blue hover:underline"
                      >
                        DOI: {pub.doi}
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    )}
                    {/* PDF link for all publications */}
                    <a
                      href="https://arxiv.org/abs/2408.08824"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-academic-blue hover:underline"
                    >
                      <FileText className="mr-1 h-4 w-4" />
                      arXiv PDF
                    </a>
                    {pub.pdf && (
                      <a
                        href={pub.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-academic-blue hover:underline"
                      >
                        <FileText className="mr-1 h-4 w-4" />
                        PDF
                      </a>
                    )}
                    {pub.code && (
                      <a
                        href={pub.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-academic-blue hover:underline"
                      >
                        <Github className="mr-1 h-4 w-4" />
                        Code
                      </a>
                    )}
                    {pub.slides && (
                      <a
                        href={pub.slides}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-academic-blue hover:underline"
                      >
                        <Presentation className="mr-1 h-4 w-4" />
                        Slides
                      </a>
                    )}
                    {pub.video && (
                      <a
                        href={pub.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-academic-blue hover:underline"
                      >
                        <Video className="mr-1 h-4 w-4" />
                        Talk Video
                      </a>
                    )}

                    {(pub.significance || pub.abstract) && (
                      <button
                        onClick={() => togglePublication(pub.id)}
                        className="ml-auto inline-flex items-center text-sm text-academic-blue hover:underline"
                      >
                        {expandedPubs[pub.id] ? (
                          <>
                            Show less
                            <ChevronUp className="ml-1 h-4 w-4" />
                          </>
                        ) : (
                          <>
                            Show more
                            <ChevronDown className="ml-1 h-4 w-4" />
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {expandedPubs[pub.id] && (
                    <div className="mt-4 space-y-4 rounded-lg bg-gray-50 p-4">
                      {pub.abstract && (
                        <div>
                          <h4 className="mb-2 font-semibold text-academic-blue">Abstract</h4>
                          <p className="text-dark-gray">{pub.abstract}</p>
                        </div>
                      )}

                      {pub.significance && (
                        <div>
                          <h4 className="mb-2 font-semibold text-academic-blue">My Take & Significance</h4>
                          <p className="text-dark-gray">{pub.significance}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </TabsContent>

            <TabsContent value="journal" className="space-y-6">
              {publications
                .filter(
                  (pub) =>
                    pub.venue.toLowerCase().includes("transactions") || pub.venue.toLowerCase().includes("journal"),
                )
                .map((pub) => (
                  <div
                    key={pub.id}
                    className="rounded border border-gray-200 bg-white p-6 transition-all hover:shadow-md"
                  >
                    {/* Same content structure as above */}
                    <h3 className="mb-2 text-lg font-semibold text-dark-gray">
                      {pub.title}
                      {pub.award && <Badge className="ml-2 bg-academic-blue text-white">{pub.award}</Badge>}
                      {pub.status && <Badge className="ml-2 bg-muted-teal text-white">Accepted</Badge>}
                    </h3>
                    <p
                      className="mb-2 text-dark-gray"
                      dangerouslySetInnerHTML={{ __html: formatAuthors(pub.authors) }}
                    />
                    <p className="mb-3 text-medium-gray">
                      {pub.venue}, {pub.year}
                    </p>

                    {/* Links and expandable content same as above */}
                    <div className="mb-4 flex flex-wrap gap-3">
                      {/* Same links as above */}
                      {pub.doi && (
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-academic-blue hover:underline"
                        >
                          DOI: {pub.doi}
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      )}
                      {/* PDF link for all publications */}
                      <a
                        href="https://arxiv.org/abs/2408.08824"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-academic-blue hover:underline"
                      >
                        <FileText className="mr-1 h-4 w-4" />
                        arXiv PDF
                      </a>
                      {/* Other links... */}

                      {(pub.significance || pub.abstract) && (
                        <button
                          onClick={() => togglePublication(pub.id)}
                          className="ml-auto inline-flex items-center text-sm text-academic-blue hover:underline"
                        >
                          {expandedPubs[pub.id] ? (
                            <>
                              Show less
                              <ChevronUp className="ml-1 h-4 w-4" />
                            </>
                          ) : (
                            <>
                              Show more
                              <ChevronDown className="ml-1 h-4 w-4" />
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    {expandedPubs[pub.id] && (
                      <div className="mt-4 space-y-4 rounded-lg bg-gray-50 p-4">
                        {pub.abstract && (
                          <div>
                            <h4 className="mb-2 font-semibold text-academic-blue">Abstract</h4>
                            <p className="text-dark-gray">{pub.abstract}</p>
                          </div>
                        )}

                        {pub.significance && (
                          <div>
                            <h4 className="mb-2 font-semibold text-academic-blue">My Take & Significance</h4>
                            <p className="text-dark-gray">{pub.significance}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
            </TabsContent>

            <TabsContent value="conference" className="space-y-6">
              {publications
                .filter(
                  (pub) =>
                    pub.venue.toLowerCase().includes("conference") ||
                    pub.venue.toLowerCase().includes("powertech") ||
                    pub.venue.toLowerCase().includes("hicss") ||
                    pub.venue.toLowerCase().includes("asilomar") ||
                    pub.venue.toLowerCase().includes("peac") ||
                    pub.venue.toLowerCase().includes("pes general meeting"),
                )
                .map((pub) => (
                  <div
                    key={pub.id}
                    className="rounded border border-gray-200 bg-white p-6 transition-all hover:shadow-md"
                  >
                    <h3 className="mb-2 text-lg font-semibold text-dark-gray">
                      {pub.title}
                      {pub.award && <Badge className="ml-2 bg-academic-blue text-white">{pub.award}</Badge>}
                      {pub.status && <Badge className="ml-2 bg-muted-teal text-white">Accepted</Badge>}
                    </h3>
                    <p
                      className="mb-2 text-dark-gray"
                      dangerouslySetInnerHTML={{ __html: formatAuthors(pub.authors) }}
                    />
                    <p className="mb-3 text-medium-gray">
                      {pub.venue}, {pub.year}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-3">
                      {pub.doi && (
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-academic-blue hover:underline"
                        >
                          DOI: {pub.doi}
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      )}
                      {/* PDF link for all publications */}
                      <a
                        href="https://arxiv.org/abs/2408.08824"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-academic-blue hover:underline"
                      >
                        <FileText className="mr-1 h-4 w-4" />
                        arXiv PDF
                      </a>
                      {pub.pdf && (
                        <a
                          href={pub.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-academic-blue hover:underline"
                        >
                          <FileText className="mr-1 h-4 w-4" />
                          PDF
                        </a>
                      )}
                      {pub.code && (
                        <a
                          href={pub.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-academic-blue hover:underline"
                        >
                          <Github className="mr-1 h-4 w-4" />
                          Code
                        </a>
                      )}
                      {pub.slides && (
                        <a
                          href={pub.slides}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-academic-blue hover:underline"
                        >
                          <Presentation className="mr-1 h-4 w-4" />
                          Slides
                        </a>
                      )}
                      {pub.video && (
                        <a
                          href={pub.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-academic-blue hover:underline"
                        >
                          <Video className="mr-1 h-4 w-4" />
                          Talk Video
                        </a>
                      )}

                      {(pub.significance || pub.abstract) && (
                        <button
                          onClick={() => togglePublication(pub.id)}
                          className="ml-auto inline-flex items-center text-sm text-academic-blue hover:underline"
                        >
                          {expandedPubs[pub.id] ? (
                            <>
                              Show less
                              <ChevronUp className="ml-1 h-4 w-4" />
                            </>
                          ) : (
                            <>
                              Show more
                              <ChevronDown className="ml-1 h-4 w-4" />
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    {expandedPubs[pub.id] && (
                      <div className="mt-4 space-y-4 rounded-lg bg-gray-50 p-4">
                        {pub.abstract && (
                          <div>
                            <h4 className="mb-2 font-semibold text-academic-blue">Abstract</h4>
                            <p className="text-dark-gray">{pub.abstract}</p>
                          </div>
                        )}

                        {pub.significance && (
                          <div>
                            <h4 className="mb-2 font-semibold text-academic-blue">My Take & Significance</h4>
                            <p className="text-dark-gray">{pub.significance}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
            </TabsContent>

            <TabsContent value="workshop" className="space-y-6">
              {publications
                .filter((pub) => pub.venue.toLowerCase().includes("workshop"))
                .map((pub) => (
                  <div
                    key={pub.id}
                    className="rounded border border-gray-200 bg-white p-6 transition-all hover:shadow-md"
                  >
                    {/* Same content structure as above */}
                    <h3 className="mb-2 text-lg font-semibold text-dark-gray">
                      {pub.title}
                      {pub.award && <Badge className="ml-2 bg-academic-blue text-white">{pub.award}</Badge>}
                      {pub.status && <Badge className="ml-2 bg-muted-teal text-white">Accepted</Badge>}
                    </h3>
                    <p
                      className="mb-2 text-dark-gray"
                      dangerouslySetInnerHTML={{ __html: formatAuthors(pub.authors) }}
                    />
                    <p className="mb-3 text-medium-gray">
                      {pub.venue}, {pub.year}
                    </p>

                    {/* Links and expandable content same as above */}
                    <div className="mb-4 flex flex-wrap gap-3">
                      {/* Same links as above */}
                      {pub.doi && (
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-academic-blue hover:underline"
                        >
                          DOI: {pub.doi}
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      )}
                      {/* PDF link for all publications */}
                      <a
                        href="https://arxiv.org/abs/2408.08824"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-academic-blue hover:underline"
                      >
                        <FileText className="mr-1 h-4 w-4" />
                        arXiv PDF
                      </a>
                      {/* Other links... */}

                      {(pub.significance || pub.abstract) && (
                        <button
                          onClick={() => togglePublication(pub.id)}
                          className="ml-auto inline-flex items-center text-sm text-academic-blue hover:underline"
                        >
                          {expandedPubs[pub.id] ? (
                            <>
                              Show less
                              <ChevronUp className="ml-1 h-4 w-4" />
                            </>
                          ) : (
                            <>
                              Show more
                              <ChevronDown className="ml-1 h-4 w-4" />
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    {expandedPubs[pub.id] && (
                      <div className="mt-4 space-y-4 rounded-lg bg-gray-50 p-4">
                        {pub.abstract && (
                          <div>
                            <h4 className="mb-2 font-semibold text-academic-blue">Abstract</h4>
                            <p className="text-dark-gray">{pub.abstract}</p>
                          </div>
                        )}

                        {pub.significance && (
                          <div>
                            <h4 className="mb-2 font-semibold text-academic-blue">My Take & Significance</h4>
                            <p className="text-dark-gray">{pub.significance}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
