import Header from "../Component/Header"
import Carozel from"../Component/Carozel"
import { Link } from "react-router-dom"
import Footer from "../Component/Footer"
import full from"../../src/Images/full.jpeg"
import vat from"../../src/Images/vat.jpeg"
import vot from"../../src/Images/vot.jpeg"
import ivory from"../../src/Images/ivory.jpeg"
import fin from"../../src/Images/fin.jpeg"
import vin from "../../src/Images/vin.jpeg"
import vop from "../../src/Images/vop.jpeg"
import plut from "../../src/Images/plut.jpeg"
import save from "../../src/Images/save.jpeg"
import haz from "../../src/Images/haz.jpeg"

const Store=()=>{
    return(
        <div className="head">
            <div>
                <Header/>
            </div>
            <div className="vin pa-d">
        <h2>AI FASHION GALLERY</h2>
        <p>Find inspiration for clothing designs, moodboards, clothing logos or store interior designs.</p>
        <div className="vull ma-g">
           <Link to="/features"><button>Clothing design</button></Link>
            <Link to="/blog"><button>Our Blog</button></Link>
            <Link to="/faq"><button>FAQ's</button></Link>
            <Link to="/store"><button>Store interior</button></Link>
        </div>
      </div>
          <div className="slider">
            <Carozel/>
          </div>
          <div className="vut">
   <h3>Browse AI fashion collections</h3>
   </div>
   <div className="pro ma-g">
    <div id="pro-con">
        <img src={full}/>
        <h5>AI Shoes</h5>
        <button className="belt"><Link>See all AI shoes</Link></button>
    </div>
    <div id="pro-con">
        <img src={vat}/>
        <h5>AI Wedding Dresses</h5>
        <button className="bell"><Link>See all AI Dresses</Link></button>
    </div>
    <div id="pro-con">
        <img src={vot}/>
        <h5>AI Handbags</h5>
        <button className="bon"><Link>See all AI Handbags</Link></button>
    </div>
    <div id="pro-con">
        <img src={ivory}/>
        <h5>AI Dresses</h5>
        <button className="bell"><Link>See all AI Dresses</Link></button>
    </div>
   </div>
   <div id="container">
    <div className="magin game">
    <div className="golf">
        <h2>Bring your fashion ideas to life with The New Black</h2>
        <p>Because designing takes time, our AI can boost your creativity or bring your ideas to life in seconds. All designs crated by our A.I are unique. Once created, these are your properties.</p>
        <button><Link>Create a design</Link></button>
    </div>
    <div className="img">
        <img src={vin}/>
        <img src={vop}/>
    </div>
    </div>
    <div className="magin">
    <div className="golf">
        <h2>Get free monthly credits as an ambassador</h2>
        <p>Simple by posting your AI designs and tagging us on social media. Our AI can boost your creativity or bring your ideas to life in seconds. All designs crated by our A.I are unique.</p>
        <button><Link>Create a design</Link></button>
    </div>
    <div className="img">
        <img src={plut}/>
        <img src={save}/>
    </div>
    </div>
   </div>
   <div className="vut ma-g">
    <h2>Latest fashion article</h2>
   </div>
   <div id="con" className="ma-g">
    <img src={haz}/>
    <div className="firm">
        <h2>AI Fashion Clothing Techpack</h2>
        <p>The integration of artificial intelligence (AI) into the creation of tech packs marks a tranformative step in the fashion. Simple by posting your AI designs and tagging us on social media. Our AI can boost your creativity or bring your ideas to life in seconds. All designs crated by our A.I are unique. Because designing takes time, our AI can boost your creativity or bring your ideas to life in seconds. All designs crated by our A.I are unique. Once created, these are your properties</p>
        <div id="button">
            <button><Link>Read more</Link></button>
            <button><Link>Visit blog</Link></button>
        </div>
     </div>
   </div>
   <div className="about">
    <h2>About</h2>
    <p>The New Black helps designers and brands create unique and original designs for clothes, bags or shoes using the best Artificial Intelligence (A.I.) for clothing design.</p>
    <button>Learn more</button>
   </div>
   <div>
    <Footer/>
   </div>
        </div>  
    )
}
export default Store