import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import styles from './style.module.scss';
import { Book } from '../../types';
import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

interface CDCardProps extends Book {
  onButtonClick?: MouseEventHandler<HTMLButtonElement>;
}

const CDCard: React.FC<CDCardProps> = ({
  author,
  description,
  price,
  image,
  bookName,
  id,
  onButtonClick,
}) => {
  return (
    <>
      <Card className={styles.card}>
        <Link style={{ textDecoration: 'none' }} to={`/detail/${id}`}>
          <CardContent>
            <CardMedia component={'img'} alt={'book'} height={'180'} image={image} />
            <Typography className={styles.name} gutterBottom variant={'h6'} component={'div'}>
              {bookName}
            </Typography>
            <Typography gutterBottom variant={'subtitle1'} component={'div'}>
              {author}
            </Typography>
            <Typography className={styles.description} variant={'body2'} color={'text.secondary'}>
              {description}
            </Typography>
            <span>${price}</span>
          </CardContent>
        </Link>
        <div className={styles.invisButton}>
          <span>${price}</span>
          <Button onClick={onButtonClick} sx={{ fontWeight: 'bold' }} size='small'>
            Add to Basket
          </Button>
        </div>
      </Card>
    </>
  );
};

export default CDCard;
