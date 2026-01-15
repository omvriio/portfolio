// Projects data structure
// Complete list of all projects from CV

export const projects = [
  {
    id: 1,
    title: "Multi-Floor Robot Perception & Anomaly Detection",
    subtitle: "Master's Thesis at Orange Innovation",
    category: ["Computer Vision", "Robotics", "Deep Learning"],
    thumbnail: "/projects/orange-robot.jpg",
    description: "Advanced spatial perception system for domestic service robots combining Graph Attention Networks for anomaly detection, WiFi-LIDAR multi-modal fusion for spatial mapping, and edge-optimized language models for real-time contextualized alerts. Deployed to production environments.",
    
    impact: {
      text: "Enables elderly care robots to detect home safety hazards in real-time"
    },
    
    metrics: [
      { label: "Map Alignment IoU", value: "73.8%" },
      { label: "Anomaly Detection F1", value: "+11%" },
      { label: "Alert Inference Time", value: "<200ms" }
    ],
    
    technologies: [
      "Python", "C++", "ROS2", "PyTorch", "GAT", 
      "LIDAR", "WiFi", "IoT", "Vue.js", "Edge AI", "Point Cloud Library"
    ],
    
    highlights: [
      "Novel multi-floor WiFi-LIDAR alignment algorithm",
      "Real-time sensor fusion framework with Kalman filtering",
      "Production-ready embedded deployment on edge hardware"
    ],
    
    links: {
      github: null,
      demo: null,
      thesis: null
    },
    
    stage: "Industrial Deployment",
    timeline: "6 months",
    featured: true
  },
  
  {
    id: 2,
    title: "Bio-Mimic Seal Robot",
    subtitle: "Ending Seal Over-Tagging for Climate Research",
    category: ["Robotics", "Embedded Systems", "IoT"],
    thumbnail: "/projects/seal-robot.jpg",
    description: "Bio-inspired underwater robot replicating seal locomotion patterns for non-invasive ocean current mapping and environmental monitoring. Features three-tier embedded control architecture with multi-sensor integration for marine data collection.",
    
    impact: {
      text: "Non-invasive ocean current monitoring reduces marine animal interference"
    },
    
    technologies: [
      "C++", "ESP32", "Arduino", "WiFi LoRa32", 
      "Sensor Fusion", "IMU", "Embedded Control", "BLE"
    ],
    
    highlights: [
      "Three-tier embedded architecture (MCU, WiFi, Communication)",
      "Multi-sensor integration (temperature, tilt, IMU, pressure)",
      "ESP-NOW wireless communication protocol"
    ],
    
    links: {
      github: null,
      demo: null,
      paper: null
    },
    
    stage: "Prototype",
    timeline: "4 months",
    featured: true
  },
  
  {
    id: 3,
    title: "LLM-Powered Requirement Analysis System",
    subtitle: "Capgemini Engineering Innovation",
    category: ["GenAI", "Deep Learning"],
    thumbnail: "/projects/genai-system.jpg",
    description: "Enterprise-grade multi-agent AI system for automated software requirement analysis using large language models and graph-based reasoning. Features human-in-the-loop collaboration and RAG for context-aware processing.",
    
    impact: {
    impact: {
      text: "Automates 70% of requirement engineering workflows"
    },
    technologies: [
      "Python", "LangGraph", "LLMs", "Docker", "REST APIs",
      "LangChain", "RAG", "Transformers"
    ],
    
    highlights: [
      "Multi-agent orchestration for complex reasoning",
      "RAG pipeline for document context integration",
      "Production-ready Docker containerization"
    ],
    
    links: {
      github: null,
      demo: null,
      paper: null
    },
    
    stage: "Production",
    timeline: "3 months",
    featured: true
  }}
];

export const projectCategories = [
  "All",
  "Computer Vision",
  "Robotics",
  "Deep Learning",
  "GenAI",
  "Embedded Systems",
  "IoT"
];
