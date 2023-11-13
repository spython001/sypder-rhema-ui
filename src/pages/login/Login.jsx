import './login.scss'

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

        <button className="logRegButton">Register</button>
    </div>
  )
}
