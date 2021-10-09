import React from 'react';
import style from './AdminDashboard.module.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
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
                 <button className={`btn ${style.actionButton}`} > Log Out </button>
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

        <div className={style.section}>
            <h3> Manager Details </h3>
            <div className={style.container}>         
                    <table>
                        <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th> Actions </th>

                        </tr>
                        </thead>
                      <tbody>

                        <tr>
                            <td>Abdul Muneeb </td>
                            <td>muneebafridi@gmail.com</td>
                            <td>12</td>
                            <td> 
                             <EditIcon className={style.editBtn}/>
                             <DeleteIcon className={style.editBtn}/>  
                            </td>
                        </tr>
                      </tbody>
                       
                    </table>
            </div>
            <h3> Users Details </h3>
            <div className={style.container}>         
                    <table>
                        <thead>
                        <tr>
                            <th>Log Date</th>
                            <th>Working Hourse</th>
                            <th>Discription</th>
                            <th> Actions </th>

                        </tr>
                        </thead>
                      <tbody>

                        <tr>
                            <td>Abdul Muneeb </td>
                            <td>muneebafridi@gmail.com</td>
                            <td>12</td>

                            <td> 
                             <EditIcon className={style.editBtn}/>
                             <DeleteIcon className={style.editBtn}/>  
                            </td>
                        </tr>
                      </tbody>
                       
                    </table>
            </div>
            </div>

      </>
    );
}

export default AdminDashboard
