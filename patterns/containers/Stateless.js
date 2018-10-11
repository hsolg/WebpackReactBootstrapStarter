import { connect } from 'react-redux'
import { setTitle } from '../actions/ExampleActions'
import StatelessUI from '../components/StatelessUI'

const mapStateToProps = (state, ownProps) => {
    return {
        text: state.someText
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setTitle: title => {
            dispatch(setTitle(title))
        }
    }
}

const Stateless = connect(
    mapStateToProps,
    mapDispatchToProps
)(StatelessUI)

export default Stateless
