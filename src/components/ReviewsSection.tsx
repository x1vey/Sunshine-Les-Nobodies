import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Plus, Quote, MapPin } from "lucide-react";
import { links, business, reviews, reviewsMeta } from "@/data/site";
import { GoogleIcon, StarIcon } from "@/components/icons";

const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

const BUSINESS_QUERY = encodeURIComponent("Les Nobodies Business LLC");
const LOCATION_EMBED = `https://maps.google.com/maps?q=${BUSINESS_QUERY}&ll=46.423669,-129.9427086&z=4&output=embed`;

const ReviewsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="reviews" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        {/* Heading + rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={transition}
          className="text-center flex flex-col items-center mb-12"
        >
          <span className="eyebrow eyebrow-center mb-6">Kind Words</span>
          <h2 className="heading-section text-foreground mt-2">
            What clients <span className="gold-text">are saying</span>
          </h2>

          <div className="flex items-center gap-3 mt-6 bg-card border border-border shadow-sm rounded-full px-5 py-2.5">
            <GoogleIcon className="w-5 h-5" />
            <span className="flex items-center gap-0.5 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="w-4 h-4" />
              ))}
            </span>
            <span className="text-sm text-foreground font-medium">
              {reviewsMeta.rating.toFixed(1)}
            </span>
            <span className="text-sm text-muted-foreground">
              {reviewsMeta.count ? `· ${reviewsMeta.count} reviews` : "on Google"}
            </span>
          </div>
        </motion.div>

        {/* Testimonial carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="relative"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {reviews.map((review, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 px-2 md:px-12">
                  <div className="card-soft p-8 md:p-12 text-center flex flex-col items-center min-h-[26rem] justify-center">
                    <Quote className="w-9 h-9 text-primary/30 mb-6" />
                    <p className="font-serif text-lg md:text-2xl italic leading-relaxed text-foreground max-w-2xl">
                      "{review.text}"
                    </p>
                    <span className="flex items-center gap-0.5 text-primary mt-7">
                      {Array.from({ length: review.rating }).map((_, s) => (
                        <StarIcon key={s} className="w-4 h-4" />
                      ))}
                    </span>
                    <div className="flex items-center gap-2 mt-4">
                      <span className="font-medium text-foreground">{review.name}</span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                      <GoogleIcon className="w-4 h-4 ml-1" />
                    </div>
                    {review.reviewerMeta && (
                      <span className="text-xs text-muted-foreground/70 mt-1">
                        {review.reviewerMeta}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={scrollPrev}
            aria-label="Previous review"
            className="absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-card border border-border shadow-md flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next review"
            className="absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-card border border-border shadow-md flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-7">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                selected === i ? "w-8 bg-primary" : "w-2 bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <a href={links.writeReview} target="_blank" rel="noopener noreferrer" className="btn-primary rounded-full">
            <Plus className="w-4 h-4 mr-2" />
            Add a Review
          </a>
          <a href={links.googleProfile} target="_blank" rel="noopener noreferrer" className="btn-outline rounded-full">
            View on Google
          </a>
        </div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="mt-20"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="meta-label">Find Us</span>
          </div>
          <div className="card-soft p-3 overflow-hidden">
            <iframe
              title="Location of Les Nobodies Business LLC"
              src={LOCATION_EMBED}
              className="w-full h-[320px] rounded-2xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4 font-light">
            {business.legal} · {business.ministry} ·{" "}
            <a href={links.maps} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">
              Open in Google Maps
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
