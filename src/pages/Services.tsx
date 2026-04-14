import { motion, useScroll, useTransform } from "motion/react";
import { Home, Building2, Package, Truck, Wrench, Box, MapPin, Archive } from "lucide-react";
import { Button } from "../components/Button";
import { useIsMobile } from "../hooks/useIsMobile";
import { SEO } from "../components/SEO";

const servicesList = [
  {
    icon: <Home size={24} />,
    title: "Local Removals",
    desc: "Fast, reliable, and efficient house moves across Luton and surrounding areas. Our expert team ensures your belongings are transported safely.",
    features: ["Fully Insured", "Careful Handling", "Local Experts"],
    image: "/images/removals-van-residential-moving-day.jpg"
  },
  {
    icon: <MapPin size={24} />,
    title: "Long Distance Moves",
    desc: "Moving across the country? We provide dedicated long-distance removal services, ensuring your belongings arrive safely, no matter the distance.",
    features: ["Dedicated Vehicles", "Route Planning", "Nationwide Coverage"],
    image: "/images/removals-van-highway-uk.jpg"
  },
  {
    icon: <Building2 size={24} />,
    title: "Office Relocations",
    desc: "Minimise downtime with our professional corporate relocation services. We coordinate with your team to ensure a seamless transition.",
    features: ["Weekend Moves", "IT Equipment Care", "Minimal Disruption"],
    image: "/images/removals-truck-night-service.jpg"
  },
  {
    icon: <Package size={24} />,
    title: "Packing Services",
    desc: "Save time and stress with our comprehensive packing services. We use high-quality materials to protect your fragile and valuable items.",
    features: ["Premium Materials", "Fragile Item Care", "Full/Partial Packing"],
    image: "/images/furniture-wrapping-protection-removals.jpg"
  },
  {
    icon: <Archive size={24} />,
    title: "Storage Solutions",
    desc: "Need extra space? We offer safe, secure, and flexible storage options for short or long-term needs while you transition.",
    features: ["Secure Facilities", "Flexible Terms", "Clean & Dry"],
    image: "/images/removals-storage-boxes-secure-storage.jpg"
  },
  {
    icon: <Wrench size={24} />,
    title: "Furniture Assembly",
    desc: "Don't struggle with flat-pack furniture or large beds. Our team is equipped with the right tools to safely dismantle and reassemble your items.",
    features: ["Expert Tools", "Beds & Wardrobes", "Safe Reassembly"],
    image: "/images/furniture-assembly-service.jpg"
  }
];

export function Services() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 50]);
  const isMobile = useIsMobile();

  return (
    <div className="w-full">
      <SEO 
        title="Our Services | House Removals, Packing & Storage | CCM Supreme Removals"
        description="Explore our range of professional moving services including local and long-distance removals, office relocations, packing, and secure storage solutions."
        canonical="https://ccmsupremeremovals.co.uk/services"
      />
      {/* HEADER */}
      <section className="bg-brand-navy text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <motion.img 
            style={isMobile ? { scale: 1.05 } : { y: y1, scale: 1.2 }}
            src="/images/packing-boxes-house-removals-service.jpg" 
            alt="Movers packing boxes" 
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">Our Services</h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive moving and storage solutions designed to make your transition effortless.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: isMobile ? 0 : idx * 0.1, duration: 0.5 }}
                className="bg-white rounded-3xl shadow-premium hover:shadow-premium-hover transition-all duration-500 border border-slate-100/50 group hover:-translate-y-1 overflow-hidden flex flex-col"
              >
                <div className="h-56 w-full relative overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-blue shadow-lg group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                      {service.icon}
                    </div>
                    <h2 className="text-xl font-display font-bold text-white">{service.title}</h2>
                  </div>
                </div>
                
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <p className="text-slate-600 leading-relaxed flex-1">{service.desc}</p>
                  
                  <div className="pt-6 border-t border-slate-100 mt-6">
                    <ul className="flex flex-wrap gap-2">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="bg-slate-50 text-brand-navy text-xs font-medium px-3 py-1.5 rounded-full border border-slate-200">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Not sure which service you need?</h2>
            <p className="text-lg md:text-xl text-slate-300 mb-10">
              Contact our friendly team today. We'll discuss your specific requirements and provide a tailored quote that fits your budget and timeline.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/quote" variant="primary" size="lg" className="w-full sm:w-auto shadow-premium-hover">GET A FREE QUOTE</Button>
              <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-brand-navy">CONTACT US</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
