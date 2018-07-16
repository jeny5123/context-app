import * as React from 'react';
import { Link, Route, RouteComponentProps } from 'react-router-dom';
import EditForm from './EditForm'
import { IUser } from './user'

interface IProps extends RouteComponentProps<{}> {
    users: {};
    updateUser: any;
}

const ListDisplay = (props: { users: {} }) => {
    const values = Object.keys(props.users).map(key => props.users[key]);
    return (
        <div>
            {values.map((user: IUser, i: number) =>
                <li
                    key={"user" + i}
                >
                    <Link
                        to={"/users/" + user.userId}
                    >
                        {user.name}
                    </Link>
                </li>
            )}
        </div>
    );
}

class Users extends React.Component<IProps, {}> {
    public render() {
        const values = Object.keys(this.props.users).map(key => this.props.users[key]);
        return (
            <div>
                <h1>Users</h1>
                <ListDisplay users={this.props.users} />
                <Route
                    path={`${this.props.match.path}/:userId`}
                    render={props => {
                        return (
                            <EditForm
                                key={`USER_ROUTE_${props.match.params.userId}`}
                                {...props}
                                updateUser={this.props.updateUser}
                                user={values.find((user: IUser) => {
                                    return user.userId.toString() === props.match.params.userId;
                                })!}
                            />
                        );
                    }}
                />
            </div >
        );
    }
};

export default Users;
