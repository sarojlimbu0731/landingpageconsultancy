import React from "react";

import img1 from "../assets/cons.png";
import img2 from "../assets/student.png";
import "./headerSlider.css";
export const HeaderSlider = () => {
  return (
    <div className="headerContainer">
      <div className="headerPromo d-flex flex-column justify-item-center align-items-center">
        <h1 class="animate__animated animate__bounceInDown bg-danger p-2 text-light bg-opacity-50">
          Make Your Dream Come True
        </h1>
        <h1 className="col-6 animate__animated animate__bounceInLeft bg-danger p-1 text-light bg-opacity-50 animate__delay-1s">
          Study Abroad
        </h1>
      </div>
      <div>
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="2000">
              <img
                height="500rem"
                src={img1}
                class="d-block w-100 p-12 flex-fill"
                alt="a"
              />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img
                height="500rem"
                src={img2}
                class="d-block w-100 p-12 flex-fill"
                alt="b"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};
