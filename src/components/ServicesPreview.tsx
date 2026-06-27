import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { mainServices } from "@/data/site";

const transition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };

const ServicesPreview = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={transition}
          className="text-center flex flex-col items-center mb-16"
        >
          <span className="eyebrow eyebrow-center mb-6">Energy Awareness Services</span>
          <h2 className="heading-section text-foreground mt-2 max-w-2xl">
            Three ways to <span className="gold-text">begin your journey</span>
          </h2>
          <p className="body-text mt-6 max-w-xl">
            Communicate with me for a free consultation to find out how my
            services can fit your needs.
          </p>
        </motion.div>

        {/* Alternating feature rows */}
        <div className="space-y-6">
          {mainServices.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ ...transition, delay: i * 0.08 }}
            >
              <Link
                to={`/services/${service.slug}`}
                className="card-soft group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 p-8 md:p-10 items-center"
              >
                {/* Number + title */}
                <div className="md:col-span-4 flex items-start gap-5">
                  <span className="font-serif text-5xl md:text-6xl text-primary/25 leading-none group-hover:text-primary/60 transition-colors">
                    0{i + 1}
                  </span>
                  <div>
                    <span className="meta-label block mb-2">{service.eyebrow}</span>
                    <h3 className="font-serif text-3xl text-foreground">{service.title}</h3>
                    <span className="inline-block mt-3 font-serif text-lg italic text-clay">
                      {service.priceFrom}
                    </span>
                  </div>
                </div>

                {/* Summary + points */}
                <div className="md:col-span-7">
                  <p className="body-text text-base mb-5">{service.summary}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {service.points.map((point) => (
                      <li key={point} className="text-sm text-muted-foreground font-light flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow */}
                <div className="md:col-span-1 flex md:justify-end">
                  <span className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link to="/services" className="btn-primary rounded-full">
            View Full Catalogue
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
