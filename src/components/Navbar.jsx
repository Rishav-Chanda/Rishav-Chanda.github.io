import React from "react"
import { NavLink } from "react-router-dom";
import { button } from "bootstrap";

const Navbar = () => {
  return (

    <>
      <div className="container-fluid nav_bg navbar-dark side_padding_bg shadow p-3 mb-5 bg-body rounded h-25">
        <div className='row'>
          <div className="col-10 mx-auto">




            <nav className="navbar navbar-expand-lg navbar-light navbar-custom ">
              <div className="container-fluid">
                <a class="navbar-brand " href="#" >
                  <img src="https://firebasestorage.googleapis.com/v0/b/login-ea5e2.appspot.com/o/20210520_221246.png?alt=media&token=40570207-2e07-4264-b927-d57825470682" alt="" width="20" height="8" class="d-inline-block align-text-top" />
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item mr-2 navbar-texts">
                      <NavLink activeClassName="menu_active" exact className="nav-link " aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item mr-2 ">
                      <NavLink activeClassName="menu_active" className="nav-link " aria-current="page" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item mr-2">
                      <NavLink activeClassName="menu_active" className="nav-link " aria-current="page" to="/courses">Courses</NavLink>
                    </li>
                    <li className="nav-item  mr-5">
                      <NavLink activeClassName="menu_active" className="nav-link " aria-current="page" to="/contact">Contact</NavLink>
                    </li>
                    <li type="button" className="nav-item btn btn-success mr-2  btn-height ">
                      <NavLink activeClassName="menu_active" className="nav-link " aria-current="page" to="/login">Login</NavLink>
                    </li>
                    <li type="button" className="nav-item btn btn-info btn-height" >
                      <NavLink activeClassName="menu_active" className="nav-link " aria-current="page" to="/singup">SingUp</NavLink>
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