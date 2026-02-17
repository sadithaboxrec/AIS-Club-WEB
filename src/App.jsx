import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUS.jsx'
import Contact from './pages/Contact'
import Join from './pages/Join'
import Members from './pages/Members'
import NotFound from './pages/NotFound'
import Events from "./pages/Events.jsx";



function App() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/events" element={<Events/>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/join" element={<Join />} />
                <Route path="/members" element={<Members />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

        </BrowserRouter>
    )
}

export default App






