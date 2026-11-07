/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT — single source of truth
 * ─────────────────────────────────────────────────────────────────────────────
 *  Everything rendered on the site comes from this file. Edit freely.
 *  Content is derived ONLY from the CV (public/resume.pdf).
 *  Items marked `TODO` are uncertain / not stated in the CV — please review.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type SocialIcon = "github" | "linkedin" | "mail" | "phone";

export interface Social {
  label: string;
  url: string;
  icon: SocialIcon;
  /** Text shown next to the icon in the contact section */
  display: string;
}

export interface Profile {
  name: string;
  firstName: string;
  title: string;
  /** Short role badges shown in the hero */
  roles: string[];
  tagline: string;
  /** Paragraphs for the About section */
  summary: string[];
  yearsOfExperience: number;
  location: string;
  email: string;
  phone: string;
  /** Path under /public. Leave empty ("") to show the placeholder avatar. */
  photo: string;
  /** CSS object-position used to crop the photo inside the portrait frame */
  photoPosition: string;
  photoAlt: string;
  /** Short "available for" line in the hero */
  availability: string;
}

export interface Resume {
  /** File in /public — replace public/resume.pdf to update */
  path: string;
  /** Suggested filename for the download */
  fileName: string;
  /** ISO date (YYYY-MM-DD) — bump whenever you replace the PDF */
  updated: string;
}

export interface SkillGroup {
  name: string;
  skills: string[];
}

export interface Highlight {
  /** Optional bold lead-in */
  title?: string;
  text: string;
}

export interface Experience {
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  summary?: string;
  highlights: Highlight[];
  tags: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  date: string;
  domain: string;
  summary: string;
  stack: string[];
  responsibilities: Highlight[];
  /** Cover image under /public */
  image: string;
  imageAlt: string;
  links?: { label: string; url: string }[];
}

export interface Certification {
  name: string;
  issuer: string;
  credentialId: string;
  verifyUrl: string;
  /** Certificate image under /public (shown in a lightbox) */
  image: string;
  imageAlt: string;
  topics: string[];
}

export interface Education {
  degree: string;
  field: string;
  school: string;
  start: string;
  end: string;
  location: string;
  grade?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Seo {
  siteUrl: string;
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
}

export interface Portfolio {
  profile: Profile;
  resume: Resume;
  socials: Social[];
  stats: Stat[];
  skills: SkillGroup[];
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
  education: Education[];
  seo: Seo;
}

export const portfolio: Portfolio = {
  profile: {
    name: "Laxminarayan Chintake",
    firstName: "Laxminarayan",
    title: "Technical Lead | Senior Java Backend & Blockchain Engineer",
    roles: ["Technical Lead", "Java & Spring Boot", "Blockchain Architect", "Fintech"],
    tagline:
      "I architect scalable microservices, event-driven financial platforms and secure smart-contract systems — and lead the teams that ship them.",
    summary: [
      "Technical Lead with 11 years of experience architecting and delivering scalable microservices ecosystems and complex financial systems. Expert in Java, Spring Boot and event-driven architecture with Apache Kafka.",
      "Proven track record in blockchain integration, smart-contract development with Solidity, and full-stack delivery with React and TypeScript. Certified Blockchain Architect.",
      "I lead high-performing teams, enforce rigorous engineering standards and optimise CI/CD pipelines in cloud-native environments — translating complex business requirements into robust, high-performance solutions across fintech and energy.",
      "Committed to code quality through automated testing, mutation testing and strategic architectural design for long-term reliability and maintainability.",
    ],
    yearsOfExperience: 11,
    location: "Pune, India", // TODO: confirm city (e.g. Pune) — not stated in the CV
    email: "aws.laxminarayan@gmail.com",
    phone: "+91 9175324567",
    photo: "/images/profile.jpg", // set to "" to use /images/profile-placeholder.svg
    photoPosition: "46% 30%",
    photoAlt: "Portrait of Laxminarayan Chintake",
    availability: "Open to Technical Lead & Senior Backend / Blockchain roles · India & UAE · Available within 30 days", // TODO: adjust to your current availability
  },

  resume: {
    path: "/resume.pdf",
    fileName: "Laxminarayan_Chintake_Resume.pdf",
    updated: "2026-11-01",
  },

  socials: [
    {
      label: "Email",
      url: "mailto:aws.laxminarayan@gmail.com",
      icon: "mail",
      display: "aws.laxminarayan@gmail.com",
    },
    {
      label: "Phone (India)",
      url: "https://wa.me/+919175324567",
      icon: "phone",
      display: "+91 91753 24567",
    },
    {
      label: "Phone (UAE, WhatsApp)",
      url: "https://wa.me/+971581121944",
      icon: "phone",
      display: "+971 58112 1944",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/lgchintake",
      icon: "linkedin",
      display: "linkedin.com/in/lgchintake",
    },
    {
      label: "GitHub",
      url: "https://github.com/lgchintake",
      icon: "github",
      display: "github.com/lgchintake",
    },
  ],

  stats: [
    { value: "11+", label: "Years of experience" },
    { value: "7+", label: "Years as Technical Lead" }, // Sep 2019 – present
    { value: "4", label: "Companies" },
    { value: "CBA", label: "Certified Blockchain Architect" },
  ],

  skills: [
    {
      name: "Languages",
      skills: ["Java", "Solidity", "TypeScript", "JavaScript", "SQL", "HTML", "jQuery"],
    },
    {
      name: "Frameworks",
      skills: [
        "Spring Boot",
        "Microservices",
        "Hibernate",
        "Spring Batch",
        "RESTful Web Services",
        "React",
        "Web3",
        "NFT",
      ],
    },
    {
      name: "Platforms",
      skills: ["AWS", "MongoDB Atlas", "Blockchain"],
    },
    {
      name: "Tools",
      skills: [
        "Git",
        "GitHub",
        "GitLab",
        "Bitbucket",
        "Jenkins",
        "Docker",
        "Kubernetes",
        "Maven",
        "Gradle",
        "Postman",
        "Swagger",
        "IntelliJ IDEA",
        "VS Code",
        "JUnit",
        "Mockito",
        "Jira",
        "Coverity",
        "MEND",
        "SonarQube",
      ],
    },
    {
      // Technologies that appear in the CV's experience & projects sections
      name: "Also used in projects",
      skills: [
        "Apache Kafka",
        "Redis",
        "Oracle",
        "PostgreSQL",
        "Spring Data JPA",
        "Spring Cloud Config",
        "Service Discovery",
        "Ethereum",
        "Hardhat",
        "Red Hat OpenShift",
        "Cucumber",
        "Pitest",
        "Angular",
        "Ionic",
        "Cordova",
        "ExtJS",
        "Jasper Reports",
      ],
    },
  ],

  experience: [
    {
      company: "Opus Technologies",
      role: "Technical Lead",
      start: "Sep 2019",
      end: "Present",
      location: "Pune, India · Open to relocate", // TODO: add location (not stated in the CV)
      summary:
        "Leading delivery of fintech card platforms built on Spring Boot microservices and event-driven architecture.",
      highlights: [
        {
          title: "Team leadership",
          text: "Led a high-performing development team in the design and delivery of a Debit Card Management System.",
        },
        {
          title: "Requirements to architecture",
          text: "Worked with stakeholders to gather, analyse and translate complex business requirements into scalable technical solutions.",
        },
        {
          title: "Microservices",
          text: "Architected and developed modular features using microservices, significantly improving scalability and maintainability.",
        },
        {
          title: "Backend engineering",
          text: "Engineered robust Spring Boot services integrated with Oracle and PostgreSQL for high-performance data management.",
        },
        {
          title: "Event-driven design",
          text: "Implemented event-driven design patterns to increase throughput and reduce latency.",
        },
        {
          title: "Security & compliance",
          text: "Orchestrated security and compliance audits, owning end-to-end documentation and acting as primary technical liaison for external auditors.",
        },
        {
          title: "Code quality",
          text: "Enforced engineering excellence through rigorous code reviews and automated analysis with Coverity, MEND and SonarQube.",
        },
        {
          title: "Mentorship",
          text: "Mentored engineers through complex technical challenges, accelerating project timelines.",
        },
      ],
      tags: ["Java", "Spring Boot", "Microservices", "Kafka", "Oracle", "PostgreSQL", "SonarQube"],
    },
    {
      company: "Nexant India Pvt. Ltd",
      role: "Software Developer",
      start: "Oct 2018",
      end: "Sep 2019",
      location: "Pune, India", // TODO: add location
      summary: "Energy-sector software for utilities in the US and UK markets.",
      highlights: [
        { text: "Engineered software solutions to optimise power-grid operations across the US and UK markets." },
        { text: "Developed scalable features for customer loyalty programs, driving user engagement and retention." },
        {
          text: "Architected data-driven solutions enabling energy companies to analyse consumption patterns and generate predictive models.",
        },
        { text: "Built and maintained high-performance web applications with Java, RESTful Web Services and ExtJS." },
        { text: "Applied rigorous testing and optimisation to ensure application reliability and performance." },
      ],
      tags: ["Java", "REST", "ExtJS"],
    },
    {
      company: "Attra Infotech Pvt. Ltd",
      role: "Senior Software Engineer",
      start: "Jan 2018",
      end: "Oct 2018",
      location: "Pune, India", // TODO: add location
      highlights: [
        { text: "Architected and secured high-performance backend APIs, ensuring robust data integrity and system reliability." },
        { text: "Developed and integrated Jasper Reports into the existing application, streamlining complex reporting." },
        { text: "Facilitated code reviews to enforce engineering standards and improve maintainability." },
        { text: "Mentored team members, providing technical guidance to resolve complex challenges and accelerate delivery." },
      ],
      tags: ["Java", "Backend APIs", "Jasper Reports"],
    },
    {
      company: "Lexicon Networks India Pvt. Ltd",
      role: "Software Engineer",
      start: "Aug 2015",
      end: "Jan 2018",
      location: "Pune, India", // TODO: add location
      highlights: [
        {
          title: "Full-stack development",
          text: "Architected and deployed scalable web applications with Java, Spring Boot, Hibernate and Angular.",
        },
        {
          title: "Mobile",
          text: "Engineered responsive hybrid mobile apps using Ionic and Cordova for cross-platform engagement.",
        },
        {
          title: "Requirements & collaboration",
          text: "Partnered with stakeholders and multidisciplinary teams to translate requirements into tailored solutions and integrate features seamlessly.",
        },
        {
          title: "Quality & performance",
          text: "Executed testing protocols and performance optimisations to maintain reliability, security and speed.",
        },
      ],
      tags: ["Java", "Spring Boot", "Hibernate", "Angular", "Ionic"],
    },
  ],

  projects: [
    {
      title: "Bond Tokenization Platform",
      subtitle: "Blockchain · Capital Markets",
      date: "Nov 2026", // TODO: confirm — CV lists "Nov 2026" (completion date? ongoing?)
      domain: "Blockchain",
      summary:
        "A blockchain-based platform enabling custodians to tokenize off-chain bonds on Ethereum and automate corporate actions such as coupon distribution — with investor whitelisting, secure token distribution, peer-to-peer trading and a real-time investor dashboard.",
      stack: [
        "Solidity",
        "Hardhat",
        "Web3",
        "Ethereum",
        "ReactJS",
        "Java",
        "Spring Boot",
        "Microservices",
        "Spring Data JPA",
        "Redis",
        "Kafka",
        "Spring Cloud Config",
        "Service Discovery",
      ],
      responsibilities: [
        {
          title: "Smart contracts",
          text: "Designed and deployed secure Solidity contracts for bond tokenization, investor whitelisting and regulatory-compliant restricted transfers.",
        },
        {
          title: "Automation logic",
          text: "Implemented automated coupon-distribution logic for accurate, scheduled payouts to token holders.",
        },
        {
          title: "Tooling & integration",
          text: "Developed and tested contracts with Hardhat; integrated blockchain and backend services via Web3.",
        },
        {
          title: "Microservices",
          text: "Built Spring Boot microservices with Spring Data JPA persistence and Redis caching for fast data retrieval.",
        },
        {
          title: "Distributed config",
          text: "Used Spring Cloud Config and service discovery for centralised configuration and efficient inter-service communication.",
        },
        {
          title: "Event-driven workflows",
          text: "Orchestrated asynchronous workflows with Apache Kafka, including automated stakeholder notifications.",
        },
        {
          title: "Front end",
          text: "Built a responsive ReactJS UI for custodians and investors to track portfolios and visualise holdings.",
        },
      ],
      image: "/images/projects/bond-tokenization.svg",
      imageAlt: "Abstract illustration of tokenized bonds on a blockchain network",
      links: [], // TODO: add demo / repo links if they can be shared publicly
    },
    {
      title: "Digital Modernization",
      subtitle: "Card Tokenization · Fintech",
      date: "Oct 2026", // TODO: confirm date as listed in the CV
      domain: "Fintech",
      summary:
        "A high-scale Spring Boot microservices ecosystem powering a card tokenization platform. Led end-to-end design, development and testing of the Account Profile and Token Lookup services, integrated with downstream systems for secure data retrieval.",
      stack: [
        "Java",
        "Spring Boot",
        "Microservices",
        "Kafka",
        "JUnit",
        "Mockito",
        "Cucumber",
        "Pitest",
        "Jenkins",
        "Red Hat OpenShift",
      ],
      responsibilities: [
        {
          title: "Microservices",
          text: "Engineered Spring Boot microservices managing account profiles and tokenized data interfaces.",
        },
        {
          title: "Event-driven design",
          text: "Implemented asynchronous communication with Apache Kafka for real-time data exchange across services.",
        },
        {
          title: "Testing",
          text: "Built comprehensive unit-test suites with JUnit and Mockito, and Cucumber-based BDD API test automation.",
        },
        {
          title: "Mutation testing",
          text: "Improved test-suite efficacy through systematic mutation testing with Pitest.",
        },
        {
          title: "Cloud & CI/CD",
          text: "Deployed containerised services on Red Hat OpenShift and managed automated Jenkins pipelines.",
        },
      ],
      image: "/images/projects/digital-modernization.svg",
      imageAlt: "Abstract illustration of card tokenization microservices",
      links: [],
    },
    {
      title: "Debit Card Management System",
      subtitle: "Card Lifecycle · Fintech",
      date: "Jan 2026", // TODO: confirm date as listed in the CV
      domain: "Fintech",
      summary:
        "A comprehensive platform for institutional onboarding and end-to-end debit-card lifecycle management — card generation, embossing-file creation, data maintenance, virtual-card support and high-volume batch processing.",
      stack: [
        "Java",
        "Spring Boot",
        "Microservices",
        "Kafka",
        "Redis",
        "Spring Batch",
        "Event-Driven",
        "Oracle",
        "PostgreSQL",
        "Spring Data JPA",
        "ReactJS",
        "Jenkins",
        "Mockito",
        "Agile",
      ],
      responsibilities: [
        {
          title: "Technical leadership",
          text: "Served as Technical Lead, guiding the team through the SDLC and architectural decision-making.",
        },
        {
          title: "System development",
          text: "Spearheaded end-to-end development, optimisation and maintenance of the core platform.",
        },
        {
          title: "Requirements engineering",
          text: "Ran requirement gathering and feature grooming with stakeholders to align delivery with business goals.",
        },
        {
          title: "Quality",
          text: "Enforced code-review standards and best practices for performant, maintainable, scalable code.",
        },
        {
          title: "Problem solving & mentorship",
          text: "Proposed solutions for complex business use cases and mentored engineers through hard problems.",
        },
      ],
      image: "/images/projects/debit-card.svg",
      imageAlt: "Abstract illustration of a debit card lifecycle pipeline",
      links: [],
    },
  ],

  certifications: [
    {
      name: "Certified Blockchain Architect",
      issuer: "Blockchain Council", // TODO: confirm issuer name (inferred from verification URL)
      credentialId: "BCC-2026-CYDRSX",
      verifyUrl: "https://members.blockchain-council.org/verify/BCC-2026-CYDRSX",
      image: "/images/certs/blockchain-architect.png", // TODO: replace with your certificate image
      imageAlt: "Certified Blockchain Architect certificate",
      topics: [
        "Blockchain architecture & design principles",
        "Distributed Ledger Technology (DLT)",
        "Consensus mechanisms",
        "Smart contracts & dApps",
        "Enterprise blockchain use cases",
        "Security, scalability & governance",
      ],
    },
  ],

  education: [
    {
      degree: "MCA",
      field: "Master of Computer Applications",
      school: "Savitribai Phule Pune University",
      start: "Jul 2012",
      end: "Apr 2015",
      location: "Pune, India",
      grade: "67.20 %", // TODO: keep or remove CGPA
    },
    {
      degree: "BCA",
      field: "Bachelor of Computer Applications",
      school: "Swami Ramanand Teerth Marathwada University",
      start: "Jun 2009",
      end: "May 2012",
      location: "Nanded, India",
      grade: "67.90 %", // TODO: keep or remove CGPA
    },
  ],

  seo: {
    siteUrl: "https://lgchintake.github.io",
    title: "Laxminarayan Chintake — Technical Lead | Java Backend & Blockchain Engineer",
    description:
      "Technical Lead with 11 years of experience in Java, Spring Boot, microservices, Kafka and blockchain (Solidity, Ethereum). Certified Blockchain Architect building secure, scalable fintech platforms. Open to roles in India and the UAE.",
    keywords: [
      "Laxminarayan Chintake",
      "Technical Lead",
      "Java Developer",
      "Spring Boot",
      "Microservices",
      "Kafka",
      "Blockchain Engineer",
      "Solidity",
      "Certified Blockchain Architect",
      "Fintech",
      "Portfolio",
    ],
    ogImage: "/og-image.png",
  },
};
