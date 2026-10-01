import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Requests from './pages/Requests'
import Donate from './pages/Donate'
import HowItWorks from './pages/HowItWorks'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/"            element={<Home />} />
            <Route path="/requests"    element={<Requests />} />
            <Route path="/donate"      element={<Donate />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/signin"       element={<SignIn />} />
            <Route path="/register"     element={<Register />} />
            <Route path="*"             element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
