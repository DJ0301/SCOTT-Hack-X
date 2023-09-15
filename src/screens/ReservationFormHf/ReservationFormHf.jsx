import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const ReservationFormHf = () => {
  return (
    <div className="reservation-form-HF">
      <Link className="div-4" to="/reservation-form-filled">
        <div className="group-2">
          <div className="reserve-a-table-wrapper">
            <div className="reserve-a-table">RESERVE A TABLE</div>
          </div>
          <div className="overlap-2">
            <div className="component">
              <img className="line-2" alt="Line" src="/img/line-3.svg" />
            </div>
            <img className="image" alt="Image" src="/img/image-1.png" />
          </div>
          <div className="overlap-group-2">
            <div className="component">
              <img className="line-2" alt="Line" src="/img/line-3.svg" />
            </div>
            <img className="image-2" alt="Image" src="/img/image-2.png" />
          </div>
          <div className="overlap-3">
            <div className="component">
              <img className="line-2" alt="Line" src="/img/line-3.svg" />
            </div>
            <img className="image-3" alt="Image" src="/img/image-3.png" />
          </div>
          <div className="overlap-4">
            <div className="component">
              <img className="line-2" alt="Line" src="/img/line-3.svg" />
            </div>
            <img className="image-4" alt="Image" src="/img/image-4.png" />
          </div>
        </div>
        <img className="vector-2" alt="Vector" src="/img/vector-3.svg" />
        <img className="vector-3" alt="Vector" src="/img/vector-3.svg" />
      </Link>
    </div>
  );
};
