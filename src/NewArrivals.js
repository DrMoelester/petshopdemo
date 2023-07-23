import FeaturedData from "./Featured";
import ArrivalsData from "./ArrivalsData";
import SellersData from "./SellersData";
const NewArrivals = () => {
    let Slider=FeaturedData;
    return ( 
        <div className="new-arrivals">
            <div className="arrivals-title">
                <h1>New Arrivals</h1>
            </div>
            <div className="arrivals-navbar">
                <button onClick={()=>{Slider=FeaturedData}}>Featured</button>
                <button onClick={()=>{Slider=ArrivalsData}}>New Arrivals</button>
                <button onClick={()=>{Slider=SellersData}}>Best Sellers</button>
            </div>
            <div className="products">
            {Slider.map((item,index)=>{
                    return(
                        <div className="current"key={index}>
                            <img src={`${require(`${item.image}`)}`}/>
                            <p>{item.title}</p>
                        </div>
                    )}
                )}
            </div>
        </div>
     );
}
 
export default NewArrivals;