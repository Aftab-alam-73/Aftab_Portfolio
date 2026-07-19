import Image from "next/image";
import CheckCircleIcon from "../assets/icons/check-circle.svg";
import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg";
import grainImage from "../assets/images/grain.jpg";
import { Card } from "@/components/Card";
import mirrorTube from "@/assets/images/mirrortube.png";
import bookMyFlight from "@/assets/images/bookmyflight.png";
import tabBlock from "@/assets/images/tabblock.png";

import SavenHavenImage from "@/assets/images/seven-haven.webp";
import TheWild from "@/assets/images/the-wild.webp";
import SharefunImage from "@/assets/images/sharefun.webp";


// ─────────────────────────────────────────────────────────────
// TODO (Aftab): paste your real deployed URLs below.
// While these stay as "#", the "Visit Live Site" button is hidden
// automatically, so nothing broken ever shows to a recruiter.
const GAMERGE_LIVE = "https://gamerge.ai";
const SEVEN_HAVEN_LIVE = "https://play.google.com/store/apps/details?id=com.GKDGameDevelopers.SevenHaven&hl=en_IN";
// ─────────────────────────────────────────────────────────────

const featuredProjects = [
  {
    company: "SDLC Corp",
    year: "2025",
    title: "Gamerge",
    subtitle: "Real-time Multiplayer Crypto Gaming Platform",
    role: "Sole Backend Engineer",
    results: [
      "Architected the entire backend for a crypto-based (USDT/ETH) multiplayer platform handling matchmaking, tournaments, and live gameplay for 5,000+ concurrent users.",
      "Built a low-latency matchmaking engine with bot fallback (10s SLA), cutting average player wait time by ~40%.",
      "Designed a transaction-safe wallet for entry fees, rewards, and payouts with zero double-spend across 10,000+ daily transactions.",
      "Scaled real-time gameplay and chat horizontally via Redis pub/sub (Socket.IO adapter), sustaining ~3,000 events/sec at <120ms p99.",
    ],
    tech: ["TypeScript", "Node.js", "Express", "MongoDB", "Socket.IO", "Redis", "AWS"],
    links: [{ label: "Visit Live Site", href: GAMERGE_LIVE }],
    image: null,
  },
  {
    company: "SDLC Corp",
    year: "2026",
    title: "Seven Haven",
    subtitle: "Real-time Multiplayer Card Gaming Platform",
    role: "Lead Backend Engineer",
    results: [
      "Led the entire backend for a card-gaming platform with matchmaking, tournaments, clan wars, and multiple game modes (Alpha, Beta, Best-of-7).",
      "Built real-time game-state synchronization and 1:1 / clan chat, using Redis pub/sub to keep 4+ server instances consistent under load.",
      "Designed a horizontally scalable architecture so real-time events stay consistent as the platform grows.",
      "Implemented clan systems (group chat, challenges, clan wars) powering competitive multiplayer engagement.",
    ],
    tech: ["TypeScript", "Node.js", "Express", "MongoDB", "Socket.IO", "Redis"],
    links: [{ label: "Visit Live Site", href: SEVEN_HAVEN_LIVE }],
    image: SavenHavenImage,
  },
  {
    company: "SDLC Corp",
    year: "2025",
    title: "Sharefun",
    subtitle: "Real-time Social & Voice Chat Platform",
    role: "Backend Architect (100% ownership)",
    results: [
      "Owned 100% of the backend architecture for a live voice/social platform with rooms, chat, and interactive engagement features.",
      "Engineered a room-based voice system (RongCloud) handling mic allocation, seat management, and live state sync across 500+ concurrent rooms.",
      "Built role-based access control (member / admin / super-admin) and an in-app economy (coins, gifting, rewards) that lifted engagement by ~30%.",
      "Designed event-driven workflows for notifications, rewards distribution, and activity feeds at scale.",
    ],
    tech: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Socket.IO", "Redis", "AWS"],
    links: [],
    image: SharefunImage,
  },
  {
    company: "SDLC Corp",
    year: "2025",
    title: "The Wild",
    subtitle: "Real-time Gaming Platform",
    role: "Backend Engineer",
    results: [
      "Designed and built core backend REST APIs powering gameplay and user flows for thousands of players.",
      "Optimized API performance through query tuning and caching, reducing average response time by ~30%.",
      "Structured services around clean, event-driven patterns for maintainability and scale.",
    ],
    tech: ["TypeScript", "Node.js", "Express"],
    links: [],
    image: TheWild,
  },
];

const otherProjects = [
  {
    title: "BookMyFlight",
    year: "2024",
    description:
      "Real-time flight-tracking system: users subscribe to a flight and receive live status updates via email, SMS, and push, built on an event-streaming pipeline.",
    tech: ["Node.js", "Kafka", "Redis"],
    github: "https://github.com/Aftab-alam-73/BookMyFlight",
    image: bookMyFlight,
  },
  {
    title: "TabBlock",
    year: "2024",
    description:
      "Detects and resolves conflicts when the same app is opened across multiple browser tabs in real time using Socket.IO, with Firebase auth and activity logging.",
    tech: ["Socket.IO", "Firebase", "React"],
    github: "https://github.com/Aftab-alam-73/TabBlock",
    image: tabBlock,
  },
  {
    title: "MirrorTube",
    year: "2024",
    description:
      "Full-stack video-sharing app (YouTube-style) with channels, uploads, comments, likes/subscriptions, and light/dark themes.",
    tech: ["MERN", "MongoDB", "React"],
    github: "https://github.com/Aftab-alam-73/YouTube_Clone",
    image: mirrorTube,
  },
];

export const ProjectsSection = () => {
   return (
     <section id="projects" className="pb-16 lg:py-24">
       <div className="container">
         <div className="flex justify-center">
           <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
             Production Systems
           </p>
         </div>
         <h2 className="font-serif text-3xl mt-6 text-center">Featured Projects</h2>
         <p className="text-white/60 mt-4 max-w-md mx-auto text-center md:text-lg lg:text-xl">
           Real-time, high-concurrency platforms I designed and owned end-to-end.
         </p>
 
         <div className="flex flex-col mt-10 md:mt-20 gap-20">
           {featuredProjects.map((project, projectIndex) => {
             const liveLinks = project.links.filter((l) => l.href && l.href !== "#");
             return (
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
                     {/* Header row: company • year on the left, live-site button on the right */}
                     <div className="flex items-start justify-between gap-4">
                       <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 text-transparent bg-clip-text font-bold uppercase tracking-widest text-sm">
                         <span>{project.company}</span>
                         <span>&bull;</span>
                         <span>{project.year}</span>
                       </div>
                       {liveLinks.length > 0 && (
                         <div className="flex flex-wrap justify-end gap-2 shrink-0">
                           {liveLinks.map((link) => (
                             <a
                               href={link.href}
                               target="_blank"
                               rel="noopener noreferrer"
                               key={link.label}
                             >
                               <button className="bg-white h-9 rounded-lg text-gray-950 text-xs md:text-sm font-semibold inline-flex items-center justify-center px-3 gap-1.5 hover:bg-white/90 transition whitespace-nowrap">
                                 <span>{link.label}</span>
                                 <ArrowUpRightIcon className="size-4" />
                               </button>
                             </a>
                           ))}
                         </div>
                       )}
                     </div>
                     <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5  ">
                       {project.title}
                     </h3>
                     <p className="text-white/60 text-sm md:text-base mt-1">
                       {project.subtitle}
                     </p>
                     <p className="text-emerald-300 text-xs md:text-sm font-semibold uppercase tracking-wider mt-2">
                       {project.role}
                     </p>
                     <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                     <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                       {project.results.map((result) => (
                         <li
                           key={result}
                           className=" flex  gap-2 text-sm text-white/50 md:text-base"
                         >
                           <CheckCircleIcon className="size-5 md:size-6 flex-shrink-0" />
                           <span>{result}</span>
                         </li>
                       ))}
                     </ul>
                     <div className="flex flex-wrap gap-2 mt-6">
                       {project.tech.map((t) => (
                         <span
                           key={t}
                           className="text-xs md:text-sm font-medium text-white/70 border border-white/15 rounded-full px-3 py-1"
                         >
                           {t}
                         </span>
                       ))}
                     </div>
                   </div>
                   <div className="relative">
                     {project.image ? (
                       <Image
                         className="mt-8 -mb-4 md:-mb-0  lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                         src={project.image}
                         alt={project.title}
                       />
                     ) : (
                       <div className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-full rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center min-h-[220px] overflow-hidden">
                         <div
                           className="absolute inset-0 opacity-5"
                           style={{ backgroundImage: `url(${grainImage.src})` }}
                         ></div>
                         <span className="font-serif text-2xl md:text-3xl bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                           {project.title}
                         </span>
                         <span className="text-white/30 text-xs mt-2 uppercase tracking-widest">
                           Screenshot coming soon
                         </span>
                       </div>
                     )}
                   </div>
                 </div>
               </Card>
             );
           })}
         </div>
 
         {/* Personal & Academic Projects */}
         <div className="mt-24">
           <h3 className="font-serif text-2xl md:text-3xl text-center">
             Personal &amp; Academic Projects
           </h3>
           <p className="text-white/60 mt-3 max-w-md mx-auto text-center">
             Earlier builds where I explored real-time features and full-stack development.
           </p>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
             {otherProjects.map((project) => (
               <Card key={project.title} className="p-6 flex flex-col">
                 <div className="flex items-baseline justify-between">
                   <h4 className="font-serif text-xl">{project.title}</h4>
                   <span className="text-white/40 text-sm">{project.year}</span>
                 </div>
                 <p className="text-white/50 text-sm mt-3 flex-1">{project.description}</p>
                 <div className="flex flex-wrap gap-2 mt-4">
                   {project.tech.map((t) => (
                     <span
                       key={t}
                       className="text-xs font-medium text-white/60 border border-white/15 rounded-full px-2.5 py-0.5"
                     >
                       {t}
                     </span>
                   ))}
                 </div>
                 <a
                   href={project.github}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="mt-5"
                 >
                   <button className="w-full h-10 rounded-lg border border-white/15 text-white font-semibold inline-flex items-center justify-center gap-2 hover:bg-white/5 transition">
                     <span>View GitHub</span>
                     <ArrowUpRightIcon className="size-4" />
                   </button>
                 </a>
               </Card>
             ))}
           </div>
         </div>
       </div>
     </section>
   );
 };
