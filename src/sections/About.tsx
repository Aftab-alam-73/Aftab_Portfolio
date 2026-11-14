"use client";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";

import Image from "next/image";
import BookImage from "../assets/images/book-cover.jpg";
import JavascriptIcon from "../assets/icons/square-js.svg";
import HTMLIcon from "../assets/icons/html5.svg";
import CSSIcon from "../assets/icons/css3.svg";
import GithubIcon from "../assets/icons/github.svg";

import ReactIcon from "../assets/icons/react.svg";

import mapImage from "../assets/images/map.png";
import smileMemoji from "../assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

import { motion } from "framer-motion";
import { useRef } from "react";
import NodeIcon from "../assets/icons/node.svg";
import NextjsIcon from "../assets/icons/nextjs.svg";
import TypescriptIcon from "../assets/icons/typescript.svg";
import ExpressIcon from "../assets/icons/express.svg";
import NestjsIcon from "../assets/icons/nestjs.svg";
import SocketioIcon from "../assets/icons/socketio.svg";
import RedisIcon from "../assets/icons/redis.svg";
import KafkaIcon from "../assets/icons/kafka.svg";
import PostgresIcon from "../assets/icons/postgresql.svg";
import MongoIcon from "../assets/icons/mongodb.svg";
import PrismaIcon from "../assets/icons/prisma.svg";
import DockerIcon from "../assets/icons/docker.svg";
import NginxIcon from "../assets/icons/nginx.svg";
import AwsIcon from "../assets/icons/aws.svg";

const toolboxItems = [
  { title: "TypeScript", iconType: TypescriptIcon },
  { title: "Node.js", iconType: NodeIcon },
  { title: "Kafka", iconType: KafkaIcon },
  { title: "Redis", iconType: RedisIcon },
  { title: "PostgreSQL", iconType: PostgresIcon },
  { title: "Express", iconType: ExpressIcon },
  { title: "NestJS", iconType: NestjsIcon },
  { title: "Socket.IO", iconType: SocketioIcon },
  { title: "MongoDB", iconType: MongoIcon },
  { title: "Prisma", iconType: PrismaIcon },
  { title: "Docker", iconType: DockerIcon },
  { title: "Nginx", iconType: NginxIcon },
  { title: "AWS", iconType: AwsIcon },
  { title: "Next.js", iconType: NextjsIcon },
  { title: "React", iconType: ReactIcon },
  { title: "JavaScript", iconType: JavascriptIcon },
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CSSIcon },
  { title: "GitHub", iconType: GithubIcon },
];

const hobbies = [
  {
    title: "playing Cricket",
    emoji: "🏏",
    left: "5%",
    top: "0%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "50%",
    top: "10%",
  },
  // {
  //   title: "Hiking",
  //   emoji: "🚶",
  //   left: "10%",
  //   top: "35%",
  // },
  {
    title: "Music",
    emoji: "🎵",
    left: "35%",
    top: "40%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "70%",
    top: "45%",
  },
  {
    title: "System Design",
    emoji: "🏗️",
    left: "5%",
    top: "70%",
  },
  {
    title: "Traveling",
    emoji: "✈️",
    left: "60%",
    top: "70%",
  },
  // {
  //   title: "Fitness",
  //   emoji: "🤸‍♀️",
  //   left: "5%",
  //   top: "65%",
  // },
];
export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <div id="about" className="py-20 lg:py-28 ">
      <div className="container">
        <SectionHeader
          eyebrow="About me"
          title="A glimpse into my world."
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="p-6 md:p-8">
            <h3 className="font-serif text-2xl md:text-3xl">My Story</h3>
            <div className="mt-4 max-w-4xl space-y-4 text-sm leading-relaxed text-white/60 md:text-base">
              <p>
                I&apos;m a backend-focused full-stack developer from Lucknow,
                now based in Noida. I started with the MERN stack, then moved
                into backend engineering, where I got hooked on the problems
                that appear when real users arrive: many requests at once,
                money that has to stay correct, and real-time features that
                have to stay in sync.
              </p>
              <p>
                Outside of coding, I enjoy exploring system design concepts,
                listening to music, and traveling. I&apos;m currently looking
                for a backend or full-stack role where I can work on scalable,
                distributed systems.
              </p>
            </div>
          </Card>
          <div className=" grid grid-cols-1 gap-8 md:grid md:grid-cols-5  lg:grid-cols-3">
            <Card className="flex h-[320px] flex-col md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective."
              />

              <div className="min-h-0 flex-1 flex justify-center px-6 pb-4">
                <Image
                  src={BookImage}
                  alt="Book cover"
                  className="h-full w-auto max-w-full object-contain"
                />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="The technologies I use across the stack, with a focus on scalable backends."
              />
              <ToolboxItems
                items={toolboxItems}
                className="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6 animate-move-right [animation-duration:30s]"
                WrapperclassName="-translate-x-1/2"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className=""
              />
              <div className="relative flex-1 " ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex  items-center  gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full p-1.5 px-6 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map image"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20  rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 afte:content-[''] after:absolute after:inset-0 after:outline after:ouline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 ">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping "></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={smileMemoji} alt="smilememoji" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
