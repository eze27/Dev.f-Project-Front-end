import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Input } from '../../common/Input';

const LOGIN = gql`
    mutation LOGIN($email:String!, $password:String!){
        login(email:$email, password:$password){
            token
        }
    }
`

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleInput = (e) => {
        const { id, value } = e.target

        this.setState({
            [id]: value
        })
    }

    hanldeForm = (e, login) => {
        console.log(login)
        e.preventDefault();
        login({ variables: { ...this.state } })
    }

    catchData = (data) => {
        const { token } = data.login;
        localStorage.setItem("appToken", token);
        this.props.history.push('/');
    }

    catchError = (error) => {
        console.log(error)
    }

    render() {
        return (
            <Mutation mutation={LOGIN}>
                {
                    (login, { data, error, loading }) => {
                        if (data) this.catchData(data)
                        if (error) this.catchError(error)
                        return (
                            <div className="container-fluid">
                                <div className="row">
                                    <form onSubmit={e => this.hanldeForm(e, login)}>
                                        <Input
                                            type="email"
                                            id="email"
                                            name="Email"
                                            value={this.state.email}
                                            setInput={this.handleInput}
                                            required
                                        />
                                        <Input
                                                type="password"
                                                id="password"
                                                name="Passwrod"
                                                value={this.state.password}
                                                setInput={this.handleInput}
                                                required
                                        />

                                        
                                        <button type="submit" className="btn btn-success">
                                            Iniciar Sesion
                                </button>
                                    </form>
                                </div>
                            </div>
                        )
                    }
                }
            </Mutation>
        );
    }
}

export default Login;