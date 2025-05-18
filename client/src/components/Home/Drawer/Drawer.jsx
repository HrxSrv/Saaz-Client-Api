import React, { useState, forwardRef,useEffect } from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  Slide,
  IconButton,
} from "@mui/material";
import './Drawer.scss'
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import arrow from "../../../assets/arrow3x.png"; // Import the arrow image
import Mic from "../../../assets/Mic.png"
import { useNavigate} from "react-router-dom";
import { fetchEventMedia } from "../../../Cloudinary/Cloudinary";
import MaterialPopup from "../../MaterialPopup";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const TileContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateAreas: `
    'tile1 tile1 '
    'tile1 tile1 '
    'tile1 tile1 '
    'tile1 tile1 '
    'tile1 tile1 '
    'tile1 tile1 '
    'tile1 tile1 '
    'tile1 tile1 '
    'tile1 tile1 '
    'tile1 tile1 '
    'tile1 tile1 '
    'tile1 tile1 '
    'tile1 tile1 '
    'tile1 tile1 '
    'tile1 tile1 '
    'tile1 tile1 '
    'tile1 tile1 '
    'tile1 tile1 '
    'tile1 tile1 '
    'tile1 tile1 '
    'tile1 tile1 '
    'tile1 tile1 '
    'tile1 tile1 '
    'tile1 tile1 '
    'tile2 tile2 '
    'tile3 tile4 '
  `,
  gridGap: "8px",
  width: "82vw",
  height: "100%",
  background: "#181818",
  [theme.breakpoints.up("md")]: {
    width: "60vw",
    gridTemplateAreas: `
    'tile1 tile1 tile1 tile1 tile1 tile1 tile2 tile2 tile2 tile2 '
    'tile1 tile1 tile1 tile1 tile1 tile1 tile3 tile3 tile4 tile4'
  `,
  },
}));
const Tile = styled("div")(({ area }) => ({
  background: "black",
  gridArea: area,
  border: "1px solid black",
  padding: "5px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  opacity: "80%",
  transition: "0.3s ease-in-out",
  borderRadius: "8px",
  "&:hover": {
    opacity: "100%",
    border: "1px solid white",
  },
  "&:hover .arrow": {
    transform: "rotate(-45deg)",
  },
}));

const Arrow = styled("img")({
  width: "24px",
  height: "24px",
  position: "absolute",
  top: "10px",
  right: "10px",
  transform: "rotate(0deg)",
  transition: "transform 0.3s ease",
  filter: 'invert(100%)'
});

// Custom styled components for Dialog elements
const StyledDialog = styled(Dialog)({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end", // Align the dialog to the bottom of the display
  overflow: "visible", // Ensure overflow is visible
  "& .MuiPaper-root": {
    backgroundColor: "#181818", // Background color of the entire dialog
    color: "#fff", // Text color
    height: "70vh", // Adjust this value to control the height of the dialog
    maxHeight: "100%",
    position: "relative",
    overflow: "visible", // Ensure overflow is visible
    borderRadius: "10px",
    top: "13vh",
  },
});

const CloseButtonContainer = styled("div")({
  position: "absolute",
  top: "-50px",
  right: "50%",
  transform: "translateX(50%)",
  zIndex: 1,
  background: "#181818",
  borderRadius: "50%",
});

const StyledDialogContent = styled(DialogContent)({
  backgroundColor: "#181818", // Background color of the content
  color: "#fff", // Text color
  position: "relative",
  overflow: "visible", // Ensure overflow is visible
  borderRadius: "10px",
});

const TilePopup = ({ eventName,image,date,handleClick,eventGallary,buttonId,clickedTiles }) => {
  const [isOpen, setIsOpen] = useState(false);  // Changed initial state to false
  const [isOpenContact, setIsOpenContact] = useState(false);  // Changed initial state to false

  const popupData = {
    title: "Sorry we are not inducting right now",  // Updated text to match context
    description: "The audition link will open soon",
    primaryButton: {
      text: "Reach Us",
      action: () => window.location.href = 'mailto:saaz@iiitdmj.ac.in',
    },
    secondaryButton: {
      text: "Close",
      action: () => setIsOpen(false),
    }
  };
  const contactPopupData = {
    title: "Contact us !",  // Updated text to match context
    description: "Reach Us @Music Room Sac II IIITDM Jabalpur or mail on the link below.",
    primaryButton: {
      text: "Reach Us",
      action: () => window.location.href = 'mailto:saaz@iiitdmj.ac.in',
    },
    secondaryButton: {
      text: "Close",
      action: () => setIsOpenContact(false),
    }
  };

  const handleApplyClick = () => {
    setIsOpen(true);  // Open popup when apply button is clicked
  };
  const handleContactClick = () => {
    setIsOpenContact(true);  // Open popup when apply button is clicked
  };
  const [open, setOpen] = useState(true);
  // console.log(open)
  const [images, setImages] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadImages = async () => {
      const fetchedImages = await fetchEventMedia(`Saaz Events 23-24/Saaz Events 23-24/${eventGallary}`);
      // console.log(fetchedImages)
      setImages(fetchedImages);
    };
    loadImages();
  }, [eventGallary]);
  const handleClose = () => {
    setOpen(false);
    console.log(buttonId)
    handleClick(buttonId);
    console.log(buttonId)
  };
  const handleTileClick = () => {
    navigate(`/event/${eventGallary}`, { state: { images: images, eventName: eventGallary} });
  };
  return (
    <div>
      <StyledDialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="xl"
        fullWidth
      >
        <StyledDialogContent>
          <CloseButtonContainer>
            <IconButton onClick={handleClose } style={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
          </CloseButtonContainer>
          <TileContainer>
            <Tile area="tile1" style={{
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
    
  }} onClick={(e) => e.stopPropagation()}>
              <Arrow src={arrow} alt="Arrow" className="arrow" />
              <div className="tile1-register-tile">
                <div className="left">
                <div className="eventName">{eventName}</div>
                <div className="date">{date}</div>
                </div>
                <a href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSe5_PcHI7wfTLpsxcUg8-7odOYk3yJj98tohs8dBxwWus_iDg/viewform?usp=sharing&urp=gmail_link" className="register">
                  Register
                </a>
              </div>
            </Tile>
            <Tile area="tile2" style={{ backgroundImage: `url(${Mic})`, backgroundSize: 'cover', backgroundPosition: 'right' }} onClick={(e) => {
                e.stopPropagation();
                handleApplyClick();
              }}  // Added click handler
          // role="button"
>
              <Arrow src={arrow} alt="Arrow" className="arrow" />
              {/* <Typography variant="h6"
                fontFamily={"Anton"}
                color={"white"}
                fontSize={"30px"}
                style={{ position:'relative',zIndex:'100'}}>Audition Registration</Typography> */}
                <div className="tile2-audition-tile"  >
                  <div className="audition"> Audition Registration</div>
                  <div className="audition-subtext">Show Us What You Got And Get To Perform On Stage.</div>
                </div>
                <MaterialPopup
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          data={popupData}
        />
               {/* <Typography
                variant="h1"
                fontFamily={"Helvetica"}
                color={"white"}
                fontSize={"10px"}
                letterSpacing={'1px'}
                style={{ position:'relative',fontWeight:'light'}}
              >
                Show Us What You Got <br/>And Get To Perform.
              </Typography>   */}
                  </Tile>
            <Tile area="tile3" style={{ background: "#FFFFFF",minHeight:'100px' }} onClick={(e) => {
                e.stopPropagation();
                handleTileClick();
              }}>
              <Arrow src={arrow} alt="Arrow" className="arrow" />
              <Typography
                variant="h6"
                fontFamily={"Anton"}
                color={"black"}
                fontSize={"30px"}
                style={{top:'10px', left:'10px', position:'absolute'}}
                
              >
                Event <br />
                Gallery
              </Typography>
              <Typography
                variant="h1"
                fontFamily={"Helvetica"}
                color={"#181818c4"}
                fontSize={"10px"}
                letterSpacing={'1px'}
                style={{bottom:'10px', left:'10px', position:'absolute',fontWeight:'light'}}
                className="invisible-on-phone"
              >
                Explore The Photos <br/>And Videos Of The <br/>Event
              </Typography>
            </Tile>
            <Tile area="tile4" style={{ background: "#1E969F" }} onClick={(e) => {
                e.stopPropagation();
                handleContactClick();
              }}>
              <Arrow src={arrow} alt="Arrow" className="arrow" />
              <Typography
                variant="h6"
                fontFamily={"Anton"}
                color={"black"}
                fontSize={"30px"}
                style={{top:'10px', left:'10px', position:'absolute'}}
              >Our <br/> Contact</Typography>
              <MaterialPopup
          isOpen={isOpenContact}
          onClose={() => setIsOpenContact(false)}
          data={contactPopupData}
        />
              <Typography
                variant="h1"
                fontFamily={"Helvetica"}
                color={"#181818c4"}
                fontSize={"10px"}
                letterSpacing={'1px'}
                style={{bottom:'10px', left:'10px', position:'absolute',fontWeight:'light'}}
                className="invisible-on-phone"
              >
                Having Some <br/> Questions <br/> Specific <br/> To Event ?
              </Typography>
            </Tile>
            
          </TileContainer>
        </StyledDialogContent>
      </StyledDialog>
    </div>
  );
};

export default TilePopup;
