import axios from "axios";
const createLogs = (logs)=> async (dispatch)=> {
    const logDate = logs.logDate;
    const hours = logs.hours;
    const description=logs.description;


    const userToken=localStorage.getItem('token');

  dispatch(requestPosts())
  try {
     await axios.post("http://34.210.129.167/api/work-logs",{
         logDate,
         hours,
         description
     },{
        headers: {
            Authorization: `Bearer ${userToken}`,
          },
       })
       .then((res)=>{
          const loginData=res.data; 
          
          dispatch({type: "FETCH_POSTS_SUCCESS", payload: loginData})
        
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
  createLogs,
  requestPosts
}
export default  exportedObject;
