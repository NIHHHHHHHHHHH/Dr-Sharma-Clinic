"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { testimonials, clinicInfo } from "@/data/clinicData";
import SectionHeader from "./SectionHeader";

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const avatarColors = ["bg-primary", "bg-secondary", "bg-purple"];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="section-padding bg-dark-bg relative overflow-hidden"
      aria-labelledby="testimonials-heading">
      <div aria-hidden="true" className="absolute top-0 left-1/2 w-200 h-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-[0.04] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <SectionHeader
            dark
            badge="Patient Stories"
            title={<>What Our Patients <span className="text-blue-400">Say About Us</span></>}
            subtitle="Real stories from real patients. Their trust is our greatest achievement."
          />
        </motion.div>

        <motion.div ref={ref} variants={containerVariants} initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, index) => (
            <motion.article key={t.id} variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex flex-col rounded-2xl p-7 bg-dark-surface border border-dark-border">
              <FaQuoteLeft className="text-primary text-2xl mb-5 opacity-70" />
              <div className="flex gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FaStar key={i} className="text-warning text-sm" />
                ))}
              </div>
              <blockquote className="text-dark-muted text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="flex items-center gap-3 pt-5 border-t border-dark-border">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center font-heading font-bold text-sm shrink-0 text-white ${avatarColors[index]}`}
                  aria-hidden="true">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold font-heading text-sm text-dark-text">{t.name}</p>
                  <p className="text-dark-faint text-xs">{t.city}</p>
                </div>
              </footer>
            </motion.article>
          ))}
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <div className="flex gap-1">
            {[1,2,3,4,5].map((i) => <FaStar key={i} className="text-warning text-xl" />)}
          </div>
          <p className="text-dark-muted text-sm">
            <strong className="text-dark-text">4.9/5 Rating</strong> based on 200+ Google reviews for{" "}
            <span className="text-blue-400">{clinicInfo.nameFull}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}