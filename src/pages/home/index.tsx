import { Grid } from '@mui/material';
import CDCard from '../../components/CDCard';
import CDHeader from '../../components/CDHeader';
import { useEffect } from 'react';
import { useAppDispatch } from '../../config/hooks';
import { getAllBooks } from './actions';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

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
