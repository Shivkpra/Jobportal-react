import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Joblist } from "../Services/redux/Actions";



function JobsList() {
  const dispatch = useDispatch('');

  const access = useSelector(state => state.jobportal.data.access)
  const loggedin = useSelector(state => state.jobportal.logedIn)

  const joblist = useSelector(state => state.jobportal.joblist)
  useMemo(()=>{
    if(joblist.length >= 1 ){
      var jobcards = joblist.map(job => {
        return (
          <div class="col-lg-3">
            <div class="mb-3">
              <div className="fw-bold fs-5">{job.job_title}</div>
              <p style={{ opacity: "0.6" }}>{job.job_description}</p>
            </div>
          </div>
    
        )
      })
    }
  }, loggedin)
  
  
  if (loggedin) { dispatch(Joblist(access)) }
  // useEffect(() => {dispatch(joblist(access))},[])

  return (
    <div className="">
      <div class="text-center container py-5">
        <div class="row mb-5">
          <div class="col-lg-12">
            <div class="panel-content">
              <h1>500+ Jobs Listed</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div class="col-lg-3">
                <div class="mb-3">
                  <div className="fw-bold fs-5">Dropbox Product Designer</div>
                  <p style={{ opacity: "0.6" }}>Adidas</p>
                </div>
              </div>

              <div class="col-lg-3">
                <div class="mb-3">
                  <div className="fw-bold fs-5">Delhi</div>
                  <p style={{ opacity: "0.6" }}>India</p>
                </div>
              </div>
              

              <div class="col-lg-3">
                <div class="mb-3">
                  <div className="fw-bold fs-5">Job Type</div>
                  <p style={{ opacity: "0.6" }}>Full-Time</p>
                </div>
              </div>

              <div class="col-lg-3">
                <div class="mb-3">
                  <div className="fw-bold fs-5">Salary</div>
                  <p style={{ opacity: "0.6" }}>Rs. 34000-45000</p>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div className="col-lg-12">
            <div className="row">
              <div class="col-lg-3">
                <div class="mb-3">
                  <div className="fw-bold fs-5">Creative Director</div>
                  <p style={{ opacity: "0.6" }}>Intercom</p>
                </div>
              </div>

              <div class="col-lg-3">
                <div class="mb-3">
                  <div className="fw-bold fs-5">Bangalore</div>
                  <p style={{ opacity: "0.6" }}>India</p>
                </div>
              </div>

              <div class="col-lg-3">
                <div class="mb-3">
                  <div className="fw-bold fs-5">Job Type</div>
                  <p style={{ opacity: "0.6" }}>Full-Time</p>
                </div>
              </div>

              <div class="col-lg-3">
                <div class="mb-3">
                  <div className="fw-bold fs-5">Salary</div>
                  <p style={{ opacity: "0.6" }}>Rs. 50000-75000</p>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div className="col-lg-12">
            <div className="row">
              <div class="col-lg-3">
                <div class="mb-3">
                  <div className="fw-bold fs-5">Full Stack Developer</div>
                  <p style={{ opacity: "0.6" }}>Shopify</p>
                </div>
              </div>

              <div class="col-lg-3">
                <div class="mb-3">
                  <div className="fw-bold fs-5">Mumbai</div>
                  <p style={{ opacity: "0.6" }}>India</p>
                </div>
              </div>

              <div class="col-lg-3">
                <div class="mb-3">
                  <div className="fw-bold fs-5">Job Type</div>
                  <p style={{ opacity: "0.6" }}>Part-Time</p>
                </div>
              </div>

              <div class="col-lg-3">
                <div class="mb-3">
                  <div className="fw-bold fs-5">Salary</div>
                  <p style={{ opacity: "0.6" }}>Rs. 30000-40000</p>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div className="col-lg-12">
            <div className="row">
              <div class="col-lg-3">
                <div class="mb-3">
                  <div className="fw-bold fs-5">Digital Marketing Director</div>
                  <p style={{ opacity: "0.6" }}>Sprint</p>
                </div>
              </div>

              <div class="col-lg-3">
                <div class="mb-3">
                  <div className="fw-bold fs-5">Chennai</div>
                  <p style={{ opacity: "0.6" }}>India</p>
                </div>
              </div>

              <div class="col-lg-3">
                <div class="mb-3">
                  <div className="fw-bold fs-5">Job Type</div>
                  <p style={{ opacity: "0.6" }}>Full-Time</p>
                </div>
              </div>

              <div class="col-lg-3">
                <div class="mb-3">
                  <div className="fw-bold fs-5">Salary</div>
                  <p style={{ opacity: "0.6" }}>Rs. 85000-95000</p>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div className="col-lg-12">
            <div className="row">
              <div class="col-lg-3">
                <div class="mb-3">
                  <div className="fw-bold fs-5">Back-End Engineer (Python)</div>
                  <p style={{ opacity: "0.6" }}>Amazon</p>
                </div>
              </div>

              <div class="col-lg-3">
                <div class="mb-3">
                  <div className="fw-bold fs-5">Noida</div>
                  <p style={{ opacity: "0.6" }}>India</p>
                </div>
              </div>

              <div class="col-lg-3">
                <div class="mb-3">
                  <div className="fw-bold fs-5">Job Type</div>
                  <p style={{ opacity: "0.6" }}>Part-Time</p>
                </div>
              </div>

              <div class="col-lg-3">
                <div class="mb-3">
                  <div className="fw-bold fs-5">Salary</div>
                  <p style={{ opacity: "0.6" }}>Rs. 55000-65000</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default JobsList;
