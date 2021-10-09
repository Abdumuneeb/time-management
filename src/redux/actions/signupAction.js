import axios from "axios";
const signup = (user)=> async (dispatch)=> {
     console.log("user in postAction = ",user.password);
     const firstName=user.firstName;
     const lastName =user.lastName;
    const email = user.email;
    const password = user.password;
    const password_confirmation=user.password_confirmation;
  

  dispatch(requestPosts())
  try {
        await axios.post("http://34.210.129.167/api/register",{
           firstName,
           lastName,
           email,
           password,
           password_confirmation,
           
       })
       .then((res)=>{
        const signupData=res.data; 
        console.log(res)
        dispatch({type: "FETCH_POSTS_SUCCESS", payload: signupData})
        localStorage.setItem(
          "login",
          JSON.stringify({
            
          userLogin:true,
            token: res.data.token,
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
  signup,
  requestPosts
}
export default  exportedObject;
