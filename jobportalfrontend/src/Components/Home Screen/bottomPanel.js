import React from "react";

function BottomPanel() {
  return (
    <div className="text-white" style={{ backgroundColor: "#1440AE" }}>
      <div class="container py-5">
        <div className="row">
          <div className="col-lg-7">
            <div class="panel-content text-white">
              <h1>Looking For A Job?</h1>
              <p class="lead mb-0" style={{ opacity: "0.6" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit tempora
                adipisci impedit.
              </p>
            </div>
          </div>

          <div className="col-lg-5">
            <button
              type="button"
              class="btn btn-lg mt-4"
              style={{
                width: "60%",
                backgroundColor: "#FFF568",
                float: "right",
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomPanel;
