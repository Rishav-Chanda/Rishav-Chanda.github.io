import React from "react"
import { NavLink } from "react-router-dom";
import { button } from "bootstrap";

const Navbar = () => {
  return (

    <>
      <div className="container-fluid nav_bg navbar-dark side_padding_bg">
        <div className='row'>
          <div className="col-10 mx-auto">




            <nav className="navbar navbar-expand-lg navbar-dark ">
              <div className="container-fluid">
                <a class="navbar-brand " href="#" >
                  <img src="https://firebasestorage.googleapis.com/v0/b/login-ea5e2.appspot.com/o/code.svg?alt=media&token=310eae8c-35c9-487f-81c6-baaf32153c7b" alt="" width="50" height="50" class="d-inline-block align-text-top" />
                  Rishav Chanda
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active" exact className="nav-link " aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active" className="nav-link " aria-current="page" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active" className="nav-link " aria-current="page" to="/courses">Courses</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active" className="nav-link " aria-current="page" to="/contact">Contact</NavLink>
                    </li>
                    <button type="button" className="nav-item btn btn-outline-success btn-sm mr-5">
                      <NavLink activeClassName="menu_active" className="nav-link " aria-current="page" to="/login">Login</NavLink>
                    </button>
                    <button  type="button" className="nav-item btn btn-outline-info">
                      <NavLink activeClassName="menu_active" className="nav-link " aria-current="page" to="/singup">SingUp</NavLink>
                    </button>
                   
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