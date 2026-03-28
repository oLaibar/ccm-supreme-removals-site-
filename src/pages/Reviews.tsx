import { motion, useScroll, useTransform } from "motion/react";
import { Star, Quote } from "lucide-react";
import { useIsMobile } from "../hooks/useIsMobile";
import { SEO } from "../components/SEO";

const reviews = [
  { name: "Sarah Jenkins", text: "Absolutely fantastic service. The team was punctual, polite, and handled our fragile items with immense care. Highly recommended!", rating: 5, date: "2 weeks ago" },
  { name: "David O'Connor", text: "CCM Supreme made our office relocation seamless. They worked around our schedule and had us up and running the next day.", rating: 5, date: "1 month ago" },
  { name: "Emily Thorne", text: "From the initial quote to the final box being unloaded, everything was professional. The best moving experience I've had.", rating: 5, date: "2 months ago" },
  { name: "James Wilson", text: "Great guys, very hard working. They didn't stop until the job was done. Very careful with all our furniture.", rating: 5, date: "3 months ago" },
  { name: "Sophie Clarke", text: "I was so stressed about moving, but the team put me at ease immediately. Fast, efficient, and very reasonably priced.", rating: 5, date: "4 months ago" },
  { name: "Michael Brown", text: "Used them for a long-distance move. Excellent communication throughout the process. Everything arrived safely.", rating: 5, date: "5 months ago" }
];

export function Reviews() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 50]);
  const isMobile = useIsMobile();

  return (
    <div className="w-full">
      <SEO
        title="Customer Reviews | CCM Supreme Removals"
        description="Read what our satisfied customers have to say about their stress-free moving experience with CCM Supreme Removals. 5-star rated service."
        canonical="https://ccmsupremeremovals.co.uk/reviews"
      />
      {/* HEADER */}
      <section className="bg-brand-navy text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <motion.img
            style={isMobile ? { scale: 1.05 } : { y: y1, scale: 1.2 }}
            src="/images/removals-van-highway-uk.jpg"
            alt="Happy customer"
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">Customer Reviews</h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              See what our clients have to say about their experience with CCM Supreme Removals.
            </p>

            <div className="inline-flex flex-col items-center bg-white p-6 rounded-3xl shadow-2xl border border-slate-100">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-5xl font-display font-bold text-brand-navy">4.8</span>
                <div className="flex gap-1 text-[#FFC107]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={28} fill="currentColor" className="drop-shadow-sm" />
                  ))}
                </div>
              </div>
              <p className="text-slate-600 font-bold text-sm tracking-wider uppercase flex items-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5" />
                GOOGLE RATING
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: isMobile ? 0 : idx * 0.1, duration: 0.5 }}
                className="bg-brand-navy p-8 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all duration-500 border border-white/10 relative hover:-translate-y-1 group"
              >
                <Quote className="absolute top-8 right-8 text-white/5 w-12 h-12 group-hover:text-white/10 transition-colors duration-500" />
                <div className="flex gap-1 mb-6 text-[#FFC107] relative z-10">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" className="drop-shadow-sm" />
                  ))}
                </div>
                <p className="text-white mb-8 italic leading-relaxed relative z-10 font-medium">"{review.text}"</p>
                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white text-brand-navy flex items-center justify-center font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h2 className="font-bold text-white">{review.name}</h2>
                      <span className="text-xs text-slate-300 uppercase tracking-wider font-medium">Verified Customer</span>
                    </div>
                  </div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5 bg-white rounded-full p-0.5" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.google.com/search?q=CCM+Supreme+Removals+Reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-brand-blue text-white hover:bg-blue-900 font-semibold px-6 sm:px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-premium-hover hover:-translate-y-1 text-sm sm:text-base w-full sm:w-auto min-h-[44px]"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5 bg-white rounded-full p-0.5" />
              READ ALL REVIEWS
            </a>
            <a
              href="https://www.google.com/search?q=CCM+Supreme+Removals+Reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-brand-navy border-2 border-brand-navy hover:bg-slate-50 font-semibold px-6 sm:px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-premium-hover hover:-translate-y-1 text-sm sm:text-base w-full sm:w-auto min-h-[44px]"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5" />
              LEAVE A REVIEW
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}