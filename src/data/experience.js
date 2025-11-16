// Professional experience data

export const experiences = [
  {
    id: 1,
    company: "Orange Innovation",
    role: "AI Robotics Research Engineer",
    period: "Apr 2025 - Sept 2025",
    location: "Lannion, France",
    type: "Full-time",
    logo: "/companies/orange.png",
    
    achievements: [
      {
        text: "Novel multi-floor map alignment algorithm",
        metric: "73.8% IoU",
        impact: "Enables robots to navigate multi-story homes"
      },
      {
        text: "Graph Attention Network for anomaly detection",
        metric: "+11% F1-score",
        impact: "Real-time home safety monitoring"
      },
      {
        text: "Edge-optimized Small Language Model",
        metric: "<200ms inference",
        impact: "Contextualized alerts on embedded hardware"
      }
    ],
    
    technologies: ["Python", "C++", "ROS2", "PyTorch", "GAT", "Vue.js"],
    highlights: "Sensor fusion (WiFi + LIDAR + IoT) for domestic robots",
    current: false
  },
  
  {
    id: 2,
    company: "Capgemini Engineering",
    role: "Research Intern - GenAI",
    period: "June 2024 - Aug 2024",
    location: "Casablanca, Morocco",
    type: "Internship",
    logo: "/companies/capgemini.png",
    
    achievements: [
      {
        text: "Multi-agent AI system for requirement analysis",
        impact: "Automated daily engineering workflows"
      },
      {
        text: "LangGraph framework with human-AI collaboration",
        impact: "Production-ready browser extension"
      }
    ],
    
    technologies: ["Python", "LangGraph", "LLMs", "Docker", "REST APIs"],
    current: false
  },
  
  {
    id: 3,
    company: "OCP Group",
    role: "Computer Vision Research Intern",
    period: "July 2023 - Aug 2023",
    location: "Morocco",
    type: "Internship",
    logo: "/companies/ocp.png",
    
    achievements: [
      {
        text: "HRNet-based pose estimation for ergonomics",
        impact: "Real-time worker safety monitoring"
      }
    ],
    
    technologies: ["Python", "C++", "OpenCV", "PyTorch", "HRNet"],
    current: false
  }
];
