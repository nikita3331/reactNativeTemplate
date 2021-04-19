import config from '../config/config'

const main_url = config.MAIN_URL


export const updateKey = authKey => {
    return {
        type: UPDATE_KEY,
        payload: authKey
    }
}

export const handleLogin = () => {
    return (dispatch, getState) => {
        let { authKey} = getState().user
        dispatch(updateKey("")) 
    }
}

export const UPDATE_KEY = 'UPDATE_KEY'

