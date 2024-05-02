import React from 'react';
import { useDispatch } from 'react-redux';
import {
  makeSelectBasketCount,
  makeSelectBasketPrice,
  makeSelectDialogStatus,
  makeSelectFilteredItems,
  makeSelectModal,
} from '../../master/selector';
import {
  decreaseItem,
  increaseItem,
  searchFilter,
  setDialogStatus,
  setModal,
} from '../../master/actions';
import { makeSelectBooks } from '../../pages/home/selector';
import { useAppSelector } from '../../config/hooks';
import { Book } from '../../types';
import { Button, Container, Dialog, IconButton, SxProps } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CDHeader from '../CDHeader';
import BasketItem from './basketItem';
import Checkout from './checkout';
import styles from './style.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatch = useDispatch();

  const basket = useAppSelector(makeSelectBasketCount());
  const booksData = useAppSelector(makeSelectBooks());
  const totalPrice = useAppSelector(makeSelectBasketPrice());
  //
  const dialogStatus = useAppSelector(makeSelectDialogStatus());
  const modalStatus = useAppSelector(makeSelectModal());
  //
  const searchResults = useAppSelector(makeSelectFilteredItems());

  const handleClickOpen = () => {
    dispatch(setDialogStatus(true));
  };

  const handleCloseDialog = () => {
    dispatch(setDialogStatus(false));
  };

  const _increaseItem = (id: keyof Book) => {
    console.log(id);
    dispatch(increaseItem(id));
  };

  const _decreaseItem = (id: keyof Book) => {
    dispatch(decreaseItem(id));
  };

  const handleModal = (id: string, isOpen: boolean) => {
    dispatch(setModal(id, isOpen));
  };

  const _searchFilter = (text: string) => {
    let filteredItems = booksData.filter((item: Book) =>
      [item.bookName, item.author].some((prop) =>
        prop?.toLocaleLowerCase().includes(text.toLocaleLowerCase()),
      ),
    );
    if (!text) {
      filteredItems = [];
    }
    dispatch(searchFilter(filteredItems));
  };

  const basketCount = () => {
    return basket.reduce((acc: number, item: Book) => acc + Number(item.count), 0);
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
      <CDHeader
        results={searchResults}
        onChange={(text) => _searchFilter(text)}
        openDialog={handleClickOpen}
        basketCount={basketCount()}
      />
      {/* //Basket Content */}
      <Dialog onClose={handleCloseDialog} fullScreen open={dialogStatus} sx={sx}>
        <div className={styles.closeButton}>
          <IconButton onClick={handleCloseDialog} size={'large'} color={'inherit'}>
            <HighlightOffIcon />
          </IconButton>
        </div>
        {basket?.map((item: Book) => (
          <BasketItem
            key={item.id}
            decreaseClick={_decreaseItem}
            increaseClick={_increaseItem}
            bookName={item.bookName}
            image={item.image}
            count={item.count}
            price={item.price}
            id={item.id}
          />
        ))}
        {!basket.length ? (
          <div className={styles.noItem}>There are no items in your cart</div>
        ) : (
          <div className={styles.basketCheckout}>
            <Button onClick={() => handleModal('Checkout', true)} variant='contained'>
              Checkout
            </Button>
            <div className={styles.price}>Total Price: ${totalPrice}</div>
          </div>
        )}
      </Dialog>
      {/* //Basket Content End */}
      <Checkout open={modalStatus.isOpen} handleClose={() => handleModal('Checkout', false)} />
      <Container maxWidth={'lg'}>{children}</Container>
    </>
  );
};

export default Layout;
