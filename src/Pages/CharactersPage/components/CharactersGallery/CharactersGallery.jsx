import React from 'react';
import './CharactersGallery.scss'


export function CharactersGallery (props) {

    return (
        <div className="c-characters-gallery" id="scrollbar">
            <div className="row">
                {props.characters.map((item, index) =>
                    <div className="col-12 col-md-4 col-lg-2" key={index}>
                        <div className="c-characters-gallery__item-container">
                        <a href={"./characters/"+item.name}><figure className="c-characters-gallery__item">
                                    <img src={item.image} alt="" className="c-characters-gallery__img"/>
                                    <figcaption className="c-characters-gallery__caption">{item.name}</figcaption>
                            </figure></a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}