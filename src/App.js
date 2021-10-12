import './App.css';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'; 
import Home from './pages/Home';
import Signup from './components/Signup';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import CreateUser from './pages/CreateUser';
import { useSelector } from 'react-redux';
import ProtectedRoutes from '../src/ProtectedRoutes';

function App() {
  // const loginStat= useSelector(state=>state.posts.isLogIn);
  // const user=useSelector(state=>state.posts.postItems.user.roles[0].name);


  
  // console.log("Whole object",user);
  // console.log("Login STate",loginStat);
  return (
    <>
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/createuser" component={CreateUser}/>
            <ProtectedRoutes
              path="/"
            />
            <Route  path="*" component={Error}/>
        </Switch>
    </Router>
    </>
  );
}

export default App;
