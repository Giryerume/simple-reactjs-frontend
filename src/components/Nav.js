import { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {

    handleLoggout = () => {
        localStorage.clear()
        this.props.setUser(null);
    };

    render() {

        let buttons;

        if (this.props.user) {
            buttons = (<ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to={'/'} onClick={this.handleLoggout}>Sair</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={'/user'} ><b>{this.props.user.username}</b></Link>
                </li>
            </ul>)

        } else {
            buttons = (<ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to={'/login'}>Entrar</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={'/register'}>Cadastre-se</Link>
                </li>
            </ul>)
        }

        return (
            <nav className="navbar navbar-expand navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={'/'}>Inicio</Link>
                    <div className="collapse navbar-collapse">
                        {buttons}
                    </div>
                </div>
            </nav>
        )
    }
}