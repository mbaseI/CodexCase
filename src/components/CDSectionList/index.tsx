import { Book, Section } from '../../types';
import styles from './style.module.scss';

type SectionListProps = {
  sections: Section[];
  onClick: (value: keyof Book) => void;
  selected: string;
  category: string;
};

const CDSectionList: React.FC<SectionListProps> = ({ ...props }) => {
  return (
    <>
      <div className={styles.sectionListWrapper}>
        <div className={styles.category}>{props.category}</div>
        <div className={styles.sectionList}>
          {props.sections.map((item: Section) => (
            <span
              className={props.selected === item.value ? styles.selected : ''}
              onClick={() => props.onClick(item.value as keyof Book)}
              key={item.value}
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default CDSectionList;
