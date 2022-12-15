import { Box } from '@mui/system';
import { Button, Container, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './CardTwo.module.css';

const CardTwo = (props) => {
  const { heading, highlights, content,image } = props;

  return (
    <Paper elevation={4} className={classes.card}>
      <Grid container item xs={12} sm={6} spacing={0} direction="column">
        <Grid item xs={6} md={6}>
          <Container sx={{ mb: 1, mr:2, overflow: 'hidden'}}>
            <img alt="card-2" className={classes.image} src={image} />
          </Container>
        </Grid>
        <Grid container item xs={12} md={12} direction="column" alignItems="center">
            <Container sx={{ py: 4}}>
              <h3 style={{textAlign:"center"}} className={classes.bigHeader}>{heading}</h3>
            </Container>
          
            <Container fixed sx={{height: "43%",overflow:"auto"}}>
              <p style={{fontSize: "21px"}}>
                {highlights}{content}
              </p>
              <Box sx={{ py: 2 }} />
            </Container>
        
            <Button variant="contained" size="medium" sx={{my:1,fontSize:15,alignSelf:"center",color:"#134e5e",backgroundColor:"white",':hover':{bgcolor:"grey"}}}>More Info</Button>
          
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardTwo;
