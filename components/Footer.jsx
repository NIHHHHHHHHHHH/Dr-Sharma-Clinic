"use client";

import { motion } from "framer-motion";
import { FaClinicMedical, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { clinicInfo, footerLinks, serviceOptions } from "@/data/clinicData";

const socialLinks = [
  { icon: FaFacebook, href: clinicInfo.social.facebook, label: "Facebook" },
  { icon: FaInstagram, href: clinicInfo.social.instagram, label: "Instagram" },
  { icon: FaTwitter, href: clinicInfo.social.twitter, label: "Twitter / X" },
  { icon: FaLinkedin, href: clinicInfo.social.linkedin, label: "LinkedIn" },
];

function ColHeading({ children }) {
  return (
    <h3 className="font-heading font-bold text-sm mb-6 uppercase tracking-widest pl-3 text-dark-text border-l-[3px] border-primary">
      {children}
    </h3>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg text-dark-muted" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

        
          <div>
            <a href="#home" className="flex items-center gap-2.5 mb-4 w-fit">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                <FaClinicMedical className="text-white text-lg" />
              </div>
              <div>
                <span className="font-heading font-bold text-base leading-tight block text-dark-text mb-1">Dr Sharma's</span>
                <span className="text-xs font-heading leading-tight block text-blue-400">Clinic</span>
              </div>
            </a>
            <p className="text-sm leading-relaxed mb-5 text-dark-faint">{clinicInfo.tagline}</p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href} aria-label={label}
                  whileHover={{ scale: 1.15 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center bg-dark-surface border border-dark-border text-dark-faint hover:bg-primary hover:text-white transition-colors">
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          
          <div>
            <ColHeading>Quick Links</ColHeading>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-dark-faint hover:text-blue-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <ColHeading>Our Services</ColHeading>
            <ul className="space-y-3">
              {serviceOptions.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-dark-faint hover:text-blue-400 transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <ColHeading>Contact</ColHeading>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-0.5 shrink-0 text-sm" />
                <span className="text-sm text-dark-faint leading-relaxed">{clinicInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-secondary shrink-0 text-sm" />
                <a href={clinicInfo.phoneHref} className="text-sm text-dark-faint hover:text-blue-400 transition-colors">
                  {clinicInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-purple shrink-0 text-sm" />
                <a href={`mailto:${clinicInfo.email}`} className="text-sm text-dark-faint hover:text-blue-400 transition-colors break-all">
                  {clinicInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="pt-8 border-t border-dark-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-dark-faint">
          <p>&copy; {year} <span className="font-medium text-dark-muted">{clinicInfo.nameFull}</span>. All rights reserved.</p>
          <p>Designed with care for <span className="text-blue-400">{clinicInfo.doctor}</span></p>
        </div>
      </div>
    </footer>
  );
}