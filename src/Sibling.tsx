import * as React from 'react';
import Context from './MessageContext';

const Sibling: React.SFC = ({ children }) => (
  <div>
    <header className="App-header">
    <Context.Consumer>
      {({ message }) => (
        <h1 className="App-title">{message}</h1>
      )}
    </Context.Consumer>
    </header>
  </div>
);

export default Sibling;
