import { Icon } from "@iconify/react";
import { VerticalDivider } from "../common/verticalDivider";

const SocialLinks = () => {
  return (
    <div className="text-[#8812d7] flex flex-col gap-y-6">
      <a
        href="https://www.linkedin.com/in/melinda-mazongo/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/linkedin.svg"
          alt="LinkedIn logo"
          className="w-12 h-12"
        />
      </a>
      <a
        href="https://github.com/undercover-engineer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/github.svg"
          alt="GithHub logo"
          className="w-16 h-16"
        />
      </a>

      <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
        <img src="/assets/resume.svg" alt="paper image" className="w-10 h-10" />
      </a>
    </div>
  );
};

export default function Hero() {
  return (
    <>
      <div className="flex justify-evenly pt-24 md:pt-44 max-md:w-90vw">
        <div className="flex flex-col ml-20 items-center gap-y-6 max-md:hidden">
          <SocialLinks />
          <VerticalDivider />
        </div>
        <div className="md:w-10/12 md:ml-20 px-2">
          <div className="flex items-center justify-center gap-1">
            <h3 className="text-orange1 text-xl md:text-2xl">
              Hi there, I'm Melinda Mazongo
            </h3>
            <div className="text-purple1">
              <Icon icon="mdi:hand-wave" />
            </div>
          </div>
          <h1 className="text-2xl md:text-4xl text-center my-4 md:my-8">
            Full Stack Software Engineer{" "}
          </h1>
          <p className="sm:text-xl 2xl:text-2xl text-center font-light max-sm:text-sm sm:max-w-2xl px-2 sm:mx-auto pb-10">
            I specialize in building web applications that solve real-world
            problems through clean code, thoughtful design and seamles user
            experiences. From intuitive interfaces to robust backend systems.
            Let's build something meaningful together.
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-28 max-md:hidden">
          <div className="rotate-90 text-sm whitespace-nowrap mt-24">
            melindamazongo@gmail.com
          </div>
          <VerticalDivider />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex lg:gap-x-6 gap-x-2 overflow-hidden justify-center lg:w-[85%]">
          <img src="/assets/javascript.svg" alt=" JavaScript logo" />
          <img src="/assets/react.svg" alt="React logo" />
          <img src="/assets/tailwind.svg" alt="Tailwind logo" />
          <img src="/assets/github.svg" alt="GitHub logo" />
          <img
            src="/assets/typescript.svg"
            alt="Typescript logo"
            className="max-sm:hidden"
          />
          <img src="/assets/nodejs.svg" alt="NodeJS logo" />
          <img src="/assets/jira.svg" alt="" className="w-10 h-10" />
          <img
            src="/assets/docker.svg"
            alt="Docker logo"
            className="max-sm:hidden"
          />
        </div>
      </div>
    </>
  );
}
