"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaStethoscope, FaHeartbeat, FaBaby, FaTooth, FaEye, FaFlask } from "react-icons/fa";
import { services } from "@/data/clinicData";
import SectionHeader from "./SectionHeader";

// icon string from data mapped to actual component
const iconMap = { FaStethoscope, FaHeartbeat, FaBaby, FaTooth, FaEye, FaFlask };
const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-padding bg-bg" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <SectionHeader
            badge="What We Offer"
            title={<>Comprehensive <span className="text-primary">Medical Services</span></>}
            subtitle="From routine checkups to specialized care, all under one trusted roof, supported by modern diagnostic technology."
          />
        </motion.div>

        <motion.div ref={ref} variants={containerVariants} initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.article key={service.id} variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="card-shadow bg-surface border border-border rounded-2xl p-7 group cursor-default">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300"
                  // hex opacity suffix - 15 = ~8% opacity for the icon bg
                  style={{ backgroundColor: `${service.color}15` }}>
                  {Icon && <Icon className="text-2xl" style={{ color: service.color }} />}
                </div>
                <h3 className="font-heading font-bold text-xl text-text mb-2">{service.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{service.description}</p>
                <div className="mt-5 h-0.5 w-10 rounded-full group-hover:w-full transition-all duration-500" style={{ backgroundColor: service.color }} />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}