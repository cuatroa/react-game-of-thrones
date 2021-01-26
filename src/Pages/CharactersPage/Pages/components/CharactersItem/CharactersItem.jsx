import React, { useEffect, useState } from 'react';
import './CharactersItem.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function CharactersItem (props) {

    const [t, i18n] = useTranslation("global");

    const characterInfo = props.character;

    let { name } = useParams();
 
    const [characterHouse, setCharacterHouse] = useState([]);


    useEffect(() => {
        axios.get(`https://api.got.show/api/show/characters/${name}`).then(res => {
            console.log(res.data.house);
            const characterHouse = res.data.house;
            axios.get('https://api.got.show/api/show/houses/' + characterHouse).then(res => {
            console.log(res.data[0])
            const characterHouse = res.data[0];
            setCharacterHouse(characterHouse);
        })})
    }, [])

    return (
        <div>
            <div className="c-characters-top-item justify-content-lg-center">
                <div className="c-characters-top-item__item-container">
                    <figure className="c-characters-top-item__item">
                        <img src={characterInfo.image} alt="" className="c-characters-top-item__img"/>
                        <figcaption className="c-characters-top-item__caption">{characterInfo.name}</figcaption>
                    </figure>
                    <div className="row c-characters-item">
                        <div className="c-characters-item__container">
                            <h3 className="c-characters-item__title">{t("CharactersItem.House")}</h3>
                            <img src={characterHouse ?  characterHouse.logoURL: ''} alt="" className="c-characters-item__img"/>
                        </div>
                        <div className="c-characters-item__container">
                            <h3 className="c-characters-item__title">{t("CharactersItem.Alliances")}</h3>
                            {characterInfo && characterInfo.allegiances && characterInfo.allegiances.map((item) => {
                                return <li className="c-characters-item__li"> {item} </li>
                            })}
                        </div>
                        <div className="c-characters-item__container">
                            <h3 className="c-characters-item__title">{t("CharactersItem.Appearances")}</h3>
                            <div className="c-characters-item__scroll" id="scrollbar">
                            {characterInfo && characterInfo.appearances && characterInfo.appearances.map((item) => {
                                return <li className="c-characters-item__li"> {item} </li>
                            })}
                            </div>
                        </div>
                        <div className="c-characters-item__container">
                            <h3 className="c-characters-item__title">{t("CharactersItem.Father")}</h3>
                            <p className="c-characters-item__p">{characterInfo.father}</p>
                        </div>
                        <div className="c-characters-item__container">
                            <h3 className="c-characters-item__title">{t("CharactersItem.Siblings")}</h3>
                            {characterInfo && characterInfo.siblings && characterInfo.siblings.map((item) => {
                                return <li className="c-characters-item__li"> {item} </li>
                            })}
                        </div>
                        <div className="c-characters-item__container">
                            <h3 className="c-characters-item__title">{t("CharactersItem.Titles")}</h3>
                            {/* <div className="c-characters-item__scroll" id="scrollbar"> */}
                            {characterInfo && characterInfo.titles && characterInfo.titles.map((item) => {
                                return <li className="c-characters-item__li"> {item} </li>
                            })}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}