import Footer from "../Component/Footer"
import Header from "../Component/Header"
import { Link } from "react-router-dom"
import { useState } from "react"
const Register=()=>{
    const [visible, setVisible]=useState(false);
    function show(){
        setVisible(!visible);
    }
    return(
        <div className="head">
        <div>
            <Header/>
        </div>
        <form action="#" className="form fix">
        <div className="vin">
        <h2>Sign up</h2>
       </div>
            <label className="use">Username</label>
            <input type="text" placeholder="Izzyblinkz" required/>
            <label className="emma">Email (valid)</label>
            <input type="text" placeholder="israelwilliams@gmail.com" required/>
            <label className="fux">Phone number</label>
            <input type="text" placeholder="09033472861" required/>
            <label>Password</label>
            <div className="slide">
            <input type={visible? "text":"password"} placeholder="password" maxLength={10} required/>
            <div onClick={show} className="name">{visible? "hide": "show"}</div>
            </div>
           <div className="seem">
           <button><Link>Register</Link></button>
           </div>
           <Link to="/login">already have an account? Log in</Link>
        </form>
        <div>
            <Footer/>
        </div>
    </div>
    )
}
export default Register