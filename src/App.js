import React from 'react';
import logo from './logo.svg';
import './App.css';
import Page3 from './pages/Page3'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';



class SampleClassComponent extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: "Keyla, Anthony, Omar, Jonathan"
    }
  }
changeName=()=> {
  this.setState({
    name: "Who-Help"
  })
}


  render() {
  return <div>You are not alone {this.props.value} live chats avialable;
  <div>Members: {this.state.name}</div>
  <button onClick={this.changeName}>Team Name</button>
  </div>
  }
}

function Page1 (props) {
  return <div>Page 1</div>
}
function Page2 (props) {
  return <div>Page 2</div>
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
    
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Team: Who-Help
        </a>
        <Router>
          <Switch>
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
        <Route component={SampleClassComponent} />
        </Switch>

        </Router>
      </header>
    </div>
  );
}

export default App;
