import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import Tiles from './Tiles/Tiles'
import  ImageSlider from "../Slideshow/Carousel/Carousel"
import Newsletter from '../../components/Footer/Newsletter/About';
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

    return (
        <div className="home">
            <Banner />
            <Tiles/>
            {/* <ImageSlider/> */}
            <Newsletter/>
        </div>
    );
};

export default Home;
