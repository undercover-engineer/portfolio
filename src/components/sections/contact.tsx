import SectionDivider from "../common/sectionDivider";

export default function Contact() {
  return (
    <div>
      <SectionDivider title="Contact" />
      <p className="font-semibold text-xl text-[#8812D7] md:text-2xl text-center my-8 md:mt-12">
        Get in touch with me
      </p>

      <div className="text-center">
        <a
          href="mailto:melindamazongo@gmail.com"
          className="bg-orange1 text-white font-bold rounded-3xl py-2 px-10 md:py-3 md:px-24 inline-block"
        >
          Email
        </a>
      </div>
      <hr className="mt-10 mb-8 md:mt-24 md:mb-20 border-t-1 border-[#7675A5] opacity-50 lg:w-4/5 w-11/12 mx-auto" />
    </div>
  );
}
