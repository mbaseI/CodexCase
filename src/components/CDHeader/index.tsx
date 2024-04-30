import React, { useEffect, useRef, useState } from 'react';
import { AppBar, Badge, Box, Grid, IconButton, Toolbar } from '@mui/material';
import Basket from '@mui/icons-material/ShoppingBasket';
import Logo from '../../assets/svg/logo.svg';
import CDResult from '../CDResult';
import CDInput from '../CDInput';
import styles from './style.module.scss';
import { Book } from '../../types';
import { useLocation } from 'react-router-dom';

type CDHeaderProps = {
  basketCount: number;
  openDialog: () => void;
  onChange: (text: string) => void;
  results: Book[];
};

const CDHeader: React.FC<CDHeaderProps> = ({ basketCount, openDialog, onChange, results }) => {
  const [resultsVisibility, setResultsVisibility] = useState(true);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setResultsVisibility(false);
      } else {
        setResultsVisibility(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [location]);

  useEffect(() => {
    setResultsVisibility(false);
  }, [location]);

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
              <div ref={wrapperRef} className={styles.inputSection}>
                <CDInput
                  onChange={(e) => onChange(e.target.value)}
                  color={'primary'}
                  fullWidth
                  label={'Search'}
                  variant={'outlined'}
                  size={'small'}
                />
                {resultsVisibility && (
                  <div className={styles.resultSection}>
                    {results.map((item: Book) => (
                      <CDResult
                        id={item.id}
                        key={item.id}
                        author={item.author}
                        bookName={item.bookName}
                        price={item.price}
                        image={item.image}
                      />
                    ))}
                  </div>
                )}
              </div>
            </Grid>
            <Grid item xs={4} alignItems={'center'} display={'flex'} justifyContent={'center'}>
              <IconButton
                onClick={openDialog}
                size={'large'}
                aria-label={'show 4 new mails'}
                color={'inherit'}
              >
                <Badge badgeContent={basketCount} color={'error'}>
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
