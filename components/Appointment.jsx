"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaUser, FaPhone, FaBriefcaseMedical, FaCheckCircle } from "react-icons/fa";
import { clinicInfo, serviceOptions } from "@/data/clinicData";
import SectionHeader from "./SectionHeader";

const initialForm = { name: "", phone: "", date: "", service: "" };

export default function Appointment() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, ""))) e.phone = "Enter a valid 10-digit Indian mobile number.";
    if (!form.date) e.date = "Please choose a preferred date.";
    if (!form.service) e.service = "Please select a service.";
    return e;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length) { setErrors(formErrors); return; }
    setLoading(true);
    //  INTEGRATION POINT- replace setTimeout with real logic:
    // Option A: WhatsApp- window.open(`${clinicInfo.whatsapp}?text=...`)
    // Option B: EmailJS- emailjs.send(serviceId, templateId, form, publicKey)
    // Option C: API Route- fetch('/api/appointment', { method:'POST', body: JSON.stringify(form)})
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm(initialForm);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  const today = new Date().toISOString().split("T")[0];

  const inputClass = (field) =>
    `w-full bg-bg border rounded-xl px-4 py-3.5 pl-10 text-text text-sm placeholder:text-text-faint focus:outline-none focus:ring-2 transition-all ${
      errors[field]
        ? "border-error focus:border-error focus:ring-error/20"
        : "border-border focus:border-primary focus:ring-primary/20"
    }`;

  return (
    <section id="appointment" className="section-padding bg-surface relative overflow-hidden"
      aria-labelledby="appointment-heading">
      <div aria-hidden="true" className="absolute inset-y-0 right-0 w-1/2 bg-linear-to-l from-primary-light/30 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <SectionHeader
            badge="Book a Visit"
            title={<>Schedule Your <span className="text-primary">Appointment</span></>}
            subtitle="Fill in the form and we'll confirm your slot within 30 minutes."
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-5xl mx-auto">

          <motion.div initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <form onSubmit={handleSubmit} noValidate className="space-y-5">

              <div>
                <label htmlFor="appt-name" className="block text-sm font-medium text-text mb-1.5">Full Name</label>
                <div className="relative">
                  <FaUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-faint text-sm" />
                  <input id="appt-name" name="name" type="text" value={form.name}
                    onChange={handleChange} placeholder="e.g. Priya Sharma"
                    className={inputClass("name")} />
                </div>
                {errors.name && <p className="mt-1.5 text-error text-xs">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="appt-phone" className="block text-sm font-medium text-text mb-1.5">Mobile Number</label>
                <div className="relative">
                  <FaPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-faint text-sm" />
                  <input id="appt-phone" name="phone" type="tel" value={form.phone}
                    onChange={handleChange} placeholder="10-digit mobile number"
                    className={inputClass("phone")} />
                </div>
                {errors.phone && <p className="mt-1.5 text-error text-xs">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="appt-date" className="block text-sm font-medium text-text mb-1.5">Preferred Date</label>
                <div className="relative">
                  <FaCalendarAlt className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-faint text-sm" />
                  <input id="appt-date" name="date" type="date" value={form.date}
                    onChange={handleChange} min={today} className={inputClass("date")} />
                </div>
                {errors.date && <p className="mt-1.5 text-error text-xs">{errors.date}</p>}
              </div>

              <div>
                <label htmlFor="appt-service" className="block text-sm font-medium text-text mb-1.5">Service Required</label>
                <div className="relative">
                  <FaBriefcaseMedical className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-faint text-sm" />
                  <select id="appt-service" name="service" value={form.service}
                    onChange={handleChange}
                    className={`${inputClass("service")} appearance-none cursor-pointer`}>
                    <option value="">Select a service</option>
                    {serviceOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
                {errors.service && <p className="mt-1.5 text-error text-xs">{errors.service}</p>}
              </div>

              <motion.button type="submit" disabled={loading}
                whileHover={!loading ? { scale: 1.02 } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
                className="btn-primary w-full justify-center py-4 mt-2 disabled:opacity-70">
                {loading ? (
                  <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Processing...</>
                ) : (
                  <><FaCalendarAlt />Confirm Appointment</>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div initial={{ x: 40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6">

            <div className="bg-bg border border-border rounded-2xl p-7">
              <h3 className="font-heading font-bold text-xl text-text mb-5">Clinic Timings</h3>
              <div className="space-y-3">
                {[
                  { day: "Monday – Saturday", time: "9:00 AM – 8:00 PM" },
                  { day: "Sunday", time: "10:00 AM – 2:00 PM" },
                ].map(({ day, time }, i) => (
                  <div key={day} className={`flex justify-between items-center py-3 ${i === 0 ? "border-b border-border" : ""}`}>
                    <span className="text-text-muted text-sm">{day}</span>
                    <span className="font-semibold text-text text-sm font-heading">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-7 text-white">
              <h3 className="font-heading font-bold text-xl mb-3">Need Immediate Help?</h3>
              <p className="text-primary-light text-sm leading-relaxed mb-5">
                For urgent queries, call us directly or reach out via WhatsApp.
              </p>
              <a href={clinicInfo.phoneHref}
                className="flex items-center gap-2 bg-surface text-primary px-5 py-3 rounded-xl font-semibold font-heading text-sm w-fit hover:bg-primary-light transition-colors">
                <FaPhone />{clinicInfo.phone}
              </a>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 flex items-start gap-3">
              <FaCheckCircle className="text-secondary text-xl mt-0.5 shrink-0" />
              <div>
                <p className="font-heading font-semibold text-text text-sm mb-1">Confirmation Guaranteed</p>
                <p className="text-text-muted text-xs leading-relaxed">
                  We&apos;ll call you within 30 minutes to confirm your appointment slot.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {submitted && (
          <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            role="status" aria-live="polite"
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-dark-bg text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 min-w-72">
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center shrink-0">
              <FaCheckCircle className="text-white text-sm" />
            </div>
            <div>
              <p className="font-heading font-semibold text-sm">Appointment Requested!</p>
              <p className="text-text-faint text-xs mt-0.5">We&apos;ll call you shortly to confirm.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}