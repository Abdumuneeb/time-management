  import axios from "axios";
  const fetchPosts = (user)=> async (dispatch)=> {
      const email = user.email;
      const password = user.password;
    //   const token=user.token;
      console.log("************" ,email);
      console.log("*****************",password);
    //   console.log("*************",token);

    dispatch(requestPosts())
    try {
       await axios.post("http://34.210.129.167/api/login",{
        headers: {
          'Content-Type': 'application/json',
        },
             email,
             password,
             
         })
         .then((res)=>{
            const loginData=res.data; 
            
            dispatch({type: "FETCH_POSTS_SUCCESS", payload: loginData})
            console.log(res);
            localStorage.setItem(
            "token",
              res.data.token,
         )
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
