"use client";

export default function SectionHeader({ badge, title, subtitle, dark = false }) {
  return (
    <div className="text-center mb-14">
      <span className={dark ? "section-badge-dark" : "section-badge"}>
        {badge}
      </span>
      <h2 className={`font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4 ${dark ? "text-dark-text" : "text-text"}`}>
        {title}
      </h2>
      <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${dark ? "text-dark-muted" : "text-text-muted"}`}>
        {subtitle}
      </p>
    </div>
  );
}