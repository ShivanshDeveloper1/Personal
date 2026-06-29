import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Brand & Copyright */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-bold text-primary">
              Shivansh&trade;
            </Link>
            <p className="text-sm text-secondary mt-2">
              © {new Date().getFullYear()} Shivansh Portfolio.
            </p>
          </div>

          {/* Center: Extra Links (Moved Blogs Here) */}
          {/* <div className="flex items-center gap-6">
            <Link
              href="/blogs"
              className="group flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              Read my Blogs
              <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div> */}

          {/* Right: Social Icons */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/ShivanshDeveloper1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors transform hover:scale-110"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/shivanshdeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
           
            <a
              href="https://www.linkedin.com/in/shivansh-singh-bb1b0b328/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors transform hover:scale-110"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://www.youtube.com/@Shivanshdevloper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors transform hover:scale-110"
            >
              <FaYoutube className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}