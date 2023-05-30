import './components/zeroing.css'
import './components/main.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile'


function App() {
  return (
  <div className='container'>
    <Header />
    <Navbar />
    <Profile />
  </div>
    
  );
}

export default App;
