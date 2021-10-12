import React,{useEffect,useState} from 'react';
import style from './UserDashboard.module.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch} from 'react-redux';
import allActions from '../../redux/actions';

const UserDashboard = () => {
    const userLog = useSelector(state=>state?.getUserLogs?.postItems?.workLogs?.data);
    console.log("data recieved",userLog);
    useEffect(() => {
      dispatch(allActions.getUserLogs.fetchUsersLogs());
      
    }, [])
   

  const dispatch = useDispatch();
  const [workLog,setWorkLog] =useState({
    logDate:'',
    hours:'',
    description:'',
  })
  console.log( "Complete Object work Log", workLog);
  const changeHandler =(event)=>{
    const {name,value}= event.target;
    setWorkLog((prevalue)=>{
      return {...prevalue,[name]:value}
    })
  }
  const submitHandler =(event)=>{
    event.preventDefault();
    dispatch(allActions.createLogs.createLogs(workLog));

    // setWorkLog({
    //   LogDate:"",
    //   hours:"",
    //   description:""
    
    // })
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
                 <button className={`btn ${style.actionButton}`} > Log Out </button>
                </li>
              </ul> 
            </div>
          </div>
        </nav>
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
                    <table>
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
                              return <tr key={value.id}>
                                            <td>{value.id}</td>
                                            <td>{value.log_date}</td>
                                            <td> {value.hours} </td>
                                            <td>{value.description} </td>
                                            <td> 
                                              <EditIcon className={style.editBtn}/>
                                            </td>
                                     </tr>
                           })
                          }
                      </tbody>
                       
                    </table>
            </div>
            </div>

      </>
    );
}

export default UserDashboard
