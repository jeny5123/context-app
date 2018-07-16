import * as React from 'react';
import { IUser } from './user'

interface IUserContext {
    updateUser: (userId: number, data: IUser) => void;
}

const Context = React.createContext<IUserContext>({
    updateUser: () => undefined,
});

export default Context;