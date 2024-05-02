import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardMedia, Hidden, Typography } from '@mui/material';
import { Book } from '../../types';
import styles from './style.module.scss';
interface CDCardProps extends Book {
  onButtonClick?: MouseEventHandler<HTMLButtonElement>;
}

const CDCard: React.FC<CDCardProps> = ({ ...props }) => {
  return (
    <>
      <Card className={styles.card}>
        <CardContent>
          <Link style={{ textDecoration: 'none' }} to={`/detail/${props.bookName}/${props.id}`}>
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
            {props.isOnSale ? (
              <div className={styles.onSale}>
                <span>${props.price}</span>
                <span>${Number(props.price) / 2}</span>
              </div>
            ) : (
              <span>${props.price}</span>
            )}
          </Link>
          <Hidden mdUp>
            <Button
              variant='contained'
              onClick={props.onButtonClick}
              sx={{ fontWeight: 'bold', marginTop: '10px' }}
              size='small'
            >
              Add to Basket
            </Button>
          </Hidden>
        </CardContent>

        <Hidden mdDown>
          <div className={styles.invisButton}>
            <span>${props.isOnSale ? Number(props.price) / 2 : props.price}</span>
            <Button onClick={props.onButtonClick} sx={{ fontWeight: 'bold' }} size='small'>
              Add to Basket
            </Button>
          </div>
        </Hidden>
      </Card>
    </>
  );
};

export default CDCard;
