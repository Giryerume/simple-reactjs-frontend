import { Component } from "react";

export default class Home extends Component {

    render() {

        if (this.props.user) {
            return (
                <h2>Olá, {this.props.user.username}!</h2>
            )
        }

        return (
            <h2> Olá, visitante</h2>
        )
    }
}
