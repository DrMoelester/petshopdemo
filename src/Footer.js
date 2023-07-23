import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import {FaCcMastercard, FaCcVisa} from "react-icons/fa"
import {SiAmericanexpress} from "react-icons/si"
const Footer = () => {
    return ( 
        <div className='footer'>
            <div className="socials">
                <div className="socials-padding">
                    <p className="heading-padding">Follow Us</p>
                    <span className="footer-icons"><BsInstagram  color="black" size='12'/></span>
                    <span className="footer-icons"><BsFacebook  color="black" size='12'/></span>
                    <span className="footer-icons"><BsYoutube  color="black" size='12'/></span>
                </div>
                <div className="socials-padding">
                    <p className="heading-padding">Payment Methods</p>
                    <span className="footer-icons"><FaCcMastercard  color="black" size="12"/></span>
                    <span className="footer-icons"><FaCcVisa  color="black" size="12"/></span>
                    <span className="footer-icons"><SiAmericanexpress  color="black" size="12"/></span>
                </div>

            </div>
            <div className="about">
                <p className="heading-padding">About Us</p>
                <p className="text-padding">Our Story</p>
                <p className="text-padding">Contact Us</p>
                <p className="text-padding">Covid-19 Policy</p>
            </div>
            <div className="shopping">
                <p className="heading-padding">Shopping</p>
                <p className="text-padding">Aquariums</p>
                <p className="text-padding">Pet Foods</p>
                <p className="text-padding">Fish Foods</p>
            </div>
            <div className="customer">
                <p className="heading-padding">Customer Service</p>
                <p className="text-padding">Shipping Policy</p>
                <p className="text-padding">Terms of Service</p>
                <p className="text-padding">Refunds & Returns</p>
                <p className="text-padding">Billing Terms & Conditions</p>
                <p className="text-padding">FAQ</p>
            </div>
            <div className="help">
                <p className="heading-padding">Help</p>
                <p className="text-padding">How can we help?</p>
                <p className="text-padding">Call us +(971)50 965 9959</p>
                <p className="text-padding">10:00 AM - 10:00 PM</p>
                <p className="text-padding">thunderjunglepets@gmail.com</p>
            </div>
        </div>
     );
}
 
export default Footer;