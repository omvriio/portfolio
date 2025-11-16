// Skills and expertise data

export const expertiseDomains = [
  {
    id: 1,
    icon: "👁️",
    title: "Computer Vision",
    skills: [
      "Object Detection & Tracking",
      "Pose Estimation (HRNet)",
      "Semantic Segmentation",
      "Visual SLAM",
      "Real-time Processing (<50ms)"
    ],
    tools: ["OpenCV", "YOLO", "PyTorch", "TensorFlow"]
  },
  {
    id: 2,
    icon: "🔄",
    title: "Sensor Fusion",
    skills: [
      "Multi-modal Integration",
      "LIDAR + Camera Fusion",
      "WiFi-LIDAR Alignment (73.8% IoU)",
      "IoT Sensor Networks",
      "Spatiotemporal Modeling"
    ],
    tools: ["ROS2", "PCL", "Kalman Filters", "GAT"]
  },
  {
    id: 3,
    icon: "🧠",
    title: "Deep Learning",
    skills: [
      "CNN Architectures",
      "Graph Attention Networks (GAT)",
      "Transfer Learning",
      "Edge Optimization",
      "Model Deployment"
    ],
    tools: ["PyTorch", "TensorFlow", "ONNX", "TensorRT"]
  },
  {
    id: 4,
    icon: "🤖",
    title: "GenAI & LLMs",
    skills: [
      "Multi-agent Systems",
      "LangGraph Frameworks",
      "RAG Architectures",
      "Small Language Models (<200ms)",
      "Contextual Alert Generation"
    ],
    tools: ["LangChain", "Transformers", "Llama", "Mistral"]
  }
];

export const techStack = {
  languages: [
    { name: "Python", level: "Expert", icon: "🐍", proficiency: 95 },
    { name: "C++", level: "Advanced", icon: "⚙️", proficiency: 85 },
    { name: "JavaScript", level: "Proficient", icon: "📜", proficiency: 80 }
  ],
  
  frameworks: [
    { name: "PyTorch", level: "Expert", proficiency: 90 },
    { name: "ROS2", level: "Advanced", proficiency: 85 },
    { name: "TensorFlow", level: "Advanced", proficiency: 80 },
    { name: "React", level: "Proficient", proficiency: 75 }
  ],
  
  tools: [
    { name: "Linux", level: "Expert", proficiency: 90 },
    { name: "Docker", level: "Advanced", proficiency: 85 },
    { name: "Git", level: "Expert", proficiency: 95 },
    { name: "OpenCV", level: "Expert", proficiency: 90 }
  ],
  
  specializations: [
    { name: "Computer Vision", proficiency: 95 },
    { name: "Robotics", proficiency: 90 },
    { name: "Deep Learning", proficiency: 90 },
    { name: "Sensor Fusion", proficiency: 85 },
    { name: "Edge AI", proficiency: 80 },
    { name: "GenAI/LLMs", proficiency: 75 }
  ]
};
