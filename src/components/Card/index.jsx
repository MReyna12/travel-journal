import React from "react";
import "./index.css";

function Card(props) {
  return (
    <section className="flex section-spacing">
      <div className="container-width">
        <div className="card-photo-container">
          <img
            className="image-width"
            src={props.item.imageUrl}
            alt={props.item.imageAltText}
          />
        </div>
        <div>
          <div className="flex align-items-center">
            <div className="pin-container">
              <img className="image-width" src="/pin.png" alt="Location pin" />
            </div>
            <h5>{props.item.location}</h5>
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
          </div>
          <div>
            <h2>{props.item.title}</h2>
            <p>
              {props.item.startDate} - {props.item.endDate}
            </p>
            <p>{props.item.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
