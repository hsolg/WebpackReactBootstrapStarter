import React from 'react'
import fetch from 'cross-fetch'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    componentDidMount() {
        fetch("/apiServerUrl", {method: 'GET'})
            .then(response => {
                response.json()
                    .then(json => this.setState({apiServerUrl: json.url}))
            })
    }

    expirationTime() {
        return new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 365))
    }

    authenticateUser() {
        if (this.state.apiServerUrl) {
            const requestOptions == {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            }
            fetch(this.state.apiServerUrl + "/authenticate", requestOptions)
                .then(response => {
                    if (response.status == 200) {
                        response.json().then(json => {
                            window.localStorage.setItem('jwtToken', json.token)
                            const expirationTime = this.expirationTime().toUTCString()
                            document.cookie = `jwt=${json.token}; expires=${expirationTime}; path=/`
                            window.location.href = '/'
                        })
                    }
                })
        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <input type="text" value={this.state.username} onChange={e => {this.setState({username: e.target.value})}}/>
                <input type="text" value={this.state.password} onChange={e => {this.setState({password: e.target.value})}}/>
                <button onClick={() => {this.authenticateUser()}}>Login</button>
            </div>
        )
    }
}

export default Login
