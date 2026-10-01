import { UserCheck, BellRing, Syringe, FileText, Zap, Handshake } from 'lucide-react'
import './HowItWorksSection.css'

const donorSteps = [
  {
    icon: <UserCheck size={18} />,
    title: 'Register & Verify',
    desc: 'Create an account and complete a brief medical screening online to verify eligibility.',
  },
  {
    icon: <BellRing size={18} />,
    title: 'Receive Alerts',
    desc: 'Get notified instantly when someone in your vicinity requires your specific blood type.',
  },
  {
    icon: <Syringe size={18} />,
    title: 'Donate & Track',
    desc: 'Schedule your visit via the app, donate safely, and track the journey of your contribution.',
  },
]

const recipientSteps = [
  {
    icon: <FileText size={18} />,
    title: 'Post a Request',
    desc: 'Submit medical details, required blood type, and hospital location securely.',
  },
  {
    icon: <Zap size={18} />,
    title: 'Smart Matching',
    desc: 'Our algorithm instantly alerts eligible verified donors within your geographic radius.',
  },
  {
    icon: <Handshake size={18} />,
    title: 'Fulfillment',
    desc: 'Coordinate directly with the hospital once a donor commits to fulfilling the request.',
  },
]

export default function HowItWorksSection() {
  return (
    <section className="hiw section-pad" id="how-it-works-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Seamless Connection, Real Impact</h2>
          <p className="section-sub">
            Whether you are offering help or seeking it, LifeLink streamlines the process
            to ensure swift, secure, and reliable connections.
          </p>
        </div>

        <div className="hiw__grid">
          {/* Donors card */}
          <div className="hiw__card card" id="hiw-donors-card">
            <div className="hiw__card-header hiw__card-header--donor">
              <span className="hiw__card-icon hiw__card-icon--donor">
                <UserCheck size={22} />
              </span>
              <h3 className="hiw__card-title">For Donors</h3>
            </div>
            <ol className="hiw__steps">
              {donorSteps.map((step, i) => (
                <li key={step.title} className="hiw__step">
                  <span className="hiw__step-num hiw__step-num--donor">{i + 1}</span>
                  <div className="hiw__step-body">
                    <div className="hiw__step-title">
                      <span className="hiw__step-icon hiw__step-icon--donor">{step.icon}</span>
                      {step.title}
                    </div>
                    <p className="hiw__step-desc">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Recipients card */}
          <div className="hiw__card card" id="hiw-recipients-card">
            <div className="hiw__card-header hiw__card-header--recipient">
              <span className="hiw__card-icon hiw__card-icon--recipient">
                <FileText size={22} />
              </span>
              <h3 className="hiw__card-title">For Recipients</h3>
            </div>
            <ol className="hiw__steps">
              {recipientSteps.map((step, i) => (
                <li key={step.title} className="hiw__step">
                  <span className="hiw__step-num hiw__step-num--recipient">{i + 1}</span>
                  <div className="hiw__step-body">
                    <div className="hiw__step-title">
                      <span className="hiw__step-icon hiw__step-icon--recipient">{step.icon}</span>
                      {step.title}
                    </div>
                    <p className="hiw__step-desc">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
