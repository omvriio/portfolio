// Skills and expertise data

export const expertiseDomains = [
  {
    id: 1,
    title: "Computer Vision",
    skills: [
      "Object Detection & Tracking",
      "Pose Estimation (HRNet)",
      "Semantic Segmentation",
      "Visual SLAM",
      "Real-time Processing (<50ms)",
      "3D Point Cloud Processing"
    ],
    tools: ["OpenCV", "YOLO", "PyTorch", "TensorFlow", "PCL"]
  },
  {
    id: 2,
    title: "Sensor Fusion",
    skills: [
      "Multi-modal Data Integration",
      "LIDAR + Camera Fusion",
      "WiFi-LIDAR Alignment (73.8% IoU)",
      "IoT Sensor Networks",
      "Spatiotemporal Modeling",
      "Kalman Filter Implementation"
    ],
    tools: ["ROS2", "PCL", "Kalman Filters", "GAT", "NumPy", "SciPy"]
  },
  {
    id: 3,
    title: "Deep Learning",
    skills: [
      "CNN Architectures",
      "Graph Attention Networks (GAT)",
      "Transfer Learning",
      "Edge Optimization",
      "Model Deployment",
      "Neural Architecture Search"
    ],
    tools: ["PyTorch", "TensorFlow", "ONNX", "TensorRT", "Keras"]
  },
  {
    id: 4,
    title: "GenAI & LLMs",
    skills: [
      "Multi-agent Systems",
      "LangGraph Frameworks",
      "RAG (Retrieval Augmented Generation)",
      "Small Language Models (<200ms)",
      "Prompt Engineering",
      "Fine-tuning & Adaptation"
    ],
    tools: ["LangChain", "Transformers", "Llama", "Mistral", "LangGraph", "FAISS"]
  },
  {
    id: 5,
    title: "Robotics & Embedded AI",
    skills: [
      "Robot Operating System (ROS2)",
      "Embedded Control Systems",
      "SLAM Algorithms",
      "Motion Planning",
      "Real-time Constraints",
      "Hardware Integration"
    ],
    tools: ["ROS2", "C++", "Arduino", "ESP32", "LoRa", "BLE"]
  }
];

export const techStack = {
  languages: [
    { name: "Python", level: "Expert", proficiency: 95 },
    { name: "C++", level: "Advanced", proficiency: 85 },
    { name: "JavaScript/TypeScript", level: "Proficient", proficiency: 80 },
    { name: "MATLAB", level: "Proficient", proficiency: 75 }
  ],
  
  frameworks: [
    { name: "PyTorch", level: "Expert", proficiency: 95 },
    { name: "ROS2", level: "Advanced", proficiency: 90 },
    { name: "TensorFlow", level: "Advanced", proficiency: 85 },
    { name: "LangChain", level: "Advanced", proficiency: 85 },
    { name: "React", level: "Proficient", proficiency: 80 }
  ],
  
  tools: [
    { name: "Linux", level: "Expert", proficiency: 95 },
    { name: "Docker", level: "Advanced", proficiency: 90 },
    { name: "Git", level: "Expert", proficiency: 95 },
    { name: "OpenCV", level: "Expert", proficiency: 95 },
    { name: "CUDA/GPU Computing", level: "Advanced", proficiency: 85 },
    { name: "AWS/Cloud", level: "Proficient", proficiency: 75 }
  ],
  
  specializations: [
    { name: "Computer Vision", proficiency: 95 },
    { name: "Robotics", proficiency: 90 },
    { name: "Deep Learning", proficiency: 95 },
    { name: "Sensor Fusion", proficiency: 90 },
    { name: "Edge AI", proficiency: 85 },
    { name: "GenAI/LLMs", proficiency: 85 },
    { name: "Embedded Systems", proficiency: 80 }
  ]
};
