import React, { useState } from "react";
import "./Tiles.scss";
import arrow from "../../../assets/arrow3x.png";
import menAvatar from "../../../assets/menAvatar.png";
import TilePopup from "../Drawer/Drawer";
import { useNavigate } from "react-router-dom";
import independenceDay from "../../../assets/DrawerImages/independenceDay.jpg";
import { useEffect, useRef } from "react";
import orientation from "../../../assets/Home-tiles/orientation.jpg";
import Orientation24 from "../../../assets/Home-tiles/Orientation24.png";
import Orientation242 from "../../../assets/Home-tiles/Orientation24-2.jpg";
import Orientation26 from "../../../assets/Home-tiles/Orientation26.jpg"
import RepublicDay26 from "../../../assets/Home-tiles/RepublicDay26.png";
import saazNight26 from "../../../assets/Home-tiles/saazNight26.jpg";
import BitsPilani25 from "../../../assets/Home-tiles/BitsPilani25.jpg";
import NoticeBoard from "../../../assets/Home-tiles/NoticeBoard.jpg";
import Merch1 from "../../../assets/Home-tiles/Merch1.jpg";
// import saazInstagram from "../../../assets/Home-tiles/saazInstagram1.mp4";
import IndependenceDay25 from "../../../assets/Home-tiles/IndependenceDay25.jpg";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import Vector from "../../../assets/Vector.png"
function Tiles() {
  // const orientation = '../../../assets/Home-tiles/orientation.jpg'
  const [clickedTiles, setClickedTiles] = useState({});

  const handleClick = (tile) => {
    setClickedTiles((prevState) => ({
      ...prevState, 
      [tile]: !prevState[tile],
    }));
    console.log(clickedTiles[tile]);
  };
  const navigate = useNavigate();
  const scrollableContainerRef = useRef(null);

  useEffect(() => {
    const scrollableContainer = scrollableContainerRef.current;
    let start = null;

    const scrollAmount = 100; // Adjust the value as needed
    const duration = 1000; // Duration of the animation in milliseconds

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);
      scrollableContainer.scrollLeft = scrollAmount * percent;

      if (progress < duration) {
        window.requestAnimationFrame(step);
      } else {
        start = null;
        const stepBack = (timestampBack) => {
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
    <div className="tileLayout">
      <div className="menAvatar">
        <img src={menAvatar} alt="Men Avatar" />
      </div>
      <div className="latest-events">
          Latest Events <span><img src={Vector} style={{width:"6px"}} alt="" /></span>
        </div>
      <div className="Tiles" ref={scrollableContainerRef}>
        <div className="one" onClick={() => navigate("/Events")}>
          <div className="title">EVENTS</div>
          <div className="more">more</div>
          <div className="arrow">
            <img src={arrow} alt="arrowIcon" />
          </div>
        </div>

        <div
          className="two"
          onClick={() => window.location.href = "#/event/Orientation '25"}
          style={{
            backgroundImage: `url(${Orientation24})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="date" style={{ background: "transparent" }}>
            <div className="day" style={{ background: "transparent" }}>
              1
            </div>
            <div className="month" style={{ background: "transparent" }}>
              September
            </div>
            <div className="year" style={{ background: "transparent" }}>
              2025
            </div>
          </div>
          <div className="eventName" style={{ background: "transparent" }}>
            Orientation '25
          </div>
          <div className="more1" style={{ background: "transparent" }}>
            More
          </div>
          {clickedTiles["two"] && (
            <TilePopup
              eventName={"Orientation '25"}
              eventGallary={"Orientation '25"}
              image={Orientation242}
              date={"1 September 2025"}
              color="black"
              handleClick={() => window.open("", "_blank") }
              buttonId="two"
            />
          )}
        </div>
        <div
          className="three"
          onClick={() => window.location.href = "#/event/Republic Day '26"}
          style={{
            backgroundImage: `url(${RepublicDay26})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="date" style={{ background: "transparent" }}>
            <div className="day" style={{ background: "transparent" }}>
              26
            </div>
            <div className="month" style={{ background: "transparent" }}>
              January
            </div>
            <div className="year" style={{ background: "transparent" }}>
              2026
            </div>
          </div>
          <div className="eventName" style={{ background: "transparent" }}>
            Republic Day '26
          </div>
          <div className="more1-square" style={{ background: "transparent" }}>
            More
          </div>
        </div>
        <div
          className="four"
          onClick={() => window.location.href = "#/event/Saaz Night '26"}
          style={{
            backgroundImage: `url(${saazNight26})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="date" style={{ background: "transparent" }}>
            <div className="day" style={{ background: "transparent" }}>
              30
            </div>
            <div className="month" style={{ background: "transparent" }}>
              March
            </div>
            <div className="year" style={{ background: "transparent" }}>
              2026
            </div>
          </div>
          <div className="eventName" style={{ background: "transparent" }}>
            Saaz Night'26
          </div>
          <div className="more1" style={{ background: "transparent" }}>
            More
          </div>
          {clickedTiles["four"] && (
            <TilePopup
              color="black"
              handleClick={() => handleClick("four")}
              eventName={"Saaz Night '26"}
              eventGallary={"Saaz Night '26"}
              image={saazNight26}
              date={"To Be Announced"}
              buttonId="four"
            />
          )}
        </div>
        <div
          className="five"
          onClick={() => window.location.href = "#/merch"}
          style={{
            backgroundImage: `url(${Merch1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="date" style={{ background: "transparent" }}>
            {/* <div className="day" style={{ background: "transparent" ,position:'absolute',top:'-20px' }}>
            <ShoppingBagIcon fontSize='xl'/>
            </div> */}
          </div>
          <div
            className="eventName"
            style={{ background: "transparent", width: "100px" }}
          >
            <div className="merch" style={{ background: "transparent" }}>
              <ShoppingBagIcon fontSize="20px" /> Merch
            </div>
          </div>
          <div className="more1-square" style={{ background: "transparent" }}>
            Shop
          </div>
          {clickedTiles["five"] && (
            <TilePopup color="black" handleClick={() => handleClick("five")} buttonId="five" />
          )}
        </div>
        <div
          className="six"
          onClick={() => handleClick("six")}
          style={{
            backgroundImage: `url(${NoticeBoard})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="date" style={{ background: "transparent" }}>
            <div className="day" style={{ background: "transparent" }}>
              <ContentPasteIcon fontSize="10px" />
            </div>
          </div>
          <div className="eventName" style={{ background: "transparent" }}>
            Cookin Somethin...
          </div>
          <div className="more1" style={{ background: "transparent" }}>
            More
          </div>
          {clickedTiles["six"] && (
            <TilePopup color="black" handleClick={() => handleClick("six")} image={NoticeBoard}  buttonId="six" eventName={"Cooking Somethin...."}/>
          )}
        </div>
        <div className="seven" style=
        {{backgroundImage: `url(${IndependenceDay25})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
           }} 
        onClick={() => window.location.href = "#/event/Independence Day '25"}>
        <div className="date" style={{  background: "transparent"
        }}>
            <div className="day" style={{ background: "transparent " }}>
              15
            </div>
            <div className="month" style={{ background: "transparent" }}>
              August
            </div>
            <div className="year" style={{ background: "transparent" }}>
              2025
            </div>
          </div>
          <div className="eventName" style={{ background: "transparent" }}>
            Independence Day
          </div>
          <div className="more1" style={{ background: "transparent" }}>
            More
          </div>
          {clickedTiles["seven"] && (
            <TilePopup
              eventName={"Independence Day"}
              eventGallary={"Independence Day"}
              image={independenceDay}
              date={"15 August 2025"}
              color="black"
              handleClick={() => handleClick("two")}
              buttonId="two"
            />
          )}
        </div>
        <div
          className="eight"
          onClick={() => handleClick("eight")}
          style={{
            backgroundImage: `url(${Orientation26})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="date" style={{ background: "transparent" }}>
            <div
              className="day"
              style={{ background: "transparent", zIndex: "2" }}
            >
              Soon
            </div>
            <div className="month" style={{ background: "transparent" }}>
              {/* Be */}
            </div>
            <div className="year" style={{ background: "transparent" }}>
              {/* Announced */}
            </div>
          </div>
          {/* <div className="eventName" style={{ background: "transparent" }}>
            Orientation '26
          </div> */}
          <div className="more1-square" style={{ background: "transparent" }}>
            More
          </div>
          {clickedTiles["eight"] && (
            <TilePopup
              color="black"
              handleClick={() => handleClick("eight")}
              eventName={"Orientation '26"}
              image={Orientation26}
              date={"September 2026"}
              buttonId="eight"
            />
          )}
        </div>
        <div
          className="nine"
          onClick={() => window.location.href = "#/event/Bits Pilani '25"}
          style={{
            backgroundImage: `url(${BitsPilani25})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="date" style={{ background: "transparent" }}>
            <div
              className="day"
              style={{ background: "transparent", zIndex: "2" }}
            >
              6
            </div>
            <div className="month" style={{ background: "transparent" }}>
              Novemeber
            </div>
            <div className="year" style={{ background: "transparent" }}>
              2025
            </div>
          </div>
          <div className="eventName" style={{ background: "transparent" }}>
            BITS Pilani '25
          </div>
          <div className="more1-square" style={{ background: "transparent" }}>
            More
          </div>
          {clickedTiles["nine"] && (
            <TilePopup
              color="black"
              handleClick={() => handleClick("nine")}
              eventName={"Saanjh '24"}
              eventGallary={"Saanjh 22"}
              date={"21 August 2024"}
              buttonId="nine"
            />
          )}
        </div>
        {/* <div className="seven" onClick={() => handleClick("seven")}>
          {clickedTiles["seven"] && (
            <TilePopup color="black" handleClick={() => handleClick("seven")} />
          )}
        </div> */}
      </div>
     
    </div>
  );
}

export default Tiles;
