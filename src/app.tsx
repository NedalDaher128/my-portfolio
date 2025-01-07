import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from './components/navbar.tsx';
const Home = lazy(() => import('./pages/home.tsx'));
const Footer = lazy(() => import('./components/footer.tsx'));
const About = lazy(() => import('./pages/about.tsx'));
const Contact = lazy(() => import('./pages/contact.tsx'));
const app = () => {


    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )

}

export default app;
