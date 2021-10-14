import axios from "axios";
const fetchUsersLogs = (id,data)=> async (dispatch)=> {
    const logDate= data.logDate;
    const hours =data.hours;
    const description=data.description;

    const UserToken =localStorage.getItem("token");


  dispatch(requestPosts())
  try {
      await axios.put(`http://34.210.129.167/api/work-logs/${id}`,{
          logDate,
          hours,
          description

      },{
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
