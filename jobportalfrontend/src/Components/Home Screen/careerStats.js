import React from "react";

function CareerStats() {
  return (
    <div style={{ backgroundColor: "#1440AE" }}>
      <div class="text-white text-center container py-5">
        <div class="row text-white mb-5">
          <div class="col-lg-12">
            <div class="panel-content">
              <h1>Careers Statistics</h1>
              <p
                class="lead"
                style={{ opacity: "0.6", width: "60%", margin: "0 auto" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita unde officiis recusandae sequi excepturi corrupti.
              </p>
            </div>
          </div>
        </div>

        <div class="row text-white">
          <div class="col-lg-3">
            <div class="mb-3">
              <div className="fw-bold display-4">520</div>
              <p style={{ opacity: "0.6" }}>Candidates</p>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="mb-3">
              <div className="fw-bold display-4">54</div>
              <p style={{ opacity: "0.6" }}>Jobs Posted</p>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="mb-3">
              <div className="fw-bold display-4">120</div>
              <p style={{ opacity: "0.6" }}>Jobs Filled</p>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="mb-3">
              <div className="fw-bold display-4">100+</div>
              <p style={{ opacity: "0.6" }}>Companies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerStats;
