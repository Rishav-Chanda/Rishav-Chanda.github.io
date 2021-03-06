import React from "react"
import Projects from "../Projects"
import Tutorials from "../Tutorials"
import { NavLink } from "react-router-dom";
import headerimage from "../assets/images/header.svg"

const Home = () => {
  return (

    <>
      <section id="header" className="d-flex align-items-center mt-5 " >
        <div className="container-fluid nav_bg ">
          <div className="row mt-4">
            <div className="col-10 container">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="">
                    Get all <strong className="navbar-brand-big">Tutorials   </strong> and <strong className="navbar-brand-big">Projects</strong > with <strong className="navbar-brand-big">SourceCode</strong>
                  </h1>
                  <h5 className="my-3 text-secondary">
                    Find all projects and programming tutorials and source codes here from Rishav Chanda. Here all Coding related stuffs are taught.Confused on which course to take? I have got you covered. Browse courses and find out the best course for you which you want to learn . <strong>Its totally free!!!</strong> I attempt to teach basics and those coding techniques to people in short time which took me lot of time to learn.
                   </h5>
                  <div className="mt-3 ">
                    <NavLink to="/" className="btn btn-color-orange shadow p-3 mb-3">
                      Get Started
                     </NavLink>

                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-image ">
                  <img className="ml-5 image-size img-fluid" src={headerimage} alt="" />

                </div>
              </div>

            </div>

          </div>

        </div>

      </section>
      <Projects/>
      <Tutorials/>
      <div>

      </div>
    </>

  );
};

export default Home;

