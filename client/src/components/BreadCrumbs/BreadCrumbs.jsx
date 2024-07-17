import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import './BreadCrumbs.scss';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs({ eventName,isEvent }) {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          component={RouterLink}
          to="/"
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="rgba(255, 255, 255, 0.541)"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        <Link
          component={RouterLink}
          to="/events"
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color={isEvent===false ? "#1E969F":"rgba(255, 255, 255, 0.541)"}
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Events
        </Link>
        {isEvent  && <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="#1E969F" 
          fontSize="5vw"
          fontWeight="bolder"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {eventName}
        </Typography> }
      </Breadcrumbs>
    </div>
  );
}
