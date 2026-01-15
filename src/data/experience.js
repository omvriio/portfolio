// Professional experience data

export const experiences = [
  {
    id: 1,
    company: "Orange Innovation labs",
    role: "R&D Engineer Intern (Master's Thesis)",
    period: "Apr - Oct 2025",
    location: "Lannion, France",
    type: "Internship",
    logo: "/companies/orange.png",
    
    achievements: [
      {
        text: "Architected ROS2 perception pipeline integrating Valetudo API with RoboRock robots",
        impact: "Multi-floor localization and autonomous navigation"
      },
      {
        text: "Multi-floor map alignment algorithm",
        metric: "73.8% IoU",
        impact: "Morphological preprocessing for robust spatial mapping"
      },
      {
        text: "Graph Attention Networks (GAT) for anomaly detection",
        metric: "+11% F1-Score",
        impact: "Spatiotemporal anomaly detection for safety monitoring"
      },
      {
        text: "Multimodal IoT sensor fusion",
        impact: "LiDAR, WiFi RSSI, environmental sensors for context-aware alerts"
      },
      {
        text: "Vue.js 3 interface integration",
        impact: "Seamless AI perception module deployment"
      }
    ],
    
    technologies: ["Python", "C++", "ROS2", "PyTorch", "GAT", "Vue.js 3", "LIDAR", "WiFi RSSI", "IoT", "Valetudo API"],
    highlights: "Complete perception pipeline for domestic service robots with multi-modal sensor fusion",
    current: false
  },
  
  {
    id: 2,
    company: "Capgemini Engineering",
    role: "R&D Engineer Intern",
    period: "Jun - Aug 2024",
    location: "Casablanca, Morocco",
    type: "Internship",
    logo: "/companies/capgemini.png",
    
    achievements: [
      {
        text: "LangGraph multi-agent framework orchestration",
        impact: "Specialized tools for automated decision-making"
      },
      {
        text: "Custom ETL pipeline with multi-format parsers",
        impact: "PDF, DOCX, XLSX, PPTX parsing and ChromaDB vector database integration"
      },
      {
        text: "Chrome/Edge extension POC deployment",
        metric: "60% efficiency improvement",
        impact: "Production-ready browser extension with RAG"
      }
    ],
    
    technologies: ["LangGraph", "LangChain", "RAG", "Llama 3.1 405B", "Mistral Nemo 12B", "NVIDIA NIM API", "ChromaDB", "Python"],
    highlights: "Complete POC of intelligent document processing system with LLM integration",
    current: false
  },
  
  {
    id: 3,
    company: "STELLANTIS & Centrale Lyon",
    role: "Research Intern",
    period: "Jan - Mar 2025",
    location: "Lyon, France",
    type: "Internship",
    logo: "/companies/stellantis.png",
    
    achievements: [
      {
        text: "Bibliometric analysis of ML applications to NVH models",
        impact: "Identified opportunities for electric vehicle simulation optimization"
      },
      {
        text: "Patent analysis and data-driven approaches",
        impact: "Replacing costly empirical simulations with ML models"
      }
    ],
    
    technologies: ["Python", "Machine Learning", "NVH Simulation", "Data Analysis"],
    highlights: "Research on ML applications for automotive NVH (Noise, Vibration, Harshness) optimization",
    current: false
  },
  
  {
    id: 4,
    company: "3D Smart Factory",
    role: "Deep Learning Research Intern",
    period: "Jun - Sept 2024",
    location: "Remote",
    type: "Internship",
    logo: "/companies/3dsf.png",
    
    achievements: [
      {
        text: "Kolmogorov Arnold Networks (KAN) for medical imaging",
        impact: "Adapted novel architecture for 3D CT-scan segmentation"
      },
      {
        text: "Comparative analysis against baseline CNN architectures",
        impact: "Benchmarking for medical imaging applications"
      }
    ],
    
    technologies: ["PyTorch", "KAN", "CNN", "Medical Imaging", "3D Segmentation", "Python"],
    highlights: "Novel deep learning approach exploration for industrial medical imaging",
    current: false
  },
  
  {
    id: 5,
    company: "OCP Group",
    role: "Industrial Engineering & Computer Vision Intern",
    period: "Jun - Jul 2023",
    location: "Khouribga, Morocco",
    type: "Internship",
    logo: "/companies/ocp.png",
    
    achievements: [
      {
        text: "Real-time human pose estimation (HRNet)",
        impact: "Ergonomics and worker safety monitoring system"
      },
      {
        text: "CNC equipment supervision architecture",
        impact: "Equipment monitoring and automated maintenance digitalization"
      },
      {
        text: "GMAO process optimization analysis",
        impact: "Identified automation opportunities in maintenance workflows"
      }
    ],
    
    technologies: ["Python", "HRNet", "OpenCV", "Computer Vision", "Industrial Systems", "GMAO"],
    highlights: "Industrial safety monitoring and CNC equipment digitalization",
    current: false
  }
];
