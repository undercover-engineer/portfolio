type SectionDividerProps = {
  title: string;
};

export default function SectionDivider({ title }: SectionDividerProps) {
  return (
    <div className="flex items-center justify-center gap-x-3.5 md:gap-x-10 mt-16 md:mt-24">
      <h2 className=" text-3xl font-bold md:text-5xl">{title}</h2>
      <div className="bg-[#7675A5] opacity-50 h-[1px] w-2/5 md:w-3/5"></div>
    </div>
  );
}
