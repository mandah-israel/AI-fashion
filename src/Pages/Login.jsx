import Header from "../Component/Header"
import Footer from "../Component/Footer"
import { Link } from "react-router-dom"
import { useState } from "react"
const Login=()=>{
    const [visible, setVisible]=useState(false);
    function show(){
        setVisible(!visible);
    }
    return(
     <div className="head">
        <div>
            <Header/>
        </div>
        <form action="#" className="form">
        <div className="vin">
        <h2>Log In</h2>
       </div>
            <label className="email">Email</label>
            <input type="text" placeholder="israelwilliams@gmail.com" required/>
            <label>Password</label>
            <div className="slide">
            <input type={visible? "text":"password"} placeholder="password" maxLength={10} required/>
            <div onClick={show} className="name">{visible? "hide": "show"}</div>
            </div>
            <span><Link>Forgot Password?</Link></span>
           <div className="log">
           <button><Link>Log In</Link></button>
           </div>
           <Link to="/register">No account yet? Sign up here</Link>
        </form>
        <div>
            <Footer/>
        </div>
    </div>
    )
}
export default Login