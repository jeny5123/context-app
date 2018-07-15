import * as React from 'react';

interface IMessageContext {
  message: string;
  updateMessage: (nextMessage: string) => void;
}

const Context = React.createContext<IMessageContext>({
  message: '',
  updateMessage: () => undefined,
});

export default Context;
