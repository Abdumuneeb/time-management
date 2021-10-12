

const initialState={
    postItems:[],
    loading: false,
    isLogIn:false ,
    error:null,
}

const posts=(state=initialState, action)=>{
    switch(action.type){
        case "FETCH_POSTS_REQUEST":
            return{
                ...state, 
                loading:true,
                error:null,
            }
        case "FETCH_POSTS_SUCCESS":
            return{
                ...state,
                loading:false,
                isLogIn:true ,
                postItems:action.payload
            }  
        case "FETCH_POSTS_FAILURE":
            return{
                ...state,
                loading:false,
                isLogIn:false ,
                error:action.payload
            }   
        default :
        return state;       
    }
}

export default posts;