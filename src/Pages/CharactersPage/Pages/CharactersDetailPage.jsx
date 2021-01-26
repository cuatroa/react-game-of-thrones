import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { CharactersItem } from './components/CharactersItem/CharactersItem';

export function CharactersDetailPage () {

    let { name } = useParams();
 
    const [character, setCharacter] = useState([]);


    useEffect(() => {
        axios.get(`https://api.got.show/api/show/characters/${name}`).then(res => {
            const character = res.data;

            setCharacter(character);
        })
    }, [])

    return (
        <div>
            <CharactersItem character={character}/>
        </div>
    );
}