import './App.css';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import About from './pages/about/About';
import Register from './pages/register/Register';

function App() {

  return (
    <>
    <Topbar/>
    <div className="container">
      <About/>
    </div>
    </>
  )
}

export default App
