import React from 'react'
import "./Events.scss"
import Slideshow from '../../components/Slideshow/Slideshow'
import EventTIles from '../../components/EventTiles/EventTIles'
import IconBreadcrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import { motion } from "framer-motion"

function Events() {
  return (
<motion.div exit={{ opacity: 0 }}>
<div className='EventsPage'>
        <div className="breadCrumbs">
        <IconBreadcrumbs  isEvent={false} style={{color:'white'}}/>
        </div>
        <Slideshow/>
        <EventTIles/>
    </div>
</motion.div>
    
  )
}

export default Events
