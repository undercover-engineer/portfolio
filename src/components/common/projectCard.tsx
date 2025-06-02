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
  appStore?: string;
  googlePlay?: string;
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
  appStore,
  googlePlay,
}: ProjectCardProps) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className="sticky h-dvh flex flex-col justify-center items-center top-0"
    >
      <motion.div
        className="flex bg-[#F1F4F9] mx-auto w-11/12 lg:max-w-9/12 gap-x-8 mb-8 pl-5 pr-2 py-4 rounded-lg relative -top-1/4 border-2 max-sm:flex-col"
        style={{ scale, borderColor: color, top: `calc(-10% + ${i * 20}px)` }}
      >
        <div className="overflow-hidden">
          <div
            className="rounded-2xl p-10 flex items-center justify-center h-full"
            style={{ backgroundColor: color }}
          >
            <img
              src={image}
              alt="Project Image"
              className="max-w-96 h-80 object-cover rounded-2xl"
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl lg:text-3xl mb-3 lg:mb-5 max-sm:mt-4">
            {title}
          </h2>
          <p className="max-sm:text-sm sm:max-w-2xl sm:text-xl font-light pr-6 lg:pr-20">
            {description}
          </p>
          <div className="md:space-x-12 space-x-4 my-3 lg:my-5 font-medium max-sm:grid-cols-3">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex max-sm:gap-x-1.5 gap-x-8 overflow-hidden">
            {sourceCode && (
              <a href={sourceCode} target="_blank" rel="noopener noreferrer">
                <div className="flex bg-white gap-x-2 rounded items-center p-3 text-purple1 h-full">
                  <Icon icon="mdi:github" />
                  <span>GitHub </span>
                </div>
              </a>
            )}
            <a href={liveDemo} target="_blank" rel="noopener noreferrer">
              <div className="flex bg-white  gap-x-2 items-center p-3 text-orange1 rounded h-full">
                <Icon icon="majesticons:open" />
                <span className="max-sm:text-sm">Preview</span>
              </div>
            </a>
            {appStore && (
              <a href={appStore} target="_blank" rel="noopener noreferrer">
                <div className="flex bg-white gap-x-2 items-center p-3 text-purple1 rounded h-full">
                  <Icon icon="mdi:apple" className="w-6 h-6" />
                  <span className="max-sm:text-sm">App Store</span>
                </div>
              </a>
            )}
            {googlePlay && (
              <a href={googlePlay} target="_blank" rel="noopener noreferrer">
                <div className="flex bg-white gap-x-2 items-center p-3 text-black rounded h-full">
                  <Icon icon="mdi:google-play" className="w-6 h-6" />
                  <span className="max-sm:text-sm">Google Play</span>
                </div>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
