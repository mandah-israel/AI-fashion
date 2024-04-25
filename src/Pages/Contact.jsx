import Header from "../Component/Header"
import Footer from "../Component/Footer"
import { Link } from "react-router-dom"
const Contact=()=>{
    return(
    <div className="head">
        <div>
            <Header/>
        </div>
        <div className="vin pa-d">
        <h2>Contact us</h2>
        <p>How can we help you?</p>
        </div>
        <form action="" className="passion">
            <label>Your Email</label>
            <input type="text" placeholder="israelwilliams@gmail.com" required/>
            <select value="question">
                <option name="" id="">General question</option>
                <option name="" id="">AI features</option>
                <option name="" id="">API</option>
                <option name="" id="">Partnerships</option>
                <option name="" id="">Pricing</option>
                <option name="" id="">Pricing</option>
            </select>
            <label className="lab">Type Your message</label>
            <textarea placeholder="Your message" required></textarea>
            <div className="log">
           <button><Link>Send</Link></button>
           </div>
           </form>
           <div className="pix">
            <p>israelwilliams@gmail.ai</p>
           </div>
           <div>
            <Footer/>
           </div>
    </div>
    )
}
export default Contact