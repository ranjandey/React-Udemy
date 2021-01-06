// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';


class App extends Component{

  state ={
    userName : ""
  }

  // nameChangeHandler = (event) => {
  //   this.setState({userName :event.target.value});
  // }

  inputLengthHandler = (event) =>{
    this.setState({userName : event.target.value});
  }

  deleteCharHandler =(index) =>{
    const text = this.state.userName.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({userName : updatedText})
  }


  render(){
    const charList = this.state.userName.split('').map((ch, index) => {
      return <CharComponent character ={ch}  key ={index}
      clicked ={() => this.deleteCharHandler(index)}/>;
    });
    return (
      <div className="App">
        <h1>React App!!!</h1>
        <input type ="text" onChange ={this.inputLengthHandler}/><hr/>
        <p>{this.state.userName} : {this.state.userName.length}</p>
        <ValidationComponent inputLength = {this.state.userName.length}/>
        {charList}
     



         {/* <UserInput nameChange= {this.nameChangeHandler} currentName={this.state.userName}/>
        // <UserOutput name={this.state.userName}/>
        // <UserOutput name='Tora'/> */}
      </div>
    );
  }


}

export default App;
