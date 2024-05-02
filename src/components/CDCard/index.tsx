import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import styles from './style.module.scss';
import { Book } from '../../types';
import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

interface CDCardProps extends Book {
  onButtonClick?: MouseEventHandler<HTMLButtonElement>;
}

const CDCard: React.FC<CDCardProps> = ({ ...props }) => {
  return (
    <>
      <Card className={styles.card}>
        <Link style={{ textDecoration: 'none' }} to={`/detail/${props.bookName}/${props.id}`}>
          <CardContent>
            <CardMedia component={'img'} alt={'book'} height={'180'} image={props.image} />
            <Typography className={styles.name} gutterBottom variant={'h6'} component={'div'}>
              {props.bookName}
            </Typography>
            <Typography gutterBottom variant={'subtitle1'} component={'div'}>
              {props.author}
            </Typography>
            <Typography className={styles.description} variant={'body2'} color={'text.secondary'}>
              {props.description}
            </Typography>
            <span>${props.price}</span>
          </CardContent>
        </Link>
        <div className={styles.invisButton}>
          <span>${props.price}</span>
          <Button onClick={props.onButtonClick} sx={{ fontWeight: 'bold' }} size='small'>
            Add to Basket
          </Button>
        </div>
      </Card>
    </>
  );
};

export default CDCard;
