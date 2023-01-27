import React from "react";
import "./header.css";
import { AiOutlineMail,AiOutlinePlus} from 'react-icons/ai';
import { FiPhoneCall} from 'react-icons/fi';
import { BiMobile} from 'react-icons/bi';
import logo from '../companylogo.png'

export const Header = () => {
  return <div>
    <div className="p-2 bg-secondary-subtle d-flex flex-row justify-content-center">
        <div className="d-flex flex-row col-6 justify-content-center">
            <span className="col-2 fw-light">About GSC</span>
            <span className="col-2 fw-light">Explore GSC</span>
            <span className="col-2 fw-light">Our Service</span>
            <span className="col-2 fw-light">Careers</span>
        </div>
        <div className="d-flex flex-row col-6 justify-content-center">
            <span className="col-4 align-items-center fw-light"><AiOutlineMail/> info@globalstudycenter.org</span>
            <span className="col-3 align-items-center fw-light"><FiPhoneCall/> 86 06 466 689</span>
            <span className="col-3 align-items-center fw-light"><BiMobile/> 95 26 647 821</span>
            </div>
    </div>
    <div className="d-flex justify-content-center alignitems-center">
        <img src={logo} alt="company logo" />
    </div>
    <div className="d-flex justify-content-center alignitems-center p-2 bg-danger bg-opacity-60">
    <span className="flex-fill align-items-center text-light">STUDY ABROAD <AiOutlinePlus/></span>
    <span className=" flex-fill align-items-center text-light">COURSES <AiOutlinePlus/></span>
    <span className="flex-fill align-items-center text-light">UNIVERSITY VISIT</span>
    <span className="flex-fill align-items-center text-light">TIPS <AiOutlinePlus/></span>
    <span className=" flex-fill align-items-center text-light">INTERNSHIP PROGRAMS</span>
    <span className="flex-fill align-items-center text-light">SCHOLARSHIPS</span>
    <span className="flex-fill align-items-center text-light">STUDENT SUPPORT <AiOutlinePlus/></span>
    <span className="flex-fill align-items-center text-light">CONTACT US <AiOutlinePlus/></span>
    </div>
  </div>;
};
