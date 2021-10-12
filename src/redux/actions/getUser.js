import axios from "axios";
const fetchUsers = ()=> async (dispatch)=> {

    const managerToken =localStorage.getItem("token");
    console.log(managerToken);


  dispatch(requestPosts())
  try {
      await axios.get("http://34.210.129.167/api/users",{
        headers: {
            Authorization: `Bearer ${managerToken}`,
          }
           
       })
       .then((res)=>{
          const loginData=res.data; 
          
          dispatch({type: "FETCH_POSTS_SUCCESS", payload: loginData})
          console.log(res);
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
  fetchUsers,
  requestPosts
}
export default  exportedObject;
