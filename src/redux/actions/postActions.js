  import axios from "axios";
  const fetchPosts = (user,history)=> async (dispatch)=> {
      const email = user.email;
      const password = user.password;

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
            console.log(res.data);
            const role=res.data.user.roles[0].name;
            console.log("Roiles",res.data.user.roles[0].name);
            if(role==="manager"){
              history.push('/manager')
            }
            else if(role==="admin"){
              history.push('/admin')
            }
            else if(role==="user"){
              history.push('/user')
            }
           
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
