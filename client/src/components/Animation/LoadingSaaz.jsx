import React from 'react'
import saazLoading from "../../assets/loading.mp4"
import './LoadingSaaz.scss'
function LoadingSaaz() {
  return (
    <div className="loading-video">
      <video autoPlay loop muted>
          <source src={saazLoading} type='video/mp4'/>
          Wait While Loading.....
      </video>
    </div>
  )
}

export default LoadingSaaz
