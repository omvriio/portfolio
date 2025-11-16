// Projects data structure
// This file contains all project information for the portfolio

export const projects = [
  {
    id: 1,
    title: "Multi-Floor Robot Perception & Anomaly Detection",
    subtitle: "Master's Thesis at Orange Innovation",
    category: ["Computer Vision", "Robotics", "Deep Learning"],
    thumbnail: "/projects/orange-robot.jpg",
    description: "Spatial perception system for domestic service robots using Graph Attention Networks, WiFi-LIDAR fusion, and edge-optimized language models for contextualized alerts.",
    
    impact: {
      icon: "👴",
      text: "Helps elderly stay independent at home safely"
    },
    
    metrics: [
      { label: "Map Alignment", value: "73.8% IoU" },
      { label: "Anomaly Detection", value: "+11% F1-score" },
      { label: "Alert Generation", value: "<200ms" }
    ],
    
    technologies: [
      "Python", "C++", "ROS2", "PyTorch", "GAT", 
      "LIDAR", "WiFi", "IoT", "Vue.js", "Edge AI"
    ],
    
    highlights: [
      "Novel multi-floor map alignment algorithm",
      "Real-time sensor fusion framework",
      "Production-ready embedded deployment"
    ],
    
    links: {
      github: null, // NDA
      demo: null,
      thesis: null // Add link when available
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
    description: "Bio-inspired underwater robot replicating seal locomotion for ocean current mapping, featuring three-tier embedded control and multi-sensor fusion.",
    
    impact: {
      icon: "🌊",
      text: "Non-invasive ocean current monitoring"
    },
    
    technologies: [
      "C++", "ESP32", "Arduino", "WiFi LoRa32", 
      "Sensor Fusion", "IMU", "Embedded Control"
    ],
    
    highlights: [
      "Three-tier embedded architecture",
      "Multi-sensor integration (temp, tilt, IMU)",
      "ESP-NOW wireless communication"
    ],
    
    links: {
      github: null, // Add GitHub link
      demo: null, // Add demo video link
      paper: null
    },
    
    stage: "Prototype",
    timeline: "4 months",
    featured: true
  },
  
  // Add more projects here...
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
