import React from 'react';
import './Products.scss';
import Product from './Product/Product';
import tshirt from "../../../assets/Merch/Saaz-Tshirt.png";
import hoodie from "../../../assets/Merch/Saaz-Hoodie.png";
import sticker from "../../../assets/Merch/Saaz-Sticker.png";
import notebook from "../../../assets/Merch/Saaz-Notebook1.png";
import { useEffect, useState } from 'react';
import MerchDrawer from "../../../components/BuyMerch/MerchDrawer/MerchDrawer"
function Products() {
    const productsArray = [
        { id:"1", title: "T-shirt", img: tshirt, price: "₹359", info: "Over shoulder",instock: true },
        { id:"2",title: "T-shirt", img: tshirt, price: "₹359", info: "Drop shoulder",instock: true  },
        { id:"3", title: "Hoodie", img: hoodie, price: "₹499", info: "300 gsm pure wool",instock: true },
        { id:"4",title: "Sticker", img: sticker, price: "₹30", info: "Black and White",instock: false  },
        { id:"5",title: "Notebook", img: notebook, price: "₹100", info: "Paper-Back" ,instock: false}
    ];
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleBuyClick = (item) => {
    setSelectedItem(item);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedItem(null);
  };
    return (
        <div className='products'>
            {productsArray.map((product, index) => (
                <div className='each-product-tile' key={index}>
                    <Product product={product} key={product.id}  onBuyClick={handleBuyClick} />
                </div>
            ))}
            {isPopupOpen && (
        <MerchDrawer product={selectedItem} onClose={handleClosePopup} />
      )}
        </div>
    );
}

export default Products;
