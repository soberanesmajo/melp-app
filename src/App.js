import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Cards from './Components/Cards/Cards';
//import Data from './data_melp.json';
import './App.css';

class App extends Component {

  // gettingData = (Data) =>{
  //   console.log(Data);
    
  // }

  
  render() {
    //this.gettingData(Data)
    return (
      <div className="App">
        <Header />
        <Cards />
      </div>
    );
  }
}

export default App;
