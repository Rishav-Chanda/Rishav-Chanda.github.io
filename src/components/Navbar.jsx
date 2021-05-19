import React from "react"

const Navbar = () => {
  return (

    <>
      <div className="container-fluid nav_bg navbar-dark side_padding_bg">
        <div className='row'>
          <div className="col-10 mx-auto">




            <nav className="navbar navbar-expand-lg navbar-dark ">
              <div className="container-fluid">
                <a class="navbar-brand " href="#" >
                  <img src="https://firebasestorage.googleapis.com/v0/b/login-ea5e2.appspot.com/o/code.svg?alt=media&token=310eae8c-35c9-487f-81c6-baaf32153c7b" alt="" width="50" height="50" class="d-inline-block align-text-top"/>
                  Rishav Chanda
                </a>

                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                      <li className="nav-item active">
                        <a className="nav-link " aria-current="page" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="#">About</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="#">Courses</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="#">Contact</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="#">Login</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="#">SingUp</a>
                      </li>
                    </ul>
                  </div>
              </div>
            </nav>
          </div>
          </div>
        </div>
    </>

  );
};

export default Navbar;