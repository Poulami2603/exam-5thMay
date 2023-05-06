import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Context} from './Pages/Context';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Details from './Pages/Details';

function App() {
  return (
    <>
     <Context>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:id' element={<Details/>}/>
        </Routes>
      </Router>
     </Context>
    </>
  );
}

export default App;
