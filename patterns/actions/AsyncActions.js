import fetch from 'cross-fetch'

export const REQUEST_SOMETHING = 'REQUEST_SOMETHING'
export const RECEIVE_SOMETHING = 'RECEIVE_SOMETHING'

export function requestSomething(id) {
    return {
        type: REQUEST_SOMETHING,
        id
    }
}

export function receiveSomething(id, json) {
    return {
        type: RECEIVE_SOMETHING,
        id,
        data: json,
        receivedAt: Date.now()
    }
}

export function fetchSomething(id) {
    return function(dispatch) {
        dispatch(requestSomething(id))
        return fetch(`http://host/somethings/${id}`)
            .then(
                response => response.json()
            )
            .then(
                json => dispatch(receiveSomething(id, json))
            )
    }
}
