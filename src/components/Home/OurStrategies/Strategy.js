import { Container, Typography } from "@mui/material";
import one from '../../../assets/images/one.svg';
import classes from './Strategy.module.css';
import Info from "./Info";
import { useRef,useState } from "react";

const Strategy = () => {
    const ones = useRef(null);

    return (
        <Container
        sx={{
            alignItems:"center",
            height:"7000px",
        }}
        >
        <Container
            fluid
            sx={{
                position: "sticky",
                top:103,
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                gap: "20px",
            }}
        >
            <img src={one} className={classes.one} ref={ones}></img>
            <Typography
                variant="h1"
                sx={{
                    color: "white",
                    fontSize: "max(55px,6.5*var(--font-size))",
                    lineHeight: "1em",
                    fontWeight: "700",
                    margin: 0,
                    height: "fit-content",
                }}
            >
                Our Strategies. 
            </Typography>
        </Container>
            <Info sx={{
                position:"absolute",
            }}
            ImageRef = {ones}
            />
        </Container>
    );
};

export default Strategy;
