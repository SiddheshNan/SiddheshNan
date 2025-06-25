export const personalInfo = {
  name: "Siddhesh Nandurkar",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/Pune,+Maharashtra/",
  email: "sid@siddhesh.me",
  github: "https://github.com/SiddheshNan",
  linkedin: "https://www.linkedin.com/in/siddheshnan/",
  bio: "Full-Stack Engineer with over ~2 years of experience in designing, developing, and deploying scalable applications. Proficient in full-stack development, cloud-native architecture, and modern web applications.",
};

export const workExperience = [
  {
    company: "Intelimek Systems, Pune",
    link: "https://intelimek.com",
    location: "Hybrid",
    position: "Software Engineer",
    period: "Aug 2023 - Present",
    achievements: [
      "Working as a full-stack developer, contributing to system design and delivery of applications.",
      "<b>Designed and architected</b> a computer vision-based product to optimize performance and efficient communication across both monolithic and microservice architectures, <b>achieving a 40% reduction in processing time</b>.",
      "Developed and maintained backend and frontend systems for multiple projects.",
      "Created and deployed cloud-native applications, alongside few desktop applications.",
      "Built internal tools to streamline workflows, including debugging, testing, and deployment pipelines, <b>resulting in a 60% improvement</b> in development efficiency and faster delivery cycles.",
      "<b>Technology Stack - Python, JavaScript, React JS, Flask, Node JS, REST API, RabbitMQ, Azure, Docker, Linux, Git, CI/CD</b>.",
    ],
  },
  {
    company: "Aim Technologies",
    link: "https://aimtechs.co.in",
    location: "Hybrid",
    position: "Freelance Software Developer",
    period: "Oct 2019 - Jul 2023",
    achievements: [
      "Gained hands-on experience in developing frontend and backend systems using Python/Flask, React JS, and Node JS.",
      "Integrated IoT and computer-vision based solutions with web dashboards for real-time interactions.",
      "Deployed web applications on the AWS cloud.",
      "Built android applications using React Native.",
      "<b>Technology Stack - Python, JavaScript, C++, React JS, React Native, Java, AWS, Linux, Git</b>.",
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
      "Organized various technical workshops and events.",
      "Represented the college in multiple national hackathons and won.",
      "Core Team Member - College Gathering (Umang 2023).",
      "Contributed to organizing cultural events and also developed the official Umang 2023 website.",
      "Designed and developed the college tech fest (Vidyotan 2019) website for event information and participant registration.",
    ],
  },
];
export const skills = {
  programmingLanguages: [
    "TypeScript",
    "JavaScript",
    "Python",
    "C++",
    "Java",
    "Go Lang",
  ],
  frontendDevelopment: [
    "Reactjs",
    "React Native",
    "Angular",
    "Material UI",
    "Styled Components",
    "Tailwind CSS",
    "HTML",
    "CSS",
  ],
  backendDevelopment: ["Flask", "Node.js", "Express.js", "FastAPI"],
  databaseAndStorage: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  cloudAndDevOps: [
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "Git",
    "Nginx",
    "CI/CD",
  ],
  // toolsAndServices: [
  //   "Clerk (Auth)",
  //   "Sanity (CMS)",
  //   "Tinybird (analytics)",
  //   "Zod",
  //   "Sentry",
  //   "Mixpanel",
  //   "Trigger.dev",
  // ],
};

export const projects = [
  {
    title: "ThingESP - A WhatsApp Automation Platform",
    github: "https://thingesp.siddhesh.me",
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
