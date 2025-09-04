import React, {createContext, useContext, useReducer} from 'react';
import { SignInReducer } from  '../reducer/authReducers'

export const SignInContext = createContext(null)

export const SignInContextProvider = ({children}) => {
    
    const [signedIn, dispatchSignedIn] = useReducer(SignInReducer,{
        userToken:false,
    })

    return (
        <SignInContext.Provider value = {{signedIn,dispatchSignedIn}}>
            {children}
        </SignInContext.Provider>
    )
}