import HowItWorksSection from '../components/HowItWorksSection'
import { Droplets, Heart, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import './HowItWorks.css'

const faqs = [
  { q: 'Who can donate blood?', a: 'Generally, anyone aged 18–65, weighing over 50 kg, and in good health can donate. A brief screening is required.' },
  { q: 'How often can I donate?', a: 'Whole blood donations can be made every 56 days (8 weeks). Platelets can be donated every 7 days.' },
  { q: 'Is the process safe?', a: 'Yes. All equipment is sterile and single-use. You cannot contract any disease from donating blood.' },
  { q: 'How long does the process take?', a: 'The actual blood collection takes 8–10 minutes. Including screening and refreshments, plan for about 45–60 minutes.' },
  { q: 'How does smart matching work?', a: 'Our algorithm uses your blood type, location, and availability to instantly alert you when a matching patient needs blood nearby.' },
]

export default function HowItWorks() {
  return (
    <div className="hiw-page" id="how-it-works-page">
      <div className="hiw-page__header">
        <div className="page-header-bg" aria-hidden="true">
          <div className="page-header-bg__img page-header-bg__img--how-it-works" />
          <div className="page-header-bg__blob page-header-bg__blob--1" />
          <div className="page-header-bg__blob page-header-bg__blob--2" />
          <div className="page-header-bg__blob page-header-bg__blob--3" />
        </div>
        <div className="container hiw-page__header-inner">
          <h1 className="page-header-title">How LifeLink Works</h1>
          <p className="page-header-sub">
            A streamlined, technology-driven platform connecting donors and recipients in minutes, not hours.
          </p>
        </div>
      </div>

      {/* Reuse the section component */}
      <HowItWorksSection />

      {/* FAQ */}
      <section className="faq-section section-pad" id="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-sub">Everything you need to know before becoming a donor or posting a request.</p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="faq-item card" id={`faq-item-${i + 1}`}>
                <h3 className="faq-item__q">{faq.q}</h3>
                <p className="faq-item__a">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="hiw-cta section-pad-sm" id="hiw-cta-section">
        <div className="container">
          <div className="hiw-cta__inner">
            <div>
              <h2 className="hiw-cta__title">Ready to make a difference?</h2>
              <p className="hiw-cta__sub">Join thousands of donors already connected through LifeLink.</p>
            </div>
            <div className="hiw-cta__btns">
              <Link to="/donate" id="hiw-cta-donate-btn" className="btn btn-primary">
                <Droplets size={17} /> Start Donating
              </Link>
              <Link to="/requests" id="hiw-cta-request-btn" className="btn btn-ghost">
                <Heart size={17} /> View Requests <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
