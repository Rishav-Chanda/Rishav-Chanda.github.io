import React from "react"
import { NavLink } from "react-router-dom";
import { button } from "bootstrap";
import Logo from "./assets/images/rishav.jpg"

const Navbar = () => {
  return (

    <>
      <div className="container-fluid nav_bg navbar-light mt-2">
        <div className='row'>
          <div className="col-10 mx-auto">




            <nav className="navbar navbar-expand-lg navbar-light navbar-custom ">
              <div className="container-fluid">
                <img class="rounded-circle z-depth-5 mr-4" alt="" src={Logo} width="60" height="60"
                  data-holder-rendered="true"/>
                  <a class="navbar-brand " href="#" >
                    <span className="span-color-green">&#60;</span>Rishav<span className="span-color-orange">&#47;</span>Chanda<span className="span-color-green">&#62;</span>
                  </a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                      <li className="nav-item mr-4 navbar-texts">
                        <NavLink activeClassName="menu_active" exact className="nav-link " aria-current="page" to="/">Home</NavLink>
                      </li>
                      <li className="nav-item mr-4 ">
                        <NavLink activeClassName="menu_active" className="nav-link " aria-current="page" to="/about">About</NavLink>
                      </li>
                      <li className="nav-item mr-4">
                        <NavLink activeClassName="menu_active" className="nav-link " aria-current="page" to="/courses">Courses</NavLink>
                      </li>
                      <li className="nav-item  mr-5 ">
                        <NavLink activeClassName="menu_active" className="nav-link " aria-current="page" to="/contact">Contact</NavLink>
                      </li>

                    </ul>

                    <div className="d-flex">
                      <NavLink className="btn btn-color mr-2 ml-4" to="/login">Login
                    </NavLink>
                      <NavLink className="btn btn-color" to="/singup">SignUp
                    </NavLink>
                    </div>
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