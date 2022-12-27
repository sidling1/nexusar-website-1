import { Grid, Typography } from "@mui/material";
import React from "react";
import { useEffect, useRef } from "react";

const Info = () => {
    const elementRef = useRef(null);
    const elementStart = 3000;

    useEffect(() => {
        function handleScroll() {
            const element = elementRef.current;
            const scrollPosition = (window.scrollY-elementStart)>0 ? (window.scrollY-elementStart)/4 : 0;

            // Calculate the desired clip-path value based on the scroll position
            const clipPath = `circle(${scrollPosition}px at 140px 360px)`;

            // Update the element's clip-path property
            element.style.clipPath = clipPath;
        }
        // Add the scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Remove the event listener when the component unmounts
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Grid
            ref={elementRef}
            sx={{
                background: "blue",
                color: "black",
                clipPath: "Circle(0% at 140px 360px)",
                zIndex: "5", 
                position:"sticky",
                top:102,
            }}
        >
            <canvas width="744" height="513"></canvas>
            <Typography variant="h1">
                Next level, design led, digital solutions.
            </Typography>
            <Typography variant="h4">
                We take pride in making complex problems simple. Enabling strategies
                that transform the way you work every day. Empowering teams and decision
                makers with data-driven insight, and organisations with quality and
                efficiency through professional data solutions.
            </Typography>
        </Grid>
    );
};

export default Info;
