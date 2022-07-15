import React from "react";
import "./Navbar.css";
import CareerStats from "./careerStats";
import JobsList from "./jobsList";
import BottomPanel from "./bottomPanel";
import Footer from "../Sign-up and Login/Footer";
import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <React.Fragment>
      <div class="bg-image">
        <div className="overlay">
          <div className="container">
            <header class="header">
              <div className="row py-4">
                <div
                  className="col-lg-2 text-white"
                  style={{ fontSize: "26px", letterSpacing: "2px" }}
                >
                  CAREERS
                </div>
                <div className="col-lg-8">
                  <nav class="navbar navbar-expand-lg navbar-dark">
                    <button
                      class="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                    >
                      <span class="navbar-toggler-icon"></span>
                    </button>

                    <div
                      class="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul class="navbar-nav ml-auto nav-links">
                        <li class="nav-item">
                          <a class="nav-link px-2 py-0">
                            Home
                          </a>
                        </li>

                        <li class="nav-item ml-2">
                          <a
                            class="nav-link px-2 py-0"
                            data-toggle="modal"
                            data-target=".bd-example-modal-lg2"
                          >
                            Job Listings
                          </a>
                        </li>
                        <li class="nav-item">
                          <Link to="/register">
                          <a
                            class="nav-link px-2 py-0"
                            data-toggle="modal"
                            data-target=".bd-example-modal-lg"
                          >
                            Register
                          </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="col-lg-2">
                  <button
                    type="button"
                    class="btn p-2 text-white"
                    style={{ width: "100%", backgroundColor: "#1440AE" }}
                  >
                    Log In
                  </button>
                </div>
              </div>

              <div class="mt-5 text-white text-center">
                <div class="row text-white">
                  <div class="col-lg-12">
                    <div class="panel-content" style={{ margin: "80px" }}>
                      <h1 class="display-5 fw-bold">
                        A Powerful Career Website Template
                      </h1>
                      <p class="lead" style={{ opacity: "0.6" }}>
                        Find your dream jobs in our powerful career website
                      </p>
                    </div>
                  </div>
                </div>

                <div class="row text-white">
                  <div class="col-lg-3">
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control p-2"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="Job Title"
                      />
                    </div>
                  </div>

                  <div class="col-lg-3">
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control p-2"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="Job Location"
                      />
                    </div>
                  </div>

                  <div class="col-lg-3">
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control p-2"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="Job Type"
                      />
                    </div>
                  </div>

                  <div class="col-lg-3">
                    <button
                      type="button"
                      class="btn p-2 text-white"
                      style={{ width: "100%", backgroundColor: "#1440AE" }}
                    >
                      Search Job
                    </button>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
      <CareerStats />
      <JobsList />
      <BottomPanel />
      <Footer/>
    </React.Fragment>
  );
}

export default HomeScreen;