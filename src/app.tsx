import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from './components/navbar.tsx';
const Home = lazy(() => import('./pages/home.tsx'));
const Footer = lazy(() => import('./components/footer.tsx'));

const app = () => {


    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    )

}

export default app;
