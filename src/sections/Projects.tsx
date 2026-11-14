import Image from "next/image";
import type { StaticImageData } from "next/image";
import CheckCircleIcon from "../assets/icons/check-circle.svg";
import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg";
import grainImage from "../assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import mirrorTube from "@/assets/images/mirrortube.png";
import bookMyFlight from "@/assets/images/bookmyflight.png";
import tabBlock from "@/assets/images/tabblock.png";

import SavenHavenImage from "@/assets/images/seven-haven.webp";
import TheWild from "@/assets/images/the-wild.webp";
import SharefunImage from "@/assets/images/sharefun.webp";
import AsiomanImage from "@/assets/images/asioman.png";


const GAMERGE_LIVE = "https://gamerge.ai";
const SEVEN_HAVEN_LIVE =
  "https://play.google.com/store/apps/details?id=com.GKDGameDevelopers.SevenHaven&hl=en_IN";
const ASI_OMAN_LIVE = "https://asi-oman-frontend.vercel.app/";

type FeaturedProject = {
  company: string;
  year: string;
  title: string;
  subtitle: string;
  role: string;
  results: string[];
  tech: string[];
  links: { label: string; href: string }[];
  image: StaticImageData | null;
  diagram?: boolean; // show the architecture diagram instead of an image
  status?: string; // small badge under the role (e.g. project outcome)
  fallbackNote?: string; // text shown on the placeholder tile when there is no image
};

const featuredProjects: FeaturedProject[] = [
  {
    company: "SDLC Corp",
    year: "2025",
    title: "Gamerge",
    subtitle: "Real-time Multiplayer Gaming Platform",
    role: "Backend Developer",
    results: [
      "Built backend features for a crypto-based multiplayer gaming platform: matchmaking, live scoring, result settlement and leaderboards.",
      "Built matchmaking that pairs players safely across servers, and falls back to a bot after a 10-second wait.",
      "Built a transaction-safe wallet for entry fees, rewards and payouts, with idempotent transactions so repeated or simultaneous requests can't double-charge or overdraw a user.",
      "Scaled real-time gameplay and chat across services with Redis pub/sub (Socket.IO adapter).",
    ],
    tech: [
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Socket.IO",
      "Redis",
      "AWS",
    ],
    links: [{ label: "Visit Live Site", href: GAMERGE_LIVE }],
    image: null,
    diagram: true,
  },
  {
    company: "SDLC Corp",
    year: "2026",
    title: "Seven Haven",
    subtitle: "Real-time Multiplayer Card Gaming Platform",
    role: "Backend Developer",
    results: [
      "Built backend features for a card-gaming platform: matchmaking, tournaments, clan wars and multiple game modes (Alpha, Beta, Best-of-7).",
      "Built real-time game-state sync and 1:1 / clan chat, using Redis pub/sub so every server instance sees the same events.",
      "Made the real-time layer work across multiple server instances, so the platform can add servers as the player count grows.",
      "Built clan features: group chat, challenges and clan wars.",
    ],
    tech: ["TypeScript", "Node.js", "Express", "MongoDB", "Socket.IO", "Redis"],
    links: [{ label: "View on Google Play", href: SEVEN_HAVEN_LIVE }],
    image: SavenHavenImage,
  },
  {
    company: "Freelance \u2022 Client Project",
    year: "2026",
    title: "ASI Oman",
    subtitle: "Website & Admin Platform for an HVAC Services Company in Oman",
    role: "Full-Stack Developer (solo)",
    results: [
      "Built the whole stack solo: a TypeScript/Express/MongoDB REST API (20+ endpoints) and a React frontend with a protected admin dashboard.",
      "Designed a quote-request workflow: public form, validated and stored in MongoDB, with email alerts to the owners sent best-effort so no lead is lost if email fails.",
      "Implemented JWT access/refresh auth, bcrypt hashing, three-tier RBAC (user, admin, super admin), Zod validation, Helmet, CORS, and rate limiting.",
      "Added login-gated reviews with admin moderation (pending / approved / rejected) to prevent fake reviews.",
    ],
    tech: [
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "React",
      "JWT",
      "Zod",
    ],
    links: [{ label: "Visit Live Site", href: ASI_OMAN_LIVE }],
    image: AsiomanImage,
    fallbackNote: "Live client project",
  },
  {
    company: "SDLC Corp",
    year: "2025",
    title: "The Wild",
    subtitle: "Real-time Gaming Platform",
    role: "Backend Developer (100% ownership of backend)",
    results: [
      "Designed and built core backend REST APIs powering gameplay and user flows.",
      "Improved API performance through query tuning and caching.",
      "Structured services around clean, event-driven patterns for maintainability and scale.",
    ],
    tech: ["TypeScript", "Node.js", "Express.js","MongoDB"],
    links: [],
    image: TheWild,
  },
  {
    company: "SDLC Corp",
    year: "2025",
    title: "Sharefun",
    subtitle: "Real-time Social & Voice Chat Platform",
    role: "Backend Developer (100% ownership)",
    status: "Discontinued by the client for commercial reasons",
    results: [
      "Owned 100% of the backend architecture for a live voice and social platform with rooms, chat, and interactive engagement features.",
      "Engineered a room-based voice system (RongCloud) handling mic allocation, seat management, and live state sync.",
      "Built role-based access control (member / admin / super-admin) and an in-app economy (coins, gifting, rewards).",
      "Designed event-driven workflows for notifications, rewards distribution, and activity feeds.",
    ],
    tech: [
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Socket.IO",
      "Redis",
      "AWS",
    ],
    links: [],
    image: SharefunImage,
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
            Professional &amp; Client Work
          </p>
        </div>
        <h2 className="font-serif text-3xl mt-6 text-center">
          Featured Projects
        </h2>
        <p className="text-white/60 mt-4 max-w-md mx-auto text-center md:text-lg lg:text-xl">
          Real-time platforms and client products I designed, built, and shipped
          across APIs, data, and deployment.
        </p>

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {featuredProjects.map((project, projectIndex) => {
            const liveLinks = project.links.filter(
              (l) => l.href && l.href !== "#",
            );
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
                    {project.status && (
                      <p className="inline-block mt-2 text-xs text-white/60 border border-white/15 rounded-full px-3 py-1">
                        {project.status}
                      </p>
                    )}
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
                    {project.diagram ? (
                      <div className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-full rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-4 md:p-6 min-h-[260px] overflow-hidden">
                        <ArchitectureDiagram className="w-full h-auto max-h-full" />
                      </div>
                    ) : project.image ? (
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
                        {project.fallbackNote && (
                          <span className="text-white/30 text-xs mt-2 uppercase tracking-widest">
                            {project.fallbackNote}
                          </span>
                        )}
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
            Earlier builds where I explored real-time features and full-stack
            development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {otherProjects.map((project) => (
              <Card key={project.title} className="p-6 flex flex-col">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-serif text-xl">{project.title}</h4>
                  <span className="text-white/40 text-sm">{project.year}</span>
                </div>
                <p className="text-white/50 text-sm mt-3 flex-1">
                  {project.description}
                </p>
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
