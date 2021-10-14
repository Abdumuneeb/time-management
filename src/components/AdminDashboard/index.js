import React ,{useEffect,useState} from 'react';
import style from './AdminDashboard.module.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import allActions from '../../redux/actions';

var editId=0;

const AdminDashboard = () => {
  const data= useSelector(state => state?.Users?.postItems?.users?.data);
  const [state,setstate] =useState("");
  const dispatch = useDispatch();


  //edit use State
  const [editData,setEditData] =useState({
    firstName:"",
    lastName:"",
    email:"",
  })
  

  //filter manager data from all users
  const managerData=data?.filter((arr)=>{
     return arr.roles[0].name === "manager"
  })
 

  //filter Reuglar user from all users
  const UserData=data?.filter((arr)=>{
    return arr.roles[0].name === "user"
 })

   
//dispatching
useEffect(() => {
  dispatch(allActions.getUser.fetchUsers());
// eslint-disable-next-line
}, [state])

//Deleting
const deleteHandler=(id)=>{
  dispatch(allActions.deleteUser.DeleteUsers(id));
  console.log("##########################3",id);
  setstate(id);
  
  }

//editing
const editHandler =(id)=>{
  const editUser = data?.filter((arr)=>{
    return arr.id ===id; 
  }
 ) 
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
               <Link to="/signup">  <button className={`btn ${style.actionButton}`} > Create Manager </button> </Link>
                </li>
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
                        <form>
                        <label className={style.labelWrap}> From</label>
                        <input type="date" />
                        <label className={style.labelWrap}> To</label>
                        <input type="date" />
                        <button className={`btn ${style.actionButton}`} > Search </button>
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
            <h3> Manager Details </h3>
            <div className={style.container}>         
            <div className="table-responsive">    <table>
                        <thead>
                        <tr>
                            <th>id </th> 
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Role </th>
                            <th> Actions </th>

                        </tr>
                        </thead>
                        <tbody>
                          {
                           managerData?.map((value)=>{
                              return <tr key={value.id}>
                                            <td>{value.id}</td>
                                            <td> {value.firstName} </td>
                                            <td>{value.lastName} </td>
                                            <td>{value.email}</td>
                                            <td> {value.roles[0].name}</td> 
                                            <td> 
                                              <EditIcon className={style.editBtn} onClick={()=>{editHandler(value.id)}} />
                                              <DeleteIcon className={style.editBtn} onClick={()=>{ deleteHandler(value.id)}}/> 
                                            </td>
                                     </tr>
                           })
                          }
                      </tbody>
                       
                    </table>
                    </div>
            </div>
            <h3> Users Details </h3>
            <div className={style.container}>         
                    <table>
                        <thead>
                        <tr>
                            <th>id </th> 
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Role </th>
                            <th> Actions </th>

                        </tr>
                        </thead>
                        <tbody>
                          {
                           UserData?.map((value)=>{
                              return <tr key={value.id}>
                                            <td>{value.id}</td>
                                            <td> {value.firstName} </td>
                                            <td>{value.lastName} </td>
                                            <td>{value.email}</td>
                                            <td> {value.roles[0].name}</td> 
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

      </>
    );
}

export default AdminDashboard
