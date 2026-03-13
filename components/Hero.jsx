"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCalendarCheck, FaPhoneAlt, FaShieldAlt, FaClock, FaAward } from "react-icons/fa";
import { clinicInfo } from "@/data/clinicData";

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const textVariants = {
  hidden: { x: -40, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};
const imageVariants = {
  hidden: { x: 60, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
};

const trustBadges = [
  { icon: FaShieldAlt, label: "NABH Certified" },
  { icon: FaClock,     label: "14+ Yrs Experience" },
  { icon: FaAward,     label: "98% Success Rate" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden gradient-mesh bg-bg">

      {/* Decorative blobs */}
      <div aria-hidden="true" className="absolute -top-32 -right-32 w-150 h-150 rounded-full bg-primary opacity-[0.06] blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-0 -left-32 w-125 h-125 rounded-full bg-secondary opacity-[0.05] blur-3xl pointer-events-none" />

      {/* Dot grid */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-35"
        style={{ backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">

          
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col justify-center">

            <motion.div variants={textVariants} className="mb-6">
              <span className="section-badge">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse inline-block mr-2 bg-primary" />
                Trusted Since {clinicInfo.established}
              </span>
            </motion.div>

            <motion.h1 variants={textVariants}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text leading-[1.1] mb-4">
              Your Health,{" "}
              <span className="text-primary relative">
                Our Priority
              </span>
            </motion.h1>

            <motion.p variants={textVariants} className="text-text-muted text-lg lg:text-xl leading-relaxed mb-8 max-w-xl">
              Led by <strong className="text-text">{clinicInfo.doctor}, {clinicInfo.qualification}</strong> —
              providing compassionate, evidence-based care to Pune and surrounding communities for over 14 years.
            </motion.p>

            <motion.div variants={textVariants} className="flex flex-wrap gap-4 mb-10">
              <motion.a href="#appointment"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="btn-primary">
                <FaCalendarCheck />Book Appointment
              </motion.a>
              <motion.a href={clinicInfo.phoneHref}
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="btn-outline">
                <FaPhoneAlt className="text-primary" />{clinicInfo.phone}
              </motion.a>
            </motion.div>

            <motion.div variants={textVariants} className="flex flex-wrap gap-4">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-surface border border-border text-text-muted">
                  <Icon className="text-primary" />{label}
                </div>
              ))}
            </motion.div>
          </motion.div>

          
          <motion.div variants={imageVariants} initial="hidden" animate="visible"
            className="relative flex justify-start lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-4 rounded-3xl opacity-60 bg-linear-to-br from-primary-light to-green-100" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-4/5 bg-blue-50">
                <Image
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop&q=80"
                  alt="Dr. Rajesh Sharma — Senior Physician at Dr Sharma's Clinic"
                  fill className="object-cover object-top" priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-dark-bg/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4">
                  <p className="font-heading font-bold text-text text-base leading-tight">{clinicInfo.doctor}</p>
                  <p className="text-text-muted text-sm mt-0.5">{clinicInfo.qualification} — General Physician</p>
                </div>
              </div>

              {/* Floating stat */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
                className="absolute -left-8 top-1/3 bg-surface border border-border rounded-2xl shadow-xl p-4 text-center">
                <p className="font-heading font-extrabold text-3xl text-primary">12K+</p>
                <p className="text-text-muted text-xs font-medium mt-0.5">Patients Treated</p>
              </motion.div>

              {/* Floating availability */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
                className="absolute -right-4 top-12 bg-primary rounded-2xl shadow-xl p-4 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-xs font-semibold">Now Open</p>
                </div>
                <p className="text-[10px] opacity-80">Mon–Sat 9 AM – 8 PM</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}