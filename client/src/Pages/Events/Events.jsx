import React from 'react'
import "./Events.scss"
import Slideshow from '../../components/Slideshow/Slideshow'
import EventTIles from '../../components/EventTiles/EventTIles'
function Events() {
  return (
    <div>
      <div className="layout">
        <Slideshow/>
        <EventTIles/>
      </div>
    </div>
  )
}

export default Events
