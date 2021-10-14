import axios from "axios";
const filterData = (from,to)=> async (dispatch)=> {


    const userToken=localStorage.getItem('token');

  dispatch(requestPosts())
  try {
     await axios.get(`http://34.210.129.167/api/work-logs/${from}/${to}`,{
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
  filterData,
  requestPosts
}
export default  exportedObject;
