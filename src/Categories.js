import CategoriesData from "./CategoriesData";
const Categories = () => {
    return (
        <>
        <div className='categories'>
            <div className="container1" style={{margin:10}}>
                <img src={`${require(`${CategoriesData[0].image}`)}`}/>
            </div>
            <div className="container1" style={{margin:10}}>
                <img src={`${require(`${CategoriesData[1].image}`)}`}/>
            </div>
            <div className="container1" style={{margin:10}}>
                <img src={`${require(`${CategoriesData[2].image}`)}`}/>
            </div>
        </div>
        <div className='categories'>
            <div className="container2"><img src={`${require(`${CategoriesData[3].image}`)}`}/></div>
            <div className="container2"><img src={`${require(`${CategoriesData[4].image}`)}`}/></div>
        </div>
        <div className='banner'>
            <img src={`${require(`${CategoriesData[5].image}`)}`}/>
        </div>
        </>
     );
}
 
export default Categories;