//action.type    = 'UPDATE_SIGN_IN'
//action.payload = 'signed-in'
export const SignInReducer = (state, action) => {  
    switch(action.type) { //Get action type 'UPDATE_SIGN_IN'
        case 'UPDATE_SIGN_IN':
            return {
                userToken: action.payload.userToken //Retrun the token 'signed-in'
            }
        default:
            return state
    }
}