import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <ToastContainer autoClose={1000} limit={3} />
      </BrowserRouter>
    </div>
  );
}
