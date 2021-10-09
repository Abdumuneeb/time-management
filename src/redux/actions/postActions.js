  import axios from "axios";
  const fetchPosts = (user)=> async (dispatch)=> {
      const email = user.email;
      const password = user.password;

    dispatch(requestPosts())
    try {
          await axios.post("http://34.210.129.167/api/login",{
             email,
             password,
             
         })
         .then((response)=>{
            const LoginData=response.data; 
            console.log(LoginData);
            dispatch({type: "FETCH_POSTS_SUCCESS", payload: LoginData})
          localStorage.setItem(
            "login",
            JSON.stringify({
              
            userLogin:true,
              token: response.data.token,
          }))
        })
  
    }  
    
    catch (error) {
        dispatch({type:"FETCH_POSTS_FAILURE", payload:error});
        
    }
}

const requestPosts = ()=>{
    return {
        type: "FETCH_POSTS_REQUEST"
    }
}

const exportedObject= {
    fetchPosts,
    requestPosts
  }
  export default  exportedObject;
