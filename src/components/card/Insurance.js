import React from "react";
import styles from "./style.css";
const InsuranceCard = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="Insurance-card ">
        <div className="card-img">
        <a href="#">
            <img src="img/Loan.svg"></img>
            </a>
          </div>
          <div className="card-content">
            <div className="title">
              <span className="icon">
                <img src="img/Group 427320731.svg"></img>
              </span>
              <a className="card-head-link"href="#"><h3>Loan Corp</h3></a>
            </div>
            <p>
              Loan corp is a loan processing system that automates the work flow
              using the camunda BPM.
            </p>
            <div className="btn-container">
            <button className="btn">Insurance</button>
            <button className="btn gap">Web</button>
            <button className="btn gap">Mobile</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceCard;
