import "./login.scss"

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome Back</h1>
          <p>A World of Homes Awaits: Find, Rent, or Buy Your Ideal Property Today – Your Journey, Our Commitmen</p>
          <span>Don't have an account?</span>
          <button>Register</button>
        </div>
        <div className="right">
            <h1>Login</h1>
            <form>
              <input type="text" placeholder="Username"/>
              <input type="password" placeholder="password"/>
              <button>Login</button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Login