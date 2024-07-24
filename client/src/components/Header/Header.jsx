import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.scss";
import { Context } from "../../utils/context";
import saazIcon from "../../assets/saazICON.png";
import { useContext } from "react";
const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    // const [selectedButton, setSelectedButton] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const {selectedButton,setSelectedButton} = useContext(Context);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    const toggleMobileMenuSpecific = () =>{
        if(mobileMenuOpen){
            toggleMobileMenu()
        }
    }
    const darkButton = { background: "black", color: "white" };
    const whiteButton = { background: mobileMenuOpen ? '#1E969F':'white', color: mobileMenuOpen ? 'white':'black' };
    const location = useLocation();
    useEffect(()=>{
      if(location.pathname==="/") setSelectedButton(1);
      if(location.pathname==="/Merch") setSelectedButton(2);
      if(location.pathname==="/Library") setSelectedButton(3);
      if(location.pathname==="/About") setSelectedButton(4);
    },[location, setSelectedButton])
    return (
        <>
            <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
                <div className="header-content">
                    <div className="left" onClick={() => navigate("/")}>
                        <img src={saazIcon} alt="saazICON" />
                    </div>
                    <div className="right">
                        <div className={`hamburger ${mobileMenuOpen ? "open" : ""}`} onClick={toggleMobileMenu}>
                            <div className="stick"></div>
                            <div className="stick"></div>
                            <div className="stick"></div>
                        </div>
                    </div>
                    <ul className={`center ${mobileMenuOpen ? "open" : ""}`} >
                        <li style={selectedButton === 1 ? whiteButton : darkButton} onClick={() => { navigate("/"); setSelectedButton(1);toggleMobileMenuSpecific() } }>Home</li>
                        <li style={selectedButton === 2 ? whiteButton : darkButton} onClick={() => { navigate("/Merch"); setSelectedButton(2);toggleMobileMenuSpecific()  }}>Merch</li>
                        <li style={selectedButton === 3 ? whiteButton : darkButton} onClick={() => { navigate("/Library"); setSelectedButton(3);toggleMobileMenuSpecific()  }}>Library</li>
                        <li style={selectedButton === 4 ? whiteButton : darkButton} onClick={() => { navigate("/about"); setSelectedButton(4);toggleMobileMenuSpecific()  }}>About</li>
                    </ul>
                </div>
            </header>
        </>
    );
};

export default Header;
