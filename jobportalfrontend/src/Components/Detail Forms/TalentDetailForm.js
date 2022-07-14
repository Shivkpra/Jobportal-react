import React from "react";
import "./DetailForm.css";
import Footer from "../Sign-up and Login/Footer";
import { Link } from "react-router-dom";

function TalentDetailsPage() {
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
                          <Link to="/home">
                          <a class="nav-link px-2 py-0">
                            Home
                          </a>
                          </Link>
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
                      <h1 class="display-5 fw-bold">Talent Details Page</h1>
                      <p class="lead" style={{ opacity: "0.6" }}>
                        Register your talent details in our powerful career
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
              <label for="talent_phone" className="mb-2">
                Talent Contact
              </label>
              <input
                type="text"
                class="form-control"
                id="talent_phone"
                placeholder="Enter Talent Contact"
                required
              />
            </div>
            <div class="col">
              <label for="gender" className="mb-2">
                Talent Gender
              </label>
              <select class="form-control" id="gender" name="gender">
                <option selected disabled>
                  Select a Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unknown">Unknown</option>
              </select>
            </div>
          </div>
          <div class="form-group mb-3">
            <label for="higher_education" className="mb-2">
              Higher Education Details
            </label>
            <input
              type="text"
              class="form-control"
              id="higher_education"
              placeholder="Enter Higher Education Details"
              required
            />
          </div>

          <div class="row mb-3">
            <div class="col">
              <label for="talent_address" className="mb-2">
                Talent Address
              </label>
              <input
                type="text"
                class="form-control"
                id="talent_address"
                placeholder="Enter Talent Address"
                required
              />
            </div>

            <div class="col">
              <label for="employee_exp" className="mb-2">
                Experience (In Years)
              </label>
              <input
                type="number"
                class="form-control"
                id="employee_exp"
                placeholder="Enter Employee Experience"
                required
              />
            </div>
          </div>

          <div class="form-group mb-3">
            <label for="talent_skills" className="mb-2">
              Talent Skills
            </label>
            <input
              type="text"
              class="form-control"
              id="talent_skills"
              placeholder="Enter Talent Skills"
              required
            />
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

export default TalentDetailsPage;
