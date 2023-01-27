import React, { useState } from "react";
import "./testPrepList.css";

const tabs = [
  {
    label: "IELTS",
    contentHead: "IELTS TEST STRUCTURE",
    content:
      "IELTS is the International English Language Testing System, the world’s proven English language test. IELTS was one of the pioneers of four skills English language testing over 21 years ago, and continues to set the standard for English language testing today. IELTS is accepted as evidence of English language proficiency by over 8,000 organizations worldwide.",
  },
  {
    label: "GMAT",
    contentHead: "GRADUATE MANAGEMENT ADMISSIONS TEST",
    content:
      "The Graduate Management Admission Test (GMAT) is a computer adaptive test (CAT) which assesses a candidate’s analytical, writing, quantitative, verbal, and reading skills in standard written English in preparation for being admitted into a graduate management program, such as an MBA.",
  },
  {
    label: "TOEFL",
    contentHead: "TEST OF ENGLISH AS A FOREIGN LANGUAGE",
    content:
      "Test of English as a Foreign Language or TOEFL, is a standardized test of English language proficiency for non-native English language speakers wishing to enroll in U.S. universities. The test is accepted by many English-speaking academic and professional institutions.",
  },
  {
    label: "GRE",
    contentHead: "GRADUATE RECORD EXAMINATIONS",
    content:
      "All aspirants can take up this exam irrespective of the academic qualification. The exam is mainly conducted for admission into graduate level, post graduate level as well as doctoral programs. Admission to various courses will be on the basis of the marks in the concerned qualifying exams as well. All citizens are free to write this exam.",
  },
  {
    label: "SAT",
    contentHead: "SCHOOL ADMISSION TEST",
    content:
      "The Law School Admission Test (LSAT) is a half-day standardized test administered four times each year at designated testing centers throughout the world. Administered by the Law School Admission Council (LSAC) for prospective law school candidates, the LSAT is designed to assess reading comprehension, logical, and verbal reasoning proficiencies.",
  },
];

function TestPrepList() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabBody  d-flex flex-row">
      <div className="d-flex flex-column p-4">
        <h4 className="bg-secondary-subtle p-2">
          {tabs[activeTab].contentHead}
        </h4>
        <p>{tabs[activeTab].content}</p>
        <button className="btn btn-danger">View More</button>
      </div>
      <div className="tabs d-flex p-5 align-items-center justify-content-center gap-4">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${
              activeTab === index
                ? "tabs active-tabs flex-fill"
                : "tabs flex-fill"
            }`}
            onClick={() => setActiveTab(index)}
          >
            <h3>{tab.label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestPrepList;
