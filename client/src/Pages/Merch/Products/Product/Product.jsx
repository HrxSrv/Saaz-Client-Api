import React from 'react'
import './Product.scss'

function Product({product}) {
  return (
    <div className='Product'>
        <div className="product-title">
            {product.title}
        </div>
        <div className="product-info">
            {product.info}
        </div>
        <div className="product-img">
            <img src={product.img} alt="" />
        </div>
        <div className="buying-info">
            <div className="price">
                {product.price}
            </div>
            <a 
                href="https://forms.gle/TXZsNTqPcdYRDNtx7" 
                target="_blank" 
                rel="noopener noreferrer"
                className={product.instock ? "buy-button" : "SoldOut"}
            >
                Buy Now
            </a>
        </div>
    </div>
  )
}

export default Product