import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'tailwindcss/tailwind.css';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Service from './components/Service';
import Expertise from './components/Expertise';
function App() {

  return (
    <>
    <Header/>
    <Banner/>
    <About/>
    <Service/>
    <Expertise/>

    </>
  )
}

export default App
