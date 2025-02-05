// import {ResMenu} from "../utils/data";
// import Shimmer from "./Shimmer";
// import {useState,useEffect} from "react";

// const RestaurantMenu=()=>{
//     const [Menu,setMenu]=useState(null);

//     //const {Show,Seasons,WatchTime}=ResMenu

//     useEffect(()=>{
//         fetchMenu();
//     },[]);

//     const fetchMenu=async()=>{
//         await new Promise((resolve)=>setTimeout(resolve,1000));
//         const data=ResMenu;
//         setMenu(data);
//     }

//     if(Menu===null){
//         return <Shimmer/>
//     }

//     return(
//         <div>
//             <ul>
//                 <li>{Menu.map((res)=>res)}</li>
//                 <li>8</li>
//                 <li>160 hours</li>
//             </ul>
//         </div>
//     );
// }

// export default RestaurantMenu;