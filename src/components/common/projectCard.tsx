import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, MotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

type ProjectCardProps = {
  i: number;
  range: number[];
  targetScale: number;
  progress: MotionValue<number>;
  title: string;
  description: string;
  image: string;
  tags: string[];
  sourceCode?: string;
  liveDemo: string;
  color: string;
};

export default function ProjectCard({
  i,
  range,
  targetScale,
  progress,
  title,
  description,
  image,
  tags,
  sourceCode,
  liveDemo,
  color,
}: ProjectCardProps) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className="sticky h-dvh  flex flex-col justify-center items-center top-0"
    >
      <motion.div
        className="flex bg-[#F1F4F9] mx-auto w-11/12 lg:max-w-9/12 gap-x-8 mb-8 pl-5 pr-2 py-4 rounded-lg relative -top-1/4 "
        style={{ scale, top: `calc(-10% + ${i * 20}px)` }}
      >
        <div className="overflow-hidden">
          <div
            className="rounded-2xl p-2 flex items-center justify-center h-full"
            style={{ backgroundColor: color }}
          >
            <img
              src={image}
              alt="Project Image"
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-2xl lg:text-3xl mb-3 lg:mb-5">
            {title}
          </h3>
          <p className="text-xl font-normal pr-6 lg:pr-20">{description}</p>
          <div className="space-x-12 my-3 lg:my-5 font-medium">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-x-8">
            {sourceCode && (
              <a href={sourceCode} target="_blank" rel="noopener noreferrer">
                <div className="flex bg-white gap-x-2 rounded items-center p-3 text-purple1">
                  <Icon icon="mdi:github" />
                  <span>GitHub </span>
                </div>
              </a>
            )}
            <a href={liveDemo} target="_blank" rel="noopener noreferrer">
              <div className="flex bg-white  gap-x-2 items-center p-3 text-orange1 rounded">
                <Icon icon="majesticons:open" />
                <span>Preview</span>
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
