import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { WhatsAppIcon } from "@/components/icons";
import {
  mainServices,
  astroChakraTiers,
  numerologyOptions,
  astroCharts,
  therapyDetails,
  workshopDetails,
  addOns,
  links,
} from "@/data/site";

const transition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-8%" },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = mainServices.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      <section className="section-padding pt-40">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="mb-14"
          >
            <Link to="/services" className="nav-link mb-8 inline-block">
              ← All services
            </Link>
            <div className="spectrum-bar max-w-xs mb-8 opacity-80" />
            <span className="meta-label block mb-4">
              {service ? service.eyebrow : "Service"}
            </span>
            <h1 className="heading-hero text-foreground">
              {service ? service.title : "Service"}
            </h1>
            {service && (
              <p className="body-text mt-6 max-w-2xl">{service.summary}</p>
            )}
          </motion.div>

          {slug === "readings" && <ReadingsCatalogue />}
          {slug === "therapy" && <TherapyCatalogue />}
          {slug === "workshops" && <WorkshopsCatalogue />}
          {!service && (
            <p className="body-text">
              Service not found.{" "}
              <Link to="/services" className="text-foreground underline">
                Back to catalogue
              </Link>
              .
            </p>
          )}

          <div className="mt-16 flex flex-wrap gap-4">
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon className="w-4 h-4" />
              Enquire on WhatsApp
            </a>
            <a href={links.consultation} target="_blank" rel="noopener noreferrer" className="btn-outline rounded-full">
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
      <FloatingWhatsApp />
    </div>
  );
};

/* ---------- Readings ---------- */
const ReadingsCatalogue = () => (
  <div className="space-y-16">
    {/* Astro Chakra tiers */}
    <div>
      <motion.h2 {...fadeUp} transition={transition} className="heading-section text-foreground mb-3">
        Astro Chakra Readings & <em className="gold-text">Numerology</em>
      </motion.h2>
      <p className="body-text mb-10 max-w-2xl">
        Choose the tier that fits your journey. Contact for a free consultation —
        we barter and payment plans are welcomed.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {astroChakraTiers.map((tier, i) => (
          <motion.div
            key={tier.tier}
            {...fadeUp}
            transition={{ ...transition, delay: i * 0.06 }}
            className="card-soft p-7 flex flex-col"
          >
            <div className="flex items-baseline justify-between mb-4">
              <h3 className="font-serif text-2xl text-foreground">{tier.tier}</h3>
              <span className="font-serif text-3xl gold-text">{tier.price}</span>
            </div>
            <ul className="space-y-3">
              {tier.items.map((item) => (
                <li key={item} className="body-text text-sm flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Numerology / Tarot options */}
    <div>
      <motion.h2 {...fadeUp} transition={transition} className="heading-section text-foreground mb-3">
        Numerology & Tarot <em className="gold-text">Options</em>
      </motion.h2>
      <p className="body-text mb-10 max-w-2xl">
        We like to think of time as linear, but it's really cyclical. I can assist
        you with gaining awareness of your cycles. Tarot spreads are donation based.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {numerologyOptions.map((opt, i) => (
          <motion.div
            key={opt.option}
            {...fadeUp}
            transition={{ ...transition, delay: i * 0.06 }}
            className="card-soft p-7"
          >
            <div className="flex items-baseline justify-between mb-3">
              <h3 className="font-serif text-2xl text-foreground">{opt.option}</h3>
              <span className="font-serif text-3xl gold-text">{opt.price}</span>
            </div>
            <p className="body-text text-sm">{opt.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Astro charts covered */}
    <div>
      <motion.h2 {...fadeUp} transition={transition} className="heading-section text-foreground mb-3">
        The Charts <em className="gold-text">Covered</em>
      </motion.h2>
      <p className="body-text mb-10 max-w-2xl">
        Placements are displayed in a slide presentation as they appear in your
        chakras, showing which planets, energies and body parts align with each.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
        {astroCharts.map((chart) => (
          <div key={chart.name} className="flex items-start gap-4 border-b border-border pb-4">
            <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
            <div>
              <p className="font-serif text-xl text-foreground">{chart.name}</p>
              <p className="body-text text-sm">{chart.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <AddOnsBlock />
  </div>
);

/* ---------- Therapy ---------- */
const TherapyCatalogue = () => (
  <div className="space-y-12">
    <motion.p {...fadeUp} transition={transition} className="body-text max-w-2xl">
      {therapyDetails.intro}
    </motion.p>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {therapyDetails.sessions.map((s, i) => (
        <motion.div
          key={s.length}
          {...fadeUp}
          transition={{ ...transition, delay: i * 0.08 }}
          className="card-soft p-7 text-center"
        >
          <p className="meta-label mb-3">Session</p>
          <p className="font-serif text-2xl text-foreground mb-2">{s.length}</p>
          <p className="font-serif text-3xl gold-text">{s.price}</p>
        </motion.div>
      ))}
    </div>

    <motion.div {...fadeUp} transition={transition} className="card-soft p-8">
      <span className="meta-label block mb-6">How sessions work</span>
      <ul className="space-y-4">
        {therapyDetails.notes.map((note) => (
          <li key={note} className="body-text text-sm flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            {note}
          </li>
        ))}
      </ul>
    </motion.div>

    <AddOnsBlock />
  </div>
);

/* ---------- Workshops ---------- */
const WorkshopsCatalogue = () => (
  <div className="space-y-12">
    <motion.p {...fadeUp} transition={transition} className="body-text max-w-2xl">
      {workshopDetails.intro}
    </motion.p>

    <motion.div {...fadeUp} transition={transition} className="card-soft p-8">
      <span className="meta-label block mb-6">What's included</span>
      <ul className="space-y-4">
        {workshopDetails.points.map((point) => (
          <li key={point} className="body-text text-sm flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </motion.div>

    <AddOnsBlock />
  </div>
);

const AddOnsBlock = () => (
  <motion.div {...fadeUp} transition={transition} className="card-soft p-8">
    <span className="meta-label block mb-6">Add-ons & notes</span>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {addOns.map((item) => (
        <li key={item} className="body-text text-sm flex items-start gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default ServiceDetail;
