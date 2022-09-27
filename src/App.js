import React from 'react';
import './styles/App.css'
import './styles/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import ThemeChanger from './components/UI/themeChanger/ThemeChanger';


const App = () => {
 return (
  // <BrowserRouter>
  //   <ThemeChanger/>
  //   <Posts/>
  //   <Routes>
  //     <Route path="posts" element={<Posts/>}/>
  //     <Route path="about" element={<About/>} />
  //   </Routes>
  // </BrowserRouter>
  <Posts/>
  );
}

export default App;
