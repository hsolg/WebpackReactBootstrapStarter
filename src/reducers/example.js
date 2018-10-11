import { SET_TITLE } from '../actions/ExampleActions'

function example(state = { title: "Default title" }, action) {
    switch (action.type) {
        case SET_TITLE:
            return Object.assign({}, state, { title: action.title })
        default:
            return state
    }
}

export default example
