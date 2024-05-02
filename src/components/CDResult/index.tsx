import { Link } from 'react-router-dom';
import { Book } from '../../types';
import styles from './style.module.scss';

const CDResult: React.FC<Book> = ({ ...props }) => {
  return (
    <Link
      reloadDocument
      style={{ textDecoration: 'none' }}
      to={{ pathname: `/detail/${props.bookName}/${props.id}` }}
    >
      <div className={styles.result}>
        <div className={styles.leftSecion}>
          <img src={props.image} alt={'item'} />
          <div className={styles.infos}>
            <div>{props.author}</div>
            <div>{props.bookName}</div>
          </div>
        </div>
        <div className={styles.price}>${props.price}</div>
      </div>
    </Link>
  );
};

export default CDResult;
