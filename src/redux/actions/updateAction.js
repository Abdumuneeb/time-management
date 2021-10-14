import axios from "axios";
const UpdateUsers = (id,user)=> async (dispatch)=> {
    const firstName =user.firstName;
    const lastName=user.lastName;
    const email=user.email;

    const userToken=localStorage.getItem('token');

  dispatch(requestPosts())
  try {
     await axios.put(`http://34.210.129.167/api/users/${id}`,{
         firstName,
         lastName,
         email
     },{
        headers: {
            Authorization: `Bearer ${userToken}`,
          },
       })
       .then((res)=>{
          const updateUser=res.data; 
          
          dispatch({type: "FETCH_POSTS_SUCCESS", payload: updateUser})
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
  UpdateUsers,
  requestPosts
}
export default  exportedObject;
