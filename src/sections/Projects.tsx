import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
// import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
// import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "../assets/icons/check-circle.svg";
import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg";
import grainImage from "../assets/images/grain.jpg";
import { Card } from "@/components/Card";
import mySchedulerrLandingPage from "@/assets/images/my-schedulerr.png";
import mirrorTube from "@/assets/images/mirrortube.png";
import bookMyFlight from "@/assets/images/bookmyflight.png";
import tabBlock from "@/assets/images/tabblock.png";

const portfolioProjects = [
  {
    company: "Personal Projects",
    year: "2024",
    title: "MirrorTube",
    results: [
      { title: "User can create, mangage their channel ." },
      { title: "User can updoad video,delete,add comment,like,dislike on video." },
      { title: "User can play video, subscribe other's channel. " },
      { title: "There is a light dark theme also for user convineince. " },
    ],
    link1: "https://65e89fcf6d9dcd1e4856f8bd--bright-cheesecake-57616f.netlify.app/",
    link2:"https://github.com/Aftab-alam-73/YouTube_Clone",
    image: mirrorTube,
  },
  {
    company: "Personal Projects",
    year: "2024",
    title: "BookMyFlight",
    results: [
      { title: "Admin can add flights, update flight status." },
      { title: "User can subscribe to a flight for getting real time update" },
      { title: "User can track the flight using flight number" },
      { title: "Real time updates via email,sms, notification " },
    ],
    link1: "https://github.com/Aftab-alam-73/BookMyFlight",
    link2:"https://github.com/Aftab-alam-73/BookMyFlight",
    image: bookMyFlight,
  },
  {
    company: "Personal Projects",
    year: "2024",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link1: "https://saas-website-dark-landing-page-tau.vercel.app/",
    link2:"https://github.com/Aftab-alam-73/Saas_Landing_Page",
    image: darkSaasLandingPage,
  },

  {
    company: "Personal Paroject",
    year: "2024",
    title: "My Schedulerr",
    results: [
      { title: "Schedulerr helps you to manage your time effectively." },
      {
        title:
          "Create events ,set your availability,and let others book time with you seamlessly.",
      },
    ],
    link1: " https://my-schedulerr.vercel.app/",
    link2:"https://github.com/Aftab-alam-73/Event_Scheduler",
    image: mySchedulerrLandingPage,
  },
  {
    company: "Personal Paroject",
    year: "2024",
    title: "TabBlock",
    results: [
      { title: "Secure Authentication: Google login integration using Firebase ensures safe and seamless user access." },
      {
        title:
          "Real-Time Conflict Handling: Detects and resolves conflicts when the same app is accessed in multiple tabs using Socket.IO.",
      },
      {
        title:
           "Activity Logging: Logs user actions like app selection and conflicts for monitoring."
      }
    ],
    link1: " https://zingy-piroshki-d17470.netlify.app/",
    link2:"https://github.com/Aftab-alam-73/TabBlock",
    image: tabBlock,
  },

  // {
  //   company: "Innovative Co",
  //   year: "2021",
  //   title: "/",
  //   results: [
  //     { title: "Boosted sales by 20%" },
  //     { title: "Expanded customer reach by 35%" },
  //     { title: "Increased brand awareness by 15%" },
  //   ],
  //   link: "/",
  //   image: lightSaasLandingPage,
  // },
  // {
  //   company: "Quantum Dynamics",
  //   year: "2023",
  //   title: "AI Startup Landing Page",
  //   results: [
  //     { title: "Enhanced user experience by 40%" },
  //     { title: "Improved site speed by 50%" },
  //     { title: "Increased mobile traffic by 35%" },
  //   ],
  //   link: "/",
  //   image: aiStartupLandingPage,
  // },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl mt-6 text-center">
          Featured Projects
        </h2>
        <p className="text-white/60 mt-4 max-w-md mx-auto text-center md:text-lg lg:text-xl">
          See how I transformed concepts into engaging digital experiences.
        </p>

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className=" px-8 pt-8 md:pt-12 md:px-10  lg:pt-16 lg:px-20  sticky "
              style={{ top: `calc(64px + ${projectIndex * 40}px)` }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5 "
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 text-transparent bg-clip-text font-bold uppercase tracking-widest text-sm ">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5  ">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className=" flex  gap-2 text-sm text-white/50 md:text-base"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                  <a href={project.link1} target="_blank">
                    <button className="bg-white h-12 w-full md:w-auto rounded-xl text-gray-950 font-semibold inline-flex items-center justify-center mt-8 -mb-4 px-6 md:-md-0 ">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon />
                    </button>
                  </a>
                  <a href={project.link2} target="_blank">
                    <button className="bg-white h-12 w-full md:w-auto rounded-xl text-gray-950 font-semibold inline-flex items-center justify-center mt-8 -mb-4 px-6 md:-md-0 ">
                      <span>Visit GitHub</span>
                      <ArrowUpRightIcon />
                    </button>
                  </a>
                   

                  </div>
                </div>
                <div className="relative">
                  <Image
                    className="mt-8 -mb-4 md:-mb-0  lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
