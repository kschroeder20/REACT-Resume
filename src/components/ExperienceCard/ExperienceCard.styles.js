import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  cardContainer: {
    margin: "10px",
    maxHeight: "350px"
  },
  overlayContent: {
    backgroundImage:
      "linear-gradient(to bottom right, rgb(0,0,0, 0.7), rgb(0,0,0, 0.5), rgb(0, 0, 0, 0.7))",
    border: 0,
    width: "350px",
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px #f5f5f5",
    color: "white",
    height: "350px",
    padding: "10px 30px",
    "& p": {
      fontFamily: "'Work Sans', 'sans-serif'",
      fontSize: "1em",
      lineHeight: "1em",
      margin: "5px 0"
    },
    "& h4": {
      fontFamily: "'Work Sans', 'sans-serif'",
      fontSize: "1.5em",
      margin: "5px 0"
    },
    "&:hover": {
      display: "block",
      margin: "0 auto",
      height: "auto",
      width: "300px"
    }
  },
  expImg: {
    position: "relative",
    objectFit: "fill",
    bottom: "350px",
    width: "350px",
    height: "350px",
    transition: ".5s",
    "&:hover": {
      opacity: 0
    }
  }
});
