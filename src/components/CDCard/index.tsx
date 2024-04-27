import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import styles from './style.module.scss';
import { Book } from '../../types';

const CDCard: React.FC<Book> = ({ author, description, price, image, bookName }) => {
  return (
    <>
      <Card className={styles.card}>
        <CardMedia component={'img'} alt={'book'} height={'180'} image={image} />
        <CardContent>
          <Typography className={styles.name} gutterBottom variant={'h6'} component={'div'}>
            {bookName}
          </Typography>
          <Typography gutterBottom variant={'subtitle1'} component={'div'}>
            {author}
          </Typography>
          <Typography className={styles.description} variant={'body2'} color={'text.secondary'}>
            {description}
          </Typography>
          <span className={styles.price}>${price}</span>
          <div className={styles.invisButton}>
            <span>${price}</span>
            <Button sx={{ fontWeight: 'bold' }} size='small'>
              Add to Basket
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default CDCard;
