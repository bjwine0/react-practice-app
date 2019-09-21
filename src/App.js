import React from 'react';
//import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import Char from './Char/Char';
// functional component
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




//class-based component
class App extends React.Component {

  state = {
    username: '',
  }

  inputChangedHandler = (event) => {
    this.setState({username: event.target.value});
  }

  deleteCharHandler = (index)=> {
    const text = this.state.username.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({username: updatedText})
  }

  render() {
    const charList = this.state.username.split('').map((ch, index) => {
      return <Char character={ch} key={index} 
      clicked={() => this.deleteCharHandler(index)} />;

    });
    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <UserInput changed={this.inputChangedHandler} currentName={this.state.username} />
        <UserInput userName={this.state.username} />
        <UserOutput userName="Brad Output" />
        <UserOutput userName={this.state.username} />
        <p>{this.state.username}</p>
        <h1>hi</h1>
        <Validation inputLength={this.state.username.length} />
        {charList}
      </div>
    );
  }
}

export default App;

