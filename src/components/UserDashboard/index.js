import React from 'react';
import style from './UserDashboard.module.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const AdminDashboard = () => {
    return (
      <>
        <nav className={`navbar navbar-expand-lg navbar-light p-3 ${style.navbarBg}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <h4>  Dashboard  </h4>  </a>
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
                                <form>
                                <label className={style.labelWrap}> Log Date</label>
                                <input type="date" />
                                <label className={style.labelWrap}> Log Hour</label>
                                <input type="number" placeholder="Log Hour" />
                                <label className={style.labelWrap}> Discription</label>
                                <input type="text" placeholder="Discription..."/> 
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
                            <th>Log Date</th>
                            <th>Working Hours</th>
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
