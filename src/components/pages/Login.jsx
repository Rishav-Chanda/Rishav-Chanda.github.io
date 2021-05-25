
import React  from "react";
import login from "../assets/images/Login.gif"

const Login = () => {

  

    return (

        <>
            <div className="container">
                <div className="row content">
                    <div className="col-md-6 mb-3">
                       <img className="img-fluid image-size" src={login} alt="" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <h4 className="login-text mb-3 navbar-brand"> Login</h4>
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" className="form-control"  />
                               
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" className="form-control"  />
                                
                            </div>
                            <button className="btn btn-class color-green" >LOGIN</button>
                        </form>

                    </div>

                </div>

            </div>
        </>

    );
};

export default Login;