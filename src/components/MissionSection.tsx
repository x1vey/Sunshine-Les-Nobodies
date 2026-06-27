import { motion } from "framer-motion";
import { mission, business } from "@/data/site";
import { SunMark } from "@/components/icons";

const transition = { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const };

const MissionSection = () => {
  return (
    <section className="section-padding relative">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-12%" }}
        transition={transition}
        className="max-w-4xl mx-auto text-center flex flex-col items-center"
      >
        <SunMark className="w-9 h-9 text-primary mb-7" />
        <span className="eyebrow eyebrow-center mb-8">Our Mission</span>
        <p className="font-serif text-2xl md:text-[2.1rem] leading-[1.35] text-foreground font-light">
          {mission.split(/(esoteric knowledge|heal|present energy exchanges|confidence)/).map((part, i) =>
            ["esoteric knowledge", "heal", "present energy exchanges", "confidence"].includes(part) ? (
              <span key={i} className="gold-text not-italic" style={{ fontStyle: "italic" }}>{part}</span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </p>
        <div className="spectrum-bar max-w-[10rem] mt-10 opacity-70" />
        <p className="meta-label normal-case tracking-[0.18em] text-muted-foreground mt-6">
          {business.legal} · {business.ministry}
        </p>
      </motion.div>
    </section>
  );
};

export default MissionSection;
