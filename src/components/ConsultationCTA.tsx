import { motion } from "framer-motion";
import { links } from "@/data/site";
import { WhatsAppIcon, SunMark } from "@/components/icons";

const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

const ConsultationCTA = () => {
  return (
    <section className="section-padding relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={transition}
        className="max-w-4xl mx-auto text-center relative overflow-hidden rounded-[2rem] px-8 py-16 md:py-20"
        style={{
          background:
            "linear-gradient(135deg, hsl(14 62% 56% / 0.12), hsl(110 18% 58% / 0.12))",
        }}
      >
        <div className="absolute inset-0 border border-primary/15 rounded-[2rem] pointer-events-none" />
        <div className="relative flex flex-col items-center">
          <SunMark className="w-10 h-10 text-primary mb-6" />
          <span className="eyebrow eyebrow-center mb-6">Take the First Step</span>
          <h2 className="heading-section text-foreground mt-4 mb-6 max-w-2xl">
            A <span className="gold-text">33-minute consultation,</span> free.
          </h2>
          <p className="body-text max-w-xl mx-auto mb-10">
            If you are interested in taking that first step, let's connect. We
            barter · Payment plans welcomed. Find out how my services can fit
            your needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon className="w-4 h-4" />
              Enquire on WhatsApp
            </a>
            <a href={links.consultation} target="_blank" rel="noopener noreferrer" className="btn-primary rounded-full">
              Book Free Consultation
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ConsultationCTA;
