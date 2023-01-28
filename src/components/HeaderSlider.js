import React, { useRef } from "react";

import emailjs from "@emailjs/browser";
import img1 from "../assets/cons.png";
import img2 from "../assets/student.png";
import "./headerSlider.css";
export const HeaderSlider = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3928c96",
        "template_yz0nx7u",
        form.current,
        "7Iimc8nS0sr2zc72q"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

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
      <div className="headerEmail">
        <form
          style={{ display: "flex", flexDirection: "column" }}
          ref={form}
          onSubmit={sendEmail}
        >
          <h3 className="text-light">Drop Your Inquiry</h3>
          <label className="text-light">Name</label>
          <input required type="text" name="user_name" />
          <label className="text-light">Email</label>
          <input required type="email" name="user_email" />
          <label className="text-light">Message</label>
          <textarea required name="message" />
          <button className="btn btn-outline-danger mt-4" type="submit" value="Send"><strong>Send</strong></button>
        </form>
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
