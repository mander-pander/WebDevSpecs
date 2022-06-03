import React, {useState} from 'react';
import data from '../data'

const InfoCard = () => {
    const {id, name, city, country, employer, title, favoriteMovies} = data[0];

  return (
    <div>
        <h1>{id}</h1>
    </div>
  )
}

export default InfoCard;
