"use client";


import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { clinicInfo } from "@/data/clinicData";
import SectionHeader from "./SectionHeader";

const contactItems = [
  { icon: FaMapMarkerAlt, label: "Clinic Address", value: clinicInfo.address, iconClass: "text-primary",   bgClass: "bg-primary/10",   href: `https://maps.google.com/?q=${encodeURIComponent(clinicInfo.address)}` },
  { icon: FaPhone,        label: "Phone Number",   value: clinicInfo.phone,   iconClass: "text-secondary", bgClass: "bg-secondary/10", href: clinicInfo.phoneHref },
  { icon: FaEnvelope,     label: "Email Address",  value: clinicInfo.email,   iconClass: "text-purple",    bgClass: "bg-purple/10",    href: `mailto:${clinicInfo.email}` },
];

export default function Contact() {
  return (
    <>
      <section id="contact" className="section-padding bg-bg" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionHeader
              badge="Get In Touch"
              title={<>Find Us &amp; <span className="text-primary">Contact Us</span></>}
              subtitle="Visit us at our clinic in Pune, or reach out through any of the channels below."
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            
            <motion.div initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="space-y-5">
              {contactItems.map(({ icon: Icon, label, value, iconClass, bgClass, href }) => (
                <a key={label} href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 bg-surface border border-border rounded-2xl p-5 card-shadow group hover:border-primary/30 transition-all">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 ${bgClass}`}>
                    <Icon className={`text-lg ${iconClass}`} />
                  </div>
                  <div>
                    <p className="text-text-faint text-xs font-medium mb-0.5 uppercase tracking-wide">{label}</p>
                    <p className="text-text font-semibold text-sm">{value}</p>
                  </div>
                </a>
              ))}

              
              <div className="bg-surface border border-border rounded-2xl p-6 card-shadow">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-warning/10 flex items-center justify-center shrink-0">
                    <FaClock className="text-warning text-lg" />
                  </div>
                  <p className="font-heading font-bold text-text text-base">Clinic Hours</p>
                </div>
                <div className="space-y-3">
                  {[
                    { day: "Monday – Saturday", time: "9:00 AM – 8:00 PM",  dot: "bg-secondary" },
                    { day: "Sunday",             time: "10:00 AM – 2:00 PM", dot: "bg-warning" },
                  ].map(({ day, time, dot }) => (
                    <div key={day} className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-text-muted">
                        <span className={`w-2 h-2 rounded-full ${dot}`} />{day}
                      </span>
                      <span className="font-semibold text-text font-heading text-xs">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            
            <motion.div initial={{ x: 40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-2xl overflow-hidden shadow-xl border border-border h-120">
              <iframe
                title="Dr. Sharma's Clinic Location"
                src={clinicInfo.mapEmbed}
                width="100%" height="100%"
                style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}