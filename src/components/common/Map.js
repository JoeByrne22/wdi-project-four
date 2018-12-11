import React from 'react';
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';
import { Link } from 'react-router-dom';

const PlaceMap = ({ userPosition, places }) => {
  console.log('Map Page places is', places);
  console.log('this is user P ', userPosition);
  return (
    <div id='map'>
      {places && <Map center={userPosition || places[0].location } zoom={14}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {userPosition && <Marker position={userPosition}>
          <Popup>
            You are Here
          </Popup>
        </Marker>}
        {places && places.map(place =>
          <Marker
            key={place._id}
            position={[ place.location.lat, place.location.lng ]}>
            <Popup>
              <Link to={`/places/${place._id}`}>
                {place.name}
              </Link>
            </Popup>
          </Marker>
        )}
      </Map>}
    </div>
  );
};

export default PlaceMap;
