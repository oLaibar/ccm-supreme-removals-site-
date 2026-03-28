import { motion, useScroll, useTransform, useInView } from "motion/react";
import { ArrowRight, ShieldCheck, Clock, ThumbsUp, MapPin, Package, Truck, Home as HomeIcon, Building2, Star, FileText, Calendar, Users, Award } from "lucide-react";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { Lightbox } from "../components/Lightbox";
import { useIsMobile } from "../hooks/useIsMobile";
import { SEO } from "../components/SEO";

function AnimatedCounter({ from = 0, to, duration = 4.0, suffix = "", isFloat = false }: { from?: number, to: number, duration?: number, suffix?: string, isFloat?: boolean }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(from + (to - from) * easeProgress);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(to);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  const formattedCount = isFloat ? count.toFixed(1) : Math.floor(count);

  return <span ref={ref}>{formattedCount}{suffix}</span>;
}

const stats = [
  { icon: <Truck size={32} />, value: 350, suffix: "+", label: "Moves Completed" },
  { icon: <Star size={32} />, value: 4.8, suffix: " ★", label: "Google Rating", isFloat: true },
  { icon: <Award size={32} />, value: 5, suffix: "+", label: "Years Experience" },
  { icon: <Users size={32} />, value: 300, suffix: "+", label: "Happy Customers" },
];

const services = [
  { icon: <HomeIcon size={32} />, title: "Local Removals", desc: "Stress-free house moves tailored to your needs within the local area." },
  { icon: <MapPin size={32} />, title: "Long Distance Moves", desc: "Reliable and secure transportation across the UK and Europe." },
  { icon: <Building2 size={32} />, title: "Office Relocations", desc: "Efficient corporate relocations designed to minimise business downtime." },
  { icon: <Package size={32} />, title: "Packing Services", desc: "Professional packing and unpacking to ensure ultimate care for your items." },
  { icon: <Truck size={32} />, title: "Storage Solutions", desc: "Safe, secure, and flexible storage options for short or long-term needs." },
];

const steps = [
  { num: "01", icon: <FileText size={32} />, title: "Request a Quote", desc: "Get a fast, free, no-obligation estimate online or by phone." },
  { num: "02", icon: <Calendar size={32} />, title: "Plan the Move", desc: "We coordinate dates, packing needs, and logistics with you." },
  { num: "03", icon: <Package size={32} />, title: "Packing & Prep", desc: "Optional expert packing to secure your belongings." },
  { num: "04", icon: <Truck size={32} />, title: "Safe Transport", desc: "Fully insured transit to your new destination." },
  { num: "05", icon: <HomeIcon size={32} />, title: "Unpack & Settle", desc: "We unload and can even reassemble your furniture." },
];

const reviews = [
  { name: "Sarah Jenkins", text: "Absolutely fantastic service. The team was punctual, polite, and handled our fragile items with immense care. Highly recommended!", rating: 5 },
  { name: "David O'Connor", text: "CCM Supreme made our office relocation seamless. They worked around our schedule and had us up and running the next day.", rating: 5 },
  { name: "Emily Thorne", text: "From the initial quote to the final box being unloaded, everything was professional. The best moving experience I've had.", rating: 5 },
];

export function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 50]);
  const isMobile = useIsMobile();
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="w-full">
      <SEO
        title="CCM Supreme Removals | Professional House Removals & Man and Van UK"
        description="Top-rated removals company in the UK offering stress-free house removals, man and van services, office relocations, and professional packing. Get a free quote today!"
        canonical="https://ccmsupremeremovals.co.uk/"
        schema={{
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "CCM Supreme Removals",
          "image": "https://ccmsupremeremovals.co.uk/images/ccm-removals-trucks-house.jpg",
          "description": "Top-rated removals company in the UK offering stress-free house removals, man and van services, office relocations, and professional packing.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "UK"
          },
          "telephone": "+44 7838 191826",
          "email": "info@ccmsupremeremovals.com",
          "url": "https://ccmsupremeremovals.co.uk/",
          "priceRange": "££"
        }}
      />
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-40 lg:pt-48 lg:pb-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            style={isMobile ? { scale: 1.05 } : { y: y1, scale: 1.2 }}
            src="/images/ccm-removals-trucks-house.jpg"
            alt="Professional movers"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-brand-accent/20 text-brand-accent font-semibold text-sm tracking-wider uppercase mb-6 border border-brand-accent/30 backdrop-blur-sm">
                Premium UK Removals
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-[1.1]">
                Stress-Free, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-red-400 to-brand-accent animate-gradient-x bg-[length:200%_auto]">
                  Professional
                </span> Removals.
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                Experience a seamless transition to your new home or office. Fully insured, highly trained, and dedicated to handling your belongings with supreme care.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/quote" size="lg" icon={<ArrowRight size={20} />} className="w-full sm:w-auto shadow-premium-hover">
                  GET A FREE QUOTE
                </Button>
                <Button href="tel:01582292303" variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-brand-navy">
                  CALL 01582 292303
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8 text-sm font-medium text-slate-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-brand-accent" />
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-brand-accent" />
                  <span>Same-Day Moves</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-brand-accent" />
                  <span>2 Men & Van Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-brand-accent" />
                  <span>UK & Europe Coverage</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-brand-navy py-8 border border-white/10 relative z-20 -mt-16 lg:-mt-24 mx-4 md:mx-auto md:max-w-6xl rounded-2xl shadow-premium">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-6 text-center divide-x-0 md:divide-x divide-white/10">
            {[
              { icon: <ShieldCheck className="text-brand-accent w-8 h-8" />, title: "Secure & Insured" },
              { icon: <ThumbsUp className="text-brand-accent w-8 h-8" />, title: "5-Star Rated" },
              { icon: <Clock className="text-brand-accent w-8 h-8" />, title: "Punctual & Reliable" },
              { icon: <MapPin className="text-brand-accent w-8 h-8" />, title: "UK Wide Coverage" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: isMobile ? 0 : idx * 0.1, duration: 0.5 }}
                className="flex flex-col items-center gap-2"
              >
                {item.icon}
                <span className="text-white font-medium text-sm uppercase tracking-wide">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="block text-brand-accent font-semibold tracking-widest uppercase text-sm mb-3">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy mb-6">Comprehensive Moving Solutions</h2>
            <p className="text-slate-600 text-lg">From local flat moves to large corporate relocations, we provide end-to-end services designed to make your move effortless.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: isMobile ? 0 : idx * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all duration-500 border border-slate-100/50 group hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-accent group-hover:text-white group-hover:scale-110 transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-brand-navy mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                <Link to="/services" className="inline-flex items-center text-sm font-semibold text-brand-blue group-hover:text-brand-accent transition-colors">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button href="/services" variant="secondary" className="w-full sm:w-auto">VIEW ALL SERVICES</Button>
          </div>
        </div>
      </section>

      {/* COMPANY STATISTICS */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: isMobile ? 0 : idx * 0.1, duration: 0.6 }}
                className="bg-white p-6 sm:p-8 rounded-3xl shadow-premium border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-1 transition-all duration-500"
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-brand-accent group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm ${stat.label === 'Google Rating' ? 'text-[#FFC107]' : 'text-brand-blue'}`}>
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-navy mb-2 tracking-tight">
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} isFloat={stat.isFloat} />
                </div>
                <p className="text-slate-500 font-medium tracking-wide uppercase text-xs sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT US PREVIEW */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="block text-brand-accent font-semibold tracking-widest uppercase text-sm mb-3">About Us</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy mb-6">Professional Moving Services You Can Trust</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  CCM Supreme Removals provides reliable house and business moving services designed to make every relocation smooth and stress-free. From careful packing and furniture handling to safe transport and secure storage, every move is completed with professionalism, efficiency, and attention to detail.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  Whether the move is local or long distance, the focus is always on safety, organisation, and customer satisfaction from start to finish.
                </p>
                <Button href="/about" variant="secondary" size="lg" icon={<ArrowRight size={20} />} className="w-full sm:w-auto">
                  Learn More About Us
                </Button>
              </motion.div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden shadow-premium group h-64 md:h-full cursor-pointer"
                  onClick={() => setLightboxImage({ src: "/images/removals-van-residential-moving-day.jpg", alt: "Residential moving day" })}
                >
                  <img src="/images/removals-van-residential-moving-day.jpg" alt="Residential moving day" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-brand-navy/0 transition-colors duration-500"></div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: isMobile ? 0 : 0.1 }}
                  className="relative rounded-3xl overflow-hidden shadow-premium group h-40 md:h-56 cursor-pointer"
                  onClick={() => setLightboxImage({ src: "/images/furniture-wrapping-protection-removals.jpg", alt: "Furniture wrapping" })}
                >
                  <img src="/images/furniture-wrapping-protection-removals.jpg" alt="Furniture wrapping" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-brand-navy/0 transition-colors duration-500"></div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: isMobile ? 0 : 0.2 }}
                  className="relative rounded-3xl overflow-hidden shadow-premium group h-40 md:h-56 cursor-pointer"
                  onClick={() => setLightboxImage({ src: "/images/loading-moving-boxes.jpg", alt: "Loading moving boxes" })}
                >
                  <img src="/images/loading-moving-boxes.jpg" alt="Loading moving boxes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-brand-navy/0 transition-colors duration-500"></div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: isMobile ? 0 : 0.3 }}
                  className="relative rounded-3xl overflow-hidden shadow-premium group h-40 md:h-56 cursor-pointer"
                  onClick={() => setLightboxImage({ src: "/images/packing-boxes-house-removals-service.jpg", alt: "Packing boxes" })}
                >
                  <img src="/images/packing-boxes-house-removals-service.jpg" alt="Packing boxes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-brand-navy/0 transition-colors duration-500"></div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: isMobile ? 0 : 0.4 }}
                  className="col-span-1 md:col-span-2 relative rounded-3xl overflow-hidden shadow-premium group h-40 md:h-56 cursor-pointer"
                  onClick={() => setLightboxImage({ src: "/images/removals-truck-loading-logistics.jpg", alt: "Truck loading logistics" })}
                >
                  <img src="/images/removals-truck-loading-logistics.jpg" alt="Truck loading logistics" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-brand-navy/0 transition-colors duration-500"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="block text-brand-accent font-semibold tracking-widest uppercase text-sm mb-3">The Process</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy mb-6">How We Make It Simple</h2>
            <p className="text-slate-600 text-lg">A seamless, five-step journey to your new destination.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-slate-100 z-0">
              <motion.div
                className="h-full bg-brand-accent"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>

            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: isMobile ? 0 : idx * 0.2, duration: 0.6 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-6 relative shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:border-brand-accent/30 transition-all duration-500">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-50 to-slate-100 group-hover:from-brand-accent/5 group-hover:to-transparent transition-colors duration-500"></div>
                  <div className="relative z-10 text-brand-navy group-hover:text-brand-accent group-hover:scale-110 transition-all duration-500">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-navy text-white font-bold flex items-center justify-center text-sm shadow-md z-20 group-hover:bg-brand-accent transition-colors duration-500">
                    {step.num}
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-brand-navy mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 md:py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="block text-brand-accent font-semibold tracking-widest uppercase text-sm mb-3">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Trusted by Hundreds</h2>
            <p className="text-slate-300 text-lg">Real customer feedback from completed moves. See what our clients have to say about their stress-free experience with CCM Supreme Removals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: isMobile ? 0 : idx * 0.1, duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 shadow-2xl"
              >
                <div className="flex gap-1 mb-6 text-[#FFC107]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" className="drop-shadow-sm" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center font-bold text-brand-accent">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold">{review.name}</h3>
                    <span className="text-xs text-slate-400 uppercase tracking-wider">Verified Customer</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.google.com/search?q=CCM+Supreme+Removals+Reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-navy hover:bg-slate-100 font-semibold px-6 sm:px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-premium-hover hover:-translate-y-1 text-sm sm:text-base w-full sm:w-auto min-h-[44px]"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5" />
              READ MORE REVIEWS
            </a>
            <a
              href="https://www.google.com/search?q=CCM+Supreme+Removals+Reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-accent text-white hover:bg-brand-accent-hover font-semibold px-6 sm:px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-premium-hover hover:-translate-y-1 text-sm sm:text-base w-full sm:w-auto min-h-[44px]"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5 bg-white rounded-full p-0.5" />
              LEAVE A REVIEW
            </a>
          </div>
        </div>
      </section>

      {/* TRUSTED PLATFORMS */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
            Trusted by customers on
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            <a href="https://share.google/oPzvRk3xeAl26QTZx" target="_blank" rel="noopener noreferrer" className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:-translate-y-1" aria-label="Google">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-8 md:h-10 object-contain" />
            </a>
            <a href="https://www.bark.com/en/gb/b/ccm-supreme-removals/oV9G9/" target="_blank" rel="noopener noreferrer" className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:-translate-y-1 flex items-start select-none" aria-label="Bark">
              <span className="text-3xl md:text-4xl font-bold text-[#00B6FF] tracking-tighter leading-none" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>bark</span>
              <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FFD500] ml-0.5"></span>
            </a>
            <a href="https://www.comparemymove.com/directory/ccm-supreme-removals" target="_blank" rel="noopener noreferrer" className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:-translate-y-1 flex items-center select-none" aria-label="CompareMyMove">
              <span className="text-2xl md:text-3xl font-bold text-[#1E3A8A] tracking-tight leading-none">compare</span>
              <span className="text-2xl md:text-3xl font-bold text-[#00A859] tracking-tight leading-none">mymove</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/removals-truck-night-service.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-blue/90"></div>
        <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-1/4 translate-y-1/4 text-white">
          <Truck size={400} />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Ready for a Smooth Move?</h2>
            <p className="text-xl text-slate-300 mb-10 font-medium">
              Get a fast, accurate quote today. No hidden fees, no hassle—just professional service you can trust.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/quote" variant="primary" size="lg" icon={<ArrowRight size={20} />} className="w-full sm:w-auto shadow-premium-hover">
                REQUEST A QUOTE ONLINE
              </Button>
              <Button href="tel:01582292303" variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-brand-navy">
                CALL US NOW
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