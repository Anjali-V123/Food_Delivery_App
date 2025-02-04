import {LOGO_URL} from "../utils/constants";
import {useState} from "react";



const Header=()=>{

    const [btn_name,setbtn_name]=useState("login");

    return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="" src={LOGO_URL}/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
          <li>Contact Us</li>
          <button className="login" onClick={()=>{btn_name==="login"?setbtn_name("logout"):setbtn_name("login")}}>{btn_name}</button>
        </ul>
      </div>
    </div>
    );
}

export default Header