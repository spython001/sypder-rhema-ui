import { Link } from 'react-router-dom';
import './login.scss';

export default function Register() {
  return (
    <div className='login'>
        <span>Login</span>

        <form >
            <label>Username</label>
            <input type="text" placeholder='Enter your username'/>

            <label>Password</label>
            <input type="password" placeholder='Enter your password'/>

            <button>Login</button>
        </form>

        <Link to='/register' className='link'><button className="logRegButton">Register</button></Link>
    </div>
  )
}
