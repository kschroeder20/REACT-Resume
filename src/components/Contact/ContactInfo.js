import React from 'react';
import { Typography, IconButton } from "@material-ui/core";
import { Element } from "react-scroll";
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "./ContactInfo.css";
// import classes from '*.module.css';


// const useStyles = makeStyles((theme) => ({
//     linkedInLogo: {
//         fontSize: '200px'
//     }
// }));

export default function CenteredGrid() {
    // const classes = useStyles();

    return (
        <div className=''>
            <Typography
                variant="h2"
                display="block"
                align="center"
                id="contact-us"
                style={{
                    margin: "1rem",
                    fontSize: "1.6rem",
                    textTransform: "uppercase",
                    fontFamily: '"Bungee", cursive'
                }}
            >
                <Element name="contact-me"></Element>
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={2} className="gridItemLinkedIn" >
                    <IconButton
                        title="LinkedIn"
                        aria-label="LinkedIn"
                        href={'https://www.linkedin.com/in/kevin-schroeder-5b9b738a/'}
                    >
                        <LinkedInIcon className="linkedInLogo"/>
                    </IconButton>
                </Grid>
                <Grid item xs={12} sm={10} className="gridItemInfo" >
                    <p className="email" >schroederkevin94@gmail.com</p>
                    <p className="phone" >(847) 271-3732</p>
                </Grid>
            </Grid>
        </div>
    );
}