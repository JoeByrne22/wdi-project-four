import React from 'react';
import { Link } from 'react-router-dom';

function PlacesBox({ place }) {
  console.log('this is the place', place);
  return (
    <Link to={`/places/${place._id}`}>
      <article className="place-box">
        <h3 className="indexInfo" >{place.name}</h3>
        {
          (place.avgRating === null)
            ?
            <h4 className="indexInfo indexRating" >Still needs to be rated</h4>
            :
            <h4 className="indexInfo indexRating" >{'📖'.repeat(place.avgRating)}</h4>
        }
        <img src={place.image} />
        <hr />
      </article>
    </Link>
  );
}

export default PlacesBox;
