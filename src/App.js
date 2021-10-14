import './App.css';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'; 
import Home from './pages/Home';
import Signup from './components/Signup';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import CreateUser from './pages/CreateUser';
import { useSelector } from 'react-redux';
import ProtectedRoutes from '../src/ProtectedRoutes';
import ProtectedRoutesAdmin from './ProtectedRoutesAdmin';
import ProtectedRouteUser from './ProtectedRouteUser'
import ManagerDashboard from './components/ManagerDashboard';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';

function App() {
  const loginStat= useSelector(state=>state?.posts?.isLogIn);
  const user=useSelector(state=>state?.posts?.postItems?.user?.roles[0].name);


  
  console.log("Whole object",user?user:null);
  console.log("Login STate",loginStat?loginStat:null);
  return (
    <>
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/createuser" component={CreateUser}/>
            <Route exact path="/admin" component={AdminDashboard}/>
            <Route exact path="/manager" component={ManagerDashboard}/>
            <Route exact path="/user" component={UserDashboard}/>
            <Route  path="*" component={Error}/>
            <ProtectedRoutes
              path="/manager"
               component={ManagerDashboard}
               isAuth={loginStat}
               role={loginStat?user:null}
            />
            <ProtectedRoutesAdmin
              path="/admin"
               component={AdminDashboard}
               isAuth={loginStat}
               role={loginStat?user:null}
            />
           <ProtectedRouteUser
             path="/user"
               component={UserDashboard}
               isAuth={loginStat}
               role={loginStat?user:null}
           />
        </Switch>
    </Router>
    </>
  );
}

export default App;
