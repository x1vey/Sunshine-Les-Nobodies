import { motion } from "framer-motion";
import profileImage from "@/assets/profile.jpg";
import { links, business, aboutMe } from "@/data/site";
import { WhatsAppIcon } from "@/components/icons";

const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={transition}
          className="md:col-span-5 relative flex justify-center md:sticky md:top-28"
        >
          <div className="absolute -inset-3 bg-gradient-to-br from-sage/30 to-ochre/20 blob-2 blur-2xl" />
          <div className="relative w-full max-w-sm aspect-[4/5] overflow-hidden blob-2 border-4 border-card shadow-xl">
            <img src={profileImage} alt={business.fullName} className="w-full h-full object-cover object-center" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ ...transition, delay: 0.15 }}
          className="md:col-span-7"
        >
          <span className="eyebrow mb-6">About Sunshine</span>
          <p className="font-serif italic text-2xl text-primary mt-6 mb-4">
            {aboutMe.greeting}
          </p>
          <h2 className="heading-section text-foreground mb-8">
            I am <span className="gold-text">agape in human form</span> — here to
            help you find your keys.
          </h2>

          {aboutMe.paragraphs.map((p, i) => (
            <p key={i} className="body-text mb-6">
              {p}
            </p>
          ))}

          <blockquote className="font-serif text-xl md:text-2xl italic text-foreground leading-relaxed pl-6 border-l-2 border-primary mt-2 mb-10">
            {aboutMe.closing}
          </blockquote>

          <div className="flex flex-wrap gap-4">
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon className="w-4 h-4" />
              Enquire on WhatsApp
            </a>
            <a href={links.consultation} target="_blank" rel="noopener noreferrer" className="btn-outline rounded-full">
              Book Free Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
