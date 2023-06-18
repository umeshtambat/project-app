

function SignUp() {
  return (
    <>
      <div>
        {/* Login */}
        <div className="container" style={{marginTop: "100px"}}>
          <div className="login-form">
            <form action="./index.html" style={{ fontSize: "2rem" }}>
              <h1>Sign Up</h1>
              <p>
                Please fill in this form to create an account or
                <a href="Login">Login</a>
              </p>
              <label id="email-label">Email</label>
              <input type="email" classname="form-control form-control-lg mb-2" placeholder="Enter Email" value="{user.email}" onChange={event => { { handlerEmailAction; } }} required />
              <label id="pass" htmlFor="psw">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                id="psw"
                onclick="validatePassword()"
                required
              />
              <label> Mobile Number </label>
              <input
                id="phone"
                type="tel"
                maxLength={10}
                minLength={10}
                required
                pattern="[0-9]{10}"
                placeholder="0000000000"
              />
              <label>Adhaar Number</label>
              <input
                type="text"
                pattern="[0-9]{12}"
                maxLength={12}
                minLength={12}
                placeholder="Enter Your Adhaar Number"
                required
              />
              <label>PAN Number</label>
              <input
                type="text"
                pattern="([A-Z]){5}([0-9]){4}([A-Z]){1}"
                maxLength={10}
                minLength={10}
                placeholder="XXXXX0000X"
                required
              />
              <label style={{ fontSize: "1.5rem" }}>
                <input
                  type="checkbox"
                  uchecked
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
                <button type="submit" className="signupbtn hero-btn btn-1">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Custom Script */}
      </div>
    </>
  );
}

export default SignUp;
