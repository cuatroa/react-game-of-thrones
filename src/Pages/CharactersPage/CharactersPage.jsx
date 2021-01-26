import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CharactersGallery } from './components/CharactersGallery/CharactersGallery';
import { CharactersSearch } from './components/CharactersSearch/CharactersSearch';

let allCharacters = [];

export function CharactersPage () {

    const [filteredCharacters, setFilteredCharacters] = useState([]);
    console.log('total', allCharacters);
    console.log('filtered' ,filteredCharacters);


    useEffect(() => {
        axios.get('https://api.got.show/api/show/characters/').then((res) => {
            const charactersLocal = res.data;
            allCharacters = charactersLocal;
            setFilteredCharacters(charactersLocal)
        })
    }, [])

    const filterCharacters = (filterValues) => {
        const filteredLocalCharacters = [];

        for (const character of allCharacters) {
            let characterIsOk = true;
            for (const key in filterValues) {
                if (filterValues.hasOwnProperty(key)) {
                    const localValue = character[key];
                    const filterValue = filterValues[key];
                    if (!localValue || (localValue && filterValue && filterValue !== '' && !localValue.toLowerCase().includes(filterValue.toLowerCase()))) {
                        characterIsOk = false;
                        break;
                    }
                }
            }

            if (characterIsOk) {
                filteredLocalCharacters.push(character);
            }
        }

        setFilteredCharacters(filteredLocalCharacters);
    }

    return (
        <div>
            <CharactersSearch fnSubmit={filterCharacters}/>
            <CharactersGallery characters={filteredCharacters}/>
        </div>
    );
}