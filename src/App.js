import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './Components/Pages/Authentication/Login';
import Signup from './Components/Pages/Authentication/Signup';
import Blogs from './Components/Pages/Blogs/Blogs';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Home from './Components/Pages/Home/Home';
import MyPortfolio from './Components/Pages/My Portfolio/MyPortfolio';
import ErrorPage from './Components/Shared/ErrorPage';
import Header from './Components/Shared/Header';
function App() {
  return (
    <div>
      <Header />
      <div className=''>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/myportfolio' element={<MyPortfolio />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </div>
  );
}

export default App;
