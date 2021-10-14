import React,{useEffect,useState} from 'react';
import style from './ManagerDashboard.module.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import allActions from '../../redux/actions';

var editId=0;

const ManagerDashboard = () => {
  const data= useSelector(state => state?.Users?.postItems?.users?.data);
  const [state,setstate] =useState("");
   const dispatch = useDispatch();

   
  //filter Data state
  const [filterDate,setFilterDate] =useState({
    formDate:"",
    toDate:""
  });

  //filter handler
  const filterHandler =(event)=>{
    const {name,value}= event.target;
    setFilterDate((prevalue)=>{
      return{...prevalue,[name]:value}
    })
  }
//dispatching filter Dates
const searchHandler=()=>{
  dispatch(allActions.filterData.filterData(filterDate));
}

 //edit use State
 const [editData,setEditData] =useState({
  firstName:"",
  lastName:"",
  email:"",
})


//fetching all users
useEffect(() => {
  dispatch(allActions.getUser.fetchUsers());
 // eslint-disable-next-line
}, [state]);

//deleting users
const deleteHandler=(id)=>{
dispatch(allActions?.deleteUser?.DeleteUsers(id));
setstate(id);

}

//editing
const editHandler =(id)=>{
  const editUser = data?.filter((arr)=>{
    return arr.id ===id; 
  }
 ) 
 
  console.log("EDit user",editUser);
  setEditData({
    firstName:editUser[0]?.firstName,
    lastName:editUser[0]?.lastName,
    email:editUser[0]?.email
    
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
  
  const updateHandler =(e)=>{
    e.preventDefault();
    //dispatch that edit user
      dispatch(allActions.UpdateUsers.UpdateUsers(editId,editData))
      setstate(editId);
      setEditData({
        firstName:"",
        lastName:"",
        email:""
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
               <Link to="/createuser">  <button className={`btn ${style.actionButton}`} > Create User </button> </Link>
                </li>
                <li className="nav-item me-3">
                <Link to="/"><button className={`btn ${style.actionButton}`} onClick={clearHandler} > Log Out </button> </Link>
                </li>
              </ul> 
            </div>
          </div>
        </nav>
        <div className={style.contentWrapper}>
                <div className={style.dateWrap}>
                        <form onSubmit={filterHandler}>
                        <label className={style.labelWrap}> From</label>
                        <input type="date"  name="fromDate" value={filterDate?.formDate} onChange={filterHandler}/>
                        <label className={style.labelWrap }> To</label>
                        <input type="date" name="toDate" value={filterDate?.toDate}  onChange={filterHandler}/>
                        <button type="submit" className={`btn ${style.actionButton}`} onClick={searchHandler} > Search </button>
                        </form>
                        
                </div>
        </div>

          {/* edit form start*/}
      <div className={style.contentWrapper}>
                <div className={ `${style.dateWrap} ${style.flexDir}`}>
                        <form onSubmit={updateHandler}>
                        <input type="text" onChange={editChangeHandler} name="firstName" value={editData.firstName} placeholder ="first Name" />
                        <input type="text" onChange={editChangeHandler} name="lastName" value={editData.lastName}  placeholder="Last Name"/>
                        <input type="email" onChange={editChangeHandler} name="email" value={editData.email} placeholder="Email address" />
                        <button type="submit" className={`btn ${style.actionButton}`} > update </button>
                        </form>
                        
                </div>
        </div>
        {/* edit form end*/}

        <div className={style.section}>
            <h3> Users Details </h3>
            <div className={style.container}>         
            <div className="table-responsive">        <table>
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>first Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th> Actions </th>

                        </tr>
                        </thead>
                      <tbody>
                          {
                           data?.map((value)=>{
                              return <tr key={value.id}>
                                            <td>{value.id}</td>
                                            <td> {value.firstName} </td>
                                            <td>{value.lastName} </td>
                                            <td>{value.email}</td>
                                            <td> 
                                              <EditIcon className={style.editBtn} onClick={()=>{editHandler(value.id)}}/>
                                              <DeleteIcon className={style.editBtn} onClick={()=>{ deleteHandler(value.id)}}/> 
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

export default ManagerDashboard;
