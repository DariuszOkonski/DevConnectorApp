import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import './css/index.css';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Developers from './pages/Developers/Developers';

function App() {
  return (
    <div className='App'>
      <Navigation />
      {/* <Home /> */}
      <div className='container'>
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        <Developers />
      </div>
    </div>
  );
}

export default App;
