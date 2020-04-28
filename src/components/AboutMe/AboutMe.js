import React from "react";
import headshot from "../../assets/about/headshot.jpg";
import { Typography } from "@material-ui/core";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <React.Fragment>
      <Typography
        variant="h2"
        display="block"
        align="center"
        style={{
          margin: "1rem",
          fontSize: "1.6rem",
          textTransform: "uppercase"
        }}
      >
        {/*  <Element name="about-me" id="about-me">
                About Me
            </Element> */}
      </Typography>
      <div className="name">
        <img src={headshot} alt="profile_photo" className="img" />
        <h1>Kevin Schroeder</h1>
        <div className="subtitle">
          <h3>I am a Full Stack Software Engineer</h3>
          <p>
            I specialize in doing cool things and learning every day
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
