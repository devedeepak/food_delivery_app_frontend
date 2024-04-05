
import React, { useContext } from 'react';
import './HeroSection.css'
import { assets } from '../../assets/assets'
//import { LevelContext } from "../../Context/LevelContext";

export default function HeroSection() {
    //const level = useContext(LevelContext);
    const heroImage = {
        backgroundImage: `url(${assets.header_img})`,
    };
    return (
        <div className='hero-container'>
          
            <div className="hero-child-container" style={heroImage}>
                <div className="hero-content">
                    <h1>Order your favourite food here</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque a ipsum animi quia exercitationem consequatur ex nemo quas autem facere temporibus quam sunt eveniet possimus, ab sint rerum hic odit?</p>
                    <div>
                        <a href="#/" className="viewMorebtn">View Menu</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
