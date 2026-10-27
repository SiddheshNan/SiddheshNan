export const personalInfo = {
  name: "Siddhesh Nandurkar",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/Pune,+Maharashtra/",
  email: "sid@siddhesh.me",
  github: "https://github.com/SiddheshNan",
  linkedin: "https://www.linkedin.com/in/siddheshnan/",
  bio: `
  Senior engineer at Intelimek Systems, building the web and tooling layer for physics-based digital twin and computer vision products used in pharma, steel and medical-device manufacturing. I take work end to end: architecture, APIs, UI and deployment.
  `,
};

export const workExperience = [
  {
    company: "Intelimek Systems, Pune",
    link: "https://intelimek.com",
    location: "Hybrid",
    period: "Aug 2023 - Present",
    roles: [
      {
        position: "Senior Engineer",
        period: "Jan 2025 - Present",
        stack: [
          "Python",
          "Flask",
          "FastAPI",
          "React",
          "Node.js",
          "MongoDB",
          "RabbitMQ",
          "Docker",
          "Kubernetes",
          "AWS",
          "Azure",
          // "LangChain",
          "OpenCV",
          "Three.js",
        ],
        achievements: [
          "Owned the architecture and tech stack decisions for the team's web applications, and the shared deployment and CI/CD tooling they run on.",
          "Owned end-to-end delivery of multiple scientific computing applications, from system architecture and REST API design through to the UI.",
          "Architected multi-service cloud-native applications that coordinate distributed backend services over RabbitMQ, with threaded workers for fault isolation across high-throughput industrial workloads.",
          // "Built agentic AI assistants on LangChain and local LLMs for natural-language navigation of industrial applications, running fully on-premise in air-gapped factories where no data leaves the customer's site.",
         "Integrated a particle-simulation solver into a web platform, building a lossless, compressed frame-streaming pipeline to a WebGL viewer with CDN edge-cached delivery for smooth real-time playback of large 3D simulation results.",
          "Built a web app for a physics-informed neural network (PINN) digital twin, where users can train, deploy and visualize the 3D predictions in the browser.",

         "Shipped a computer vision system for auto-injector quality testing, integrating high-speed cameras, lighting and PLC controls, measuring sub-millimeter needle penetration and drug flow timing.",
          "Managed Azure cloud and customer on-premise deployments across multiple applications: CI/CD pipelines, Docker/Kubernetes orchestration and monitoring.",
        ],
      },
      {
        position: "Software Engineer",
        period: "Aug 2023 - Dec 2024",
        stack: [
          "Python",
          "JavaScript",
          "React",
          "Node.js",
          "OpenCV",
          "Docker",
          "Linux",
        ],
        achievements: [
          "Designed and architected a computer vision product across monolithic and microservice boundaries, cutting processing time by 40%.",
          "Built and deployed cloud-native web applications, along with a few Windows desktop applications.",
          "Built internal tools for debugging, testing and deployment pipelines.",
        ],
      },
    ],
  },
  {
    company: "Aim Technologies",
    link: "https://aimtechs.co.in",
    location: "Hybrid",
    period: "Oct 2019 - Jul 2023",
    roles: [
      {
        position: "Freelance Software Developer",
        period: "Oct 2019 - Jul 2023",
        stack: [
          "Python",
          "JavaScript",
          "React",
          "React Native",
          "Node.js",
          "Flask",
          "C++",
          "Java",
          "AWS",
          "Linux",
        ],
        achievements: [
          "Built full-stack web applications in Python/Flask, Node.js and React for clients across IoT, computer vision and web dashboard projects.",
          "Wired IoT devices and computer vision pipelines into real-time web dashboards over REST and WebSockets.",
          "Built and shipped React Native Android applications alongside the web stack.",
          "Deployed production applications on AWS using Docker and Linux servers.",
        ],
      },
    ],
  },
];

export const education = [
  {
    institution: "Sant Gadge Baba Amravati University",
    location: "Amravati, Maharashtra",
    degree: "Engineering in Information Technology",
    period: "2019 - 2023",
    cgpa: "8.93 / 10",
    achievements: [
      "Represented the college in multiple national and university hackathons and won.",
      "Organized various technical workshops and events.",
      "Core team member in college gathering - contributed to organizing cultural events.",
      "Designed and developed the college tech fest website for event information and participant registration.",
    ],
  },
];
export const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "TypeScript", "JavaScript", "Go", "C++"],
  },
  {
    category: "Backend & Data",
    items: [
      "FastAPI",
      "Flask",
      "Node.js",
      "gRPC",
      "RabbitMQ",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
  },
  {
    category: "Frontend",
    items: ["React", "React Native", "Tailwind CSS", "Material UI", "Three.js"],
  },
  {
    category: "AI",
    items: ["PyTorch", "LangChain", "Local LLMs (Ollama, vLLM)", "OpenCV"],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Nginx",
      "Proxmox",
      "Linux",
      "CI/CD",
    ],
  },
];

export const projects = [
  {
    title: "ThingESP - A WhatsApp Automation Platform",
    link: "https://thingesp.siddhesh.me",
    repo: "https://github.com/SiddheshNan/ThingESP-Arduino-Library",
    tags: ["IoT", "MQTT", "AWS", "Go", "Docker"],
    description: [
      "Live IoT platform with ~10K users worldwide that lets people automate and control their devices over WhatsApp.",
      "Users can integrate their devices using simple APIs or client libraries, with support currently available for Raspberry Pi and Espressif boards (ESP32, ESP8266).",
      "Designed and deployed this scalable application on the AWS cloud, ensuring high availability and performance.",
      "Technology Stack: Go, React, MongoDB, Microservices, MQTT Protocol, and Docker",
    ],
  },
  {
    title: "Moonshed - Self-Hosted PaaS",
    link: "https://moonshed.siddhesh.me",
    repo: "https://github.com/SiddheshNan/moonshed",
    tags: ["Go", "React", "Docker", "PaaS"],
    description: [
      "A self-hostable lightweight PaaS that lets users deploy their apps from GitHub, CI, or an API.",
      "It builds the app, runs tests, and deploys it.",
      "Automatic HTTPS, Caddy reverse proxy built in, health checks, one-click rollback to previous version.",
      "Logs, resource graphs, uptime checks, scheduled backups for every app.",
      "Apps can be run as Docker containers or just native supervised processes.",
      "Technology Stack: Go, React, Docker, GitHub Actions.",
    ],
  },
  {
    title: "YT-archiver - YouTube Archiving Platform",
    link: "https://github.com/SiddheshNan/yt-archiver",
    repo: "https://github.com/SiddheshNan/yt-archiver",
    tags: ["Python", "React", "Docker", "Chrome Extension"],
    description: [
      "Self-hostable platform that archives YouTube videos into a personal library, with a web UI and a Chrome extension to save videos in one click.",
      "Python backend, React frontend and a browser extension, packaged as Docker images.",
      "Technology Stack: Python, React, JavaScript, ffmpeg, Docker.",
    ],
  },
  {
    title: "AlertZen - Multi-Channel Notification Gateway",
    link: "https://github.com/SiddheshNan/alertzen",
    repo: "https://github.com/SiddheshNan/alertzen",
    tags: ["In Development", "WhatsApp", "SMS", "Telegram"],
    description: [
      "One API for apps to send notifications over WhatsApp (QR-linked or official Meta API), SMS, Telegram and push notifications.",
    ],
  },
];

export const awards = [
  {
    name: "Aaviskar 2019",
    issuer: "Sant Gadge Baba Amravati University",
    date: "Dec 2019",
    type: "University",
    position: "First Place",
  },
  {
    name: "Vidyotan 2019",
    issuer: "Sipna COET, Amravati",
    date: "Feb 2020",
    type: "National",
    position: "First Place",
  },
  {
    name: "Ecothon 2022",
    issuer: "Sipna COET, Amravati",
    date: "Apr 2022",
    type: "National",
    position: "First Runner-up",
  },
  {
    name: "Aaviskar 2022",
    issuer: "Sant Gadge Baba Amravati University",
    date: "Dec 2022",
    type: "District",
    position: "First Runner-up",
  },
  {
    name: "SIH 2022",
    issuer: "Smart India Hackathon",
    date: "Mar 2022",
    type: "National",
    position: "Selected",
  },

  {
    name: "Mindspark 2019",
    issuer: "COEP, Pune",
    date: "Sep 2019",
    type: "District",
    position: "Selected",
  },
];
