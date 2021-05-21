import React from "react"

import { NavLink } from "react-router-dom";

const Home = () => {
  return (

    <>
      <section id="header" className="d-flex align-items-center mt-5 " >
           <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row  mt-3">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Get all <strong className="navbar-brand-big">tutorials</strong> and <strong className="navbar-brand-big">Projects</strong > with <strong className="navbar-brand-big">SourceCode</strong>
                  </h1>
                  <h5 className="my-3 text-secondary">
                    Find all projects and programming tutorials and source codes here from Rishav Chanda. Here all Coding related stuffs are taught.
                   </h5>
                   <div className="mt-3">
                     <NavLink to="/" className="btn btn-color-orange ">
                       Get Started
                     </NavLink>
                     
                   </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-image">
                  <img src="https://firebasestorage.googleapis.com/v0/b/login-ea5e2.appspot.com/o/Programming.gif?alt=media&token=55b82912-fbb1-4fb5-a32e-f0de8ba28a84" alt="" />

                </div>
              </div>

            </div>

          </div>

        </div>

      </section>
      <div>

      </div>
    </>

  );
};

export default Home;

