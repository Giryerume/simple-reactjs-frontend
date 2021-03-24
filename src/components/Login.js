import axios from "axios";
import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class Login extends Component {

    state = {}

    handleSubimit = e => {
        e.preventDefault();


        const params = new URLSearchParams()
        params.append('username', this.username)
        params.append('password', this.password)

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        axios.post('token', params, config)
            .then(res => {
                localStorage.setItem('token', res.data.access_token)
                this.setState({
                    loggenIn: true
                });
                this.props.setUser(res.data.user);
            })
            .catch(err => {
                this.setState({
                    message: err.response.data.detail
                });
            })
    };

    render() {

        if (this.state.loggenIn) {
            return <Redirect to={'/'} />;
        }

        let error = '';

        if (this.state.message) {
            error = (
                <div className="alert alert-danger" role="alert">
                    {this.state.message}
                </div>
            )
        }

        return (
            <form onSubmit={this.handleSubimit}>

                {error}
                <h3>Login</h3>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email, CPF ou PIS"
                        onChange={e => this.username = e.target.value} />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Senha"
                        onChange={e => this.password = e.target.value} />
                </div>

                <button className="btn btn-primary btn-block">Entrar</button>
                <Link className="nav-link" to={'/register'}>Cadastre-se</Link>
            </form>

        )
    }
}
