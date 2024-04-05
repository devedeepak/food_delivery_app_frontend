import "./LoginPopup.css";
export default function LoginPopup({showLogin,setShowLogin}) {
  return (
    <div className="loginform-container">
      <div className="loginform">
        <div className="login-header">
          <h4>Login</h4>
          <div className="cross" onClick={()=>setShowLogin(!showLogin)}>
            <span className="span1"></span>
            <span className="span2"></span>
          </div>
        </div>
        <div className="login-body">
          <form className="login-form">
            <input type="text" placeholder="Your Email" />
            <input type="text" placeholder="password" />
            <button type="submit">Login</button>
            <div className="login-agree">
              <input type="checkbox" name="agree" id="" />
              <p>By confirming, i agree to the terms and conditions</p>
            </div>
          </form>
          <div className="new-account">
            <p className="new-account-text">Create a new account</p>
            <p className="signup-link">Login here</p>
          </div>

        </div>
      </div>
    </div>

  )
}