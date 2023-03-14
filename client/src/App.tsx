import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import './css/index.css';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Developers from './pages/Developers/Developers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <div className='container'>
          <Routes>
            <Route path='/login' element={<SignIn />} />
            <Route path='/register' element={<SignUp />} />
            <Route path='/developers' element={<Developers />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
