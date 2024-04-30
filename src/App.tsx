import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import { ToastContainer } from 'react-toastify';
import Detail from './pages/detail';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='*' element={<div>asdasdas</div>} />
        </Routes>
        <ToastContainer autoClose={1000} limit={3} />
      </BrowserRouter>
    </div>
  );
}
