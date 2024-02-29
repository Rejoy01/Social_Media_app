const authReducer = (state = {authData : null ,loading:false , error :false},action)=>{
    
    switch (action.type) {
        case "AUTH_START":
                return{...state, loading:true,error:false}
        case "AUTH_SUCCESS":
            return {...state,authData:}
        default:
            return state;
    }

}