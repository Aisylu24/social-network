import {getAuthUserDataThunkCreator} from "./redux/auth-reducer";


const INITIALIZED_SUCCESSFULLY = 'INITIALIZED_SUCCESSFULLY'

let initialState = {
    initialized: false
}

type initialStateType = {
    initialized: boolean
}

type ActionsType = ReturnType<typeof initializedSuccessfully>

export const appReducer = (state: initialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case INITIALIZED_SUCCESSFULLY: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

export const initializedSuccessfully = () => ({type: INITIALIZED_SUCCESSFULLY} as const)

export const initializeAppTC = () => {
    const thunk = (dispatch: any) => {
      let promise = dispatch(getAuthUserDataThunkCreator())
        promise.then(()=> {
            dispatch(initializedSuccessfully())
        })

    }
    return thunk
}

