import './Zeroing.css'
import './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile'
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Header />
              <Navbar />
              <div>
                  <Routes>
                      <Route path="/" element={<Profile/>}/>
                      <Route path="/dialogs" element={<Dialogs/>}/>
                      <Route path="/news" element={<News/>}/>
                      <Route path="/music" element={<Music/>}/>
                      <Route path="/settings" element={<Settings/>}/>
                  </Routes>
              </div>
          </div>
      </BrowserRouter>



  );
}

export default App;
