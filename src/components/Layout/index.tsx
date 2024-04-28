import { Button, Container, Dialog, SxProps } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { makeSelectBasketCount, makeSelectDialogStatus } from '../../master/selector';
import { useAppSelector } from '../../config/hooks';
import CDHeader from '../CDHeader';
import { increaseItem, setDialogStatus } from '../../master/actions';
import styles from './style.module.scss';
import CDInput from '../CDInput';
import { Book } from '../../types';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatch = useDispatch();

  const basket = useAppSelector(makeSelectBasketCount());
  const dialogStatus = useAppSelector(makeSelectDialogStatus());

  const handleClickOpen = () => {
    dispatch(setDialogStatus(true));
  };

  const handleClose = () => {
    dispatch(setDialogStatus(false));
  };

  const increaseCount = (id: any) => {
    dispatch(increaseItem(id));
  };

  const sx: SxProps = {
    '& .MuiDialog-container': {
      float: 'right',
    },
    '& .MuiPaper-root': {
      width: '350px',
    },
  };

  return (
    <>
      <CDHeader openDialog={handleClickOpen} basketCount={basket.length} />
      <Dialog onClose={handleClose} fullScreen open={dialogStatus} sx={sx}>
        {basket?.map((item: Book) => (
          <div key={item.id} className={styles.basket}>
            <img src={item.image} alt={'item'} />
            <div className={styles.basketContent}>
              <div className={styles.name}>{item.bookName}</div>
              <div>
                <div>-</div>
                <div>{item.count}</div>
                <div onClick={() => increaseCount(item.id)}>+</div>
              </div>
              <div className={styles.s}>
                <div className={styles.price}>Price: ${item.price}</div>
              </div>
            </div>
          </div>
        ))}
      </Dialog>
      <Container maxWidth={'lg'}>{children}</Container>
    </>
  );
};

export default Layout;
