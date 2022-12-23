import { Fragment } from 'react';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import RecentUpdates from '../components/layout/recent-updates/RecentUpdates';

const Home = () => {
  return (
    <Fragment>
      <RecentUpdates />
      <Box sx={{ mx: 'auto', width: 'fit-content' }}>
        <Container sx={{ py: 10 }}>
          <img src="../"></img>
          <Typography variant="h1">Our Strategies.</Typography>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Home;
