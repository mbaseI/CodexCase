import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import styles from './style.module.scss';

const CDCard = () => {
  return (
    <Card className={styles.card}>
      <CardMedia
        component={'img'}
        alt={'book'}
        height={'210'}
        image={
          'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
        }
      />
      <CardContent>
        <Typography gutterBottom variant={'h5'} component={'div'}>
          Book
        </Typography>
        <Typography variant={'body2'} color={'text.secondary'}>
          Book Description
        </Typography>
      </CardContent>
      <CardActions>
        <Button size={'small'}>Share</Button>
      </CardActions>
    </Card>
  );
};

export default CDCard;
