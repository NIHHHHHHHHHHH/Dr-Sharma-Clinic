"use client";


import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaUserMd, FaMicroscope, FaHandHoldingHeart, FaPhoneAlt } from "react-icons/fa";
import { whyUs } from "@/data/clinicData";
import SectionHeader from "./SectionHeader";

const iconMap = { FaUserMd, FaMicroscope, FaHandHoldingHeart, FaPhoneAlt };
const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="section-padding bg-bg relative overflow-hidden" aria-labelledby="why-us-heading">
      <div aria-hidden="true" className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-light opacity-40 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-green-100 opacity-40 blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <SectionHeader
            badge="Why Choose Us"
            title={<>Healthcare Built on <span className="text-primary">Trust & Excellence</span></>}
            subtitle="We combine medical expertise with genuine care to deliver an experience that goes beyond treatment."
          />
        </motion.div>

        <motion.div ref={ref} variants={containerVariants} initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {whyUs.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div key={item.id} variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="card-shadow bg-surface border border-border rounded-2xl p-8 flex gap-5 items-start group">
                <div className="rounded-xl flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${item.color}15`, width: "52px", height: "52px" }}>
                  {Icon && <Icon className="text-xl" style={{ color: item.color }} />}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-text mb-2">{item.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}