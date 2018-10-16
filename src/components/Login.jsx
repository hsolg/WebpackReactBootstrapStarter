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
            const requestOptions = {
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
            <div className="col-12 col-md-4 offset-md-4">
                <h1>Login</h1>
                <form onSubmit={e => {this.authenticateUser(); e.preventDefault()}}>
                    <div className="form-group">
                        <label htmlFor="usernameInput">Username</label>
                        <input type="text" className="form-control" id="usernameInput" value={this.state.username} onChange={e => {this.setState({username: e.target.value})}}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Password</label>
                        <input type="password" className="form-control" id="passwordInput" value={this.state.password} onChange={e => {this.setState({password: e.target.value})}}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }
}

export default Login
