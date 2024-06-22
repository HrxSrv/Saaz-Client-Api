import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/Footer/Newsletter/About"; // Assuming you meant 'About' here.
import AppContext from "./utils/context";
import LoadingSaaz from "./components/Animation/LoadingSaaz";
import Newsletter from "./components/Footer/Newsletter/About"
import Events from "./Pages/Events/Events";
import Event from "./Pages/Event/Event";
function usePageLoading() {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 0);
        return () => {
            clearTimeout(timer);
        };
    }, [location.pathname]);

    return loading;
}

function PageWrapper() {
    const loading = usePageLoading();

    return (
        <>
            {loading && <LoadingSaaz />}
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/event/:id" element={<Event />} />
            </Routes>
            <Newsletter />
            <Footer />
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
