import RestaurantCard from "./RestaurantCard";
import ResList from "../utils/data";
import {useState} from "react";


const Body=()=>{
    const [newList,setnewList]=useState(ResList);
    return(
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
              const filtered=newList.filter((res)=>res.Rating>4);
              setnewList(filtered);
            }
            }>
              Click to filter
            </button>
        </div>
        <div className="res-container">
          {newList.map((restaurant)=><RestaurantCard key={restaurant.id} ResData={restaurant}/>)}
        </div>
      </div>
    )
  }

export default Body