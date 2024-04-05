import { assets } from "../../assets/assets";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
        <div className="footer-left">
            <img src={assets.logo} alt="" srcset="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eveniet quidem libero repellendus voluptas impedit magni animi fugiat eaque porro. Quasi, facilis nemo ratione iure at explicabo minima voluptas ducimus?</p>
        </div>
        <div className="footer-middle">
            <h4>Home</h4>
            <ul class="general-footer">
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery </li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-right">
            <h4>Get In touch</h4>
            <ul class="general-footer">
                <li>+(1234) 234 234</li>
                <li>contact@me.com</li>
               
            </ul>
        </div>
    </div>
  )
}