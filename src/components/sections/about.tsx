import SectionDivider from "../common/sectionDivider";

export default function About() {
  return (
    <div id="about">
      <SectionDivider title="About Me" />
      <div className="flex mt-10 justify-center xl:gap-x-10">
        <div className="w-11/12 md:w-3/5 lg:w-1/2 xl:w-2/5">
          <p className="font-light max-sm:text-sm sm:max-w-2xl sm:text-xl">
            I'm a dedicated Full-Stack Software Engineer with over 3 years of
            experience building scalable, user-focused applications. My core
            strengths lie in technologies like React, Node.js, and PostgreSQL,
            and I have a solid track record working across both startups and
            enterprise systems.
            <br />
            <br />I take pride in writing clean, efficient, and maintainable
            code, and I'm passionate about crafting intuitive user experiences.
            Whether I'm crafting front-end interfaces or architecting back-end
            services, I approach every project with a blend of technical
            precision and creative problem-solving.
          </p>
        </div>
        <div className="align-bottom flex items-center max-sm:hidden">
          <img
            src="/assets/logo.svg"
            alt="avatar"
            className="max-sm:hidden w-72 h-72 lg:pr-16"
          />
        </div>
      </div>
    </div>
  );
}
