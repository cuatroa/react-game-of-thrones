import React from 'react';
import './HomePage.scss'
import gotVid from '../../Assets/Video/gotVid.mp4';

export function HomePage () {
    return (
        <div className="container">
            <div className="row justify-content-lg-center align-items-center">
        
                <video className="home-vid" autoPlay loop muted>
                    <source src={gotVid} type="video/mp4"/>
                </video>

                <h1 className="home-text-primary col-12">#</h1>     

            </div>
        </div>
    );
}