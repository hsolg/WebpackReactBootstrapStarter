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
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Application</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Page 1 <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Page 2</a>
                            </li>
                        </ul>
                        <span className="nav-item">
                            <a href="/login" onClick={() => {this.logOut()}}>Logout</a>
                        </span>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Application
