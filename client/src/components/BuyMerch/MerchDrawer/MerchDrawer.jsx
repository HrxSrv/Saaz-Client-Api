import React, { useState, forwardRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  Slide,
  TextField,
  Button,
  MenuItem,
  IconButton,
} from "@mui/material";
import "./MerchDrawer.scss";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import arrow from "../../../assets/arrow3x.png"; // Import the arrow image
import Mic from "../../../assets/Mic.png";
import Qr from "../../../assets/Merch/Payment Details/Saaz-merch-payment-qr.jpg";
import { useNavigate } from "react-router-dom";
import { fetchEventMedia } from "../../../Cloudinary/Cloudinary";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";

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
  // overflowY:"scroll",
  [theme.breakpoints.up("md")]: {
    width: "90vw",
    gridTemplateAreas: `
    'tile1 tile1 tile2  tile3 tile3 '
    'tile1 tile1 tile2  tile4 tile4'
  `,
  },
}));
const Tile = styled("div")(({ area }) => ({
  background: "white",
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
  // filter: "invert(100%)",
});

// Custom styled components for Dialog elements
const StyledDialog = styled(Dialog)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end", // Align the dialog to the bottom of the display
  overflowY: "scroll", // Ensure overflow is visible
  overflowX:"hidden",
  "& .MuiPaper-root": {
    backgroundColor: "#181818", // Background color of the entire dialog
    color: "#fff", // Text color
    height: "82vh", // Adjust this value to control the height of the dialog
    maxHeight: "100%",
    position: "relative",
    overflow: "visible", // Ensure overflow is visible
    borderRadius: "10px",
    top: "13vh",
  },
  [theme.breakpoints.up("md")]: {
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
  },
}));

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
const StyledTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    color: "white", // Change font color
    fontFamily: "Helvetica", // Change font family
    fontSize: "1rem", // Change font size
  },
  "& .MuiInputLabel-root": {
    color: "white", // Change label color
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.189)", // Default outline color
      transition: "all 300ms ease",
    },
    "&:hover fieldset": {
      borderColor: "#1E969F", // Outline color on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1E969F", // Outline color when focused'
      color:'white'
    },
  },
  width: "300px",
  // marginBottom: "1rem", // Space between fields
});
const TilePopup = ({ product, onClose }) => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
    // // console.log(buttonId)
    // handleClick(buttonId);
    onClose();
    // console.log(buttonId)
  };
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    size: "",
    paymentImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [fileUploaded, setFileUploaded] = useState(false);

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      paymentImage: e.target.files[0],
    });
    setFileUploaded(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const googleFormUrl =
      "https://docs.google.com/forms/d/e/your-form-id/formResponse";

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("entry.1234567890", formData.name); // Replace with your field ID
    formDataToSubmit.append("entry.2345678901", formData.rollNumber); // Replace with your field ID
    formDataToSubmit.append("entry.3456789012", formData.size); // Replace with your field ID

    if (formData.paymentImage) {
      formDataToSubmit.append("entry.4567890123", formData.paymentImage); // Replace with your field ID
    }

    fetch(googleFormUrl, {
      method: "POST",
      body: formDataToSubmit,
      mode: "no-cors",
    })
      .then(() => {
        console.log("Form submitted");
        onClose();
      })
      .catch((error) => {
        console.error("Error submitting form", error);
      });
  };
  // //Popup
  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleClickPopup = (event) => {
  //   setAnchorEl(anchorEl ? null : event.currentTarget);
  // };

  // const openPopup = Boolean(anchorEl);
  // const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <StyledDialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="xxl"
        fullWidth
      >
        <StyledDialogContent>
          <CloseButtonContainer>
            <IconButton onClick={handleClose} style={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
          </CloseButtonContainer>
          <TileContainer>
            <Tile
              area="tile1"
              style={{
                backgroundImage: `url(${product.img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",

              }}
             
            >
              {/* <Arrow src={arrow} alt="Arrow" className="arrow" /> */}
              <div className="merch-tile1-register-tile">
                <div className="left">
                  <div className="eventName">{product.title}</div>
                  {/* <div className="date">{date}</div> */}
                </div>
                <div className="merch-register">{product.price}</div>
              </div>
            </Tile>
            <Tile
              area="tile2"
              style={{
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* <button
                aria-describedby={id}
                type="button"
                onClick={handleClickPopup}
                style={{zIndex:100}}
              >
                Toggle Popper
              </button>
              <Popper id={id} open={openPopup} anchorEl={anchorEl}  style={{zIndex:100}}>
                <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}  style={{zIndex:100}}>
                  The content of the Popper.
                </Box>
              </Popper> */}
              <div className="merch-tile2-audition-tile">
                <form onSubmit={handleSubmit} className="checkout-form">
                  {/* <Typography variant="h6" gutterBottom>
                    Purchase {product.title}
                  </Typography> */}
                  <StyledTextField
                    name="name"
                    label="Name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                    style={{ Width: "50px" }}
                  />
                  <StyledTextField
                    name="rollNumber"
                    label="Roll Number"
                    value={formData.rollNumber}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                  />
                  <StyledTextField
                    select
                    name="size"
                    label="Size"
                    value={formData.size}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                  >
                    <MenuItem value="S">S</MenuItem>
                    <MenuItem value="M">M</MenuItem>
                    <MenuItem value="L">L</MenuItem>
                    <MenuItem value="XL">XL</MenuItem>
                  </StyledTextField>
                  <Button
                    variant="contained"
                    component="label"
                    fullWidth
                    margin="normal"
                    style={{
                      backgroundColor: `${fileUploaded ? "#1e979f8c" : "#1E969F"} `,
                      color: "white",
                      fontWeight: "600",
                      fontStyle: "Helvetica",
                      textTransform:"none"
                    }}
                  >
                    {fileUploaded?"Uploaded":"Payment Screenshot"}
                    <input
                      type="file"
                      hidden
                      accept="image/*"
                      onChange={handleFileChange}
                      required
                      
                    />
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    // color="secondary"
                    style={{
                      backgroundColor: "#1E969F",
                      color: "white",
                      fontWeight: "600",
                      fontStyle: "Helvetica",
                      textTransform:"none"
                    }}
                    fullWidth
                  >
                    Confirm
                  </Button>
                  {/* <Button
                    type="button"
                    variant="outlined"
                    color="secondary"
                    onClick={onClose}
                    style={{ marginTop: "10px" }}
                    fullWidth
                  >
                    Cancel
                  </Button> */}
                </form>
              </div>
            </Tile>
            <Tile
              area="tile3"
              style={{ background: "#FFFFFF", minHeight: "100px" }}
            >
              <Arrow src={arrow} alt="Arrow" className="arrow" />
              <div className="merch-tile3">
                <img
                  src="https://res.cloudinary.com/djy2jlthj/image/upload/v1721909264/Saaz-merch-payment-qr.jpg"
                  alt=""
                />
              </div>
            </Tile>
            <Tile area="tile4" style={{ background: "#1E969F" }} >
              {/* <Arrow src={arrow} alt="Arrow" className="arrow" /> */}
              <Typography
                variant="h6"
                fontFamily={"Anton"}
                color={"black"}
                fontSize={"30px"}
                style={{ top: "10px", left: "10px", position: "absolute" }}
              >
                Our <br /> Contact
              </Typography>
              <Typography
                variant="h1"
                fontFamily={"Helvetica"}
                color={"#181818c4"}
                fontSize={"10px"}
                letterSpacing={"1px"}
                style={{
                  bottom: "10px",
                  left: "10px",
                  position: "absolute",
                  fontWeight: "light",
                }}
                className="invisible-on-phone"
              >
                Having Some <br /> Questions <br /> Specific <br /> To Event ?
              </Typography>
            </Tile>
          </TileContainer>
        </StyledDialogContent>
      </StyledDialog>
    </div>
  );
};

export default TilePopup;
