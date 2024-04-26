import { Grid } from '@mui/material';
import CDCard from '../../components/CDCard';
import CDHeader from '../../components/CDHeader';

const Home = () => {
  return (
    <>
      <CDHeader />
      <Grid alignContent={'center'} justifyContent={'center'} container spacing={4} marginTop={2}>
        <Grid item xs={2}>
          <CDCard />
        </Grid>
        <Grid item xs={2}>
          <CDCard />
        </Grid>
        <Grid item xs={2}>
          <CDCard />
        </Grid>
        <Grid item xs={2}>
          <CDCard />
        </Grid>
        <Grid item xs={2}>
          <CDCard />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
