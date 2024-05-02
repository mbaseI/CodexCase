import { Book } from '../../types';
import styles from './style.module.scss';

interface BasketItemProps extends Book {
  increaseClick: (id: keyof Book) => void;
  decreaseClick: (id: keyof Book) => void;
}

const BasketItem: React.FC<BasketItemProps> = ({ increaseClick, decreaseClick, ...item }) => {
  return (
    <div key={item.id} className={styles.basketItem}>
      <img src={item.image} alt={'item'} />
      <div className={styles.basketItemContent}>
        <div>{item.bookName}</div>
        <div className={styles.bottom}>
          <div className={styles.counter}>
            <div className={styles.decButton} onClick={() => decreaseClick(item.id as keyof Book)}>
              -
            </div>
            <div className={styles.count}>{item.count}</div>
            <div className={styles.incButton} onClick={() => increaseClick(item.id as keyof Book)}>
              +
            </div>
          </div>
          <div className={styles.s}>
            <div>Price: ${item.count && item.count * Number(item.price)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
