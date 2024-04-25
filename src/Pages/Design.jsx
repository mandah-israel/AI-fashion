import Header from "../Component/Header"
import Footer from "../Component/Footer"
import { Link } from "react-router-dom"
import promo from "../../src/Images/promo.jpeg"
import fashion from "../../src/Images/fashion.jpeg"
import gux from "../../src/Images/gux.jpeg"
import woman from "../../src/Images/woman.jpg"
import tall from "../../src/Images/tall.jpeg"
import vop from "../../src/Images/vop.jpeg"
import filler from "../../src/Images/filler.jpeg"
import slap from "../../src/Images/slap.jpeg"
import fix from "../../src/Images/fix.jpg"
import hem from "../../src/Images/hem.jpeg"
import hell from "../../src/Images/hell.jpeg"
import ivory from "../../src/Images/ivory.jpeg"
import chi from "../../src/Images/chi.jpeg"
import neck from "../../src/Images/neck.jpeg"
import sara from "../../src/Images/sara.jpeg"
import conet from "../../src/Images/conet.jpeg"
import cum from "../../src/Images/cum.jpeg"
import earing from "../../src/Images/earing.jpeg"
import glass from "../../src/Images/glass.jpeg"
import strong from "../../src/Images/strong.jpeg"
import cap from "../../src/Images/cap.jpeg"
import boat from "../../src/Images/boat.jpeg"
import vick from "../../src/Images/vick.jpeg"
import computer from "../../src/Images/computer.jpeg"

import { StarAndCrescent } from "@phosphor-icons/react"
const Design=()=>{
    return(
        <div className="head">
            <Header/>
        <div className="vin pa-d">
            <h2>Welcome to AI Fashion</h2>
        <div className="vax">
            <Link><button>Start now</button></Link>
        </div>
        </div>
        <div id="use" className="ma-g">
        <div className="gint">
            <h4>1. Create your first clothing design</h4>
            <p>Create your first clothing design and AI generatoed models with our outfit generator.</p>
            <div id="you">
               <div className="name">
               <img src={promo}/>
                <h5>Clothing</h5>  
               </div>
               <div className="name">
               <img src={fashion}/>
                <h5>Runway</h5>  
               </div>
               <div className="name">
               <img src={gux}/>
                <h5>suit</h5>  
               </div>
               <div className="name">
               <img src={woman}/>
                <h5>corporate</h5>  
               </div>
            </div>
        </div>
        <div className="gint">
            <h4>1. Change outfit, physical details, or feature of your AI generated model</h4>
            <p>Edit details with all your photos with AI. You can choose betwwen "Auto Edit" or "Manual Edit" for better precision.</p>
            <div id="you">
               <div className="name">
               <img src={tall}/> 
               </div>
               <div className="name">
               <img src={vop}/>  
               </div>
               <div className="name">
               <img src={filler}/>  
               </div>
               <div className="name">
               <img src={fix}/>  
               </div>
            </div>
        </div>
        <div className="gint">
            <h4>1. Create new outfit design on your own photo</h4>
            <p>Change outfits in second in all your photos with our outfit creator.</p>
            <div id="you">
               <div className="name">
               <img src={cum}/>
                <h5>casual</h5>  
               </div>
               <div className="name">
               <img src={slap}/>
                <h5>shoe</h5>  
               </div>
               <div className="name">
               <img src={hem}/>
                <h5>fashion ring</h5>  
               </div>
               <div className="name">
               <img src={hell}/>
                <h5>sandy</h5>  
               </div>
            </div>
        </div>
        <div className="gint">
            <h4>1. Turn sketches into realistic design</h4>
            <p>Upload your sketches and create realistic design in seconds.</p>
            <div id="you">
               <div className="name">
               <img src={ivory}/>  
               </div>
               <div className="name">
               <img src={sara}/> 
               </div>
               <div className="name">
               <img src={conet}/> 
               </div>
               <div className="name">
               <img src={chi}/>
               </div>
            </div>
        </div>
        <div className="gint">
            <h4>1. Create your first clothing design</h4>
            <p>Create your first clothing design and AI generatoed models with our outfit generator.</p>
            <div id="you">
               <div className="name">
               <img src={neck}/>
                <h5>necklace</h5>  
               </div>
               <div className="name">
               <img src={earing}/>
                <h5>errings</h5>  
               </div>
               <div className="name">
               <img src={glass}/>
                <h5>sun glasses</h5>  
               </div>
               <div className="name">
               <img src={vick}/>
                <h5>bag</h5>  
               </div>
            </div>
        </div>  
        <div className="gint">
            <h4>1. Get inspired by other outfit creators</h4>
            <p>Go to the 'inspiration' tab above search for fashion design.</p>
            <div id="you">
               <div className="name">
               <img src={strong}/> 
               </div>
               <div className="name">
               <img src={boat}/> 
               </div>
               <div className="name">
               <img src={cap}/>
               </div>
               <div className="name">
               <img src={computer}/> 
               </div>
            </div>
        </div>
    </div>
        <Footer/>
    </div>
    )
}
export default Design