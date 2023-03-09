import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import './css/index.css';
import SignIn from './pages/SignIn/SignIn';

function App() {
  return (
    <div className='App'>
      <Navigation />
      {/* <Home /> */}
      <div className='container'>
        <SignIn />
      </div>
    </div>
  );
}

export default App;
