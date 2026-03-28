import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone, Mail, MapPin, Clock, Truck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-300 pt-12 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Happy with our service?</h3>
            <p className="text-slate-300 text-lg">Your feedback helps us improve and helps others find reliable removals.</p>
          </div>
          <a 
            href="https://www.google.com/search?q=CCM+Supreme+Removals+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white text-brand-navy hover:bg-slate-100 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-premium-hover hover:-translate-y-1 text-base w-full sm:w-auto min-h-[44px] shrink-0"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5" />
            Leave a Google Review
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105 inline-block">
              <img 
                src="/images/logo.png" 
                alt="CCM Supreme Removals" 
                className="h-24 sm:h-32 md:h-48 w-auto object-contain" 
                style={{ filter: 'drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.85)) drop-shadow(0px 0px 4px rgba(255, 255, 255, 1))' }}
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Professional, reliable, and stress-free removals and storage services across the UK. Your trusted partner for a smooth move.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/profile.php?id=100076414621047" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/george_ccm_supreme_removal/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.tiktok.com/@ccmsupremeremovals" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-white font-display font-semibold text-lg tracking-wide uppercase">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Our Services</Link></li>
              <li><Link to="/tips" className="hover:text-brand-accent transition-colors">Moving Tips</Link></li>
              <li><Link to="/faq" className="hover:text-brand-accent transition-colors">FAQ</Link></li>
              <li><Link to="/reviews" className="hover:text-brand-accent transition-colors">Customer Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact Us</Link></li>
              <li><Link to="/quote" className="hover:text-brand-accent transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-white font-display font-semibold text-lg tracking-wide uppercase">Contact Info</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-accent shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-white font-medium text-sm">Location</span>
                  <span className="text-slate-400">Luton, United Kingdom</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-brand-accent shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-white font-medium text-sm">Office / Landline</span>
                  <a href="tel:01582292303" className="text-slate-400 hover:text-white transition-colors">01582 292303</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-brand-accent shrink-0 mt-1">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                <div className="flex flex-col">
                  <span className="text-white font-medium text-sm">Mobile / WhatsApp</span>
                  <a href="https://wa.me/447838191826" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">+44 7838 191826</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-brand-accent shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-white font-medium text-sm">Email</span>
                  <a href="mailto:info@ccmsupremeremovals.com" className="text-slate-400 hover:text-white transition-colors">info@ccmsupremeremovals.com</a>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-white font-display font-semibold text-lg tracking-wide uppercase">Working Hours</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3">
                <Clock size={20} className="text-brand-accent shrink-0" />
                <div className="flex flex-col w-full">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Mon - Fri</span>
                    <span className="text-white">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 py-2">
                    <span>Saturday</span>
                    <span className="text-white">10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span>Sunday</span>
                    <span className="text-brand-accent">Closed</span>
                  </div>
                </div>
              </li>
            </ul>
            <div className="mt-4">
              <a 
                href="https://www.google.com/search?q=CCM+Supreme+Removals+Reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-brand-accent transition-colors bg-white/5 px-4 py-2 rounded-lg border border-white/10"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4" />
                Read our Google Reviews
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-slate-500 text-center md:text-left">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} CCM Supreme Removals. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span>Company No: 14164175</span>
            <span className="hidden sm:inline">•</span>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms and Conditions</Link>
            <span className="hidden sm:inline">•</span>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="hidden sm:inline">•</span>
            <a href="#" className="termly-display-preferences hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
