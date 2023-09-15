import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <Link className="reservation-form-2" to="/reservation-form-phone-enterd">
        <div className="group-5">
          <div className="home-order-5">
            <div className="reserve-a-table-4">RESERVE A TABLE</div>
          </div>
          <div className="overlap-group-5">
            <div className="component-2">
              <img className="line-5" alt="Line" />
            </div>
            <img className="image-13" alt="Image" />
          </div>
          <div className="overlap-11">
            <div className="component-2">
              <img className="line-5" alt="Line" />
            </div>
            <img className="image-14" alt="Image" />
          </div>
          <div className="overlap-12">
            <div className="component-2">
              <img className="line-5" alt="Line" />
            </div>
            <img className="image-15" alt="Image" />
          </div>
          <div className="overlap-13">
            <div className="component-2">
              <img className="line-5" alt="Line" />
            </div>
            <img className="image-16" alt="Image" />
          </div>
        </div>
      </Link>
    </div>
  );
};
