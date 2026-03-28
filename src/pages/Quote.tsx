import { motion, useScroll, useTransform } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { useIsMobile } from "../hooks/useIsMobile";
import { SEO } from "../components/SEO";

export function Quote() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 50]);
  const isMobile = useIsMobile();

  return (
    <div className="w-full">
      <SEO 
        title="Get a Free Removals Quote | CCM Supreme Removals"
        description="Request a free, no-obligation quote for your house move, office relocation, or packing services. Fast response, no hidden fees, fully insured."
        canonical="https://ccmsupremeremovals.co.uk/quote"
      />
      {/* HEADER */}
      <section className="bg-brand-navy text-white pt-28 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <motion.img 
            style={isMobile ? { scale: 1.05 } : { y: y1, scale: 1.2 }}
            src="/images/removals-truck-loading-logistics.jpg" 
            alt="CCM Removals Trucks" 
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">Get a Free Quote</h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-6">
              Fill out the form below to receive a fast, accurate, and no-obligation quote for your upcoming move.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-accent w-5 h-5" />
                <span>Fast Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-accent w-5 h-5" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-accent w-5 h-5" />
                <span>Fully Insured</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-8 md:py-16 bg-brand-light">
        <div className="container mx-auto px-0 sm:px-4 md:px-6">
          <div className="max-w-5xl mx-auto bg-white sm:rounded-3xl shadow-premium border-y sm:border border-slate-100">
            <div className="p-4 sm:p-8 md:p-10 pb-2 md:pb-6">
              <div className="text-center mb-2 md:mb-4">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-3">Request Your Estimate</h2>
                <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto px-4 sm:px-0">Please provide as much detail as possible so we can give you the most accurate quote.</p>
              </div>
            </div>
            
            <div className="w-full px-0 sm:px-6 md:px-8 pb-4 sm:pb-8 flex justify-center">
              <iframe 
                src="https://app.i-mve.com/jobform/65e4d89a6d26f15d41e8d5be"
                className="w-full max-w-full border-none h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px]"
                loading="lazy"
                title="Quote Form"
                style={{ width: '100%', minWidth: '100%' }}
              >
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
