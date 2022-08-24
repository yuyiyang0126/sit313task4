import React from 'react';
import './App.css';
import Header from './Header'
import CardList from './CardList'
import TutoList from './TutoList'
import { Route, Routes } from "react-router-dom"
import Display from './Image'
import SmallHeader1 from'./SmallHeader1'
import SmallHeader2 from'./SmallHeader2'
import Subscribe from './contactForm'
import Footer from './footer'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
        </Routes>
        <Display/>
      </div>
        <SmallHeader1/>
        <CardList />
        <SmallHeader2/>
        <TutoList />
        <br></br><br></br>  
        <div className="container2">
        <Subscribe/>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <Footer/>

       
  </>
  )
}
export default App;
