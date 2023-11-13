import './App.css';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import About from './pages/about/About';
import Register from './pages/register/Register';
import Login from './pages/login/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  const user = true;

  return (
    <Router>
        <Topbar/>
        <div className="container">
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>

            <Route path="/register">{user ? <Home /> : <Register /> }</Route>
            <Route path="/login">{ user ? <Home /> : <Login /> }</Route>
            
            <Route path="/write">{ user ? <Write /> : <Register />}</Route>
            <Route path='/about'>{ user ? <About/> : <Register/> }</Route>
            <Route path="/post/:postId">
              <Single />
            </Route>
            </Switch>
        </div>
    </Router>
  )
}

export default App
