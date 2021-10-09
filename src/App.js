import './App.css';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'; 
import Home from './pages/Home';
import Signup from './components/Signup';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import CreateUser from './pages/CreateUser';

function App() {
  return (
    <>
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/createuser" component={CreateUser}/>
            <Route  path="*" component={Error}/>
        </Switch>
    </Router>
    </>
  );
}

export default App;
