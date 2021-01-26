import React, { useEffect, useState } from 'react';
import './HousesItem.scss';
import { useTranslation } from 'react-i18next';

export function HousesItem (props) {

    const [t, i18n] = useTranslation("global");

    const houseInfo = props.house;


    return (
        <div>
            <div className="c-houses-top-item justify-content-lg-center">
                <div className="c-houses-top-item__item-container">
                    <figure className="c-houses-top-item__item">
                        <img src={houseInfo ?  houseInfo.logoURL: ''} alt="" className="c-houses-top-item__img"/>
                        <figcaption className="c-houses-top-item__caption">{houseInfo.name}</figcaption>
                    </figure>
                    <div className="row c-houses-item">
                        <div className="c-houses-item__container">
                            <h3 className="c-houses-item__title">{t("HousesItem.Words")}</h3>
                            <p className="c-houses-item__p">{houseInfo.words}</p>
                        </div>
                        <div className="c-houses-item__container">
                            <h3 className="c-houses-item__title">{t("HousesItem.Seat")}</h3>
                            {houseInfo && houseInfo.seat && houseInfo.seat.map((item) => {
                                return <li className="c-houses-item__li"> {item} </li>
                            })}
                        </div>
                        <div className="c-houses-item__container">
                            <h3 className="c-houses-item__title">{t("HousesItem.Region")}</h3>
                            {houseInfo && houseInfo.region && houseInfo.region.map((item) => {
                                return <li className="c-houses-item__li"> {item} </li>
                            })}
                        </div>
                        <div className="c-houses-item__container">
                            <h3 className="c-houses-item__title">{t("HousesItem.Alliances")}</h3>
                            {houseInfo && houseInfo.allegiance && houseInfo.allegiance.map((item) => {
                                return <li className="c-houses-item__li"> {item} </li>
                            })}
                        </div>
                        <div className="c-houses-item__container">
                            <h3 className="c-houses-item__title">{t("HousesItem.Religion")}</h3>
                            {houseInfo && houseInfo.religion && houseInfo.religion.map((item) => {
                                return <li className="c-houses-item__li"> {item} </li>
                            })}
                        </div>
                        <div className="c-houses-item__container">
                            <h3 className="c-houses-item__title">{t("HousesItem.Sigil")}</h3>
                            <p className="c-houses-item__p">{houseInfo.sigil}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}