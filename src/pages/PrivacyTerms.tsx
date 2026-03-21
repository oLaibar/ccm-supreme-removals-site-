import { motion } from "motion/react";
import { Shield, FileText } from "lucide-react";

export function PrivacyTerms() {
  return (
    <div className="w-full">
      {/* HEADER */}
      <section className="bg-brand-navy text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="/removals-storage-boxes-secure-storage.jpg" 
            alt="Legal documents" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">Privacy Policy & Terms</h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
              Important information regarding your data, privacy, and our terms of service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-100 p-6 sm:p-8 md:p-12">
            
            {/* Privacy Policy Section */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6">
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center text-brand-accent">
                  <Shield size={24} />
                </div>
                <h2 className="text-3xl font-display font-bold text-brand-navy">Privacy Policy</h2>
              </div>
              
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 mb-6">
                  At CCM Supreme Removals, we are committed to protecting and respecting your privacy. This policy explains when and why we collect personal information, how we use it, the conditions under which we may disclose it to others, and how we keep it secure.
                </p>

                <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">1. Information We Collect</h3>
                <p className="text-slate-600 mb-4">
                  We collect information from you when you request a quote, book a service, or contact us via our website, phone, or email. The personal information we collect might include your name, address, email address, phone number, and details regarding your moving requirements.
                </p>

                <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">2. How We Use Your Information</h3>
                <p className="text-slate-600 mb-4">We may use your information to:</p>
                <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                  <li>Provide you with an accurate quote for our services.</li>
                  <li>Carry out our obligations arising from any contracts entered into by you and us.</li>
                  <li>Notify you of changes to our services.</li>
                  <li>Process payments and maintain our accounts and records.</li>
                </ul>

                <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">3. Data Security</h3>
                <p className="text-slate-600 mb-4">
                  We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online and offline.
                </p>

                <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">4. Sharing Your Information</h3>
                <p className="text-slate-600 mb-4">
                  We will not sell or rent your information to third parties. We will not share your information with third parties for marketing purposes. We may pass your information to our third-party service providers (e.g., payment processors) for the purposes of completing tasks and providing services to you on our behalf.
                </p>
              </div>
            </div>

            {/* Terms & Conditions Section */}
            <div>
              <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6">
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center text-brand-accent">
                  <FileText size={24} />
                </div>
                <h2 className="text-3xl font-display font-bold text-brand-navy">Terms & Conditions</h2>
              </div>
              
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 mb-6">
                  These terms and conditions govern your use of our services. By booking a service with CCM Supreme Removals, you agree to these terms in full.
                </p>

                <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">1. Quotations and Booking</h3>
                <p className="text-slate-600 mb-4">
                  All quotations are provided free of charge and without obligation. A booking is only confirmed once a deposit (if applicable) has been paid and written confirmation has been provided by us. Quotes are based on the information provided by the customer; any additional items or services required on the day may incur extra charges.
                </p>

                <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">2. Customer Responsibilities</h3>
                <p className="text-slate-600 mb-4">It is the customer's responsibility to:</p>
                <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                  <li>Ensure adequate parking and access at both the collection and delivery addresses.</li>
                  <li>Be present or represented throughout the collection and delivery of the goods.</li>
                  <li>Ensure all items are properly packed (unless you have booked our packing service).</li>
                  <li>Empty, properly defrost, and clean refrigerators and deep freezers. We are not responsible for the contents.</li>
                </ul>

                <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">3. Insurance and Liability</h3>
                <p className="text-slate-600 mb-4">
                  We are fully insured for Goods in Transit and Public Liability. However, our liability for loss or damage is limited to the terms of our insurance policy. We are not liable for damage to items packed by the customer unless the damage is caused by our negligence. Valuable items (jewelry, money, important documents) should be transported personally by the customer.
                </p>

                <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">4. Cancellations and Postponements</h3>
                <p className="text-slate-600 mb-4">
                  If you cancel or postpone your move, you may be subject to a cancellation fee depending on the notice given. Please contact us as soon as possible if your plans change.
                </p>

                <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">5. Payment</h3>
                <p className="text-slate-600 mb-4">
                  Payment must be made in full upon completion of the move unless otherwise agreed in writing prior to the moving date. We accept cash, bank transfers, and major credit/debit cards.
                </p>
                
                <div className="mt-12 p-6 bg-brand-light rounded-2xl border border-slate-200">
                  <p className="text-slate-700 font-medium">
                    If you have any questions regarding our Privacy Policy or Terms & Conditions, please contact us at <a href="mailto:info@ccmsupremeremovals.com" className="text-brand-accent hover:underline">info@ccmsupremeremovals.com</a> or call us at <a href="tel:01582292303" className="text-brand-accent hover:underline">01582 292303</a>.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
