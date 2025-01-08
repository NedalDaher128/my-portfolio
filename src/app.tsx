import { lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from './components/navbar.tsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = lazy(() => import('./pages/home.tsx'));
const Footer = lazy(() => import('./components/footer.tsx'));
const About = lazy(() => import('./pages/about.tsx'));
const Contact = lazy(() => import('./pages/contact.tsx'));
const NotFound = lazy(() => import('./pages/NotFound.tsx'));
const app = () => {

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )

}

export default app;
