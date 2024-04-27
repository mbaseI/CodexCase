import { useEffect, useState } from 'react';
import { getAllBooks, setLoading } from './actions';
import { makeSelectBooks, makeSelectLoading } from './selector';
import { useDispatch } from 'react-redux';
import { Skeleton } from '@mui/material';
import Slider from 'react-slick';
import styles from './style.module.scss';
import { Book, Section } from '../../types';
import { useAppSelector } from '../../config/hooks';
import Layout from '../../components/Layout';
import CDCard from '../../components/CDCard';
import CDSectionList from '../../components/CDSectionList';

const Home = () => {
  const dispatch = useDispatch();
  const booksData = useAppSelector(makeSelectBooks());
  const loadingStatus = useAppSelector(makeSelectLoading());

  const [section, setSection] = useState('isBestSeller' as keyof Book);

  const sections: Section[] = [
    {
      value: 'isBestSeller',
      label: 'Best Seller',
    },
    {
      value: 'isOnSale',
      label: 'On Sale',
    },
    {
      value: 'isNewRelease',
      label: 'New Release',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  let data = booksData.filter((item: Book) => item[section]);

  const sectionFilterClick = (value: keyof Book) => {
    dispatch(setLoading(true));
    setSection(value);
    setTimeout(() => {
      data = booksData.filter((item: Book) => item[section]);
      dispatch(setLoading(false));
    }, 500);
  };

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <div className={styles.sectionListWrapper}>
          <CDSectionList onClick={sectionFilterClick} sections={sections} selected={section} />
        </div>
        {loadingStatus ? (
          <Skeleton
            variant={'rectangular'}
            animation={'wave'}
            height={425}
            width={'100%'}
            sx={{ borderRadius: 5 }}
          />
        ) : (
          <Slider className={styles.slide} {...settings}>
            {data?.map((item: Book) => (
              <div key={2} className={styles.cardWrapper}>
                <CDCard
                  bookName={item.bookName}
                  image={item.image}
                  description={item.description}
                  author={item.author}
                  price={item.price}
                />
              </div>
            ))}
          </Slider>
        )}
      </Layout>
    </>
  );
};

export default Home;
