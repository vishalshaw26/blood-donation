import { Droplets, MapPin, User, Phone, CheckCircle2 } from 'lucide-react'
import './Donate.css'

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']

export default function Donate() {
  return (
    <div className="donate-page" id="donate-page">
      {/* Header */}
      <div className="donate-page__header">
        {/* Hero-style decorative background */}
        <div className="page-header-bg" aria-hidden="true">
          <div className="page-header-bg__img page-header-bg__img--donate" />
          <div className="page-header-bg__blob page-header-bg__blob--1" />
          <div className="page-header-bg__blob page-header-bg__blob--2" />
          <div className="page-header-bg__blob page-header-bg__blob--3" />
        </div>
        <div className="container donate-page__header-inner">
          <div className="badge badge-urgent donate-page__badge">
            <span className="dot" aria-hidden="true" /> Live Matching Active
          </div>
          <h1 className="page-header-title">Become a Donor</h1>
          <p className="page-header-sub">
            Register your information and get instantly matched with patients who need your blood type.
          </p>
        </div>
      </div>

      <div className="container section-pad">
        <div className="donate-layout">
          {/* Form */}
          <div className="donate-form card" id="donate-form-card">
            <h2 className="donate-form__title">Donor Registration</h2>
            <p className="donate-form__sub">Fill in your details to join the LifeLink donor network.</p>

            <form id="donate-form" className="donate-form__form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="donor-fname" className="form-label">First Name</label>
                  <div className="form-input-wrap">
                    <User size={16} className="form-input-icon" />
                    <input id="donor-fname" type="text" placeholder="John" className="form-input" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="donor-lname" className="form-label">Last Name</label>
                  <div className="form-input-wrap">
                    <User size={16} className="form-input-icon" />
                    <input id="donor-lname" type="text" placeholder="Doe" className="form-input" />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="donor-phone" className="form-label">Phone Number</label>
                <div className="form-input-wrap">
                  <Phone size={16} className="form-input-icon" />
                  <input id="donor-phone" type="tel" placeholder="+1 (555) 000-0000" className="form-input" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="donor-location" className="form-label">Your Location</label>
                <div className="form-input-wrap">
                  <MapPin size={16} className="form-input-icon" />
                  <input id="donor-location" type="text" placeholder="City or Zip Code" className="form-input" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Blood Type</label>
                <div className="blood-type-grid">
                  {bloodTypes.map((bt) => (
                    <label key={bt} className="blood-type-option" id={`blood-type-${bt.replace('+', 'pos').replace('-', 'neg')}`}>
                      <input type="radio" name="bloodType" value={bt} />
                      <span className="blood-type-label">{bt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Last Donation Date (optional)</label>
                <input id="donor-last-date" type="date" className="form-input" style={{ paddingLeft: 14 }} />
              </div>

              <button id="donate-submit-btn" type="submit" className="btn btn-primary donate-form__submit">
                <Droplets size={18} />
                Register as Donor
              </button>
            </form>
          </div>

          {/* Info sidebar */}
          <div className="donate-info">
            <div className="donate-info__card card">
              <h3 className="donate-info__title">Why Donate?</h3>
              {['Save up to 3 lives with a single donation', 'Takes only 45–60 minutes of your time', 'Free health screening included', 'Track your donation impact in real-time', 'Join 12,450+ verified donors nationwide'].map((item) => (
                <div key={item} className="donate-info__item">
                  <CheckCircle2 size={16} className="donate-info__check" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="donate-info__card card donate-info__card--dark">
              <h3 className="donate-info__title donate-info__title--light">Eligibility Quick Check</h3>
              {['Age 18–65 years old', 'Weight above 50 kg / 110 lbs', 'No major illness in past 2 weeks', 'No recent tattoos or piercings (3 months)', 'Hemoglobin ≥ 12.5 g/dL'].map((item) => (
                <div key={item} className="donate-info__item donate-info__item--light">
                  <CheckCircle2 size={16} className="donate-info__check--light" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
