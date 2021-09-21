//https://www.freecodecamp.org/learn/front-end-libraries/react/use-a-ternary-expression-for-conditional-rendering
const inputStyle = {
    width: 235,
    margin: 5
  };
  
  class CheckUserAge extends React.Component {
    constructor(props) {
      super(props);
      // Setting a property called 'state'
      this.state = {
        input:'',
        userAge:''
      }
      this.submit = this.submit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
      this.setState({
        input: e.target.value,
        userAge: ''
      });
    }
    submit() {
      this.setState(state => ({
        userAge: state.input
      }));
    }
    render() {
      const buttonOne = <button onClick={this.submit}>Submit</button>;
      const buttonTwo = <button>You May Enter</button>;
      const buttonThree = <button>You Shall Not Pass</button>;
      return (
        <div>
          <h3>Enter Your Age to Continue</h3>
          <input
            style={inputStyle}
            type='number'
            value={this.state.input}
            onChange={this.handleChange}
          />
          <br />
          {/* if the userAge is empty, render buttonOne
          Otherwise, if the user age is greater than 18 then render buttonTwo, otherwise render buttonThree.
          Notice how we are referencing the values in our HTML using this.state */}
            {
            this.state.userAge === ''
              ? buttonOne
              : this.state.userAge >= 18
                ? buttonTwo
                : buttonThree
            }
        </div>
      );
    }
  }