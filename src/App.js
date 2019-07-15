import React from 'react'
import logo from './logo.svg'
import './App.css'
import UserBoard from './components/UserBoard'
import Clock from './components/Clock'

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Clock />
      <h1 className ="App-title">Welcome to Codaisseur!</h1>
      <UserBoard />
    </div>
  );
}

export default App