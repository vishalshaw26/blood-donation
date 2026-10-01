import { Building2, Shield, Activity, Heart } from 'lucide-react'
import './Partners.css'

const partners = [
  { id: 'city-general', icon: <Building2 size={16} aria-hidden="true" />, name: 'City General' },
  { id: 'medcenter',    icon: <Shield size={16} aria-hidden="true" />,    name: 'MedCenter+' },
  { id: 'regional',     icon: <Activity size={16} aria-hidden="true" />,  name: 'Regional Health' },
  { id: 'carepoint',    icon: <Heart size={16} aria-hidden="true" />,     name: 'CarePoint Clinic' },
]

export default function Partners() {
  return (
    <section className="partners section-pad-sm" id="partners-section">
      <div className="container">
        <p className="partners__label">TRUSTED BY LEADING MEDICAL INSTITUTIONS</p>
        <div className="partners__grid">
          {partners.map((p) => (
            <div key={p.id} className="partners__item" id={`partner-${p.id}`}>
              <span className="partners__item-icon">{p.icon}</span>
              <span className="partners__item-name">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
