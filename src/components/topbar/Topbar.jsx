import { Link } from 'react-router-dom'
import './topbar.scss'
export default function Topbar() {
  const user = true;

  return (
    <div className='topbar'>
        <div className="topLeft"></div>
        
        <div className="topCenter">
            <img src="/assets/chryst.png" alt="head pic" />
        </div>
        
        <div className="topRight">
          <div className="profile">
            <i className="topIcon fa-solid fa-gear"></i>
            {user ? (
              <div className="options">
              <span>Logout</span>
            </div>) : (
              <div className="options">
                <Link to='/register' className='link'>
                  <span>Register</span>
                </Link>
                
                <Link to='/login' className='link'>
                  <span>Login</span>
                </Link>
              </div>
            )
          }
          </div>

        </div>
    </div>
  )
}
