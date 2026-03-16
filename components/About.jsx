"use client";


import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FaGraduationCap, FaBriefcaseMedical, FaHospital, FaAward } from "react-icons/fa";
import { clinicInfo } from "@/data/clinicData";
import SectionHeader from "./SectionHeader";

const credentials = [
  { icon: FaGraduationCap,    text: "MBBS - B.J. Medical College, Pune" },
  { icon: FaGraduationCap,    text: "MD (General Medicine) - KEM Hospital, Mumbai" },
  { icon: FaBriefcaseMedical, text: "14+ Years Clinical Practice" },
  { icon: FaHospital,         text: "Former Consultant - Ruby Hall Clinic, Pune" },
  { icon: FaAward,            text: "Best Physician Award - Pune Medical Council 2019" },
];

const trustBadges = [
  { value: "12,000+", label: "Happy Patients" },
  { value: "18+",     label: "Specialties" },
  { value: "98%",     label: "Recovery Rate" },
  { value: "14 Yrs",  label: "Of Excellence" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="section-padding bg-surface" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ y: 30, opacity: 0 }} animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}>
          <SectionHeader
            badge="About Us"
            title={<>Meet <span className="text-primary">Dr. Rajesh Sharma</span></>}
            subtitle="A physician who believes that quality healthcare should be personal, accessible, and built on genuine trust."
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          
          <motion.div initial={{ x: -50, opacity: 0 }} animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }} className="relative">
            <div className="absolute -top-4 -left-4 w-2/3 h-2/3 rounded-2xl bg-primary-light -z-10" />
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 rounded-2xl bg-green-100 -z-10" />
            <div className="relative rounded-2xl overflow-hidden aspect-square sm:aspect-video lg:aspect-3/4 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop&q=80"
                alt="Dr. Rajesh Sharma consulting a patient at Dr Sharma's  Clinic"
                fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw"
              />
              <motion.div initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                className="absolute top-6 -right-5 bg-primary rounded-2xl p-5 shadow-xl text-center">
                <p className="font-heading font-extrabold text-3xl text-white leading-none">14</p>
                <p className="text-xs font-medium uppercase tracking-wide mt-1 text-primary-light">Years Exp.</p>
              </motion.div>
            </div>
          </motion.div>

          {/*  Right: Content*/}
          <motion.div initial={{ x: 50, opacity: 0 }} animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }} className="flex flex-col justify-center">
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              {clinicInfo.nameFull} was founded with a single mission, to deliver world-class healthcare
              with the warmth of a family doctor. Under {clinicInfo.doctor}'s leadership, we've
              grown into Pune's most trusted multi-specialty clinic.
            </p>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              Every patient is treated as an individual, not a number. We invest in ongoing medical education,
              modern diagnostic equipment, and compassionate staff.
            </p>

            <ul className="space-y-3 mb-10">
              {credentials.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon className="text-primary mt-0.5 shrink-0 text-base" />
                  <span className="text-text-muted text-sm">{text}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="bg-bg border border-border rounded-xl p-4 text-center">
                  <p className="font-heading font-extrabold text-2xl text-primary">{badge.value}</p>
                  <p className="text-text-muted text-xs font-medium mt-1">{badge.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}