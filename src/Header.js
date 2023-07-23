import Pay from "./Pay";
import Delivery from "./Delivery";
import Support from "./Support";
const Header = () => {
    return ( 
        <div className="start">
            <h6>Order through phone:+971509659959</h6>
            <span >
                <Pay/>
                <p  className="text"><b>Easy Pay</b><br/>Cash & Cards</p>
            </span>
            <span>
                <Delivery/>
                <p className="text"><b>Delivery</b><br/>All Emirates</p>
            </span>
            <span>
                <Support/>
                <p className="text"><b>Support</b><br/>Customer Line</p>
            </span>
        </div>
     );
}
 
export default Header;