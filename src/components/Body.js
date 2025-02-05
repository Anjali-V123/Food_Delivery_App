import RestaurantCard from "./RestaurantCard";
import {ResList} from "../utils/data";
import Shimmer from "./Shimmer"
import {useState} from "react";
import {useEffect} from "react";


const Body=()=>{
    const [newList,setnewList]=useState([]);
    const [newList1,setnewList1]=useState([]);

    const [searchText,setsearchText]=useState("");

    useEffect(()=>{
      fetchData()
    },[]);

    const fetchData=async()=>{
      await new Promise((resolve)=>setTimeout(resolve,1000));
      const data=ResList;
      setnewList(data);
      setnewList1(data);
    }

    if(newList.length===0){
      return(
        <Shimmer/>
      );
    }

    return(
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-text" value={searchText} onChange={(e)=>{
              setsearchText(e.target.value)
            }}/>
            <button className="search-button" onClick={()=>{
              const newList=ResList
              const filteredList=newList.filter((res)=>
                res.Show.toLowerCase().includes(searchText.toLowerCase())
              );
              setnewList1(filteredList);
            }}>
              Search
            </button>
          </div>
          <button className="filter-btn" onClick={()=>{
              const filtered=newList.filter((res)=>res.Rating>4);
              setnewList(filtered);
            }
            }>
              Click to filter
          </button>
        </div>
        <div className="res-container">
          {newList1.map((restaurant)=><RestaurantCard key={restaurant.id} ResData={restaurant}/>)}
        </div>
      </div>
    )
  }

export default Body