import React from "react";

const Travel = ({destination, country, photo, distance}) => (
    <section>
        <h2>{destination}</h2>
        <p>{country}, {distance} km</p>
        <img
        src={photo}
        alt={destination}
        />
    </section>

);

export default Travel;