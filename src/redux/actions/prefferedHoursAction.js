import axios from "axios";
const fetchHours = (data,specificUser)=> async (dispatch)=> {

const prefferedHours =data.hours;

const token =localStorage.getItem('token');

  dispatch(requestPosts())
  try {
     await axios.patch(`http://34.210.129.167/api/users/${parseInt(specificUser)}/preferred-working-hours`,
        {
            workingHours:prefferedHours
        }
        
     ,{
        headers: {
            Authorization: `Bearer ${token}`,
          },
   
       })
       .then((res)=>{
          const loginData=res.data; 
          
          dispatch({type: "FETCH_POSTS_SUCCESS", payload: loginData})
          console.log(res.data);
        
         
        
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
  fetchHours,
  requestPosts
}
export default  exportedObject;
