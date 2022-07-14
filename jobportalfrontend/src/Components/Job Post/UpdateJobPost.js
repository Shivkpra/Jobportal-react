import React from "react";
import Footer from "../Sign-up and Login/Footer";

function UpdateJobPostForm() {
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
                          <a class="nav-link px-2 py-0" href="#">
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
                          <a
                            class="nav-link px-2 py-0"
                            data-toggle="modal"
                            data-target=".bd-example-modal-lg"
                          >
                            Register
                          </a>
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
                    <div class="panel-content" style={{ margin: "20px" }}>
                      <h1 class="display-5 fw-bold">Update Job Post</h1>
                      <p class="lead" style={{ opacity: "0.6" }}>
                        Update your job details in case anything was left out or
                        provided incorrectly!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <form>
          <div class="row mb-1">
            <div class="col-lg-6 mb-3">
              <label for="job_title" className="mb-2">
                Job Title
              </label>
              <input
                type="text"
                class="form-control"
                id="job_title"
                placeholder="Enter Job Title"
                required
              />
            </div>

            <div class="col-lg-6 mb-3">
              <label for="job_type" className="mb-2">
                Job Type
              </label>
              <input
                type="tel"
                class="form-control"
                id="job_type"
                placeholder="Enter Job Type"
                required
              />
            </div>

            <div class="col-lg-6">
              <div class="form-group mb-3">
                <label for="job_desc" className="mb-2">
                  Job Description
                </label>
                <textarea
                  class="form-control"
                  id="job_desc"
                  rows="1"
                  placeholder="Enter Job Description"
                  required
                ></textarea>
              </div>
            </div>

            <div class="col-lg-6 mb-3">
              <label for="job_openings" className="mb-2">
                Job Openings
              </label>
              <input
                type="number"
                class="form-control"
                id="job_openings"
                placeholder="Enter Job Openings"
                required
              />
            </div>

            <div class="col-lg-6 mb-3">
              <label for="salary_range" className="mb-2">
                Salary Range
              </label>
              <input
                type="text"
                class="form-control"
                id="salary_range"
                placeholder="Enter Salary Range"
                required
              />
            </div>

            <div class="col-lg-6 mb-3">
              <label for="job_location" className="mb-2">
                Job Location
              </label>
              <input
                type="text"
                class="form-control"
                id="job_location"
                placeholder="Enter Job Location"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            class="btn px-3 py-2 text-white"
            style={{ backgroundColor: "#1440AE" }}
          >
            Update Job
          </button>
        </form>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default UpdateJobPostForm;
