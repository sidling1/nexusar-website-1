import { Box } from "@mui/system";
import { Container, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import classes from "./CardFour.module.css";

const CardFour = (props) => {
  const {
    heading1,
    content1,
    heading2,
    content2,
    heading3,
    content3,
    image1,
    image2,
    image3,
  } = props;
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} lg={4}>
        <Paper elevation={4} className={classes.card1}>
          <Grid container spacing={4} sx={{ my: 2 }}>
            <Grid item sx={{ mr: 2 }}>
              <Container sx={{ minHeight: "80px", margin: "0px 0px 0px 0px" }}>
                <h2 style={{color:"black"}}>{heading1}</h2>
              </Container>
            </Grid>
            <Grid item sx={{ mx: 2 }}>
              <Container style={{ minHeight: "250px" }}>
                <img alt="card-2" className={classes.image} src={image1} />
              </Container>
            </Grid>

            <Grid item sx={{ mx: 2 }}>
              <p style={{fontSize: "21px", color:"black"}}>{content1}</p>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Paper elevation={4} className={classes.card2}>
          <Grid container spacing={4} sx={{ my: 2 }}>
            <Grid item sx={{ mr: 2 }}>
              <Container sx={{ minHeight: "80px", margin: "0px 0px 0px 0px" }}>
                <h2 style={{color:"black"}}>{heading2}</h2>
              </Container>
            </Grid>
            <Grid item sx={{ mx: 2 }}>
              <Container style={{ minHeight: "250px" }}>
                <img alt="card-2" className={classes.image} src={image2} />
              </Container>
            </Grid>

            <Grid item sx={{ mx: 2 }}>
              <p style={{fontSize: "21px", color:"black"}}>{content2}</p>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Paper elevation={4} className={classes.card3}>
          <Grid container spacing={4} sx={{ my: 2 }}>
            <Grid item sx={{ mr: 2 }}>
              <Container sx={{ minHeight: "80px", margin: "0px 0px 0px 0px" }}>
                <h2 style={{color:"black"}}>{heading3}</h2>
              </Container>
            </Grid>
            <Grid
              item
              sx={{
                mx: 2,
              }}
            >
              <Container style={{ minHeight: "250px" }}>
                <img alt="card-2" className={classes.image} src={image3} />
              </Container>
            </Grid>

            <Grid item sx={{ mx: 2 }}>
              <p style={{fontSize: "21px", color:"black"}}>{content3}</p>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CardFour;
