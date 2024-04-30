import { Link } from 'react-router-dom';
import { Book } from '../../types';
import styles from './style.module.scss';

const CDResult: React.FC<Book> = ({ author, bookName, price, image, id }) => {
  return (
    <Link reloadDocument style={{ textDecoration: 'none' }} to={{ pathname: `/detail/${id}` }}>
      <div className={styles.result}>
        <div className={styles.leftSecion}>
          <img src={image} alt={'item'} />
          <div className={styles.infos}>
            <div>{author}</div>
            <div>{bookName}</div>
          </div>
        </div>
        <div className={styles.price}>${price}</div>
      </div>
    </Link>
  );
};

export default CDResult;
