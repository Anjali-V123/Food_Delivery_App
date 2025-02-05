//import {IMG_URL_LIST} from "../utils/constants"


const RestaurantCard=(props)=>{
    const {ResData}=props
    const {Img,Name,Cuisines,Rating}=ResData
    return(
    <div className="res-card">
      <img className="res-logo" alt="res-logo" style={{backgroundColor:"#f0f0f0"}} src={Img}/>
      <h3>Name: {Name}</h3>
      <h4>Cuisines: {Cuisines}</h4>
      <h4>Rating: {Rating}</h4>
    </div>
    );
}

export default RestaurantCard