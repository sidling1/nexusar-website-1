import { Container, Typography, Button } from "@mui/material";
import classes from "./casestudy.module.css";
import CaseStudyCard from "./CaseStudyCard";

const CaseStudy = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItem: "flex-start",
        mt: "40px",
        width: "100%",
        height: "auto",
        gap:"50px",
      }}
    >
            <Typography
                variant="h2"
                sx={{ color: "white" }}
                className={classes.heading}
            >
                Case Studies.
            </Typography>
            <Typography
                variant="p"
                sx={{ color: "white" }}
                className={classes.content}
            >
                If you're a business owner or key decision-maker to thrive in our
                hyper-connected digital age, we're here for you.
            </Typography>
        <Button
            variant="contained"
            sx={{
            background: "White",
            color: "Black",
            width: "fit-content",
            pt: "20px",
            pb: "20px",
            fontSize:"16px",
            fontWeight:"500",
            borderRadius:"40px"
            }}
        >
            See all cases <img />
        </Button>
        <CaseStudyCard/>
    </Container>
  );
};

export default CaseStudy;
