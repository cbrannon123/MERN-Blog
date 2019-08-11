import React, { Component } from 'react';
import './App.css';
import SignUpPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage'
import IndexPage from '../IndexPage/IndexPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import userService from '../../utils/userService';
import CreatePage from '../CreatePage/CreatePage';
import ShowPage from '../ShowPage/ShowPage';
import EditPage from '../EditPage/EditPage';


class App extends Component {
    constructor() {
        super();
        this.state = {
            user: userService.getUser()
        }
    }

    handleSignupOrLogin = () => {
        this.setState({ user: userService.getUser() });
        console.log(this.state.user);
    };

    handleLogOut = () => {
        userService.logout();
        this.setState({ user: null });
        console.log(this.state.user);
    };

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' render={() =>
                        <IndexPage
                            user={this.state.user}
                            handleLogOut={this.handleLogOut}
                        />
                    } />
                    <Route exact path='/create' render={({ history }) =>
                        userService.getUser() ?
                        <CreatePage
                            history={history}
                        />
                        :
                        <Redirect to={'/login'} />
                    } />
                    <Route exact path='/posts/:id' render={({ history, ...props}) =>
                        <ShowPage
                            {...props}
                            history={history}
                        />
                    } />
                    <Route exact path='/posts/:id/edit' render={({ history, ...props}) =>
                        userService.getUser() ?
                        <EditPage
                            {...props}
                            history={history}
                        />
                        :
                        <Redirect to={'/login'} />
                    } />
                    <Route exact path="/signup" render={props => (
                        <SignUpPage
                            {...props}
                            handleSignupOrLogin={this.handleSignupOrLogin}
                        />
                    )}
                    />
                    <Route
                        exact
                        path="/login"
                        render={props => (
                            <LoginPage
                                {...props}
                                handleSignupOrLogin={this.handleSignupOrLogin}
                            />
                        )}
                    />
                </Switch>
            </div>
        );
    }
}


export default App;
