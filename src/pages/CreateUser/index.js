import React ,{useState} from 'react';
import style from './CreateUser.module.css';
import { useDispatch } from 'react-redux';
import allActions from '../../redux/actions';

const CreateUser = () => {
    
  const dispatch = useDispatch();
  const [signup,setSignUp] = useState({
    firstName: '',
    lastName:'',
    email:'',
    password:'',
    password_confirmation:"",
    userType:"user"
  });

  const changeHandler =(event)=>{
    const {name,value} =event.target;

    setSignUp((prev)=>{
      return {...prev, [name]:value};
    })
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    dispatch(allActions.signupAction.signup(signup))
  
    setSignUp({
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      password_confirmation:"",
      userType:"user",
    })

  }
    return (
        <>
               <div className={`${style.wrapper} ${style.fadeInDown}`}>
          
          <div className={style.formContent}>
            <div className={`${style.fadeIn} ${style.first}`}>
              <h1>Sign Up </h1>
            </div>

            <form >
            <input
                type="text"
                id="login"
                className={`${style.fadeIn} ${style.second}`} 
                name="firstName"
                placeholder="First Name"
                value={signup.firstName}
                onChange={changeHandler}
              />
               <input
                type="text"
                id="login"
                className={`${style.fadeIn} ${style.second}`} 
                name="lastName"
                placeholder="Last Name"
                value={signup.lastName}
                onChange={changeHandler}
              />
              <input
                type="email"
                id="login"
                className={`${style.fadeIn} ${style.second}`} 
                name="email"
                placeholder="Email Address"
                value={signup.email}
                onChange={changeHandler}
              />
              <input
                type="password"
                id="password"
                className={`${style.fadeIn} ${style.third}`}
                name="password"
                placeholder="password"
                value={signup.password}
                onChange={changeHandler}
              />
               <input
                type="password"
                id="password"
                className={`${style.fadeIn} ${style.third}`}
                name="password_confirmation"
                placeholder="Confirm Password!"
                value={signup.password_confirmation}
                onChange={changeHandler}
              />
                <input
                type="text"
                id="password"
                className={`${style.fadeIn} ${style.third}`}
                name="userType"
                placeholder="User Type"
                value={signup.userType}
                disabled
                onChange={changeHandler}
              />
             
             
              <input type="submit"
               className={`${style.fadeIn} 
              ${style.fourth}`} 
              value="Register"
              />
            </form>
          </div>
        </div>   
        </>
    )
}

export default CreateUser
