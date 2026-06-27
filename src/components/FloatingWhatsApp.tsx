import { motion } from "framer-motion";
import { links } from "@/data/site";
import { WhatsAppIcon } from "@/components/icons";

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href={links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 group flex items-center"
    >
      {/* pulsing halo */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#25D366] to-[#1da851] shadow-lg shadow-[#25D366]/40">
        <WhatsAppIcon className="w-7 h-7 text-white" />
      </span>
      <span className="hidden md:block absolute right-16 whitespace-nowrap px-3 py-1.5 rounded-full text-xs uppercase tracking-[0.15em] bg-card border border-border shadow-md text-foreground opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        Enquire on WhatsApp
      </span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
