import React from 'react'
import './EventTiles.scss'
import  { useState, useEffect } from 'react';
import {  fetchEvents } from '../../Cloudinary/Cloudinary';
import  Tile  from './Tile/Tile';
import { Grid } from '@mui/material';
import calendar from '../../assets/calendar.png'
function EventTIles() {
  const [events,setEvents] = useState([
        {
            "name": "Alumni Meet '24",
            "path": "Saaz Events 23-24/Saaz Events 23-24/Alumni Meet '24"
        },
        {
            "name": "Independence day '23",
            "path": "Saaz Events 23-24/Saaz Events 23-24/Independence day '23"
        },
        {
            "name": "Leher '23",
            "path": "Saaz Events 23-24/Saaz Events 23-24/Leher '23"
        },
        {
            "name": "Orientation '23",
            "path": "Saaz Events 23-24/Saaz Events 23-24/Orientation '23"
        },
        {
            "name": "Republic Day '23",
            "path": "Saaz Events 23-24/Saaz Events 23-24/Republic Day '23"
        },
        {
            "name": "Republic Day '24",
            "path": "Saaz Events 23-24/Saaz Events 23-24/Republic Day '24"
        },
        {
            "name": "Saanjh 22",
            "path": "Saaz Events 23-24/Saaz Events 23-24/Saanjh 22"
        },
        {
            "name": "saaz night '23",
            "path": "Saaz Events 23-24/Saaz Events 23-24/saaz night '23"
        },
        {
            "name": "Saaz Night '24",
            "path": "Saaz Events 23-24/Saaz Events 23-24/Saaz Night '24"
        },
        {
            "name": "Tarang '23",
            "path": "Saaz Events 23-24/Saaz Events 23-24/Tarang '23"
        }
    ]);
  useEffect(()=>{
    const loadEvents = async () => {
      const fetchedEvents = await fetchEvents()
      setEvents(fetchedEvents)
      console.log(fetchedEvents);
    }
    loadEvents();
  },[])
//   const events =[
//     {
//         "name": "Alumni Meet '24",
//         "path": "Saaz Events 23-24/Saaz Events 23-24/Alumni Meet '24"
//     },
//     {
//         "name": "Independence day '23",
//         "path": "Saaz Events 23-24/Saaz Events 23-24/Independence day '23"
//     },
//     {
//         "name": "Leher '23",
//         "path": "Saaz Events 23-24/Saaz Events 23-24/Leher '23"
//     },
//     {
//         "name": "Orientation '23",
//         "path": "Saaz Events 23-24/Saaz Events 23-24/Orientation '23"
//     },
//     {
//         "name": "Republic Day '23",
//         "path": "Saaz Events 23-24/Saaz Events 23-24/Republic Day '23"
//     },
//     {
//         "name": "Republic Day '24",
//         "path": "Saaz Events 23-24/Saaz Events 23-24/Republic Day '24"
//     },
//     {
//         "name": "Saanjh 22",
//         "path": "Saaz Events 23-24/Saaz Events 23-24/Saanjh 22"
//     },
//     {
//         "name": "saaz night '23",
//         "path": "Saaz Events 23-24/Saaz Events 23-24/saaz night '23"
//     },
//     {
//         "name": "Saaz Night '24",
//         "path": "Saaz Events 23-24/Saaz Events 23-24/Saaz Night '24"
//     },
//     {
//         "name": "Tarang '23",
//         "path": "Saaz Events 23-24/Saaz Events 23-24/Tarang '23"
//     }
// ]
  // const events = [
  //   {
  //     title: 'Event 1',
  //     image: 'https://via.placeholder.com/150',
  //     description: 'Description for Event 1',
  //   },
  //   {
  //     title: 'Event 2',
  //     image: 'https://via.placeholder.com/150',
  //     description: 'Description for Event 2',
  //   },
  //   // Add more events here
  // ];
  return (
    <>
    <div className='layout1'>
        <Grid container spacing={4}>
      {events.map((event, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Tile event={event} />
        </Grid>
      ))}
    </Grid>
    </div>
    <img src={calendar} className="calendar" alt="" />
    </>
  )
}

export default EventTIles
