import React from "react";

import toronto from "../assets/torontojfif.jfif";
import wsu from "../assets/westernsu.jpeg";

function CollegeList() {
  const university = [
    {
      name: "Unvirsity of Toronto",
      clzimg: toronto,
    },
    {
      name: "Western Sydney University",
      clzimg: wsu,
    },
  ];
  return (
    <div>
      <h4 className="text-danger m-3">ASSOCIATED COLLEGE</h4>
      <div className="d-flex flex-row align-items-center justify-content-center gap-5">
        {university.map((college) => {
          return (
            <div className="d-flex flex-columnjustify-content-center align-items-center">
              <div className="shadow p-4">
                <img
                    className="rounded-1"
                  height={"300rem"}
                  width={"400rem"}
                  src={college.clzimg}
                  alt="clz"
                />
                <div
                  style={{ width: "400px" }}
                  className="d-flex justify-content-between align-items-center m-4"
                >
                  <h6 className="">{college.name}</h6>
                  <button className="btn btn-danger">View Details</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CollegeList;
