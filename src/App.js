import './App.css';
import React, { useEffect, useState, useReducer} from 'react'
import { Routings } from './Routes/Routes';
import axios from 'axios'


function App() {
  
    useEffect(() => {
        const call = async () => {
            try {
                const url = "https://web3asg2-334906.uw.r.appspot.com/api/list"
                const res = await axios(url)
                console.log(res.data)
              
            }
            catch (err) {
                
            }

        }
        

    }, [checkHealth])


  return (
    <div className="App">
      { App() }
     <Routings/>
    </div>
  );
}

export default App;

