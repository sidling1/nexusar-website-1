import { Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CaseStudyCard = () => {
    return ( 
        <Grid>
            <img></img>
                <Link><Typography variant="h1">Insert Title Here</Typography></Link>
                <Typography variant="p">Insert Description Here</Typography>
            <Typography>01.</Typography>
        </Grid>
    );
}

export default CaseStudyCard;