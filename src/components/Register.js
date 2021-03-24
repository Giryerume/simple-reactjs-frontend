import axios from "axios";
import { Component } from "react";

export default class Register extends Component {

    state = {}

    handleSubimit = e => {
        e.preventDefault();
        const data = {
            username: this.username,
            email: this.email,
            cpf: this.cpf,
            pis: this.pis,
            password: this.password
        }

        axios.post('users', data)
            .then(res => {
                this.setState({
                    success: res
                });
            })
            .catch(err => {
                this.setState({
                    error: err.response.data.detail
                });
            })
    };

    render() {

        let message = '';

        if (this.state.error) {
            message = (
                <div className="alert alert-danger" role="alert">
                    {this.state.error}
                </div>
            )
        }

        if (this.state.success) {
            message = (
                <div className="alert alert-success" role="alert">
                    Usuário cadastrado!
                </div>
            )
        }

        return (
            <form onSubmit={this.handleSubimit}>

                {message}
                <h3>Cadastro</h3>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Nome"
                        onChange={e => this.username = e.target.value} />
                </div>

                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email"
                        onChange={e => this.email = e.target.value} />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="CPF"
                        onChange={e => this.cpf = e.target.value} />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="PIS"
                        onChange={e => this.pis = e.target.value} />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Senha"
                        onChange={e => this.password = e.target.value} />
                </div>

                <button className="btn btn-primary btn-block" type="submit">Cadastrar</button>
            </form>
        )
    }
}
