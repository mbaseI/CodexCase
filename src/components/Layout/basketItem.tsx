import { Book } from '../../types';
import styles from './style.module.scss';

interface BasketItemProps extends Book {
  increaseClick: (id: string) => void;
  decreaseClick: (id: string) => void;
}

const BasketItem: React.FC<BasketItemProps> = ({ increaseClick, decreaseClick, ...item }) => {
  return (
    <div key={item.id} className={styles.basket}>
      <img src={item.image} alt={'item'} />
      <div className={styles.basketItemContent}>
        <div>{item.bookName}</div>
        <div className={styles.bottom}>
          <div className={styles.counter}>
            <div className={styles.decButton} onClick={() => decreaseClick(item.id!)}>
              -
            </div>
            <div className={styles.count}>{item.count}</div>
            <div className={styles.incButton} onClick={() => increaseClick(item.id!)}>
              +
            </div>
          </div>
          <div className={styles.s}>
            <div>Price: ${item.count ? item.count * Number(item.price) : 15}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
