import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

import Home from './Home';
class App extends React.Component {
  // constructor(){
  //   super();
  //   console.log("code inside constructor")
  // }
  state = {
    users: []
  }
  // shouldComponentUpdate(){
  //   console.log("code inside should Component Update");
  //   return true;
  // }

  componentDidUpdate() {
    console.log("code inside component did update");
  }

  // componentDidMount(){
  //   axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
  //     this.setState({users:response.data})
  //     //console.log(response.data);
  //   }).catch((err)=>{
  //     console.log(err)
  //   })

  // console.log("code inside did mount")
  //}

  /**
    state = {
      val: 0
    }
  
    increment = () => {
      this.setState((previousState) => {
        return { val: previousState.val + 1 }
      });
      this.setState((previousState) => {
        return { val: previousState.val + 1 }
      });
  
      this.setState({ val: this.state.val + 1 });
    }
  
    decrement = () => {
      //this.setState({ val: this.state.val - 1 })
  
      this.setState((previousState) => {
        return { val: previousState.val - 1 }
      })
  
      
      this.setState((previousState) => {
        return { val: previousState.val - 1 }
      })
    }
  
     */
  state = {
    val: 0
  }
  changeValue = () => {
    this.setState({ val: 1 })
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.val == nextState.val) {
      return false;
    } else {
      console.log("code inside should component update")
      return true;
    }
  }

  render() {
    console.log("code inside render function")
    return (
      <>
        <h2>
          Hellow from App Component
        </h2>
        <p>
          {this.state.val}
        </p>
        <button onClick={this.changeValue}> change Value</button>
        <Home val ={this.state.val}/>
        {/* {this.state.users.map((user,i)=>{
         return  <p key={i}>{user.name} </p>
        })} */}


        {/* <button onClick={this.decrement}>-</button>{this.state.val}<button onClick={this.increment}>+</button> */}
      </>
    )
  }
}
export default App;
