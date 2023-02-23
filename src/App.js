import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Calculator from './Components/Calculator';
import Home from './Components/Home';
import Quote from './Components/Quote';

import './css/App.css';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Calculator" element={<Calculator />} />
      <Route path="/Quote" element={<Quote />} />
    </Routes>
  </div>
);

export default App;
