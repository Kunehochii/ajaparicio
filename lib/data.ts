export const portfolioData = {
  profile: {
    name: "AJ Aparicio",
    role: "Backend Engineer",
    location: "Iloilo City, Philippines",
    email: "aparicio.anthonyjohn@gmail.com",
    image: "/aj_formal.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/ajaparicio36/",
      github: "https://github.com/ajaparicio36",
    },
  },
  hero: {
    headline: "Building scalable backends and AI-driven mobile solutions.",
    subHeadline:
      "I engineer high-performance systems for startups and enterprises, specializing in the PERN stack and Flutter.",
  },
  about:
    "I am a software engineer whose practice is anchored in backend architecture and full-stack delivery. My work centers on translating ambiguous business requirements into systems that are correct, maintainable, and built to scale — from gRPC-based microservices to AI-assisted mobile applications.\n\nAcross engagements with more than fifteen clients, I have led development cycles end-to-end: designing services, shepherding production deployments, and integrating emerging technologies such as computer vision and IoT into workflows that measurably reduce operational cost.",
  skills: {
    backend: ["NestJS", "Node.js", "Express.js", "Java Spring Boot", "Golang/Gin", "Rust/Axum", "Python", "PHP/Laravel"],
    frontendMobile: ["Flutter (Dart)", "Next.js", "React", "React Native", "Tailwind CSS"],
    database: ["PostgreSQL", "MongoDB", "Prisma ORM", "TypeORM", "GORM", "Query Optimization"],
    apis: ["REST", "GraphQL", "gRPC", "Microservices"],
    devOps: ["Docker", "CI/CD", "Linux", "AWS", "Azure", "Vercel", "Railway"],
    aiIot: ["OpenAI API", "Computer Vision (YOLO)", "MLKit", "Raspberry Pi", "Arduino"],
  },
  experience: [
    {
      role: "Backend Engineer II",
      company: "MySchoolSuite",
      period: "January 2026 – Present",
      description:
        "Refactored a NestJS monolith into gRPC-based microservices, reducing inter-service latency from 30 ms over HTTP to 2 ms. Led the design of a unified authentication service that now serves more than eighteen internal applications.",
    },
    {
      role: "Full-Stack Engineer",
      company: "Allutional",
      period: "October 2025 – April 2026",
      description:
        "Engineered low-latency Express.js and Node.js services paired with responsive Next.js interfaces, bridging backend systems to polished client experiences for a telehealth platform serving more than one hundred clients.",
    },
    {
      role: "Software Engineer",
      company: "Inertia Ltd.",
      period: "June 2025 – October 2025",
      description:
        "Owned full-stack feature delivery and contributed to product planning, aligning engineering effort with client goals. Executed rigorous QA protocols to surface edge cases prior to release for a userbase exceeding two hundred.",
    },
    {
      role: "Software Engineer",
      company: "Freelance",
      period: "2021 – Present",
      description:
        "Delivered more than fifteen bespoke engagements across industries, owning each project from discovery through deployment. Consistently prioritized operational efficiency and measurable performance outcomes.",
    },
  ],
  projects: [
    {
      title: "BayloCentral",
      role: "Lead Full-Stack & DevOps",
      stack: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
      image: "/baylocentral_project.png",
      description:
        "A digital marketplace for MSMEs. Architected the full-stack infrastructure and containerized DevOps, enabling local merchants to expand beyond physical stores.",
      github: "https://github.com/ajaparicio36/baylocentral-stable",
    },
    {
      title: "SnapScore",
      role: "Lead Backend & Mobile",
      stack: ["Flutter", "OpenAI API", "Python"],
      image: "/snapscore_project.jpg",
      description:
        "AI-powered grading application. Integrated OpenAI vision capabilities to convert physical test images into structured, auto-graded data for educators.",
      github: "https://github.com/TUPV-SnapScore/snapscore-android",
    },
    {
      title: "Falsisters",
      role: "Lead Developer",
      stack: ["Flutter", "React", "NestJS"],
      image: "/falsisters_project.png",
      description:
        "A unified mobile POS application and back-office system, digitizing inventory tracking and sales management for rice trading operations.",
      github: "https://github.com/falsisters/pos-server",
    },
    {
      title: "Floodwatch",
      role: "IoT & Fullstack Developer",
      stack: ["Raspberry Pi", "Python", "Node.js"],
      image: "/flash_project.jpg",
      description:
        "IoT disaster response system. Bridged hardware and software, processing sensor data to visualize flood conditions in real time.",
      github: "https://github.com/Kunehochii/floodwatch-server",
    },
    {
      title: "GeoTraizer",
      role: "Lead Full-Stack Developer",
      stack: ["Next.js", "Prisma", "PostgreSQL"],
      image: "/geotraizer_project.png",
      description:
        "A map-focused project management system for Iloilo Province, developed for the PGENRO provincial office. Built the full-stack system from development through deployment.",
      github: "https://github.com/ajaparicio36/pgenro-isf",
      url: "https://geotraizer.vercel.app",
    },
    {
      title: "ClickClick",
      role: "Lead Developer",
      stack: ["Flutter", "Express"],
      image: "/clickclick_project.png",
      description:
        "Full-stack photobooth infrastructure developed from concept through physical store deployment, now serving thousands of users with daily sessions.",
      github: "https://github.com/ajaparicio36/photocafe_windows",
    },
    {
      title: "Nexlock",
      role: "Lead Full-Stack & IoT Developer",
      stack: ["Next.js", "Flutter", "NestJS", "PostgreSQL", "Supabase"],
      image: "/nexlock_project.png",
      description:
        "IoT-enabled smart locker system allowing users to rent, lock, unlock, and checkout lockers via mobile. Developed the entire ecosystem including server, mobile application, and admin web portal.",
      github: "https://github.com/Nexlock/nexlock_app_v2",
    },
  ],
  certifications: [
    {
      title: "L'Oréal Brandstorm Nationals 2025",
      issuer: "L'Oréal",
      year: "2025",
      detail: "Team Software Developer — National Champion",
    },
    {
      title: "L'Oréal Brandstorm Nationals 2026",
      issuer: "L'Oréal",
      year: "2026",
      detail: "Team Software Developer — 1st Runner-Up",
    },
    {
      title: "Iloilo Province Hackathon 2025",
      issuer: "Province of Iloilo",
      year: "2025",
      detail: "3rd Place Winner",
    },
    {
      title: "TOPCIT Korea Certification",
      issuer: "Korean Ministry of Science and ICT",
      year: "2025",
      detail: "Level 3",
    },
    {
      title: "CPUGAD Startup Incubatee",
      issuer: "Central Philippine University",
      year: "2025",
      detail: "BayloCentral and NexLock — Accepted into the startup incubation program",
    },
    {
      title: "GameON! Game Development Hackathon",
      issuer: "GameON!",
      year: "2024",
      detail: "Participant",
    },
  ],
};
