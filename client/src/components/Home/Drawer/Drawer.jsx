import React, { useState, forwardRef } from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  Slide,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import arrow from "../../../assets/arrow3x.png"; // Import the arrow image
import Mic from "../../../assets/Mic.png"
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const TileContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateAreas: `
    'tile1 tile1 tile1 tile1 tile1 tile1 tile1 tile1 tile2 tile2'
    'tile1 tile1 tile1 tile1 tile1 tile1 tile1 tile1 tile3 tile4'
  `,
  gridGap: "8px",
  width: "100%",
  height: "100%",
  background: "#181818",
  [theme.breakpoints.up("md")]: {
    width: "60vw",
    gridTemplateAreas: `
    'tile1 tile1 tile1 tile1 tile1 tile1  tile2 tile2'
    'tile1 tile1 tile1 tile1 tile1 tile1  tile3 tile4'
  `,
  },
}));
const Tile = styled("div")(({ area }) => ({
  background: "black",
  gridArea: area,
  border: "1px solid black",
  padding: "16px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  opacity: "80%",
  transition: "ease-out",
  borderRadius: "1vw",
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

const TilePopup = ({ handleClick }) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    handleClick();
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
            <IconButton onClick={handleClose} style={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
          </CloseButtonContainer>
          <TileContainer>
            <Tile area="tile1">
              <Arrow src={arrow} alt="Arrow" className="arrow" />
              <Typography variant="h6">Tile 1</Typography>
            </Tile>
            <Tile area="tile2" style={{ backgroundImage: `url(${Mic})`, backgroundSize: 'cover', backgroundPosition: 'right' }}>
              <Arrow src={arrow} alt="Arrow" className="arrow" />
              <Typography variant="h6"
                fontFamily={"Anton"}
                color={"white"}
                fontSize={"30px"}
                style={{top:'-5vh', left:'-4vw', position:'relative',zIndex:'100'}}>Audition Registration</Typography>
               <Typography
                variant="h1"
                fontFamily={"Helvetica"}
                color={"white"}
                fontSize={"10px"}
                letterSpacing={'1px'}
                style={{top:'5vh', left:'7vw', position:'relative',fontWeight:'light'}}
              >
                Show Us What You Got <br/>And Get To Perform.
              </Typography>  
                  </Tile>
            <Tile area="tile3" style={{ background: "#FFFFFF" }}>
              <Arrow src={arrow} alt="Arrow" className="arrow" />
              <Typography
                variant="h6"
                fontFamily={"Anton"}
                color={"black"}
                fontSize={"30px"}
                style={{top:'-20%', left:'-15%', position:'relative'}}
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
                style={{top:'20%', left:'-15%', position:'relative',fontWeight:'light'}}
              >
                Explore The Photos <br/>And Videos Of The <br/>Event
              </Typography>
            </Tile>
            <Tile area="tile4" style={{ background: "#1E969F" }}>
              <Arrow src={arrow} alt="Arrow" className="arrow" />
              <Typography
                variant="h6"
                fontFamily={"Anton"}
                color={"black"}
                fontSize={"30px"}
                style={{top:'-20%', left:'-15%', position:'relative'}}
              >Our <br/> Contact</Typography>
              <Typography
                variant="h1"
                fontFamily={"Helvetica"}
                color={"#181818c4"}
                fontSize={"10px"}
                letterSpacing={'1px'}
                style={{top:'20%', left:'-27%', position:'relative',fontWeight:'light'}}
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
