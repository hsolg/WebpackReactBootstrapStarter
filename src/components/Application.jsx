import React from 'react'

class Application extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    logOut() {
        window.localStorage.removeItem('jwtToken')
        document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/'
    }

    render() {
        return (
            <div>
                <h1>Application</h1>
                <img src="assets/png/test.png"/>
                <a href="/login" onClick={() => {this.logOut()}}>Logout</a>
            </div>
        )
    }
}

export default Application
