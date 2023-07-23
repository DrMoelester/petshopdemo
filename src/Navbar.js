import logo from './Photos/companylogo.jpg';
import Cart from "./Cart";
import Account from "./Account";
import Wishlist from "./Wishlist";
import Search from './Search';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="logo-button">
                <a href="/">
                    <img src={logo} width="80px" style={{borderRadius:80}} type="images/jpg"/>
                </a>
            </div>
            <div className="list">
                <ul>
                    <li><a href="#">Live Fish</a></li>
                    <li><a href="#">Pet Products</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><button className="search-button"><Search/></button></li>
                </ul>
            </div>
            <div className="icons">
                <a href="account.html">
                 <Account/>
                </a>
                <a href="wishlist.html">
                    <Wishlist/>
                </a>
                <a href="cart.html">
                    <Cart/>
                </a>    
            </div>
        </nav>
     );
}
 
export default Navbar;