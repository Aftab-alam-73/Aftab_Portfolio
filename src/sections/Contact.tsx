import ArrowUpRight from "../assets/icons/arrow-up-right.svg";
import grainImage from "../assets/images/grain.jpg";

const EMAIL = "aftabalam735530@gmail.com";
const PHONE_DISPLAY = "+91 73553 07548";
const PHONE_TEL = "+917355307548";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20 ">
      <div className="container ">
        <div className="  bg-gradient-to-tr from-emerald-300 to-sky-400 text-gray-950 py-8 px-10 rounded-3xl text-center md:text-left relative  overflow-hidden ">
          <div
            className="absolute inset-0 z-0 opacity-5"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>

          <div className="relative z-20 flex flex-col md:flex-row gap-8 md:gap-16  items-center ">
            <div>
              <h2 className=" font-serif  text-2xl md:text-3xl  ">
                Let&apos;s build something that scales.
              </h2>
              <p className="text-sm mt-2 md:text-base ">
                Open to full-stack and backend roles. I&apos;m based in Noida,
                India, and available to join immediately.
              </p>
              <ul className="mt-4 text-sm md:text-base font-medium flex flex-col gap-1">
                <li>
                  Email:{" "}
                  <a
                    className="underline underline-offset-2"
                    href={`mailto:${EMAIL}`}
                  >
                    {EMAIL}
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a
                    className="underline underline-offset-2"
                    href={`tel:${PHONE_TEL}`}
                  >
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a
                    className="underline underline-offset-2"
                    href="https://www.linkedin.com/in/aftab-alam-64a58b231/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  {" • "}
                  <a
                    className="underline underline-offset-2"
                    href="https://github.com/Aftab-alam-73/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-max">
              <a
                href={`mailto:${EMAIL}?subject=Hello from your portfolio&body=Hi Aftab, I came across your portfolio and would like to connect.`}
                className=" inline-flex items-center justify-center gap-2 px-6 h-12 bg-gray-900 rounded-xl text-white w-full md:w-max border border-gray-900  "
              >
                <span className="font-semibold">Email Me</span>
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href="/Aftab_Alam_Resume.pdf"
                download="Aftab_Alam_Resume.pdf"
                className=" inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl text-gray-900 w-full md:w-max border border-gray-900  "
              >
                <span className="font-semibold">Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
