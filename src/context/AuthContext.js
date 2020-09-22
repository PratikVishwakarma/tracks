import createDataContext from '../context/createDataContext'
import trackerAPI from '../api/tracker'
import { AsyncStorage } from 'react-native'
import { navigate } from '../navigationRef'

const AUTH_ACTIONS = {
    ACTION_SIGN_UP: 'ACTION_SIGN_UP',
    ACTION_SIGN_IN: 'ACTION_SIGN_IN',
    ACTION_SIGN_OUT: 'ACTION_SIGN_OUT',
    ACTION_ERROR: 'ACTION_ERROR',
}

const authReducer = (state, action) => {
    switch (action.type) {
        case AUTH_ACTIONS.ACTION_ERROR: {
            return { ...state, errorMessage: action.payload }
        }
        case AUTH_ACTIONS.ACTION_SIGN_UP: {
            return { token: action.payload, errorMessage: '' }
        }
        case AUTH_ACTIONS.ACTION_SIGN_IN: {
            return { token: action.payload, errorMessage: '' }
        }
        default:
            return state
    }
}


const signUp = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerAPI.post('/signup', { email, password })
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: AUTH_ACTIONS.ACTION_SIGN_UP, payload: response.data.token })
        navigate('TrackList')
    } catch (err) {
        dispatch({ type: AUTH_ACTIONS.ACTION_ERROR, payload: 'Something went wronge with sign up' })
    }
}

const signIn = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerAPI.post('/signin', { email, password })
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: AUTH_ACTIONS.ACTION_SIGN_IN, payload: response.data.token })
        navigate('TrackList')
    } catch (err) {
        dispatch({ type: AUTH_ACTIONS.ACTION_ERROR, payload: 'Something went wronge with sign in' })
    }
}

const signOut = (dispatch) => {
    return () => {

    }
}

const clearError = (dispatch) => () => { dispatch({ type: AUTH_ACTIONS.ACTION_ERROR, payload: '' }) }

export const { Provider, Context } = createDataContext(
    authReducer,
    { signUp, signIn, signOut, clearError },
    { errorMessage: '', isSignedin: false }
)


