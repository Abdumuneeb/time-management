import axios from "axios";
const fetchUsersLogs = ()=> async (dispatch)=> {

    const UserToken =localStorage.getItem("token");


  dispatch(requestPosts())
  try {
      await axios.get("http://34.210.129.167/api/work-logs",{
        headers: {
            Authorization: `Bearer ${UserToken}`,
          }
           
       })
       .then((res)=>{
          const loginData=res.data; 
          
          dispatch({type: "FETCH_POSTS_SUCCESS", payload: loginData})
          console.log("User Logs Data",res);
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
  fetchUsersLogs,
  requestPosts
}
export default  exportedObject;
