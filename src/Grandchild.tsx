import * as React from 'react';
import Context from './MessageContext';

class Grandchild extends React.Component {
  public ref = React.createRef<HTMLInputElement>();
  public render() {
    return (
      <Context.Consumer>
        {({ message, updateMessage }) => (
          <div>
            <input ref={this.ref} defaultValue={message} />
            <button onClick={this.handleClick(updateMessage)}>Update message</button>
          </div>
        )}
      </Context.Consumer>
    );
  }

  private handleClick = (updateMessage: (nextMessage: string) => void) =>
    (event: React.FormEvent<HTMLButtonElement>) => {
      event.preventDefault();
      const { current: input } = this.ref;
      if (!input) {
        return;
      }
      updateMessage(input.value);
    };
}

export default Grandchild;
