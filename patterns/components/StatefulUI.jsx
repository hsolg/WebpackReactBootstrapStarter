import React from 'react'

class StatefulUI extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            someValue: null
        }
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    render() {
        return (
            <div>
                {this.state.someValue}
            </div>
        )
    }
}

export default StatefulUI
