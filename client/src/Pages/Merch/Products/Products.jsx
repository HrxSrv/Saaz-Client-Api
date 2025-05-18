import React from 'react';
import './Products.scss';
import Product from './Product/Product';
import tshirt from "../../../assets/Merch/Saaz-Tshirt.png";
import hoodie from "../../../assets/Merch/Saaz-Hoodie.png";
import sticker from "../../../assets/Merch/Saaz-Sticker.png";
import notebook from "../../../assets/Merch/Saaz-Notebook1.png";
import { useEffect, useState } from 'react';
import MerchDrawer from "../../../components/BuyMerch/MerchDrawer/MerchDrawer"
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2024-11-05T19:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-overlay">
      <div className="countdown-content">
        <h2 className="countdown-title">MERCH DROP IN</h2>
        <div className="countdown-blocks">
          <div className="countdown-block">
            <div className="countdown-number">{String(timeLeft.days).padStart(2, '0')}</div>
            <div className="countdown-label">Days</div>
          </div>
          <div className="countdown-block">
            <div className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="countdown-block">
            <div className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="countdown-block">
            <div className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
};
function Products() {
    const productsArray = [
        { id:"1", title: "T-shirt", img: tshirt, price: "₹499", info: "Over shoulder",instock: false },
        { id:"2",title: "T-shirt (Oversized)", img: tshirt, price: "₹499", info: "Drop shoulder oversized",instock: false  },
        { id:"3", title: "Hoodie", img: hoodie, price: "₹699", info: "300 gsm pure wool",instock: false },
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
