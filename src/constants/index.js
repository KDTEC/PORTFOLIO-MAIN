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
      "Developed: and designed scalable, distributed, low latency, and high throughput e-pharmacy system APIs with continuous integration and deployment capabilities. Using K8s, Docker, Azure, Terraform, and Springboot.",
      "Deployed: a total of 37 api solutions across the vertical, reduced cycle-time by 13%. Designed platform and service architecture using enterprise integration patterns. Using postman for API testing.",
      "Optimized: legacy code implementations - accelerated software performance by 20%. Scaled products Typescript, React.js, Mongoose, Docker, K8s for horizontal scaling, and BitBucket for version control.",
    ],
  },
  {
    title: "Risk Advisory – Cyber Intern",
    company_name: "Deloitte",
    icon: Deloitte,
    iconBg: "#fffff0",
    date: "Nov 2022 - Jun 2023",
    points: [
      "Developed ERP systems for 5 clients using oracle RMC and SAP, enriching the existing system metrics by 19%.",
      "Mitigated risk using role-based access controls (RBAC) and dealt with financial reporting compliance (FRC) for better control reporting according to SOX and other mandates.",
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
      "Implemented a unified anomaly prediction tool with a precision of 95% for determining outliers in RAN KPI data.",
      "Deployed and Integrated Continuous Integration/Deployment Pipeline (CI/CD), Reviewed Pull requests (PRs), Performed deep code reviews, Implemented load/stress testing, and unit/integration/e2e testing.",
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
