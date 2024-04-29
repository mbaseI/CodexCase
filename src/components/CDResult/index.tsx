import { Book } from '../../types';
import styles from './style.module.scss';

const CDResult: React.FC<Book> = ({ author, bookName, price, image }) => {
  return (
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
  );
};

export default CDResult;
