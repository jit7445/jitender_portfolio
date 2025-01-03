import { link } from "fs";
import { title } from "process";

export const navItems = [
  { name: "Home", link: "#" },
  { name: "about", link: "#about" },
  { name: "projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

// skills.js
export const skills = [
  { id: 1, name: 'C++' },
  { id: 2, name: 'C' },
  { id: 3, name: 'Python' },
  { id: 4, name: 'JavaScript' },
  { id: 5, name: 'Node.js' },
  { id: 6, name: 'React.js' },
  { id: 7, name: 'Next.js' },
  { id: 8, name: 'SQL' },
  { id: 9, name: 'MongoDB' },
  {id:10,name:'ExpressJs'},
  {id:11,name:'Tailwind'},
  {id:12,name:"socket.io"}
];



export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "messenger-app",
    des: "real-time communication each othe and make group ",
    img: "/p1.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/mongo.svg", "prisma.svg"],
    link: "https://chat-app-eight-iota-55.vercel.app/",
  },
  {
    id: 2,
    title: "ClickQuery",
    des: "provide easy ui interface for user to create database without writing sql commmand",
    img: "/p2.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/postgr.svg"],
    link: "",
  },
  { 
    id:3,
    title:"liveDocs",
    des:"Users can create, share, and collaborate on documents seamlessly, with the ability to invite others and control access permissions.",
    img:"/p5.png",
    iconLists:["/next.svg","/tail.svg","/ts.svg"],
    link:"https://livedocs-snowy.vercel.app/"



  },

  {
    id: 4,
    title: "Moviesite-app",
    des: "watch all movies in free ",
    img: "/p3.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://freecinema.vercel.app/",
  },
  // {
  //   id: 5,
  //   title: "todo-app",
  //   des: "",
  //   img: "/p4.png",
  //   iconLists: ["/html.svg", "/css.svg", "/js.svg"],
  //   link: "https://jit7445.github.io/mytaskweb/",
  // },
];





export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:'https://github.com/jit7445'
  },
  {
    id: 3,
    img: "/link.svg",
    link:'https://www.linkedin.com/in/jitender-verma-25a231271/'
  },
];
