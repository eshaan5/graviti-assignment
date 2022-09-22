import React from "react";
import placeholder from "../../assets/placeholder.png";
import "./details.css";

const Details = () => {
  return (
    <div className="details">
      <div className="flex">
        <div className="inputs">
          <div className="origin-input">
            <label htmlFor="origin">Origin</label>
            <div className="input">
              <img src={placeholder} alt="" className="placeholder" />
              <input type="text" name="origin" id="origin" placeholder="Enter origin" />
            </div>
          </div>

          <div className="destination-input">
            <label htmlFor="origin">Destination</label>
            <div className="input">
              <img src={placeholder} alt="" className="placeholder" />
              <input type="text" name="origin" id="origin" placeholder="Enter destination" />
            </div>
          </div>
        </div>

        <div className="button">
          <button>Calculate</button>
        </div>
      </div>
      <div className="results">
        <div className="distance">
          <p className="content">Distance</p>
          <p className="value">1,427 kms</p>
        </div>
        <div className="eta">
          <p className="content">ETA</p>
          <p className="value">2 hrs</p>
        </div>
      </div>
      <p className="final">
        The distance between <b>Mumbai</b> and <b>Delhi</b> is <b>1,427 kms</b> and estimated time of arrival (ETA) is <b>2 hrs</b>.
      </p>
    </div>
  );
};

export default Details;
