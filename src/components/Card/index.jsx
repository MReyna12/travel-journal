import React from "react";

function Card(props) {
  console.log(props.item.imageAltText);
  return (
    <section>
      <div>
        <img
          src={props.item.imageUrl}
          alt={props.item.imageAltText}
          width={300}
        />
      </div>
      <div>
        <div>
          <img src="" alt="Location pin" />
          <h5>{props.item.location}</h5>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2>{props.item.title}</h2>
        <p>
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p>{props.item.description}</p>
      </div>
    </section>
  );
}

export default Card;
