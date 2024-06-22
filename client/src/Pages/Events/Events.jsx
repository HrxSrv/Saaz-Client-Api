import React from 'react'
import "./Events.scss"
import Slideshow from '../../components/Slideshow/Slideshow'
import EventTIles from '../../components/EventTiles/EventTIles'
import IconBreadcrumbs from '../../components/BreadCrumbs/BreadCrumbs'
function Events() {
  return (
    <div className='EventsPage'>
        <div className="breadCrumbs">
        <IconBreadcrumbs  isEvent={false} style={{color:'white'}}/>
        </div>
        <Slideshow/>
        <EventTIles/>
    </div>
  )
}

export default Events
