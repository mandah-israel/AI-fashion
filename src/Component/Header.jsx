import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../src/Images/logo.png"
import { List,X } from "@phosphor-icons/react";
export default function Header(){
    const [visible, setVisible]= useState(false);
    function open(){
        setVisible(!visible)
    }
    return(
       <div className="head">
        <div id="header">
           <Link to="/home"><img src={logo}/></Link>
                <Link to="/login"><button>Log in</button></Link>
            <ul className={visible? "":"close"}>
                <li><Link to="/home">Home</Link></li>
                <li>< Link to="/features">Features</Link></li>
                <li><Link to="/design">AI Design</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
            <div onClick={open} className="vex">{visible? <X size={40}/>:<List size={40}/>}</div>
        </div>
       </div> 
    )
}