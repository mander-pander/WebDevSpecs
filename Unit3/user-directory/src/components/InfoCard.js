import React, {useState} from 'react';
import data from '../data'

const InfoCard = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex(index + 1);
  }

  const previous = () => {
    setIndex(index - 1);
  }

  return (
    <div>
        <h1>{data[index].id}</h1>
        <h1>{data[index].name.first} {data[index].name.last}</h1>
        <h1>{data[index].city}</h1>
        <h1>{data[index].country}</h1>
        <h1>{data[index].employer}</h1>
        <h1>{data[index].title}</h1>
        <h1>{data[index].favoriteMovies}</h1>
        <button onClick={previous}>Previous</button>
        <button>Edit</button>
        <button>Delete</button>
        <button>New</button>
        <button onClick={next}>Next</button>
    </div>
  )
}

export default InfoCard;
