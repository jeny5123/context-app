import * as React from 'react';
import { IUser } from './user'

interface UserContext {
    updateUser: (userId: number, data: IUser) => void;
}

const Context = React.createContext<UserContext>({
    updateUser: () => undefined,
});