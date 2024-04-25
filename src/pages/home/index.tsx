import { setCount } from './actions';
import { useAppDispatch } from '../../config/hooks';

const Home = () => {
  const myDispatch = useAppDispatch();

  return <button onClick={() => myDispatch(setCount(5))}>+</button>;
};

export default Home;
