import { motion, useScroll, useTransform } from "motion/react";
import { CheckCircle2, Lightbulb, Package, Calendar } from "lucide-react";
import { useIsMobile } from "../hooks/useIsMobile";
import { SEO } from "../components/SEO";

const tipsList = [
  {
    icon: <Calendar size={32} />,
    title: "Plan Ahead",
    desc: "Start planning your move at least 4-6 weeks in advance. Create a checklist and timeline to ensure nothing is forgotten.",
    points: ["Book your removal company early", "Notify utility providers", "Update your address with banks and subscriptions"]
  },
  {
    icon: <Package size={32} />,
    title: "Declutter Before Packing",
    desc: "Moving is the perfect opportunity to get rid of items you no longer need. Donate, sell, or throw away things you haven't used in a year.",
    points: ["Sort items into 'keep', 'donate', and 'toss' piles", "Don't pay to move things you don't want", "Start with the loft, garage, or spare room"]
  },
  {
    icon: <Lightbulb size={32} />,
    title: "Pack an Essentials Box",
    desc: "Pack a box with everything you'll need for the first 24 hours in your new home. Keep this box with you or load it last so it's the first thing off the van.",
    points: ["Toiletries and medication", "A change of clothes", "Kettle, tea/coffee, mugs, and snacks", "Important documents and chargers"]
  },
  {
    icon: <CheckCircle2 size={32} />,
    title: "Label Everything Clearly",
    desc: "Label boxes on the top and at least one side. Write the contents and the room it belongs in. This makes unpacking much easier.",
    points: ["Use a color-coding system for rooms", "Mark fragile items clearly", "Number boxes to ensure nothing is lost"]
  }
];

export function Tips() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 50]);
  const isMobile = useIsMobile();

  return (
    <div className="w-full">
      <SEO 
        title="Moving Tips & Advice | CCM Supreme Removals"
        description="Expert moving tips and advice to help you prepare for a smooth, stress-free house move. Learn how to pack, declutter, and plan your relocation."
        canonical="https://ccmsupremeremovals.co.uk/tips"
      />
      {/* HEADER */}
      <section className="bg-brand-navy text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <motion.img 
            style={isMobile ? { scale: 1.05 } : { y: y1, scale: 1.2 }}
            src="/images/packing-boxes-house-removals-service.jpg" 
            alt="Moving boxes" 
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">Moving Tips</h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
              Expert advice to help you prepare for a smooth, stress-free moving day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-12">
              {tipsList.map((tip, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: isMobile ? 0 : idx * 0.1, duration: 0.5 }}
                  className="bg-white p-8 md:p-10 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all duration-500 border border-slate-100 flex flex-col md:flex-row gap-8 items-start hover:-translate-y-1 group"
                >
                  <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-brand-accent flex-shrink-0 group-hover:bg-brand-accent group-hover:text-white group-hover:scale-110 transition-all duration-500">
                    {tip.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-brand-navy mb-4">{tip.title}</h2>
                    <p className="text-slate-600 leading-relaxed mb-6">{tip.desc}</p>
                    <ul className="space-y-3">
                      {tip.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3 text-slate-700">
                          <CheckCircle2 className="text-brand-accent w-5 h-5 flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
