import React from 'react';
import { Link } from 'react-router-dom';

function PlacesBox({ place }) {
  return (
    <Link to={`/places/${place._id}`}>
      <article className="place-box">
        <h3>{place.name}</h3>
        <img src={place.image} />
        <hr />
      </article>
    </Link>
  );
}

export default PlacesBox;
