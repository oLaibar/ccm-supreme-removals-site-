import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Home, FileQuestion } from "lucide-react";
import { Button } from "../components/Button";
import { SEO } from "../components/SEO";

export function NotFound() {
  return (
    <div className="w-full">
      <SEO 
        title="Page Not Found | CCM Supreme Removals"
        description="Sorry, the page you are looking for cannot be found. It may have been moved, renamed, or the link may be incorrect."
        canonical="https://ccmsupremeremovals.co.uk/404"
      />

      <section className="bg-brand-navy text-white pt-32 pb-20 relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="/images/packing-boxes-house-removals-service.jpg" 
            alt="Moving boxes background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <FileQuestion className="w-12 h-12 text-brand-accent" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Sorry, the page you are looking for cannot be found. It may have been moved, renamed, or the link may be incorrect.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <Button 
                href="/" 
                variant="primary" 
                size="lg"
                icon={<Home className="w-5 h-5" />}
                className="w-full sm:w-auto text-base sm:text-lg px-8 py-4 bg-brand-accent hover:bg-brand-accent-hover"
              >
                Back to Home
              </Button>
              <Button 
                href="/quote" 
                variant="outline" 
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto text-base sm:text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 hover:border-white"
              >
                Get a Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
