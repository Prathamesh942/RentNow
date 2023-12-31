import "./register.scss"

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Discover Your Dream Home</h1>
          <p>A World of Homes Awaits: Find, Rent, or Buy Your Ideal Property Today – Your Journey, Our Commitmen</p>
          <span>Do you have an account?</span>
          <button>Login</button>
        </div>
        <div className="right">
            <h1>Register</h1>
            <form>
              <input type="text" placeholder="Username"/>
              <input type="email" placeholder="Email"/>
              <input type="password" placeholder="password"/>
              <input type="text" placeholder="Name"/>
              <button>Register</button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Register