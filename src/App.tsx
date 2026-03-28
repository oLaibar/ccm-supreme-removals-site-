/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { BackToTopButton } from "./components/BackToTopButton";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Tips } from "./pages/Tips";
import { Contact } from "./pages/Contact";
import { Reviews } from "./pages/Reviews";
import { Quote } from "./pages/Quote";
import { FAQ } from "./pages/FAQ";
import { TermsAndConditions } from "./pages/TermsAndConditions";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="tips" element={<Tips />} />
            <Route path="contact" element={<Contact />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="quote" element={<Quote />} />
            <Route path="terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="faq" element={<FAQ />} />
          </Route>
        </Routes>
        <WhatsAppButton />
        <BackToTopButton />
      </Router>
    </HelmetProvider>
  );
}

