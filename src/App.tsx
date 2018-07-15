import * as React from 'react';
import './App.css';
import Child from './Child';
import Context from './MessageContext';
import Sibling from './Sibling';

interface IState {
  message: string;
}

// still trying to figure this out

// almost there?

// still confused ish 

//this is local branch 2

class App extends React.Component<{}, IState> {
  public state = {
    message: "Hello"
  }

  public render() {
    return (
      <div className="App">
        <Context.Provider value={{ message: this.state.message, updateMessage: this.updateMessage }}>
          <Sibling />
          <Child />
        </Context.Provider>
      </div>
    );
  }

  private updateMessage = (nextMessage: string) => this.setState(state => ({...state, message: nextMessage}));
}

export default App;
