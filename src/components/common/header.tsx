export default function Header() {
  return (
    <ul className="mx-auto max-w-10/12 flex justify-center gap-7 font-medium rounded-3xl shadow-md p-2.5 bg-white mt-12 md:text-lg md:w-md">
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#about">About Me</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
}
