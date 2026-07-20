"use client";
import Link from "next/link";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileSubMenuOpen(null); // Reset submenus when closing
  };

  const toggleMobileSubMenu = (label: string) => {
    setMobileSubMenuOpen(mobileSubMenuOpen === label ? null : label);
  };

  const menuItems = [
    { href: "/about", label: "About" },
    {
      href: "/service",
      label: "Services",
      subMenu: [
        { href: "/service/social-media-service", label: "Social Media Marketing" },
        { href: "/service/web-development", label: "Web Development" },
      ],
    },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    { href: "/download", label: "Resume" },
    { href: "/blogs", label: "Blogs" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50 border-b border-gray-100 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            Shivansh&trade;
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.href} className="relative group py-2">
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>

                {item.subMenu && (
                  <div
                    className="
                    absolute
                    left-0
                    top-full
                    mt-1
                    hidden
                    group-hover:block
                    min-w-[260px]
                    rounded-xl
                    bg-white
                    dark:bg-neutral-900
                    shadow-2xl
                    border
                    border-gray-200
                    dark:border-neutral-800
                    overflow-hidden
                    "
                  >
                    {item.subMenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="
                        block
                        px-5
                        py-3
                        text-sm
                        text-gray-700
                        dark:text-gray-300
                        hover:bg-gray-100
                        dark:hover:bg-neutral-800
                        hover:text-primary
                        transition
                        "
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5 text-yellow-500" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-600" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white dark:bg-dark border-t dark:border-gray-800"
            >
              <div className="py-4 space-y-2 px-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="w-full"
                  >
                    {item.subMenu ? (
                      <div>
                        <button
                          onClick={() => toggleMobileSubMenu(item.label)}
                          className="flex items-center justify-between w-full py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors text-left font-medium"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              mobileSubMenuOpen === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        
                        <AnimatePresence>
                          {mobileSubMenuOpen === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-6 pr-4 overflow-hidden space-y-1 mt-1"
                            >
                              {item.subMenu.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  className="block py-2 px-4 text-sm rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary transition-colors"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-2 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary transition-colors font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}

                {/* Special Prediction Button - Mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.05 }}
                  className="px-2 pt-2"
                >
            
                </motion.div>

                {/* Theme Toggle Mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (menuItems.length + 1) * 0.05 }}
                  className="pt-2"
                >
                  <button
                    onClick={() => {
                      toggleTheme();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex w-full items-center py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    {theme === "dark" ? (
                      <>
                        <SunIcon className="h-5 w-5 mr-3 text-yellow-500" />
                        Switch to Light Mode
                      </>
                    ) : (
                      <>
                        <MoonIcon className="h-5 w-5 mr-3 text-gray-600" />
                        Switch to Dark Mode
                      </>
                    )}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}