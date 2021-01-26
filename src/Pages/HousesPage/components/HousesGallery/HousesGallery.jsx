import React from 'react';
import './HousesGallery.scss'


export function HousesGallery (props) {

    return (
        
        <div className="c-houses-gallery" id="scrollbar">
            <div className="row">
                {props.houses.map((item, index) =>
                    <div className="col-12 col-md-6 col-lg-3" key={index}>
                        <div className="c-houses-gallery__item-container">
                            <a href={"./houses/"+item.name}><figure className="c-characters-gallery__item">
                                    <img src={item.logoURL} alt="" className="c-houses-gallery__img"/>
                                    <figcaption className="c-houses-gallery__caption">{item.name}</figcaption>
                            </figure></a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}