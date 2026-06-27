import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { links, business } from "@/data/site";
import { WhatsAppIcon, SunMark } from "@/components/icons";

const transition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const };

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <Link to="/" className="flex items-center gap-2.5 group">
        <SunMark className="w-7 h-7 text-primary transition-transform duration-700 group-hover:rotate-45" />
        <span className="text-sm tracking-[0.18em] uppercase font-medium text-foreground font-sans">
          {business.coach}
        </span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-9">
        <Link to="/#about" className="nav-link">About</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/#reviews" className="nav-link">Reviews</Link>
        <a href={links.youtube} target="_blank" rel="noopener noreferrer" className="nav-link">YouTube</a>
        <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-[10px] py-3 px-5">
          <WhatsAppIcon className="w-4 h-4" />
          Enquire
        </a>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-foreground"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1.5">
          <motion.span animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="block w-6 h-px bg-foreground" />
          <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-px bg-foreground" />
          <motion.span animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="block w-6 h-px bg-foreground" />
        </div>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
            className="fixed inset-0 top-0 bg-background z-40 flex flex-col items-center justify-center gap-7"
          >
            <SunMark className="w-12 h-12 text-primary mb-2" />
            <Link to="/#about" onClick={() => setMenuOpen(false)} className="heading-section text-3xl">About</Link>
            <Link to="/services" onClick={() => setMenuOpen(false)} className="heading-section text-3xl">Services</Link>
            <Link to="/#reviews" onClick={() => setMenuOpen(false)} className="heading-section text-3xl">Reviews</Link>
            <a href={links.youtube} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="heading-section text-3xl">YouTube</a>
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="btn-whatsapp mt-3">
              <WhatsAppIcon className="w-4 h-4" />
              Enquire on WhatsApp
            </a>
            <span className="meta-label mt-4 normal-case tracking-[0.2em] text-muted-foreground">{business.legal}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
