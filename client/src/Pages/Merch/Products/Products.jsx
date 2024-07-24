import React from 'react';
import './Products.scss';
import Product from './Product/Product';
import tshirt from "../../../assets/Merch/Saaz-Tshirt.png";
import hoodie from "../../../assets/Merch/Saaz-Hoodie.png";
import sticker from "../../../assets/Merch/Saaz-Sticker.png";
import notebook from "../../../assets/Merch/Saaz-Notebook1.png";

function Products() {
    const productsArray = [
        { title: "T-SHIRT", img: tshirt, price: "₹359", info: "Over shoulder",instock: true },
        { title: "T-SHIRT", img: tshirt, price: "₹359", info: "Drop shoulder",instock: true  },
        { title: "Hoodie", img: hoodie, price: "₹499", info: "300 gsm pure wool",instock: true },
        { title: "STICKER", img: sticker, price: "₹30", info: "Black and White",instock: false  },
        { title: "NOTEBOOK", img: notebook, price: "₹100", info: "Paper-Back" ,instock: false}
    ];

    return (
        <div className='products'>
            {productsArray.map((product, index) => (
                <div className='each-product-tile' key={index}>
                    <Product product={product} />
                </div>
            ))}
        </div>
    );
}

export default Products;
