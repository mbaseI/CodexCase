import { AppBar, Badge, Box, Grid, IconButton, Toolbar } from '@mui/material';
import Basket from '@mui/icons-material/ShoppingBasket';
import Logo from '../../assets/svg/logo.svg';
import CDInput from '../CDInput';

const CDHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color={'warning'} position={'static'}>
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <IconButton size={'large'} edge={'start'} aria-label={'menu'} sx={{ mr: 2 }}>
                <img height={20} src={Logo} alt={'Logo'} />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <CDInput
                color={'primary'}
                fullWidth
                label={'Search'}
                variant={'outlined'}
                size={'small'}
              />
            </Grid>
            <Grid item xs={4}>
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
