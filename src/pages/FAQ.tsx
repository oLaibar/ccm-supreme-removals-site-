import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle, ArrowRight, PoundSterling, Package, ShieldCheck, Warehouse, Calendar, MapPin, Sofa } from "lucide-react";
import { Button } from "../components/Button";

const faqs = [
  {
    question: "How much does a house removal cost?",
    answer: "The cost of a house removal depends on several factors including the size of the property, the distance of the move, the amount of furniture, and whether packing or storage services are required. The best way to get an accurate price is to request a free quote through our website.",
    icon: <PoundSterling className="text-brand-accent" size={24} />
  },
  {
    question: "Do you provide packing services?",
    answer: "Yes. CCM Supreme Removals offers professional packing services to ensure that your belongings are protected during the move. We use quality packing materials and careful handling to keep everything safe during transport.",
    icon: <Package className="text-brand-accent" size={24} />
  },
  {
    question: "Are my belongings insured during the move?",
    answer: "Yes. We take the safety of your belongings seriously. Our team handles items with care and our services include protection measures to minimise the risk of damage during transportation.",
    icon: <ShieldCheck className="text-brand-accent" size={24} />
  },
  {
    question: "Do you offer storage services?",
    answer: "Yes. We offer secure storage solutions for customers who need temporary or longer-term storage for their belongings during the moving process.",
    icon: <Warehouse className="text-brand-accent" size={24} />
  },
  {
    question: "How far in advance should I book a removal?",
    answer: "We recommend booking your move as early as possible, especially during busy periods. However, we also do our best to accommodate last-minute moves when availability allows.",
    icon: <Calendar className="text-brand-accent" size={24} />
  },
  {
    question: "What areas do you cover?",
    answer: "CCM Supreme Removals provides moving services across the UK and can also assist with longer distance relocations depending on availability.",
    icon: <MapPin className="text-brand-accent" size={24} />
  },
  {
    question: "Do you move large or fragile furniture?",
    answer: "Yes. Our team has experience handling large furniture, fragile items, and valuable belongings. We use proper protection and careful loading techniques to ensure safe transport.",
    icon: <Sofa className="text-brand-accent" size={24} />
  }
];

interface FAQItemProps {
  faq: {
    question: string;
    answer: string;
    icon: React.ReactNode;
  };
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-4 transition-all duration-300 hover:shadow-md">
      <button
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
        onClick={onClick}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center shrink-0">
            {faq.icon}
          </div>
          <h3 className="text-lg font-bold text-brand-navy pr-4">{faq.question}</h3>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-brand-accent text-white rotate-180' : 'bg-slate-50 text-slate-400'}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-2 pl-[88px]">
              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full">
      {/* HEADER */}
      <section className="bg-brand-navy text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/packing-boxes-house-removals-service.jpg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
              Find answers to the most common questions about our moving and storage services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index} 
                faq={faq} 
                isOpen={openIndex === index} 
                onClick={() => setOpenIndex(openIndex === index ? null : index)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-white border-t border-slate-100 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-6 text-brand-accent">
              <HelpCircle size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">Still have questions?</h2>
            <p className="text-slate-600 text-lg mb-8">
              Our friendly team is always here to help. Get in touch or request a free quote to discuss your specific moving needs.
            </p>
            <Button href="/quote" variant="primary" size="lg" icon={<ArrowRight size={20} />}>
              Get a Free Quote
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
