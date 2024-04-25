import Header from "../Component/Header"
import Footer from "../Component/Footer"
import { CaretDown, CaretUp } from "@phosphor-icons/react"
import { useState } from "react"
const Faq=()=>{
 const [visible, setVisible]= useState(false);
 function gun(){
    setVisible(!visible);
 }
 const [open, setOpen]= useState(false);
 function fame(){
    setOpen(!open);
 }
 const [show, setShow]= useState(false);
 function dove(){
    setShow(!show);
 }
 const [display, setDisplay]= useState(false);
 function gove(){
    setDisplay(!display);
 }
 const [unvail, setUnvail]= useState(false);
 function fan(){
    setUnvail(!unvail);
 }
 const [hide, setHide]= useState(true);
 function slot(){
    setHide(!hide);
 }
    return(
    <div className="head">
        <Header/>
        <div className="vin pa-d">
            <h2>Frequently asked Questions</h2>
        </div>
        <div id="faq">
            <div className="gon">
                <h5>What is AI fashion design</h5>
                <div onClick={gun}>{visible? <CaretDown size={32}/>:<CaretUp size={32}/>}</div>
            </div>
            <div className={visible? "open" : "short"}>
                <p>AI fashion design involves using artificial intelligence technologies to create, enhance, or streamline the process of designing clothing and accesssories.</p>
            </div>
            <div className="trum">
                <h5>How does AI assists in predicting fashion trends</h5>
                <div onClick={fame}>{open? <CaretDown size={32}/>:<CaretUp size={32}/>}</div>
            </div>
            <div className={open? "display" : "cover"}>
                <p>AI assists in predicting fashion trends by analyzing vast amounts of data from various sources like social media, fashion websites, and previous fashion collections. Machine learning models can identify patterns and emerging trends in coolors, fabrics, and styles, helping designers and retailers ancipate what consumers may prefer in upcoming seasons.</p>
            </div>
            <div className="voar">
                <h5>Can AI create clothing designs autonomously</h5>
                <div onClick={dove}>{show? <CaretDown size={32}/>:<CaretUp size={32}/>}</div>
            </div>
            <div className={show? "open" : "short"}>
                <p>Yes, AI can autonomously create clothing designs. Using algorithms trained on a dataset of existing designs, AI can generates new garments and styles that are novel yet appealing. These tools typically allow designers to input certain parameters, such as colo schemes, desired materials, or themes, and the AI proposes designs that fit these criterias.</p>
            </div>
            <div className="gonna">
                <h5>What are the benefits of using AI in fashion design</h5>
                <div onClick={gove}>{display? <CaretDown size={32}/>:<CaretUp size={32}/>}</div>
            </div>
            <div className={display? "open" : "short"}>
                <p>1. Efficiency</p>
                <p>AI can significantly reduce the time needed to create designs by automating oart of the creative process.</p>
                <p>2. Sustainability</p>
                <p>By predicting trends more accurately, AI can help reduce waste in the fashion industry by producing clothes that are more likely to meet consumer demand.</p>
                <p>3. Innovation</p>
                <p>AI can generate unique and innovative designs b combining elements in ways that a human designer might not consider.</p>
            </div>
            <div className="coll">
                <h5>What challenges does AI face in the fashion design industry</h5>
                <div onClick={fan}>{unvail? <CaretDown size={32}/>:<CaretUp size={32}/>}</div>
            </div>
            <div className={unvail? "open" : "short"}>
            <p>1. Ethical Concerns</p>
                <p>There are concerns about data privacy , the homogenization of style, and the potential impact on employment within the fashion industry as tasks become more automated.</p>
                <p>2. Technical Barriers</p>
                <p>Effective AI systems require large and diverse datasets, which can be expensive and time-consuming to compile.</p>
                <p>3. Creativity Limitations</p>
                <p>While AI can generate designs based on existing data, its ability to truly innovate or understand the emotional and artistic aspects of fashion design is still limited compared to human designers.</p>
            </div>
            <div className="mall">
                <h5>Can AI help in designing inclusive fashion for people with disabilities</h5>
                <div onClick={slot}>{hide? <CaretUp size={32}/>:<CaretDown size={32}/>}</div>
            </div>
            <div className={hide? "cut" : "unvail"}>
                <p>Yes, AI can help in designing inclusive fashion for people with disabilities by:</p>
                <p>1. Analyzing data on different body types and disabilities to create clothing that accomodates diverse needs.</p>
                <p>AI can significantly reduce the time needed to create designs by automating oart of the creative process.</p>
                <p>2. Generating customized designs based on individual measurements and preferences.</p>
                <p>3. Using virtual fitting technologies to simulate how clothing will fit and function for people with various disabilities.</p>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
    )
}
export default Faq