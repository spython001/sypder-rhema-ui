import './register.scss';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className='register'>
        <span>Register</span>

        <form >
            <label>Username</label>
            <input type="text" placeholder='Enter your username'/>

            <label >Email</label>
            <input type="text" placeholder='Enter your email address'/>

            <label>Password</label>
            <input type="password" placeholder='Enter your password'/>

            <button>Register</button>
        </form>

        <Link to='/login' className='link'><button className="regLogButton">Login</button></Link>
    </div>
  )
}
