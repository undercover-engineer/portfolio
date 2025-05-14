import SectionDivider from "../common/sectionDivider";

export default function About() {
  return (
    <div id="about">
      <SectionDivider title="About Me" />
      <div className="flex mt-10 justify-center xl:gap-x-10">
        <div className="w-11/12 md:w-3/5 lg:w-1/2 xl:w-2/5">
          <p className="font-light max-sm:text-sm sm:max-w-2xl sm:text-xl">
            I'm a passionate Full-Stack Software Engineer. I specialize in
            building robust, scalable web applications using technologies like
            React, Node.js, and PostgreSQL. With over 4 years of experience,
            I've worked on everything from startups to enterprise systems. I
            love clean code, great UX, and solving real-world problems through
            <br />
            <br />
            building robust, scalable web applications using technologies like
            React, Node.js, and PostgreSQL. With over 4 years of experience,
            I've worked on everything from startups to enterprise systems. I
            love clean code, great UX, and solving real-world problems through
            tech.
          </p>
        </div>
        <img
          src="/assets/logo.svg"
          alt="avatar"
          className="max-sm:hidden w-72 h-72 lg:pr-16"
        />
      </div>
    </div>
  );
}
