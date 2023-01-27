import React from "react";

import "./careerAndSubscription.css";
import { GiNewspaper } from "react-icons/gi";

const CareerAndSubscription = () => {
  return (
    <div className="carrerContainer mt-5 d-flex justify-content-center align-items-center">
      <div className="d-flex mt-2 flex-row col-12">
        <div className="col-6">
          <div className="d-flex flex-row justify-content-evenly align-items-center counsel">
            <div className="shadow careerContainer1 d-flex justify-content-center align-items-center">
              <h4>Career Counseling</h4>
            </div>
            <div className="shadow careerContainer2 d-flex justify-content-center align-items-center">
              <h4>Visa Counseling</h4>
            </div>
          </div>
        </div>
        <div className="col-6 d-flex flex-column align-items-center ">
          <h4 className="fw-semibold mt-4">
            News Letter Sign up <GiNewspaper />
          </h4>
          <p>Connect with us for future notice</p>
          <div class="input-group mb-3 d-flex justify-content-center mt-3">
            <input
              type="text"
              class="form border-1 border p-3"
              placeholder="Enter an email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <button className="btn btn-danger p-3">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerAndSubscription;
