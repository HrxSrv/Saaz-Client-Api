import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import Tiles from "./Tiles/Tiles";
import ImageSlider from "../Slideshow/Carousel/Carousel";
import Newsletter from "../../components/Footer/Newsletter/About";
import AlertBanner from "./Alert_Banner/Alert_Banner";
import Audition from "./AudtionSection/Audition";
import casset from "../../assets/cassette.png";
import arrow from "../../assets/arrow3x.png";
import MerchBanner from "../../Pages/Merch/MerchBar/MerchBar"
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { products, setProducts, categories, setCategories } =
    useContext(Context);
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
    });
  };
  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
    });
  };
  const navigate = useNavigate();
  return (
    <div className="home">
      <Banner />
      <AlertBanner/>
      <Tiles />
      {/* <ImageSlider/> */}
      <Audition />
      {newFunction(navigate)}
      <Newsletter />
      {/* <div className="footer-img">
        <img src={casset} alt="casset" />
      </div> */}
    </div>
  );
};

export default Home;



function newFunction(navigate) {
    return <div className="one-mobile" onClick={() => navigate("/Events")}>
        <div className="title">EVENTS</div>
        <div className="more">more</div>
        <div className="arrow">
            <img src={arrow} alt="arrowIcon" />
        </div>
    </div>;
}

