
const actionIncrementUserType = 'INCREMENT_USER'
const actionSetUserCountType = 'SET_USER_COUNT'


const initialState = {
    userCount: 11
}


export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionIncrementUserType:
            return {
                ...state,
                userCount: state.userCount + 1
            }
        case actionSetUserCountType:
            return {
                ...state,
                userCount: action.userCount
            }
    }
    return state
}


export const actionIncrementUser = () => {
    return {
        type: actionIncrementUserType,
    }
}

export const actionSetUserCount = (userCount) => {
    return {
        type: actionSetUserCountType,
        userCount: userCount
    }
}
