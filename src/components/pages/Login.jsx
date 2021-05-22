import React from "react"

const Login = () => {
    return (

        <>
            <div className="container">
                <div className="row content">
                    <div className="col-md-6 mb-3">
                       <img className="img-fluid image-size" src="https://firebasestorage.googleapis.com/v0/b/login-ea5e2.appspot.com/o/My%20password.gif?alt=media&token=d6a5d8ef-732c-488b-83f8-246c7432cc20" alt="" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <h4 className="login-text mb-3 navbar-brand"> Login</h4>
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