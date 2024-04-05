import React, {useContext,useState } from 'react'
import { assets } from '../../assets/assets'
import "./header.css";
import { Link } from "react-router-dom";
import { LevelContext } from "../../Context/LevelContext";



export default function Navbar({showLogin,setShowLogin}) {
    const [active, setActive] = useState('home');
    const level = useContext(LevelContext);
    return (
        <div className="header-container">
            <div className="header-logo">
                <img src={assets.logo} alt="" />
            </div>
            <div className="header-menu">
                <ul className={active === 'home' ? 'active' : ''} onClick={() => setActive('home')}>
                    <Link to={'/'}>Home</Link>
                </ul>
                <ul className={active === 'menu' ? 'active' : ''} onClick={() => setActive('menu')}>
                    <a href="#exploredishes-container">Menu</a>
                </ul>
                <ul className={active === 'mobile_app' ? 'active' : ''} onClick={() => setActive('mobile_app')}>
                    <a href="#exploredishes-container">Mobile App</a>
                </ul>
                <ul className={active === 'contact_us' ? 'active' : ''} onClick={() => setActive('contact_us')}>
                    <a href="#exploredishes-container">Contact Us</a>
                </ul>
            </div>
            <div className="header-right">
                <img src={assets.search_icon} alt="" className="search" />
                <div className="header-cart">
                    <Link to={'cart'}>
                        <img src={assets.basket_icon} alt="" />
                        {level.cartCount>0? 
                         <span className="dot">{level.cartCount}</span>
                        :
                            ''
                        }
                       
                    </Link>
                </div>
                <button className="header-signin" onClick={()=>setShowLogin(!showLogin)}>Sign in</button>
            </div>
        </div>
    )
}
