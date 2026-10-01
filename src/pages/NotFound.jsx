import { Link } from 'react-router-dom'
import { Droplets, Home, ArrowLeft } from 'lucide-react'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="notfound-page" id="notfound-page">
      <div className="notfound-content">
        <div className="notfound-icon" aria-hidden="true">
          <Droplets size={48} />
        </div>
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Page Not Found</h2>
        <p className="notfound-sub">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="notfound-actions">
          <Link to="/" id="notfound-home-btn" className="btn btn-primary">
            <Home size={17} /> Back to Home
          </Link>
          <button
            id="notfound-back-btn"
            className="btn btn-outline"
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={17} /> Go Back
          </button>
        </div>
      </div>
    </div>
  )
}
