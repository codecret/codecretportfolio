// Assets are now served from the public directory
const mobile = "/mobile.png";
const backend = "/backend.png";
const creator = "/creator.png";
const web = "/web.png";

// Setup assets
const macbook = "/setuptransparent/macbook.png";
const monitor = "/setuptransparent/monitor.png";
const keyboard = "/setuptransparent/keyboard.png";
const mouse = "/setuptransparent/mouse.png";
const alexa = "/setuptransparent/alexa.png";
const ringLight = "/setuptransparent/ringlight.png";
const laptopStand = "/setuptransparent/laptopstand.png";
const screenbar = "/setuptransparent/screenbar.png";
const javascript = "/tech/javascript.png";
const typescript = "/tech/typescript.png";
const html = "/tech/html.png";
const css = "/tech/css.png";
const reactjs = "/tech/reactjs.png";
const redux = "/tech/redux.png";
const tailwind = "/tech/tailwind.png";
const nodejs = "/tech/nodejs.png";
const mongodb = "/tech/mongodb.png";
const git = "/tech/git.png";
const figma = "/tech/figma.png";
const docker = "/tech/docker.png";
const meta = "/company/meta.png";
const starbucks = "/company/starbucks.png";
const tesla = "/company/tesla.png";
const shopify = "/company/shopify.png";
const orsedacover = "/orsedacover.png";
const Hora = "/Hora.png";
const ecommerce = "/ecommerce.png";
const threejs = "/tech/threejs.svg";

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
    id: "setup",
    title: "Setup",
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
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Orseda - Software Managment System",
    description:
      "Web-based project featuring customized access for Scrum Masters and Employees, an admin dashboard for real-time insights, comprehensive project management with a drag-and-drop interface, centralized task management with a Kanban board, and integrated email services. Includes secure role-based access and user-friendly password recovery.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: orsedacover,
    source_code_link: "https://orseda.codecret.com",
  },
  {
    name: "Hora – Appointment Management System",
    description:
      "Appointment management web app, with search and view functionality, scheduling analytics, collaboration, multi-language support, and email notifications. (May take up to 50 seconds for a cold start.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    // tags: [
    //   {
    //     name: "mongodb",
    //     color: "green-text-gradient",
    //   },
    //   {
    //     name: "NextJS",
    //     color: "pink-text-gradient",
    //   },
    // ],
    image: Hora,
    source_code_link: "https://hora.codecret.com",
  },
  {
    name: "E-commerce",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "white-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/Y7gn/cofee-shop-react",
  },
];

const setup = [
  {
    image: macbook,
    title: "MacBook Pro M3",
  },
  {
    image: monitor,
    title: "MSI Optix G24C4 23.6 144Hz",
  },
  {
    image: keyboard,
    title: "Royal Kludge RK71 ",
  },
  {
    image: mouse,
    title: "Logitech G304 ",
  },
  {
    image: alexa,
    title: "Amazon echo spot",
  },
  {
    image: ringLight,
    title: "Ring Light ",
  },
  {
    image: laptopStand,
    title: "Laptop Stand Holder With Cooling Fan",
  },
  {
    image: screenbar,
    title: "BenQ ScreenBar Halo",
  },
];
export { services, technologies, experiences, testimonials, projects, setup };
