import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import CheckCircleIcon from "../assets/icons/check-circle.svg";

const experience = [
  {
    role: "Full Stack Developer",
    company: "SDLC Corp",
    period: "Jan 2025 – Jul 2026",
    location: "Noida",
    points: [
      "Led 4 real-time gaming and social platforms end to end; sole backend developer on 3 of them, and delivered 3.",
      "Owned database design, API design, real-time services (Socket.IO, Redis pub/sub), CI/CD (Docker, GitHub Actions) and AWS deployment (EC2, S3, Lambda).",
      "Worked with React/Next.js frontend developers to define API and socket contracts.",
    ],
  },
  {
    role: "Software Development Engineer 1",
    company: "Applore Technologies",
    period: "May 2024 – Nov 2024",
    location: "Noida",
    points: [
      "Built end-to-end web applications with Next.js/React and Node.js/Express/NestJS.",
      "Designed REST APIs with Redis caching and modeled data in MongoDB.",
    ],
  },
  {
    role: "Freelance & Personal Projects",
    company: "",
    period: "Jan 2023 – Apr 2024, and 2026",
    location: "Lucknow / Remote",
    points: [
      "Built and deployed full-stack applications (React/Next.js, Node.js, PostgreSQL/MongoDB), owning requirements, design and delivery.",
      "Built ASI Oman (2026), a live website and admin platform for an HVAC services company in Oman.",
      "Designed BookMyFlight, a real-time flight-tracking system using Kafka and Redis.",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Career"
          title="Experience"
          description="Where I've worked and what I owned."
        />
        <div className="mt-12 lg:mt-20 flex flex-col gap-6 max-w-3xl mx-auto">
          {experience.map((job) => (
            <Card key={job.role} className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                <h3 className="font-serif text-xl md:text-2xl">
                  {job.role}{" "}
                  {job.company && (
                    <span className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                      @ {job.company}
                    </span>
                  )}
                </h3>
                <p className="text-sm text-white/50">
                  {job.period} &bull; {job.location}
                </p>
              </div>
              <ul className="flex flex-col gap-3 mt-5">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm md:text-base text-white/60">
                    <CheckCircleIcon className="size-5 md:size-6 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
          <Card className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
              <h3 className="font-serif text-xl md:text-2xl">Education</h3>
              <p className="text-sm text-white/50">2019 – 2023 &bull; Lucknow</p>
            </div>
            <p className="mt-4 text-sm md:text-base text-white/60">
              B.Tech, Computer Science &mdash; Bansal Institute of Engineering and Technology (CGPA 7.16)
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
