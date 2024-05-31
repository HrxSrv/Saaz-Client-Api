import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
import { Context } from "../../utils/context";
import saazIcon from "../../assets/saazICON.png"
const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    // const [searchModal, setSearchModal] = useState(false);
    const [selectedButton,setSelectedButton] = useState(1);
    const navigate = useNavigate();
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
    }, []);
    const darkButton = {background :"black",color:"white"}
    const whiteButton = {background:"white",color:"black"}
    return (
        <>
            <header
                className={`main-header ${scrolled ? "sticky-header" : ""}`}
            >
                <div className="header-content">
                    <div className="left" onClick={() => navigate("/")}>
                         <img src={saazIcon} alt="saazICON" />
                    </div>
                    <ul className="center">
                        <li style={selectedButton===1?whiteButton:darkButton} onClick={() => {navigate("/"); setSelectedButton(1)}}>Home</li>
                        <li style={selectedButton===2?whiteButton:darkButton}onClick={() => {navigate("/Merch"); setSelectedButton(2)}}>Merch</li>
                        <li style={selectedButton===3?whiteButton:darkButton}onClick={() => {navigate("/Library"); setSelectedButton(3)}}>Library</li>
                        <li style={selectedButton===4?whiteButton:darkButton}onClick={() => {navigate("/about"); setSelectedButton(4)}}>About</li>
                    </ul>
                    {/* <div className="right">
                        <TbSearch onClick={() => setSearchModal(true)} />
                        <AiOutlineHeart />
                        <span
                            className="cart-icon"
                            onClick={() => setShowCart(true)}
                        >
                            <CgShoppingCart />
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                    </div> */}
                </div>
            </header>
            {/* {searchModal && <Search setSearchModal={setSearchModal} />}
            {showCart && <Cart />} */}
        </>
    );
};

export default Header;
