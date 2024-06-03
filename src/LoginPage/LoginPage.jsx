import React from "react";

const LoginPage = () => {

  const Login=(e)=>{
    e.preventDefault();
    alert("Loggedin Successfully")
    window.location.reload()
  };

  return (
    <div className="m-5 d-flex justify-content-center">
      <div className="row d-flex align-items-center justify-content-center flex-column w-50">
        <h2 className="col-auto mb-5">Login</h2>
        <form onSubmit={Login} action="">
        <div class="col-auto mb-5">
          <label className="form-label">Email address</label>
          <input  type="email" className="form-control" name="email" required/>
        </div>
        <div className="col-auto mb-5">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" name="password" required/>
        </div>
        <div className="col-auto mb-2">
          <button type="submit" className="btn btn-primary form-control" >Login</button>
        </div>
        <div className="col-auto mb-3">
          <p>Don't have an account?<a href="#" className="link">Register</a></p>
        </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
