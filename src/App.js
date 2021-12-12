import './App.css';
import { Routings } from './Routes/Routes';
import React, { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {apiResponse: "" }
  }
  callAPI() {
      fetch("https://web3asg2-334911.uc.r.appspot.com/api/list")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res}))
      .catch(err => err);

  }


  componentDidMount() {
    this.callAPI();
  }

  render() {
  return (
    <div className="App">
     <Routings/>
     <p>{this.state.apiResponse}</p>
    </div>
  );
  }
}
  
export default App;

