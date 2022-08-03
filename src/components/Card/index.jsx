import React from "react";

function Card(props) {
  console.log(props.item.imageAltText);
  return (
    <section>
      <div>
        <img src={props.item.imageUrl} alt={props.item.imageAltText} />
      </div>
      <div></div>
    </section>
  );
}

export default Card;
