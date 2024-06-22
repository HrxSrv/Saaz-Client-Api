import React, { useState } from 'react'
import './Tiles.scss'
import arrow from "../../../assets/arrow3x.png"
import menAvatar from "../../../assets/menAvatar.png"
import TilePopup from '../Drawer/Drawer'
import { useNavigate } from 'react-router-dom'
function Tiles() {
  const [clickedTiles, setClickedTiles] = useState({});

  const handleClick = (tile) => {
    setClickedTiles(prevState => ({
      ...prevState,
      [tile]: !prevState[tile]
    }));
  }
  const navigate = useNavigate()
  return (
    <div className='tileLayout'>
      <div className="menAvatar">
        <img src={menAvatar} alt="Men Avatar" />
      </div>
      <div className='Tiles'>
        <div className="one" onClick={() => navigate("/Events")}>
          <div className="title">EVENTS</div>
          <div className="more">more</div>
          <div className="arrow"><img src={arrow} alt="arrowIcon" /></div>
        </div>
        <div className="two" onClick={() => handleClick('two')}>
          {clickedTiles['two'] && <TilePopup color='black' handleClick={() => handleClick('two')} />}
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
    </div>
  );
}

export default Tiles;
