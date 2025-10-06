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
  meta,
  freelance,
  shopify,
  sheryians,
  macbookpro,
  falverra,
  tripguide,
  threejs,
  python,
  alexEagles,
  eskySky,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "experience",
  },

  {
    id: "skills",
    title: "skills",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "AI/ML Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Computer Vision",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Docker",
    icon: docker,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Jr. Full Stack Developer",
    company_name: "e-SKY.ca",
    icon: eskySky,
    iconBg: "#0188E3",
    date: "May 2023 - Present",
    points: [
      "Developed and maintained full-stack web applications using modern technologies.",
      "Implemented responsive designs and interactive user interfaces with React.js and JavaScript.",
      "Built and optimized backend services using Node.js, Express.js, and various databases.",
      "Collaborated remotely with international teams on complex software solutions.",
    ],
  },
  {
    title: "Tech Team Member and Staff",
    company_name: "Alex Eagles",
    icon: alexEagles,
    iconBg: "#ffff",
    date: "July 2024 - Present",
    points: [
      "Contributed to technical projects and software development initiatives.",
      "Worked with AI/ML technologies and computer vision applications.",
      "Collaborated on team projects involving data analysis and intelligent systems.",
      "Mentored junior team members in programming best practices.",
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
    name: "Drug-Drug Interaction Prediction",
    description:
      "Deep Learning graduation project using SMILES strings and graph neural networks to predict drug-drug interactions. Implemented advanced AI techniques for pharmaceutical safety analysis with high accuracy predictions.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pytorch",
        color: "green-text-gradient",
      },
      {
        name: "deep-learning",
        color: "pink-text-gradient",
      },
    ],
    image: macbookpro,
    source_code_link:
      "https://github.com/Pharma-Intel-Graduation-Project/Pharma-Intel",
    live_website_link:
      "https://github.com/Pharma-Intel-Graduation-Project/Pharma-Intel",
  },
  {
    name: "Autonomous Drone System (Alex Eagles)",
    description:
      "Computer vision system for autonomous drone navigation using YOLOv8 object detection with 96% accuracy. Integrated real-time processing capabilities for intelligent flight path optimization.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "yolov8",
        color: "pink-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
    ],
    image: falverra,
    source_code_link: "https://github.com/Alex-Eagles",
    live_website_link: "https://alex-eagles.com/",
    presentation_link:
      "https://docs.google.com/presentation/d/1J1E5GCHFWg8Gq3mJDSmhSehD43meDJkNpQ-JHytmGwQ/edit?usp=sharing",
  },
  {
    name: "NASA Space Apps 2024 Platform",
    description:
      "Exoplanet exploration platform with integrated AI chatbot for NASA Space Apps Challenge 2024. Features interactive visualizations and intelligent query system for space data analysis.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ai-chatbot",
        color: "green-text-gradient",
      },
      {
        name: "data-viz",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/aaaaahh-ya-kawkabna/?tab=members",
    live_website_link: "https://spaceeagles.vercel.app",
    drive_link:
      "https://drive.google.com/drive/u/0/folders/1KAU_Qk5-IrRKzcVEo6e3SDkUwkcIUEmB",
    presentation_link:
      "https://docs.google.com/presentation/d/1TNGbG09cZCF5hQPclynf6Nxid4pwfzNj/edit?slide=id.p1#slide=id.p1",
  },
];

export { services, technologies, experiences, testimonials, projects };
