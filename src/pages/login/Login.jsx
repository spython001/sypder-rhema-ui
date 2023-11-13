import './login.scss'

export default function Register() {
  return (
    <div className='login'>
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

        <button className="logRegButton">Login</button>
    </div>
  )
}
