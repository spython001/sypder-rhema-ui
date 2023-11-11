import './App.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
//import Home from './pages/home/Home';
//import Single from './pages/single/Single';
import Write from './pages/write/Write';

function App() {

  return (
    <>
    <Topbar/>

    <div className="container">
      <Sidebar/>
      <Write/>
    </div>
    </>
  )
}

export default App
