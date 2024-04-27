import { Section } from '../../types';
import styles from './style.module.scss';

type SectionListProps = {
  sections: Section[];
  onClick: (value: any) => void;
  selected: string;
  category: string;
};

const CDSectionList: React.FC<SectionListProps> = ({ sections, onClick, selected, category }) => {
  return (
    <>
      <div className={styles.sectionListWrapper}>
        <div className={styles.category}>{category}</div>
        <div className={styles.sectionList}>
          {sections.map((item: Section) => (
            <span
              className={selected === item.value ? styles.selected : ''}
              onClick={() => onClick(item.value)}
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
