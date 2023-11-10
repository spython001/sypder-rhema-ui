import './App.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
//import Home from './pages/home/Home';
import Single from './pages/single/Single';

function App() {

  return (
    <>
    <Topbar/>

    <div className="container">
      <Sidebar/>
      <Single/>
    </div>
    </>
  )
}

export default App
