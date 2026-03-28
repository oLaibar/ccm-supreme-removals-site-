import { motion } from "motion/react";
import { SEO } from "../components/SEO";

export function TermsAndConditions() {
  return (
    <div className="w-full">
      <SEO
        title="Terms and Conditions | CCM Supreme Removals"
        description="Read the terms and conditions for using CCM Supreme Removals services, including bookings, payments, liability, and storage."
        canonical="https://ccmsupremeremovals.co.uk/terms-and-conditions"
      />
      {/* HEADER */}
      <section className="bg-brand-navy text-white pt-28 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/removals-truck-loading-logistics.jpg"
            alt="CCM Removals Trucks loading logistics"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">Terms and Conditions</h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-10">
              <h2 className="text-xl font-bold text-brand-navy mb-4">Company Details</h2>
              <ul className="space-y-2 text-slate-600 list-none pl-0">
                <li><strong>Company:</strong> CCM Supreme Removals LTD</li>
                <li><strong>Email:</strong> <a href="mailto:info@ccmsupremeremovals.com" className="text-brand-accent hover:underline">info@ccmsupremeremovals.com</a></li>
                <li><strong>Phone:</strong> <a href="tel:+447838191826" className="text-brand-accent hover:underline">+44 7838 191826</a></li>
                <li><strong>Country:</strong> United Kingdom (England)</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">1. Introduction</h2>
            <p className="text-slate-600 mb-6">
              These Terms and Conditions govern the provision of services by CCM Supreme Removals LTD. By booking our services, you agree to be bound by these terms.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">2. Services</h2>
            <p className="text-slate-600 mb-6">
              We provide professional removals, transport, packing, and storage services. The specific details of the services to be provided will be outlined in your booking confirmation.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">3. Quotes and Bookings</h2>
            <p className="text-slate-600 mb-6">
              All quotes provided are based on the information supplied by the customer. We reserve the right to amend the quote if the actual requirements differ from the information provided. A booking is only confirmed once a deposit has been received.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">4. Deposits and Payments</h2>
            <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
              <li>A deposit is required to secure your booking.</li>
              <li>The deposit is non-refundable if the booking is cancelled within 48 hours before the scheduled service.</li>
              <li>The remaining balance is due immediately after the service has been completed.</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">5. Fragile Items</h2>
            <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
              <li>Customers must declare any fragile, valuable, or unusual items prior to the move.</li>
              <li>We accept no liability for damage to fragile items if they are not properly packed by the customer or disclosed to us beforehand.</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">6. Storage Services</h2>
            <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
              <li>Items stored in our facilities are stored at the customer's own risk.</li>
              <li>We are not responsible for any damage or loss caused by events outside of our company's reasonable control.</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">7. Access and Delays</h2>
            <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
              <li>The customer must ensure adequate access and parking arrangements at both the collection and delivery addresses.</li>
              <li>Extra charges may apply for delays caused by inadequate access, waiting times, or other factors beyond our control.</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">8. Prohibited Items</h2>
            <p className="text-slate-600 mb-6">
              We will not transport or store any illegal, hazardous, flammable, explosive, or perishable items. The customer is solely responsible for ensuring no such items are included in the goods to be moved or stored.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">9. Limitation of Liability</h2>
            <p className="text-slate-600 mb-6">
              Our liability for any loss or damage to your goods is strictly limited to the total amount paid by the customer for the specific service provided. We highly recommend customers arrange their own comprehensive insurance for high-value items.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">10. Third-Party Links</h2>
            <p className="text-slate-600 mb-6">
              Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of any third-party sites.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">11. Updates to Terms</h2>
            <p className="text-slate-600 mb-6">
              We reserve the right to update or modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on our website. The "Last Updated" date will reflect the most recent revisions.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">12. Governing Law</h2>
            <p className="text-slate-600 mb-6">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of England (UK). Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the English courts.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">13. Contact Information</h2>
            <p className="text-slate-600 mb-6">
              If you have any questions or concerns regarding these Terms and Conditions, please contact us at <a href="mailto:info@ccmsupremeremovals.com" className="text-brand-accent hover:underline">info@ccmsupremeremovals.com</a>.
            </p>

            <div className="mt-12 pt-8 border-t border-slate-200 text-sm text-slate-500">
              Last updated: March 21, 2026
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}