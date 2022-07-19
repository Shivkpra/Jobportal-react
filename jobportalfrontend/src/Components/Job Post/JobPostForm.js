import React, { useState} from "react";
import Footer from "../Sign-up and Login/Footer";
import { useDispatch,useSelector } from "react-redux";
import { postjobs } from "../Services/redux/Actions";
import { comp_detail } from "../Services/redux/Actions";

var info = {
  "job_title": String,
  "job_description": String,
  "job_type": String,
  "job_openings": Number,
  "salary_range": String,
  "job_location": String,
  "access": String,
  "role": Number,
}

function CompanyJobPostForm() {
  const dispatch = useDispatch();
  const access = useSelector(state=>state.jobportal.data.access)
  const role = useSelector(state=>state.jobportal.data.role)
  const loggedIn = useSelector(state=>state.jobportal.logedIn)
  dispatch(comp_detail(access))
  const comp_id = useSelector(state=>state.jobportal.companyDetail.id)
  const [jobPost, setJobPost] = useState(info)

  const handleSubmit = (event) => {
    event.preventDefault();
    if(loggedIn){
      if (role === 'COMPANY'){
        let data = {
          "company" : comp_id,
          "job_title": jobPost.job_title,
          "job_description": jobPost.job_description,
          "job_type": jobPost.job_type,
          "job_openings": jobPost.job_openings,
          "salary_range": jobPost.salary_range,
          "job_location": jobPost.job_location,
          "access": access,
        }
        dispatch(postjobs(data))
        setJobPost(info)
      }
      
    }
  }
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
                      <h1 class="display-5 fw-bold">Company Job Post</h1>
                      <p class="lead" style={{ opacity: "0.6" }}>
                        Finding The Right One Isn’t Hard
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
                value = {jobPost.job_title}
                onChange = {(e)=>{
                  setJobPost({...jobPost,job_title:e.target.value})
                }}
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
                value = {jobPost.job_type}
                onChange = {(e)=>{
                  setJobPost({...jobPost,job_type:e.target.value})
                }}
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
                  value = {jobPost.job_description}
                onChange = {(e)=>{
                  setJobPost({...jobPost,job_description:e.target.value})
                }}
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
                value = {jobPost.job_openings}
                onChange = {(e)=>{
                  setJobPost({...jobPost,job_openings:e.target.value})
                }}
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
                value = {jobPost.salary_range}
                onChange = {(e)=>{
                  setJobPost({...jobPost,salary_range:e.target.value})
                }}
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
                value = {jobPost.job_location}
                onChange = {(e)=>{
                  setJobPost({...jobPost,job_location:e.target.value})
                }}
              />
            </div>
          </div>

          <button
            class="btn px-3 py-2 text-white"
            style={{ backgroundColor: "#1440AE" }}
            onClick= {handleSubmit}
          >
            Add Job
          </button>
        </form>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default CompanyJobPostForm;
