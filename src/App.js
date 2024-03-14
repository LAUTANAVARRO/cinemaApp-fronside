
import React, {useEffect, useState} from 'react';
import {getCinemas} from '../src/funcionalidades.js'
import ElementosCinema  from './components/ElementosCinema.js';
import NavBarBoostrap from './components/NavBar.js';
import SpinnerComponent from './components/SpinnerComponent.js';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';




function App() {
  const [cinemas, setCinemas] = useState([])

  
  useEffect(()=>{
    async function fetch(){
      setCinemas(await getCinemas())
      
    }
    fetch()
  }, [])
  

  return (
      <div className='containterItems'>
        <NavBarBoostrap></NavBarBoostrap>
        <ElementosCinema cinemas={cinemas}></ElementosCinema>
      </div>

 


  );
}

export default App;
