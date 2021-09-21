//https://www.freecodecamp.org/learn/front-end-libraries/react/use-array-map-to-dynamically-render-elements
import React, { Component } from 'react';

const textAreaStyles = {
    width: 235,
    margin: 5
  };
  
  class MyToDoList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        userInput: '',
        toDoList: []
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
      const itemsArray = this.state.userInput.split(',');
      this.setState({
        toDoList: itemsArray
      });
    }
    handleChange(e) {
      this.setState({
        userInput: e.target.value
      });
    }
    render() {
      // Loop over the toDoList array and for each item, returh a <li> with a key and the name of the item
      const items = this.state.toDoList.map((item,i) => <li key={i}>{item}</li>)
      return (
        <div>
          <textarea
            onChange={this.handleChange}
            value={this.state.userInput}
            style={textAreaStyles}
            placeholder='Separate Items With Commas'
          />
          <br />
          <button onClick={this.handleSubmit}>Create List</button>
          <h1>My "To Do" List:</h1>
          <ul>{items}</ul>
        </div>
      );
    }
  }

  export default MyToDoList;