import * as React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import {IUser} from './user'
/* import Child from './Child';
import Context from './MessageContext';
import Sibling from './Sibling'; */

import About from './About';
import Home from './Home';
import Users from './Users';

interface IState {
  userArr: {};
}

class App extends React.Component<{}, IState> {
  public state: IState = {
    userArr: {
      0: { name: 'Ernesto', age: '56', occupation: 'retired gardener', description: 'bad at gardening', userId: 0 },
      1: { name: 'Wallace', age: '36', occupation: 'dogwalker', description: 'walks cats in his free time', userId: 1 },
      2: { name: 'Fabio', age: '23', occupation: 'student', description: 'trying to pay off debt and drink boba', userId: 2 }
    }
  }

  public updateUser = (userId: number, data: IUser) => {
    // find a way to update just the user object 
    this.setState(state => {
      return {
        ...state,
        userArr: {
          ...state.userArr,
          [userId]: data
        }
      };
    });
  }

  public render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route
            path="/users"
            render={props => <Users {...props} users={this.state.userArr} updateUser={this.updateUser} />} />
        </Switch>
      </div>
    );
  }
}
  /* public render() {
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
 */
export default App;
