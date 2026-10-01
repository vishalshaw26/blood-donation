import { useState } from 'react'
import { Search, Droplets, AlertCircle, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Requests.css'

/**
 * Blood type filter options shown in the filter bar.
 * All requests data comes from your backend API.
 * TODO: Replace the empty `requests` array with a real fetch/SWR call.
 * e.g.  const { data: requests = [] } = useSWR('/api/requests')
 */
const BLOOD_TYPES = ['All', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']

export default function Requests() {
  const [query,     setQuery]     = useState('')
  const [bloodType, setBloodType] = useState('All')

  // TODO: Replace with real API data
  const requests = []

  const filtered = requests.filter((r) => {
    const matchesType  = bloodType === 'All' || r.type === bloodType
    const matchesQuery = !query || [r.hospital, r.location, r.type]
      .join(' ').toLowerCase().includes(query.toLowerCase())
    return matchesType && matchesQuery
  })

  return (
    <div className="requests-page" id="requests-page">
      {/* Header */}
      <div className="requests-page__header">
        <div className="page-header-bg" aria-hidden="true">
          <div className="page-header-bg__img page-header-bg__img--requests" />
          <div className="page-header-bg__blob page-header-bg__blob--1" />
          <div className="page-header-bg__blob page-header-bg__blob--2" />
          <div className="page-header-bg__blob page-header-bg__blob--3" />
        </div>

        <div className="container requests-page__header-inner">
          <h1 className="requests-page__title">Blood Requests</h1>
          <p className="requests-page__desc">
            Active requests in your area — respond to help save a life.
          </p>

          {/* Search */}
          <div className="requests-page__search" role="search">
            <Search size={18} className="requests-page__search-icon" aria-hidden="true" />
            <input
              id="requests-search-input"
              className="requests-page__search-input"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by blood type, hospital, or location…"
              aria-label="Search blood requests"
            />
            <button
              id="requests-filter-btn"
              className="btn btn-teal requests-page__filter-btn"
              onClick={() => { setQuery(''); setBloodType('All') }}
              aria-label="Clear filters"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      <div className="container section-pad">
        {/* Blood type quick-filter chips */}
        <div className="requests-filter-bar" role="group" aria-label="Filter by blood type">
          {BLOOD_TYPES.map((bt) => (
            <button
              key={bt}
              id={`filter-bt-${bt.replace('+','pos').replace('-','neg')}`}
              className={`requests-filter-chip ${bloodType === bt ? 'requests-filter-chip--active' : ''}`}
              onClick={() => setBloodType(bt)}
              aria-pressed={bloodType === bt}
            >
              {bt}
            </button>
          ))}
        </div>

        {/* Request grid or empty state */}
        {filtered.length > 0 ? (
          <div className="requests-grid">
            {filtered.map((req) => (
              <article key={req.id} className="request-card card" id={`request-card-${req.id}`}>
                <div className="request-card__top">
                  <span className="request-card__blood-type">{req.type}</span>
                  <span className={`request-card__urgency request-card__urgency--${req.urgency.toLowerCase()}`}>
                    {req.urgency === 'Critical' && <AlertCircle size={12} aria-hidden="true" />}
                    {req.urgency}
                  </span>
                </div>
                <h2 className="request-card__hospital">{req.hospital}</h2>
                <div className="request-card__meta">
                  <span className="request-card__meta-item">
                    <Droplets size={13} aria-hidden="true" />
                    {req.units} unit{req.units !== 1 ? 's' : ''} needed
                  </span>
                  <span className="request-card__meta-item">
                    <Clock size={13} aria-hidden="true" />
                    {req.time || req.postedAt}
                  </span>
                </div>
                <button
                  id={`request-respond-${req.id}`}
                  className="btn btn-primary request-card__btn"
                  aria-label={`Volunteer to donate ${req.type} blood for ${req.hospital}`}
                >
                  I Can Donate
                </button>
              </article>
            ))}
          </div>
        ) : (
          <div className="requests-empty" id="requests-empty-state">
            <div className="requests-empty__icon" aria-hidden="true">
              <img src="/logo.png" alt="Logo" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
            </div>
            <h2 className="requests-empty__title">No active requests right now</h2>
            <p className="requests-empty__sub">
              There are currently no blood requests matching your search.
              Check back soon, or register as a donor so we can notify you when a match is found.
            </p>
            <div className="requests-empty__actions">
              <Link to="/donate" id="requests-empty-cta" className="btn btn-primary">
                <Droplets size={17} aria-hidden="true" /> Register as Donor
              </Link>
              <button
                className="btn btn-outline"
                onClick={() => { setQuery(''); setBloodType('All') }}
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
