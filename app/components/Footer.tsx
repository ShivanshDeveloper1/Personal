import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const socials = [
  { href: "https://github.com/ShivanshDeveloper1", Icon: FaGithub, label: "GitHub" },
  { href: "https://www.instagram.com/shivanshdeveloper", Icon: FaInstagram, label: "Instagram" },
  { href: "https://www.linkedin.com/in/shivansh-singh-bb1b0b328/", Icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://www.youtube.com/@Shivanshdevloper", Icon: FaYoutube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="flex min-h-[10vh] w-full items-end justify-center overflow-hidden md:min-h-[60vh]">
      {/* w-fit = this box is exactly as wide as the WEBSITE text,
          so the row above lines up with the W (left) and the E (right) */}
      <section className="mx-auto w-fit">
        {/* Top row */}
        <div className="flex w-full items-center justify-between pb-1 md:pb-3">
          <div className="flex items-center gap-3 sm:gap-4 cursor-pointer">
            {socials.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-neutral-700 transition-transform hover:scale-110 hover:text-orange-600
                dark:text-neutral-300 dark:hover:text-orange-400"
              >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            ))}
          </div>

          <p className="text-lg font-extrabold leading-none text-neutral-900 dark:text-white sm:text-xl md:text-2xl">
            <span className="sm:hidden">Dev</span>
            <span className="hidden sm:inline">Developer</span>
          </p>
        </div>

        {/* Big text */}
        <h1
          className="select-none whitespace-nowrap bg-gradient-to-r from-orange-600 via-red-600 to-amber-700
          bg-clip-text text-[19vw] font-black uppercase leading-[0.85] tracking-tighter text-transparent
          drop-shadow-sm dark:from-orange-500 dark:via-red-500 dark:to-amber-500 md:text-[21.2vw]"
        >
          WEBSITE
        </h1>
      </section>
    </footer>
  );
}