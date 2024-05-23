
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';
import Home from './page/Home';
import About from './page/About';
import Daftar from './page/Daftar';
import Dash from './page/Dashboard';
import Expp from './page/Expp';
import PageView from './page/PageView';
import Pagenot from './page/Pagenot';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About  />}/>
          <Route path='/Daftar' element={<Daftar  />}/>
          <Route path='/dashboard' element={<Dash  />}/>
          <Route path='/explore' element={<Expp  />}/>
          <Route path='/view' element={<PageView  />}/>
          <Route path='/notifikasi' element={<Pagenot  />}/>
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
 