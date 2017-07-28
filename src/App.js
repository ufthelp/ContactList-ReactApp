import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//Creating our own component 
class ContactList extends Component{
  //our render method
  render(){
      //array of contact list
      const people = this.props.people
    return(
        <ol>
           {people.map((person,index) =>
              <li key={index}>{person.name}</li>
         )}
        </ol>
    )
  }

}
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to ContactList App</h2>
        </div>
        <ContactList people={[
                              { name : "Rion"},
                              { name : "Roy" },
                              { name : "Ron" }
                            ]}
        />
         <ContactList people={[
                              { name : "More"},
                              { name : "Mor" },
                              { name : "Mori" }
                            ]}
        />
      </div>
    );
  }
}

export default App;
