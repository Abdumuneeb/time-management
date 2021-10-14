import React ,{useState} from 'react';
import style from './CreateUser.module.css';
import { useDispatch} from 'react-redux';
import allActions from '../../redux/actions';
import { useHistory } from 'react-router';

const CreateUser = () => {
 const history = useHistory();

  const dispatch = useDispatch();
  const [User,setUser] = useState({
    firstName: '',
    lastName:'',
    email:'',
    password:'',
    password_confirmation:"",
    userType:"user",
    // token:tokenData
  });

  const changeHandler =(event)=>{
    const {name,value} =event.target;

    setUser((prev)=>{
      return {...prev, [name]:value};
    })
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    dispatch(allActions.userAction.registerUser(User,history))
  
    setUser({
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      password_confirmation:"",
      userType:"user",
    })

  }

  const dashboardHandler=()=>{
      history.goBack();
  }
    return (
        <>
               <div className={`${style.wrapper} ${style.fadeInDown}`}>
          
          <div className={style.formContent}>
            <div className={`${style.fadeIn} ${style.first}`}>
              <h1>Sign Up </h1>
            </div>

            <form onSubmit={submitHandler}>
            <input
                type="text"
                id="login"
                className={`${style.fadeIn} ${style.second}`} 
                name="firstName"
                placeholder="First Name"
                value={User.firstName}
                onChange={changeHandler}
              />
               <input
                type="text"
                id="login"
                className={`${style.fadeIn} ${style.second}`} 
                name="lastName"
                placeholder="Last Name"
                value={User.lastName}
                onChange={changeHandler}
              />
              <input
                type="email"
                id="login"
                className={`${style.fadeIn} ${style.second}`} 
                name="email"
                placeholder="Email Address"
                value={User.email}
                onChange={changeHandler}
              />
              <input
                type="password"
                id="password"
                className={`${style.fadeIn} ${style.third}`}
                name="password"
                placeholder="password"
                value={User.password}
                onChange={changeHandler}
              />
               <input
                type="password"
                id="password"
                className={`${style.fadeIn} ${style.third}`}
                name="password_confirmation"
                placeholder="Confirm Password!"
                value={User.password_confirmation}
                onChange={changeHandler}
              />
                <input
                type="text"
                id="password"
                className={`${style.fadeIn} ${style.third}`}
                name="userType"
                placeholder="User Type"
                value={User.userType}
                disabled
                onChange={changeHandler}
              />
             
             
              <input type="submit"
               className={`${style.fadeIn} 
              ${style.fourth}`} 
              value="Register"
              />
                <input type="button"
               className={`${style.fadeIn} 
              ${style.fourth}`} 
              value="Back dashboard"
              onClick={dashboardHandler}
              />
            </form>
          </div>
        </div>   
        </>
    )
}

export default CreateUser
