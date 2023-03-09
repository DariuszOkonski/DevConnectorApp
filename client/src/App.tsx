import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import './css/index.css';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <div className='App'>
      <Navigation />
      {/* <Home /> */}
      <div className='container'>
        <SignIn />
        {/* <SignUp /> */}
      </div>
    </div>
  );
}

export default App;
