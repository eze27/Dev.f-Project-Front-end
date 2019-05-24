import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import Home from './components/dasboard/Home';
const Logout = () => {
    localStorage.removeItem("appToken");

    return <Redirect to='/login'/>
}

export default [
    <React.Fragment key={"Routes"}>
        <Route exact path="/login" component={ Login } ></Route>
        <Route exact path="/signup" component={ SignUp} ></Route>
        <Route exact path="/logout" component={ Logout } ></Route>
        <Route exact path="/home" component={ Home } ></Route>
    </React.Fragment>
];