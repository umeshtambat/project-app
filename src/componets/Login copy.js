function Login() {
  return (
    <>
      <div>
        {/* Login */}
        {/* <br />
        <br />
        <br /> */}
        <div className="container" style={{marginTop: "100px"}}>
          <div className="login-form">
            <form action="index.html">
              <h1>Login</h1>
              <p style={{ fontSize: "1.9rem" }}>
                Already have an account? Login in or
                <a href="SignUp">Sign Up</a>
              </p>
              <label id="email-label" style={{ fontSize: "2rem" }}>
                Email
              </label>
              <input
                id="uname"
                type="email"
                placeholder="Enter Email"
                name="email"
                spellCheck="false"
                onclick="validatEmail()"
                required
              />
              <label htmlFor="psw" style={{ fontSize: "2rem" }}>
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />
              <label style={{ fontSize: "1.5rem" }}>
                <input
                  type="checkbox"
                  unchecked
                  name="remember"
                  style={{ marginBottom: 15 }}
                />
                Remember me
              </label>
              <p style={{ fontSize: "1.9rem" }}>
                By creating an account you agree to our
                <a href="#">Terms &amp; Privacy</a>.
              </p>
              <div className="buttons">
                <button type="reset" className="cancelbtn hero-btn btn-1">
                  Cancel
                </button>
                <button
                  onclick="validateEmail()"
                  type="submit"
                  href="./index.html"
                  className="signupbtn hero-btn btn-1"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        <br />
        <br />

        {/* Custom Script */}
      </div>
    </>
  );
}

export default Login;
