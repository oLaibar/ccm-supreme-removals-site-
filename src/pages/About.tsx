import { motion, useScroll, useTransform } from "motion/react";
import { CheckCircle2, Users, Target, ShieldCheck } from "lucide-react";
import { Button } from "../components/Button";
import { useState } from "react";
import { Lightbox } from "../components/Lightbox";
import { useIsMobile } from "../hooks/useIsMobile";
import { SEO } from "../components/SEO";

export function About() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 50]);
  const isMobile = useIsMobile();
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="w-full">
      <SEO
        title="About Us | CCM Supreme Removals | Trusted UK Movers"
        description="Learn more about CCM Supreme Removals, your trusted partner for professional, reliable, and stress-free house and office removals across the UK."
        canonical="https://ccmsupremeremovals.co.uk/about"
      />
      {/* HEADER */}
      <section className="bg-brand-navy text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <motion.img
            style={isMobile ? { scale: 1.05 } : { y: y1, scale: 1.2 }}
            src="/images/ccm-removals-vans-street.jpg"
            alt="Movers"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">About CCM Supreme</h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
              Your trusted partner for professional, reliable, and stress-free removals across the UK.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <span className="block text-brand-accent font-semibold tracking-widest uppercase text-sm mb-3">Our Story</span>
              <h2 className="text-4xl font-display font-bold text-brand-navy mb-6">Excellence in Every Move</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                At CCM Supreme Removals, we understand that moving can be one of life&apos;s most stressful events. That&apos;s why we&apos;ve built our company on a foundation of reliability, care, and supreme professionalism.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Based in Luton, we provide comprehensive moving services locally and nationwide. Whether you&apos;re moving a small flat or relocating an entire corporate office, our highly trained team handles your belongings as if they were our own.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Fully Insured Services",
                  "Trained Professionals",
                  "Modern Fleet",
                  "Transparent Pricing",
                  "Packing & Unpacking",
                  "Furniture Assembly",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-accent w-5 h-5 flex-shrink-0" />
                    <span className="text-brand-navy font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                <div
                  className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden shadow-premium group h-64 md:h-full cursor-pointer"
                  onClick={() =>
                    setLightboxImage({
                      src: "/images/removals-truck-coastal-street-uk.jpg",
                      alt: "CCM Removals truck on coastal street",
                    })
                  }
                >
                  <img
                    src="/images/removals-truck-coastal-street-uk.jpg"
                    alt="CCM Removals truck on coastal street"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-brand-navy/0 transition-colors duration-500"></div>
                </div>
                <div
                  className="relative rounded-3xl overflow-hidden shadow-premium group h-40 md:h-56 cursor-pointer"
                  onClick={() =>
                    setLightboxImage({
                      src: "/images/furniture-packed-ready-for-removal.jpg",
                      alt: "Furniture packed ready for removal",
                    })
                  }
                >
                  <img
                    src="/images/furniture-packed-ready-for-removal.jpg"
                    alt="Furniture packed ready for removal"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-brand-navy/0 transition-colors duration-500"></div>
                </div>
                <div
                  className="relative rounded-3xl overflow-hidden shadow-premium group h-40 md:h-56 cursor-pointer"
                  onClick={() =>
                    setLightboxImage({
                      src: "/images/removals-truck-loaded-furniture-secured.png",
                      alt: "Secured furniture in truck",
                    })
                  }
                >
                  <img
                    src="/images/removals-truck-loaded-furniture-secured.png"
                    alt="Secured furniture in truck"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-brand-navy/0 transition-colors duration-500"></div>
                </div>
                <div
                  className="relative rounded-3xl overflow-hidden shadow-premium group h-40 md:h-56 cursor-pointer"
                  onClick={() =>
                    setLightboxImage({
                      src: "/images/house-removals-trucks-outside-new-homes-uk.jpg",
                      alt: "House removals trucks outside new homes",
                    })
                  }
                >
                  <img
                    src="/images/house-removals-trucks-outside-new-homes-uk.jpg"
                    alt="House removals trucks outside new homes"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-brand-navy/0 transition-colors duration-500"></div>
                </div>
                <div
                  className="col-span-1 md:col-span-2 relative rounded-3xl overflow-hidden shadow-premium group h-40 md:h-56 cursor-pointer"
                  onClick={() =>
                    setLightboxImage({
                      src: "/images/ccm-removals-vans-street.jpg",
                      alt: "CCM Removals vans on street",
                    })
                  }
                >
                  <img
                    src="/images/ccm-removals-vans-street.jpg"
                    alt="CCM Removals vans on street"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-brand-navy/0 transition-colors duration-500"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="block text-brand-accent font-semibold tracking-widest uppercase text-sm mb-3">Core Values</span>
            <h2 className="text-4xl font-display font-bold text-brand-navy mb-6">What Drives Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck size={32} />,
                title: "Trust & Security",
                desc: "Your belongings are fully insured and handled with the utmost respect and care.",
              },
              {
                icon: <Target size={32} />,
                title: "Precision",
                desc: "We plan every detail of your move to ensure a smooth, on-time delivery.",
              },
              {
                icon: <Users size={32} />,
                title: "Customer First",
                desc: "Our friendly team is dedicated to making your moving day as stress-free as possible.",
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: isMobile ? 0 : idx * 0.1, duration: 0.5 }}
                className="bg-brand-light p-10 rounded-3xl text-center shadow-sm hover:shadow-premium-hover transition-all duration-500 border border-slate-100 hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-accent mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  {value.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-brand-navy mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-blue/90"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Ready to Move with Us?</h2>
            <p className="text-lg md:text-xl text-slate-300 mb-10">
              Experience the CCM Supreme difference. Contact us today for a free, no-obligation quote.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/quote" variant="primary" size="lg" className="w-full sm:w-auto shadow-premium-hover">
                GET A FREE QUOTE
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-brand-navy"
              >
                CONTACT US
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Lightbox
        isOpen={!!lightboxImage}
        imageSrc={lightboxImage?.src || ""}
        imageAlt={lightboxImage?.alt || ""}
        onClose={() => setLightboxImage(null)}
      />
    </div>
  );
}