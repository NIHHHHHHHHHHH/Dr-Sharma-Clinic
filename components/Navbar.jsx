"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaClinicMedical } from "react-icons/fa";
import { navLinks } from "@/data/clinicData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    // cleanup so we don't stack listeners on re-mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-surface/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent"}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          
          <a href="#home" className="flex items-center gap-2.5 group" aria-label="Dr Sharma's Clinic Home">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
              <FaClinicMedical className="text-white text-lg" />
            </div>
            <div className="leading-tight">
              <span className="font-heading font-bold text-lg leading-none block text-text mb-1">Dr Sharma's</span>
              <span className="font-heading font-semibold text-sm leading-none block text-primary"> Clinic</span>
            </div>
          </a>

          
          <ul className="hidden md:flex items-center gap-0 lg:gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-2 lg:px-4 py-2 text-sm lg:text-base font-medium rounded-md relative group transition-colors text-text-muted hover:text-primary"
                >
                  {link.label}
                  {/* underline slide-in on hover, scale trick beats border-bottom for smoothness */}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          
          <div className="hidden md:block">
            <motion.a
              href="#appointment"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary text-sm lg:text-base"
            >
              Book Appointment
            </motion.a>
          </div>

          {/* hamburger — only visible on mobile, toggles the drawer below */}
          <button
            className="md:hidden p-2 rounded-lg text-text hover:bg-bg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {/* mobile drawer — AnimatePresence handles unmount animation, height: "auto" avoids hardcoding */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-surface border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)} // close drawer on nav
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }} // stagger so links don't all pop in at once
                  className="px-4 py-3 text-sm font-medium rounded-lg text-text hover:text-primary hover:bg-primary-light transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              {/* CTA at the bottom of drawer, delay offset so it lands after all nav links */}
              <motion.a
                href="#appointment"
                onClick={() => setIsOpen(false)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="btn-primary mt-2 justify-center text-sm"
              >
                Book Appointment
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}