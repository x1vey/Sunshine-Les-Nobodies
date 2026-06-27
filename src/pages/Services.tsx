import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { mainServices, addOns, links } from "@/data/site";
import { WhatsAppIcon } from "@/components/icons";

const transition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      <section className="section-padding pt-40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="text-center mb-16"
          >
            <div className="spectrum-bar max-w-xs mx-auto mb-10 opacity-90" />
            <span className="eyebrow eyebrow-center mb-6 justify-center flex">Full Catalogue</span>
            <h1 className="heading-hero text-foreground mt-4">
              Energy Awareness <em className="gold-text">Services</em>
            </h1>
            <p className="body-text mt-8 max-w-2xl mx-auto">
              Readings, therapy, and workshops to help you recognize imbalance,
              empower yourself, and return to balance. Explore each path below.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainServices.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: i * 0.1 }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="card-soft p-8 flex flex-col h-full"
                >
                  <div className="spectrum-bar mb-6 opacity-80" />
                  <span className="meta-label block mb-3">{service.eyebrow}</span>
                  <h3 className="font-serif text-3xl text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="body-text text-sm mb-6">{service.summary}</p>
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
                    <span className="font-serif text-2xl gold-text">
                      {service.priceFrom}
                    </span>
                    <span className="nav-link text-foreground">View details →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Add-ons / notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="card-soft p-8 md:p-10 mt-12"
          >
            <span className="meta-label block mb-6">Good to Know</span>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {addOns.map((item) => (
                <li key={item} className="body-text text-sm flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mt-16">
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon className="w-4 h-4" />
              Enquire on WhatsApp
            </a>
            <a href={links.consultation} target="_blank" rel="noopener noreferrer" className="btn-outline rounded-full">
              Book Free 33-min Consultation
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
      <FloatingWhatsApp />
    </div>
  );
};

export default Services;
