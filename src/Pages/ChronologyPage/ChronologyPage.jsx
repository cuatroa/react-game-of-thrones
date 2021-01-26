import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ChronologyPage.scss'

let allCharacters = [];

export function ChronologyPage () {

    const [characters, setCharacters] = useState([]);

    const [minAge, setMinAge] = useState([]);
    const [maxAge, setMaxAge] = useState([]);

    const getOld = (arr) => arr.reduce((prev, curr) => prev.age.age > curr.age.age ? prev : curr).age.age;
    const getYoung = (arr) => arr.reduce((prev, curr) => prev.age.age < curr.age.age ? prev : curr).age.age;

    const [orderAsc, setOrderAsc] = useState(true);

    useEffect(() => {
        axios.get('https://api.got.show/api/show/characters').then((res) => {
            allCharacters = res.data.filter(item => item.age?.age);
            setCharacters(allCharacters);
            setMinAge(getYoung(allCharacters));
            setMaxAge(getOld(allCharacters));
          });
        }, []);

        const sortChar = (arr) => arr.sort((a, b) => orderAsc ? (a.age.age - b.age.age) :  (b.age.age - a.age.age));

    return (
        <div>
            <div className="d-flex justify-content-center">
                <button className="b-chronology" onClick={() => setOrderAsc(!orderAsc)}>{ orderAsc ? minAge : maxAge }</button>
            </div>
            <div className="d-flex justify-content-center c-chronology-item" id="scrollbar">
                <div className="d-flex flex-column align-items-center column-contain">
                    {sortChar(characters).filter((item, index) => index % 2 === 0).map((character, i) => (
                        <div className="c-chronology-item__1">
                            <div className="d-flex flex-column align-items-center">
                                <p className="c-chronology-item__age">{character.age.age}</p>
                                <p className="c-chronology-item__name">{character.name}</p>
                                <figure>
                                    <img className="c-chronology-item__img" src={character.image} alt=""/>
                                </figure>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="d-flex flex-column align-items-center column-contain">
                    {sortChar(characters).filter((item, index) => index % 2 !== 0).map((character, i) => (
                        <div className="c-chronology-item__2">
                            <div className="d-flex flex-column align-items-center">
                                <p className="c-chronology-item__age">{character.age.age}</p>
                                <p className="c-chronology-item__name">{character.name}</p>
                                <figure>
                                    <img className="c-chronology-item__img" src={character.image} alt=""/>
                                </figure>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}