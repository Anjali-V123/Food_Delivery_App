import {LOGO_URL} from "../utils/constants";
import {useState} from "react";
import {Link} from "react-router-dom";



const Header=()=>{

    const [btn_name,setbtn_name]=useState("login");

    return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="" src={LOGO_URL}/>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <button className="login" onClick={()=>{btn_name==="login"?setbtn_name("logout"):setbtn_name("login")}}>{btn_name}</button>
        </ul>
      </div>
    </div>
    );
}

export default Header