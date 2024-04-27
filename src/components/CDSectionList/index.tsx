import { Section } from '../../types';
import styles from './style.module.scss';

type SectionListProps = {
  sections: Section[];
  onClick: (value: any) => void;
  selected: string;
};

const CDSectionList: React.FC<SectionListProps> = ({ sections, onClick, selected }) => {
  return (
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
  );
};

export default CDSectionList;
