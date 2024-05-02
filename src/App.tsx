import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import { ToastContainer } from 'react-toastify';
import Detail from './pages/detail';
import Layout from './components/Layout';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:bookName/:id' element={<Detail />} />
          <Route
            path='*'
            element={
              <Layout>
                <div>Sorry, that page does not exist</div>
              </Layout>
            }
          />
        </Routes>
        <ToastContainer autoClose={1000} limit={3} />
      </BrowserRouter>
    </div>
  );
}
