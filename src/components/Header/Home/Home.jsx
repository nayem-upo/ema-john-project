import React from 'react';
import "./Home.css"
import image from "../../../images/ccs.png"
const Home = () => {
    return (
        <div className='home-section'>
            <div className='home'>
                <p><small className='sale-up'>Sale up to 70% off</small></p>
                <h1 style={{fontSize:38, marginBottom:0}}>New Collection For Fall</h1>
                <p style={{fontWeight: 500, marginBottom:40}}>Discover all the new arrivals of ready-to-wear collection.</p>
                <button>SHOP NOW</button>
            </div>
            <div>
                <img className='home-img' src={image} alt="" />
            </div>
        </div>
    );
};

export default Home;