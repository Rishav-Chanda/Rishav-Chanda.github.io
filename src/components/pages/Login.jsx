import React from "react"

const Login = () => {
    return (

        <>
            <div className="container">
                <div className="row content">
                    <div className="col-md-6 mb-3">
                       <img className="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/login-ea5e2.appspot.com/o/Programming.gif?alt=media&token=55b82912-fbb1-4fb5-a32e-f0de8ba28a84" alt="" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <h3 class="login-text mb-3"> Login</h3>
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" className="form-control"/>
                            </div>
                            <button className="btn btn-class">LOGIN</button>
                        </form>

                    </div>

                </div>

            </div>
        </>

    );
};

export default Login;