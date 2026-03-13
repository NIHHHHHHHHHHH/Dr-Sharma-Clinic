"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/data/clinicData";

function CountUp({ target, active, duration = 2000 }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return <span>{count.toLocaleString("en-IN")}</span>;
}

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} aria-label="Clinic statistics" className="bg-primary relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <motion.div
          variants={containerVariants} initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/20"
        >
          {stats.map((stat) => (
            <motion.div key={stat.id} variants={itemVariants}
              className="flex flex-col items-center text-center px-4">
              <div className="flex items-end gap-1">
                <span className="font-heading font-extrabold text-2xl sm:text-5xl lg:text-6xl text-white leading-none tabular-nums">
                  <CountUp target={stat.value} active={isInView} duration={stat.value > 1000 ? 2500 : 1800} />
                </span>
                <span className="font-heading font-extrabold text-xl  sm:text-4xl lg:text-5xl text-primary-light leading-none mb-0.5">
                  {stat.suffix}
                </span>
              </div>
              <p className="mt-3 text-sm font-medium tracking-wide uppercase font-heading text-primary-light/80">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}