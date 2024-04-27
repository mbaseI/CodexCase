import { AppBar, Badge, Box, Grid, IconButton, Toolbar } from '@mui/material';
import Basket from '@mui/icons-material/ShoppingBasket';
import Logo from '../../assets/svg/logo.svg';
import CDInput from '../CDInput';

const CDHeader = () => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 10 }}>
      <AppBar color={'warning'} position={'fixed'}>
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <IconButton size={'large'} edge={'start'} aria-label={'menu'} sx={{ mr: 2 }}>
                <a href='/'>
                  <img height={20} src={Logo} alt={'Logo'} />
                </a>
              </IconButton>
            </Grid>
            <Grid item xs={4} alignItems={'center'} display={'flex'}>
              <CDInput
                color={'primary'}
                fullWidth
                label={'Search'}
                variant={'outlined'}
                size={'small'}
              />
            </Grid>
            <Grid item xs={4} alignItems={'center'} display={'flex'} justifyContent={'center'}>
              <IconButton size={'large'} aria-label={'show 4 new mails'} color={'inherit'}>
                <Badge badgeContent={4} color={'error'}>
                  <Basket />
                </Badge>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CDHeader;
