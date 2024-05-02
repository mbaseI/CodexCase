import { useEffect } from 'react';
import { Button, Grid, Skeleton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../config/hooks';
import Layout from '../../components/Layout';
import { getBook } from './actions';
import styles from './style.module.scss';
import { makeSelectBookDetail, makeSelectLoading } from './selector';
import { useParams } from 'react-router-dom';
import { Book } from '../../types';
import { toast } from 'react-toastify';
import { setBasket } from '../../master/actions';

const Detail = () => {
  const dispatch = useDispatch();
  const book = useAppSelector(makeSelectBookDetail());
  const loading = useAppSelector(makeSelectLoading());
  const { id } = useParams();

  useEffect(() => {
    dispatch(getBook(id as string));
  }, [id]);

  const addToBasketClick = (item: Book) => {
    const notify = () => toast('Product Added');
    notify();
    dispatch(setBasket(item));
  };

  return (
    <Layout>
      {loading ? (
        <Skeleton
          variant={'rectangular'}
          animation={'wave'}
          height={425}
          width={'100%'}
          sx={{ borderRadius: 5 }}
        />
      ) : (
        <div id={book.id} className={styles.container}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={5}>
              <div>
                <img src={book.image} alt='img' />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={7}>
              <div className={styles.top}>
                <div>
                  <div>{book.bookName}</div>
                  <div>{book.author}</div>
                </div>
                <div>{book.description}</div>
                <div className={styles.bot}>
                  <Button onClick={() => addToBasketClick(book)} variant='contained'>
                    Add To Basket
                  </Button>
                  <div>${book.price}</div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      )}
    </Layout>
  );
};

export default Detail;
