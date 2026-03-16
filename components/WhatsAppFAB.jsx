"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { clinicInfo } from "@/data/clinicData";

export default function WhatsAppFAB() {
  return (
    <motion.a href={clinicInfo.whatsapp} target="_blank" rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-2xl">
        <motion.span animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
          className="absolute inset-0 rounded-full bg-whatsapp" />
        <motion.span animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.4, ease: "easeOut" }}
          className="absolute inset-0 rounded-full bg-whatsapp" />
        <FaWhatsapp className="text-white text-2xl relative z-10" />
      </motion.a>
  );
}