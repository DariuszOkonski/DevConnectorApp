import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import './css/index.css';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Developers from './pages/Developers/Developers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { endpoints } from './config/config.endpoints';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navigation />
        <Routes>
          <Route path={endpoints.home()} element={<Home />} />
        </Routes>
        <div className='container'>
          <Routes>
            <Route path={endpoints.login()} element={<SignIn />} />
            <Route path={endpoints.register()} element={<SignUp />} />
            <Route path={endpoints.developers()} element={<Developers />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
