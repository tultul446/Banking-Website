import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import HomePage from './Components/HomePage/index.jsx';
import AboutPage from './Components/AboutPage/index.jsx';
import CareersPage from './Components/CareersPage/index.jsx';
import LoginPage from './Components/LoginPage/index.jsx';
import SecurityPage from './Components/SecurityPage/index.jsx';
import SignUpPage from './Components/SignUpPage/index.jsx';
import { BrowserRouter } from 'react-router';




function App() {


  return (
    <>
  
    <BrowserRouter>
      <Routes>
      <Route path='/' element={ <HomePage/> }/>
      <Route path='/AboutPage' element={ <AboutPage/> }/>
      <Route path='/CareersPage' element={ <CareersPage/> }/>
      <Route path='/LoginPage' element={ <LoginPage/> }/>
      <Route path='/SecurityPage' element={ <SecurityPage/> }/>
      <Route path='/SignUpPage' element={ <SignUpPage/> }/>
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
