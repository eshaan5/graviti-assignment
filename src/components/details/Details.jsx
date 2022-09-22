import React from "react";
import placeholder from "../../assets/placeholder.png";
import "./details.css";

const Details = ({ Autocomplete, originRef, destinationRef, calculateRoute, distance, duration }) => {

  console.log(originRef.current.value, destinationRef.current.value)

  return (
    <div className="details">
      <div className="flex">
        <div className="inputs">
          <div className="origin-input">
            <label htmlFor="origin">Origin</label>
            <div className="input">
              <img src={placeholder} alt="" className="placeholder" />
              <Autocomplete>
              <input type="text" name="origin" id="origin" placeholder="Enter origin" ref={originRef} />
              </Autocomplete>
            </div>
          </div>

          <div className="destination-input">
            <label htmlFor="origin">Destination</label>
            <div className="input">
              <img src={placeholder} alt="" className="placeholder" />
              <Autocomplete>
              <input type="text" name="destination" id="destination" placeholder="Enter destination" ref={destinationRef} />
              </Autocomplete>
            </div>
          </div>
        </div>

        <div className="button">
          <button onClick={calculateRoute}>Calculate</button>
        </div>
      </div>
      <div className="results">
        <div className="distance">
          <p className="content">Distance</p>
          <p className="value">{distance}</p>
        </div>
        <div className="eta">
          <p className="content">ETA</p>
          <p className="value">{duration}</p>
        </div>
      </div>
      { (originRef.current.value !== '' && destinationRef.current.value !== '') ? (<p className="final">
        The distance between <b>{originRef.current.value}</b> and <b>{destinationRef.current.value}</b> is <b>{distance}</b> and estimated time of arrival (ETA) is <b>{duration}</b>.
      </p>) : null}
    </div>
  );
};

export default Details;
