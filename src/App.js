// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component{

  state ={
    userName : "Ranjan"
  }

  nameChangeHandler = (event) => {
    this.setState({userName :event.target.value});
  }

  render(){
    return (
      <div className="App">
        <h1>React App!!!</h1>
        <UserInput nameChange= {this.nameChangeHandler} currentName={this.state.userName}/>
        <UserOutput name={this.state.userName}/>
        <UserOutput name='Tora'/>
      </div>
    );
  }


}

export default App;
