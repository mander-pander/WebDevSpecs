import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Pokemon = (props) => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((res) => {
                setPokemon(res.data)
            })
    }, [name])

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <h2>{pokemon.types?.[0]?.type.name}</h2>
        </div>
    )
}

export default Pokemon;
