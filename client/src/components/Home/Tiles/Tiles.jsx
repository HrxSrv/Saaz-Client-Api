import React, { useState } from 'react'
import './Tiles.scss'
import arrow from "../../../assets/arrow3x.png"
import menAvatar from "../../../assets/menAvatar.png"
import TilePopup from '../Drawer/Drawer'
import { useNavigate } from 'react-router-dom'
import independenceDay from '../../../assets/DrawerImages/independenceDay.jpg'
import { useEffect,useRef } from 'react'
function Tiles() {
  const [clickedTiles, setClickedTiles] = useState({});

  const handleClick = (tile) => {
    setClickedTiles(prevState => ({
      ...prevState,
      [tile]: !prevState[tile]
    }));
  }
  const navigate = useNavigate()
  const scrollableContainerRef = useRef(null);

  useEffect(() => {
    const scrollableContainer = scrollableContainerRef.current;
    let start = null;

    const scrollAmount = 100; // Adjust the value as needed
    const duration = 1000; // Duration of the animation in milliseconds

    const step = timestamp => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);
      scrollableContainer.scrollLeft = scrollAmount * percent;
      
      if (progress < duration) {
        window.requestAnimationFrame(step);
      } else {
        start = null;
        const stepBack = timestampBack => {
          if (!start) start = timestampBack;
          const progressBack = timestampBack - start;
          const percentBack = Math.min(progressBack / duration, 1);
          scrollableContainer.scrollLeft = scrollAmount * (1 - percentBack);
          
          if (progressBack < duration) {
            window.requestAnimationFrame(stepBack);
          }
        };
        window.requestAnimationFrame(stepBack);
      }
    };

    window.requestAnimationFrame(step);
  }, []);
  return (
    <div className='tileLayout'>
      <div className="menAvatar">
        <img src={menAvatar} alt="Men Avatar" />
      </div>
      <div className='Tiles' ref={scrollableContainerRef}>
        <div className="one" onClick={() => navigate("/Events")}>
          <div className="title">EVENTS</div>
          <div className="more">more</div>
          <div className="arrow"><img src={arrow} alt="arrowIcon" /></div>
        </div>
       
        <div className="two" onClick={() => handleClick('two')} style={{"background-color":"#1E969F"}}>
          <div className="date" style={{"background":'transparent'}}>
            <div className="day" style={{"background":'transparent'}}>15</div>
            <div className="month" style={{"background":'transparent'}}>August</div>
            <div className="year" style={{"background":'transparent'}}>2024</div>
          </div>
          <div className="eventName" style={{"background":'transparent'}}>
             Independence Day
            </div>
            <div className="more1" style={{"background":'transparent'}}>
              More
            </div>
          {clickedTiles['two'] && <TilePopup eventName={'Independence Day'} image={independenceDay} date={'15 August 2024'} color='black' handleClick={() => handleClick('two')} />}
        </div>
        <div className="three" onClick={() => handleClick('three')}>
          {clickedTiles['three'] && <TilePopup color='black' handleClick={() => handleClick('three')} />}
        </div>
        <div className="four" onClick={() => handleClick('four')}>
          {clickedTiles['four'] && <TilePopup color='black' handleClick={() => handleClick('four')} />}
        </div>
        <div className="five" onClick={() => handleClick('five')}>
          {clickedTiles['five'] && <TilePopup color='black' handleClick={() => handleClick('five')} />}
        </div>
        <div className="six" onClick={() => handleClick('six')}>
          {clickedTiles['six'] && <TilePopup color='black' handleClick={() => handleClick('six')} />}
        </div>
        <div className="seven" onClick={() => handleClick('seven')}>
          {clickedTiles['seven'] && <TilePopup color='black' handleClick={() => handleClick('seven')} />}
        </div>
        <div className="eight" onClick={() => handleClick('eight')}>
          {clickedTiles['eight'] && <TilePopup color='black' handleClick={() => handleClick('eight')} />}
        </div>
        <div className="nine" onClick={() => handleClick('nine')}>
          {clickedTiles['nine'] && <TilePopup color='black' handleClick={() => handleClick('nine')} />}
        </div>
        <div className="ten" onClick={() => handleClick('ten')}>
          {clickedTiles['ten'] && <TilePopup color='black' handleClick={() => handleClick('ten')} />}
        </div>
      </div>
      <div className="one-mobile" onClick={() => navigate("/Events")}>
          <div className="title">EVENTS</div>
          <div className="more">more</div>
          <div className="arrow"><img src={arrow} alt="arrowIcon" /></div>
        </div>
    </div>
  );
}

export default Tiles;
