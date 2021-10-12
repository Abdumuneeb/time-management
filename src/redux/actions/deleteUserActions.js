import axios from "axios";
const DeleteUsers = (id)=> async (dispatch)=> {

    console.log("************" ,id);

    const userToken=localStorage.getItem('token');

  dispatch(requestPosts())
  try {
     await axios.delete(`http://34.210.129.167/api/users/${id}`,{
        headers: {
            Authorization: `Bearer ${userToken}`,
          },
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
  DeleteUsers,
  requestPosts
}
export default  exportedObject;
