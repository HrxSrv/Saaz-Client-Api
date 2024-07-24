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
            <div className={ product.instock? "buy-button":"SoldOut"}>
                {product.instock? "Buy":" Sold_Out"}
            </div>
        </div>
    </div>
  )
}

export default Product
