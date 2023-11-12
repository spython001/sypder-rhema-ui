import './App.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
//import Home from './pages/home/Home';
//import Single from './pages/single/Single';
import Write from './pages/write/Write';
import About from './pages/about/About';

function App() {

  return (
    <>
    <Topbar/>

    <div className="container">
      <Sidebar/>
      <About/>
    </div>
    </>
  )
}

export default App
