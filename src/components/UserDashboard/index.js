import React,{useEffect,useState} from 'react';
import style from './UserDashboard.module.css';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch} from 'react-redux';
import allActions from '../../redux/actions';

var editId=0;

const UserDashboard = () => {
    const userLog = useSelector(state=>state?.getUserLogs?.postItems?.workLogs?.data);
    console.log("Table data",userLog)

    const specificUser =useSelector(state=>state?.posts?.postItems?.workLogs?.data[0]?.user?.id);

    console.log(specificUser,"preeeeeefred");

    const [state,setstate] =useState(false);
    console.log(state)
  
    //preffered use State
  const [prefferdHours,setPrefferedHours]=useState(8)
  
    useEffect(() => {
      dispatch(allActions.getUserLogs.fetchUsersLogs());
      // eslint-disable-next-line
    }, [state])

      //edit use State
  const [editData,setEditData] =useState({
    logDate:"",
    hours:"",
    description:"",
  })
  
   

  const dispatch = useDispatch();
  const [workLog,setWorkLog] =useState({
    logDate:'',
    hours:'',
    description:'',
  })
  const changeHandler =(event)=>{
    const {name,value}= event.target;
    setWorkLog((prevalue)=>{
      return {...prevalue,[name]:value}
    })
  }
  const submitHandler =(event)=>{
    event.preventDefault();
    dispatch(allActions.createLogs.createLogs(workLog));
    setWorkLog({
      logDate:"",
      hours:"",
      description:""
    })
    setstate(true);
  }

  //editing
const editHandler =(id)=>{
  const editUser = userLog?.filter((arr)=>{
    return arr.id ===id; 
  }
 ) 
 
  setEditData({
    logDate:editUser[0]?.logDate,
    hours:editUser[0]?.hours,
    description:editUser[0]?.description
    
  })

  editId=id;
}
//edit change handler
const editChangeHandler =(e)=>{
const {name,value} =e.target; //destructuring 
setEditData((prevalue)=>{
return {...prevalue,[name]:value}
})
}
//Preffered Change Handler
const prefferedChangeHandler=(e)=>{
setPrefferedHours(e.target.value)
}

//prefferd hours submit handler
const prefferedHandler =(e)=>{
e.preventDefault();
  dispatch(allActions.prefferedHours?.fetchHours(prefferdHours,specificUser));
}

const updateHandler =(e)=>{
  e.preventDefault();
  //dispatch that edit user
    dispatch(allActions.updateUserLogs.fetchUsersLogs(editId,editData))
    setstate(editId);
    setEditData({
      logDate:"",
      hours:"",
      description:""
    })
 
}

  //logout, clearing local storage
  const clearHandler=()=>{
    localStorage.removeItem('token');
  }

    return (
      <>
        <nav className={`navbar navbar-expand-lg navbar-light p-3 ${style.navbarBg}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <h4>  Dashboard  </h4>  </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item me-3">
                <Link to="/"><button className={`btn ${style.actionButton}`} onClick={clearHandler} > Log Out </button> </Link>
                </li>
              </ul> 
            </div>
          </div>
        </nav>

        {/* Preffered hours start */}
        <div className={style.contentWrapper}>
      <h1> Preffered Hours</h1> 
                <div className={ `${style.dateWrap} ${style.flexDir}`}>
                        <form onSubmit={prefferedHandler}>
                        <input type="text" onChange={prefferedChangeHandler}  value={prefferdHours||""} placeholder ="Hours" />
                        <button type="submit" className={`btn ${style.actionButton}`} > compare</button>
                        </form>
                        
                </div>
        </div>

        {/* Preffered Hours end */}
          {/* edit form start*/}
         
      <div className={style.contentWrapper}>
      <h1> Edit form</h1> 
                <div className={ `${style.dateWrap} ${style.flexDir}`}>
                        <form onSubmit={updateHandler}>
                        <input type="date" onChange={editChangeHandler} name="logDate" value={editData.logDate } placeholder ="Log Date" />
                        <input type="number" onChange={editChangeHandler} name="hours" value={editData.hours}  placeholder="log Hours "/>
                        <input type="text" onChange={editChangeHandler} name="description" value={editData.description} placeholder="Description" />
                        <button type="submit" className={`btn ${style.actionButton}`} > update </button>
                        </form>
                        
                </div>
        </div>
        {/* edit form end*/}

        <div className={style.contentWrapper}>
                <div className={`${style.dateWrap} ${style.flexContent} `}>
                                <form onSubmit={submitHandler}>
                                <label className={style.labelWrap}> Log Date</label>
                                <input name="logDate" value={workLog.logDate} type="date" onChange={changeHandler} />
                                <label className={style.labelWrap}> Log Hour</label>
                                <input name="hours" value={workLog.hours} type="number" onChange={changeHandler} placeholder="Log Hour" />
                                <label className={style.labelWrap}> Discription</label>
                                <input type="text" name="description" value={workLog.description}  onChange={changeHandler} placeholder="Discription..."/> 
                                <button className={`btn ${style.actionButton}`} > Create Log </button>
                                </form>
                                
                </div>
        </div>

        <div className={style.section}>
            <h3> Users Log Details </h3>
            <div className={style.container}>         
                 <div className="table-responsive">   <table>
                        <thead>
                        <tr>
                            <th>id </th> 
                            <th>Log Date</th>
                            <th>Log Hour</th>
                            <th>Description</th>
                            <th> Actions </th>

                        </tr>
                        </thead>
                        <tbody>
                       
                          {
                            userLog?.map((value)=>{
                              return <tr key={value.id}
                              style={{backgroundColor:(value.hours>=prefferdHours)?"green" : "red"}}
                              >
                                            <td>{value.id}</td>
                                            <td>{value.log_date}</td>
                                            <td> { value.hours} </td>
                                            <td>{value.description} </td>
                                            <td> 
                                              <EditIcon className={style.editBtn} onClick={()=>{editHandler(value.id)}}/>
                                            </td>
                                     </tr>
                           })
                          }
                      </tbody>
                       
                    </table>
                    </div>
            </div>
            </div>

      </>
    );
}

export default UserDashboard
