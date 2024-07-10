import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import AboutPage from "./Pages/About/About_page";
import AppContext from "./utils/context";
import LoadingSaaz from "./components/Animation/LoadingSaaz";

import Events from "./Pages/Events/Events";
import Event from "./Pages/Event/Event";
import PageTransition from "./components/PageTransition/PageTransition"; // Import the PageTransition component

function usePageLoading() {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 0); // Adjust timeout for loading animation

        return () => {
            clearTimeout(timer);
        };
    }, [location.pathname]);

    return loading;
}

function PageWrapper() {
    const loading = usePageLoading();
    const location = useLocation();

    return (
        <>
            {loading && <LoadingSaaz />}
            <Header />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route
                        path="/"
                        element={
                            <PageTransition>
                                <Home />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <PageTransition>
                                <AboutPage/>
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/events"
                        element={
                            <PageTransition>
                                <Events />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/event/:id"
                        element={
                            <PageTransition>
                                <Event />
                            </PageTransition>
                        }
                    />
                </Routes>
                
                
                <Footer />
           
            </AnimatePresence>
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <PageWrapper />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
