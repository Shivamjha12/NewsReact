import './App.css';
import Navbar from './components/Navbar'
import React, { Component } from 'react'
import Newscomponent from './components/Newscomponent';

export default class App extends Component {
  c="Shivam Jha"
  render() {
    return (
      <div>
        <Navbar/>
        <p>The App is building by {this.c}</p>
        <Newscomponent/>
        </div>
    )
  }
}

