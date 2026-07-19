import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { Fragment } from "react";

const principles = [
  {
    title: "Design for Scale First",
    text: "I think about horizontal scaling, statelessness, and data partitioning before the first line of code — so systems grow without rewrites.",
  },
  {
    title: "Event-Driven by Default",
    text: "I decouple services with queues and pub/sub (Kafka, Redis) to build resilient, asynchronous workflows that fail gracefully.",
  },
  {
    title: "Real-time, Low-Latency",
    text: "WebSockets plus Redis pub/sub keep thousands of concurrent clients in sync across multiple server instances at <120ms p99.",
  },
  {
    title: "Consistency Under Concurrency",
    text: "For wallets, economies, and payouts I design transaction-safe systems — correctness holds even under heavy concurrent load.",
  },
  {
    title: "Own It End-to-End",
    text: "From system-design decisions to deployment and cross-team API/socket integration, I take full ownership of what I ship.",
  },
];

export const PrinciplesSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="How I Build"
          title="Engineering Principles"
          description="The ideas that guide the way I design and scale backend systems."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 flex-none animate-move-left [animation-duration:70s]">
            {[
              ...new Array(2).fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {principles.map((principle) => (
                    <Card
                      key={principle.title}
                      className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                    >
                      <div className="font-serif text-xl bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                        {principle.title}
                      </div>
                      <p className="mt-4 md:mt-6 text-sm md:text-base text-white/70">
                        {principle.text}
                      </p>
                    </Card>
                  ))}
                </Fragment>
              )),
            ]}
          </div>
        </div>
      </div>
    </div>
  );
};
