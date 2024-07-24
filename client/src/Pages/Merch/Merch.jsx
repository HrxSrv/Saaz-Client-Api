import React from 'react'
import './Merch.scss'
import MerchBanner from "./Merch_Banner/MerchBanner"
import MerchBar from './MerchBar/MerchBar'
import Products from './Products/Products'
function Merch() {
  return (
    <div className="Merch-layout">
        <MerchBanner/>
        <MerchBar/>
        <Products/>
    </div>
  )
}

export default Merch
