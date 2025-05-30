import ProjectCard from "../common/projectCard";
import SectionDivider from "../common/sectionDivider";
import { projectsData } from "../../../src/data";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis/types";

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <div id="projects">
      <SectionDivider title="Projects" />
      <main ref={container} className="relative mt-[5vh]">
        {projectsData.map((project, index) => {
          const targetScale = 1 - (projectsData.length - index) * 0.05;
          return (
            <ProjectCard
              key={index}
              i={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              sourceCode={project.sourceCode}
              liveDemo={project.liveDemo}
              color={project.color}
              appStore={project.appStore}
              googlePlay={project.googlePlay}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
              progress={scrollYProgress}
            />
          );
        })}
      </main>
    </div>
  );
}
