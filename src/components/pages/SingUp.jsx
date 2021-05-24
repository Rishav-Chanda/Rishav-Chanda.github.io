import React from "react"


const SingUp = (props) => {
   
    return (

        <>
            <div className="container">
                <div className="row content">
                    <div className="col-md-6 mb-3">
                        <img className="img-fluid image-size" src="https://firebasestorage.googleapis.com/v0/b/login-ea5e2.appspot.com/o/Mobile%20login.gif?alt=media&token=3d84ac1c-fdfe-4879-a354-1935b55a6929" alt="" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <h4 className="login-text mb-3 navbar-brand"> SignUp</h4>
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="Name">Name</label>
                                <input type="name" name="name" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" className="form-control" />
                            </div>

                            <button className="btn btn-class color-green">REGISTER</button>
                        </form>

                    </div>

                </div>

            </div>
        </>

    );
};

export default SingUp;