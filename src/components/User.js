import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";

export default class User extends Component {

    state = {}

    handleDelete = () => {
        axios.delete('users/' + this.props.user.id)
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
        localStorage.clear()
        this.props.setUser(null);
    };

    handleSubimit = e => {
        e.preventDefault();
        const data = {
            username: this.username,
            email: this.email,
            cpf: this.cpf,
            pis: this.pis,
            password: this.password
        }

        axios.put('users/' + this.props.user.id, data)
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

        if (this.props.user) {
            this.username = this.props.user.username
            this.email = this.props.user.email
            this.cpf = this.props.user.cpf
            this.pis = this.props.user.pis
            this.password = this.props.user.password
            return (
                <form onSubmit={this.handleSubimit}>
                    <h3>Dados do Usuário</h3>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Nome</label>
                            <input type="text" className="form-control" placeholder="Nome" defaultValue={this.props.user.username}
                                onChange={e => this.username = e.target.value} />
                        </div>

                        <div className="form-group col-md-6">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Email" defaultValue={this.props.user.email}
                                onChange={e => this.email = e.target.value} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>CPF</label>
                            <input type="text" className="form-control" placeholder="CPF" defaultValue={this.props.user.cpf}
                                onChange={e => this.cpf = e.target.value} />
                        </div>

                        <div className="form-group col-md-6">
                            <label>PIS</label>
                            <input type="text" className="form-control" placeholder="PIS" defaultValue={this.props.user.pis}
                                onChange={e => this.pis = e.target.value} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Nova senha</label>
                        <input type="password" className="form-control" placeholder="Senha"
                            onChange={e => this.password = e.target.value} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block" type="submit">Atualizar</button>
                    </div>
                    <div className="form-group">
                        <Link className="nav-link" to={"/"} onClick={this.handleDelete} type="button">Deletar conta</Link>
                    </div>
                </form>
            )
        }

        return (
            <h2> Olá, visitante</h2>
        )
    }
}
