import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  Deloitte,
  Samsung,
  NFL,
  Aster,
  spring,
  Appointify,
  foodado,
  crypto_coinex,
  repo_sniffer,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ML Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "SpringBoot",
    icon: spring,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "SDE - 1",
    company_name: "Aster DM Healthcare",
    icon: Aster,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Present",
    points: [
      "Managed CI/CD pipelines for web, Android, and iOS apps, building 50+ APKs and IPAs using Android SDK and Xcodebuild. Automated testing on Firebase and deployed to TestFlight and Play Store for seamless production releases.",
      "Developed 20+ Python automation scripts in GCP Cloud Functions and AWS Lambda, reducing manual tasks by 70% and streamlining internal processes.",
      "Installed and integrated Kong Gateway in Kubernetes clusters using Helm, supporting 100+ microservices and 5,000+ requests per second through local caching and PostgreSQL read replicas.",
      "Engineered the Aster Alerts microservice with 22 alerts, reducing issue resolution time from 7 days to 1 day by integrating monitoring and logging.",
      "Resolved critical production issues for 270K+ users, driving a 10% increase in user registrations.",
      "Built a microservice using Kubernetes event monitoring to autonomously transfer MongoDB data, reducing migration time by 40% during cluster provisioning.",
      "Deployed an automated OpenVPN solution for the tech team using Ansible for configuration and Terraform for infrastructure provisioning, currently used by over 250 employees across various environments for secure and scalable access.",
      "Configured monitoring and alerting across Kubernetes clusters using the PLG (Prometheus, Loki, Grafana) stack, NewRelic, and Uptime Kuma for real-time observability and issue detection."
    ],
  },
  {
    title: "Risk Advisory – Cyber Intern",
    company_name: "Deloitte",
    icon: Deloitte,
    iconBg: "#fffff0",
    date: "Nov 2022 - Jun 2023",
    points: [
      "Configured ERP systems for 5 clients using Oracle RMC and SAP, enhancing system metrics by 19%.",
      "Implemented RBAC to reduce unauthorized access incidents by 30% and ensure compliance with financial reporting regulations like SOX, improving audit performance by 20%.",
    "Designed tableau and BI dashboards for visualizing client data.",
    ],
  },
  {
    title: "SWE Intern",
    company_name: "Samsung R&D",
    icon: Samsung,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Mar 2022",
    points: [
      "Forged an unified anomaly prediction tool with 95% precision for identifying outliers in RAN KPI data.",
      "Orchestrated deployment and integration of CI/CD pipeline with Jenkins, boosting development efficiency and cutting deployment time by 30% with automated testing and deployment."
    ],
  },
  {
    title: "ML Intern",
    company_name: "National Fertilizer Limited (NFL)",
    icon: NFL,
    iconBg: "#383E56",
    date: "May 2021 - Jun 2021",
    points: [
      "Determined how self-driving cars use image classification and object detection to achieve level 5 automation.",
      "Improved the pre-existing model using image augmentation that would help ADAS (Advanced Driver-assistance systems) to classify traffic signs with an accuracy of around 95.8%.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "RepoSniffer",
    description:
      "Say goodbye to the hassle of cloning repositories. With RepoSniffer, save time, dive into code instantly without the need to clone.",
    tags: [
      {
        name: "GraphQL",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "React Query",
        color: "pink-text-gradient",
      },
    ],
    image: repo_sniffer,
    source_code_link: "https://repo-sniffer.netlify.app/",
  },
  {
    name: "FooDado",
    description:
      "Implemented a cooking blog application which provides users with over 100 recipes of varied cuisines, enabling users to easily look-up various recipes as well as post new and innovative recipes as blogs.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
    ],
    image: foodado,
    source_code_link: "https://foodado.adaptable.app/",
  },
  {
    name: "Crypto-coinex",
    description:
      "Created a price prediction app for the top 100 crypto currencies that includes features like wish-listing favourite currencies, historical chart analysis, and trending crypto currency news.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: crypto_coinex,
    source_code_link: "https://crypto-coinex.netlify.app/",
  },
  {
    name: "Appointify",
    description:
      "Designed an online clinic system that enables you to effectively manage your practice, schedule appointments, Online Follow-ups, and get Drug Information.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: Appointify,
    source_code_link: "https://github.com/KDTEC/Software-project",
  },
  
  
];

export { services, technologies, experiences, testimonials, projects };
