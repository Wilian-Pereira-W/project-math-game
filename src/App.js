import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import '../src/styles/global.scss'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
