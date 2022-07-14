import React from "react";
import "./DetailForm.css";
import Footer from "../Sign-up and Login/Footer";

function CompanyDetailsPage() {
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
                      <h1 class="display-5 fw-bold">Company Details Page</h1>
                      <p class="lead" style={{ opacity: "0.6" }}>
                        Register your company details in our powerful career
                        website
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
          <div class="row mb-3">
            <div class="col">
              <label for="company_name" className="mb-2">
                Company Name
              </label>
              <input
                type="text"
                class="form-control"
                id="company_name"
                placeholder="Enter Company Name"
                required
              />
            </div>
            <div class="col">
              <label for="contact_no" className="mb-2">
                Company Contact
              </label>
              <input
                type="tel"
                class="form-control"
                id="contact_no"
                placeholder="Enter Company Contact"
                required
              />
            </div>
          </div>
          <div class="form-group mb-3">
            <label for="company_address" className="mb-2">
              Company Address
            </label>
            <input
              type="text"
              class="form-control"
              id="company_address"
              placeholder="Enter Company Address"
              required
            />
          </div>

          <div class="row mb-3">
            <div class="col">
              <label for="company_domain" className="mb-2">
                Company Domain
              </label>
              <input
                type="text"
                class="form-control"
                id="company_domain"
                placeholder="Enter Company Domain"
                required
              />
            </div>

            <div class="col">
              <label for="employee_count" className="mb-2">
                Employee Count
              </label>
              <input
                type="number"
                class="form-control"
                id="employee_count"
                placeholder="Enter Company Employee Count"
                required
              />
            </div>
          </div>

          <div class="form-group mb-3">
            <label for="company_description" className="mb-2">
              Company Description
            </label>
            <textarea
              class="form-control"
              id="company_description"
              rows="5"
              placeholder="Enter Company Description"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="btn px-3 py-2 text-white"
            style={{ backgroundColor: "#1440AE" }}
          >
            Submit Details
          </button>
        </form>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default CompanyDetailsPage;
