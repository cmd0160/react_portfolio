import React from 'react'
import './App.css'
import Home from './components/Home.js'
import Nav from './components/Nav'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Nav />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App