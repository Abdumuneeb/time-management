import React,{useState} from 'react';
import style from './Login.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import allActions from '../../redux/actions';

const Login = () => {
  const dispatch = useDispatch();
  const [login,setLogin] =useState({
    email:'',
    password:''
  })
  const changeHandler =(event)=>{
    const {name,value}= event.target;
    setLogin((prevalue)=>{
      return {...prevalue,[name]:value}
    })
  }
  const submitHandler =(event)=>{
    event.preventDefault();
    dispatch(allActions.postActions.fetchPosts(login));

    setLogin({
      email:"",
      password:""
    })
  }
  console.log(login);

    return (
      <>
        <div className={`${style.wrapper} ${style.fadeInDown}`}>
          
          <div className={style.formContent}>
            <div className={`${style.fadeIn} ${style.first}`}>
              <h1>Sign In </h1>
            </div>

            <form onSubmit={submitHandler}>
              <input
                type="email"
                id="login"
                className={`${style.fadeIn} ${style.second}`} 
                name="email"
                value={login.email}
                placeholder="Email Address"
                onChange={changeHandler}
              />
              <input
                type="password"
                id="password"
                className={`${style.fadeIn} ${style.third}`}
                name="password"
                value={login.password}
                placeholder="password"
                onChange={changeHandler}
              />
              <Link to="/dashboard"> <input type="submit" className={`${style.fadeIn} ${style.fourth}`}  value="Log In" /> </Link>
              <Link to="/signup">  <input type="button"  className={`${style.fadeIn} ${style.fourth}`}  value="Sign Up" /> </Link>
            </form>
          </div>
        </div>
      </>
    );
}

export default Login
