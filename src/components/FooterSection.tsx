import { Link } from "react-router-dom";
import { links, business, identityBadges } from "@/data/site";
import { WhatsAppIcon, SunMark } from "@/components/icons";

const FooterSection = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-20 pt-20 pb-12 border-t border-border bg-card/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <SunMark className="w-7 h-7 text-primary" />
              <span className="text-sm uppercase tracking-[0.18em] font-medium text-foreground">
                {business.coach}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              {business.legal}
              <br />
              {business.ministry}
            </p>
            <p className="text-sm text-primary font-light mt-2 italic font-serif">
              {business.motto}
            </p>
          </div>

          <div>
            <span className="meta-label block mb-4">Explore</span>
            <ul className="space-y-3">
              <li><Link to="/#about" className="nav-link">About</Link></li>
              <li><Link to="/services" className="nav-link">Services</Link></li>
              <li><Link to="/#reviews" className="nav-link">Reviews & Location</Link></li>
            </ul>
          </div>

          <div>
            <span className="meta-label block mb-4">Connect</span>
            <ul className="space-y-3">
              <li>
                <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="nav-link inline-flex items-center gap-2">
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                  WhatsApp
                </a>
              </li>
              <li><a href={links.consultation} target="_blank" rel="noopener noreferrer" className="nav-link">Free Consultation</a></li>
              <li><a href={links.youtube} target="_blank" rel="noopener noreferrer" className="nav-link">YouTube</a></li>
            </ul>
          </div>

          <div>
            <span className="meta-label block mb-4">Contact</span>
            <ul className="space-y-3">
              <li><a href={`mailto:${links.email}`} className="nav-link normal-case tracking-normal text-sm">{links.email}</a></li>
              <li><a href={links.phoneHref} className="nav-link normal-case tracking-normal text-sm">{links.phone}</a></li>
            </ul>
          </div>
        </div>

        <div className="spectrum-bar opacity-60 mb-10" />

        <div className="flex flex-wrap gap-x-3 gap-y-2 mb-10">
          {identityBadges.map((badge) => (
            <span
              key={badge}
              className="text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full bg-background border border-border text-foreground/70"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground tracking-wide">
            © 2026 {business.legal}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground tracking-wide">
            We barter · Payment plans welcomed
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
