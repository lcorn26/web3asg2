import './App.css';
import React, { useEffect, useState, useReducer} from 'react'
import { Routings } from './Routes/Routes';
import axios from 'axios'

const checkHealthReducer = (state, action) => {
  switch (action.type) {
      case "INIT":
          return {
              ...state,
              isLoading: true,
              isError: false
          }
      case "SUCCESS":
          return {
              ...state,
              isLoading: false,
              isError: false,
              data: action.payload
          }
      case "FAILURE":
          return {
              ...state,
              isLoading: false,
              isError: true
          }
      default:
          throw new Error()
  }
}

function App() {
  const [checkHealth, setCheckHealth] = useState(false)
    const [state, dispatch] = useReducer(checkHealthReducer, {
        isLoading: false,
        isError: false,
        data: {"status":""}
    })

    useEffect(() => {
        const callCheckHealth = async () => {
            dispatch({
                type: "INIT"
            })
            try {
                const url = "https://web3asg2-334906.uw.r.appspot.com/"
                const headers = {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
                const res = await axios(url)
                console.log("Health status from backend---",res.data)
                dispatch({
                    type: 'SUCCESS',
                    payload: res.data
                })
                setCheckHealth(false)
            }
            catch (err) {
                dispatch({
                    type: 'FAILURE'
                })
            }

        }
        if (checkHealth) {
            callCheckHealth()
        }

    }, [checkHealth])

  const handleCheckHealthButton = () =>{
    setCheckHealth(true)
  }

  return (
    <div className="App">
     <Routings/>
    </div>
  );
}

export default App;

