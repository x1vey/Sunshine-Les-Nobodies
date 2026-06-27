import { motion } from "framer-motion";
import profileImage from "@/assets/profile.jpg";
import { links, identityBadges, business } from "@/data/site";
import { WhatsAppIcon, SunMark } from "@/components/icons";

const transition = { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const };

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 overflow-hidden">
      {/* decorative arcs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(120vw,1100px)] aspect-square rounded-full border border-primary/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(85vw,760px)] aspect-square rounded-full border border-sage/20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
        className="relative z-10 flex flex-col items-center"
      >
        <SunMark className="w-10 h-10 text-primary mb-6" />
        <span className="eyebrow eyebrow-center mb-7">{business.tagline}</span>

        <h1 className="heading-hero text-foreground max-w-4xl">
          Become aware of your energy —
          <br className="hidden md:block" />
          <span className="gold-text"> and return to balance.</span>
        </h1>

        <p className="body-text max-w-xl mt-8">
          I assist people in being aware of their energies throughout their
          journey of healing — recognizing imbalance within self, and empowering
          you to return to balance, without waiting on anyone else.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <WhatsAppIcon className="w-4 h-4" />
            Enquire on WhatsApp
          </a>
          <a href={links.consultation} target="_blank" rel="noopener noreferrer" className="btn-outline rounded-full">
            Free 33-min Consultation
          </a>
        </div>
      </motion.div>

      {/* Portrait in organic frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...transition, delay: 0.25 }}
        className="relative z-10 mt-14"
      >
        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-ochre/20 to-sage/20 blob-1 blur-2xl" />
        <div className="relative w-60 h-72 md:w-72 md:h-80 overflow-hidden blob-1 border-4 border-card shadow-xl">
          <img
            src={profileImage}
            alt={`${business.coach}, ${business.tagline}`}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="mt-4">
          <p className="font-serif text-xl text-foreground">{business.coach}</p>
          <p className="meta-label normal-case tracking-[0.18em] text-muted-foreground">{business.legal}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...transition, delay: 0.6 }}
        className="relative z-10 flex flex-wrap gap-x-3 gap-y-2 justify-center mt-10"
      >
        {identityBadges.map((badge) => (
          <span
            key={badge}
            className="text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full bg-card border border-border text-foreground/70"
          >
            {badge}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
