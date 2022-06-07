import React, {useState} from 'react';
import user from '../data'


const InfoCard = (props) => {
  const {index, setIndex} = props;
  const [data, setData] = useState(user);
  
  const next = () => {
    if (index === (data.length -1)) {
      console.log('No more users to see.')
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
    return;
  }

  const previous = () => {
    if (index === 0) {
      console.log('No previous cards to see.');
    } else {
      setIndex((prevIndex) => prevIndex - 1);
    }
    return;
  }

  const deleteCard = () => {
    let filteredData = data.filter((el, elIndex) => {
      return elIndex !== index;
    });
    setData(filteredData);
    if (index > filteredData.length - 1) {
      setIndex(filteredData.length - 1);
    }
  }

  return (
    <div>
        <h3 id='count'>{index + 1}/{data.length}</h3>
        <h1>{data[index].name.first} {data[index].name.last}</h1>
        <h1>City: {data[index].city}</h1>
        <h1>Country: {data[index].country}</h1>
        <h1>Employer: {data[index].employer}</h1>
        <h1>Title: {data[index].title}</h1>
        <ol>
        <h3>Favorite Movies:</h3>
        <li>{data[index].favoriteMovies[0]}</li>
        <li>{data[index].favoriteMovies[1]}</li>
        <li>{data[index].favoriteMovies[2]}</li>
        </ol>
        <button onClick={previous}>Previous</button>
        <button>Edit</button>
        <button onClick={deleteCard}>Delete</button>
        <button>New</button>
        <button onClick={next}>Next</button>
    </div>
  )
}

export default InfoCard;
