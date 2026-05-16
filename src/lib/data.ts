export const personalInfo = {
  name: "Siddhesh Nandurkar",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/Pune,+Maharashtra/",
  email: "sid@siddhesh.me",
  github: "https://github.com/SiddheshNan",
  linkedin: "https://www.linkedin.com/in/siddheshnan/",
  bio: `
  Full-stack and AI engineer with ~2 years of experience shipping production web applications and agentic AI tools for industrial software. Own work end-to-end — system architecture, UI, and deployment — across React, Python, and the modern AI stack.
  `,
};

export const workExperience = [
  {
    company: "Intelimek Systems, Pune",
    link: "https://intelimek.com",
    location: "Hybrid",
    position: "Senior Engineer",
    period: "Jan 2025 - Present",
    achievements: [
      "Full-stack and AI engineer on a team building physics + AI digital twin applications for pharma, steel, and medical device manufacturers.",
      "Owned end-to-end delivery across multiple scientific computing applications: system architecture, REST API design, UI, Docker/Kubernetes deployment, and CI/CD pipelines for both cloud and on-premise environments.",
      "Architected multi-service cloud-native Python applications coordinating distributed backend services using RabbitMQ messaging and threaded workers for fault isolation across high-throughput industrial workloads.",
      "Developed agentic AI assistants using LangChain and local LLMs for natural-language navigation of industrial applications, designed for fully on-premise and air-gapped factory deployments where no data leaves the customer's site.",
      "Designed and shipped a production computer vision system for medical device (auto-injector) quality testing, integrating high-speed cameras, lighting, and PLC controls with a Flask + React web app; measures sub-millimeter needle penetration and drug flow timing on the factory line.",
      "Built the web application layer for a physics-informed neural network-based digital twin system, integrating high-fidelity simulation outputs with real-time plant data through REST APIs and React dashboards to make engineering models accessible to non-technical operators.",
      "Built a browser-based 3D mesh visualization tool using vtk.js and itk-wasm, enabling engineers to inspect simulation outputs (VTU files) in the browser with interactive X/Y/Z clip planes — replacing reliance on desktop CAE software.",
      "<b>Technology Stack - Python, Flask, FastAPI, JavaScript, React, Node.js, MongoDB, RabbitMQ, Docker, Kubernetes, AWS, Azure, LangChain, OpenCV, vtk.js</b>.",
    ],
  },
    {
    company: "Intelimek Systems, Pune",
    link: "https://intelimek.com",
    location: "Hybrid",
    position: "Software Engineer",
    period: "Aug 2023 - Dec 2024",
    achievements: [
      "Working as a full-stack developer, contributing to system design and delivery of applications.",
      "Designed and architected a computer vision-based product to optimize performance and efficient communication across both monolithic and microservice architectures, achieving a 40% reduction in processing time.",
      "Developed and maintained backend and frontend systems for multiple projects.",
      "Created and deployed cloud-native applications, alongside few desktop applications.",
      "Built internal tools to streamline workflows, including debugging, testing, and deployment pipelines.",
    ],
  },

  {
    company: "Aim Technologies",
    link: "https://aimtechs.co.in",
    location: "Hybrid",
    position: "Freelance Software Developer",
    period: "Oct 2019 - Jul 2023",
    achievements: [
      "Built full-stack web applications using Python/Flask, Node.js, and React for clients across IoT, computer vision, and web dashboard projects.",
      "Integrated IoT devices and computer vision pipelines with real-time web dashboards over REST and WebSockets.",
      "Built and shipped React Native Android applications alongside the web stack.",
      "Deployed production applications on AWS using Docker and Linux servers.",
      "<b>Technology Stack - Python, JavaScript, React, React Native, Node.js, Flask, C++, Java, AWS, Linux, Git</b>.",
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
export const skills = {
  programmingLanguages: [
    "Python",
    "TypeScript",
    "JavaScript",
    "Java",
    "C++",
  ],
  aiMlAndComputerVision: [
    "PyTorch",
    "TensorFlow, Keras",
    "LangChain",
    "Local LLMs (Ollama, vLLM, llama.cpp), Hugging Face Transformers",
    "OpenCV",
  ],
  frontendDevelopment: [
    "React",
    "React Native",
    "Next.js",
    "Tailwind CSS",
    "Material UI",
    "vtk.js",
  ],
  backendDevelopment: [
    "Node.js",
    "Express",
    "Flask",
    "FastAPI",
    "REST APIs",
    "WebSockets",
    "Pydantic",
    "Protocal Buffers, gRPC",
  ],
  databaseAndMessaging: [
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "MySQL",
    "RabbitMQ",
  ],
  cloudAndDevOps: [
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "Nginx",
    "Linux",
    "Git",
    "CI/CD (GitHub Actions, GitLab CI)",
  ],
};

export const projects = [
  {
    title: "ThingESP - A WhatsApp Automation Platform",
    github: "https://thingesp.siddhesh.me",
    tags: ["IoT", "MERN", "AWS", "MQTT", "Docker"],
    description: [
      "ThingESP, a platform that enables users to automate and control IoT devices via WhatsApp.",
      "It is a live/production application and has established a user base of ~10K users worldwide.",
      "Users can integrate their devices using simple APIs or client libraries, with support currently available for Raspberry Pi and Espressif boards (ESP32, ESP8266).",
      "Designed and deployed this scalable application on the AWS cloud, ensuring high availability and performance.",
      "Technology Stack: MERN Stack, Microservices, NodeJS, Express JS, Mongo DB, React, MQTT Protocol, and Docker",
    ],
  },
  {
    title: "Medor Club - The Healthcare Platform",
    github: "https://medor.club",
    tags: ["React Native", "MERN", "AWS", "Razorpay"],
    description: [
      "Medor is a digital healthcare platform that connects patients with doctors for consultations.",
      "Developed cross-platform apps for users and doctors and published them on Google Play Store.",
      "Designed the entire architecture for authentication, subscriptions, and doctor-patient workflows.",
      "Integrated Razorpay to enable secure payments for subscription-based services.",
      "Deployed web and backend infrastructure on AWS Cloud with S3 for media storage.",
      "Technology Stack: MERN Stack, React Native, Microservices, AWS Cloud, and Docker",
    ],
  },

  {
    title: "ThingCtrl - A Platform to Control IoT Devices",
    github: "https://thingctrl.siddhesh.me",
    tags: ["IoT", "WebSockets", "MQTT", "Docker"],
    description: [
      "Developed a platform to monitor and control IoT devices (Raspberry Pi, Arduino, ESP32, ESP8266) through a real-time web dashboards.",
      "Implemented drag-and-drop widgets and live device data using React.js, REST APIs, and WebSockets.",
      "Built backend using Node.js and Express with MQTT and Redis for device messaging and performance.",
      "Created client libraries in C++ (Arduino) and Python (Raspberry Pi) for seamless integration.",
      "Containerized and deployed using Docker for scalable and portable deployment.",
      "Technology Stack: MERN Stack, MQTT, Redis, Protocol Buffers, WebSockets, Docker.",
    ],
  },

  {
    title: "PUC Vendor Management Platform",
    github: "https://puc.siddhesh.me",
    tags: ["MERN", "WhatsApp API", "Twilio", "Docker"],
    description: [
      "A platform built for PUC vendors to manage clients and send automated reminders of PUC expiry to vehicle owners via SMS and WhatsApp.",
      "Implemented core features including client database management, reminder scheduling, and messaging integration.",
      "Developed a user-friendly dashboard for vendors to track client PUC status and send notifications.",
      "Integrated WhatsApp Business API and Twilio for automated messaging.",
      "Technology Stack: MERN Stack, Microservices, WhatsApp Business API, and Docker.",
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
