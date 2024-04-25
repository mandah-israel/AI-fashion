import Header from "../Component/Header"
import Footer from "../Component/Footer"
const Terms=()=>{
    return(
       <div className="head">
        <div>
            <Header/>
        </div>
        <div className="vin pa-d">
        <h2>Terms of service</h2>
        <p>The New Black</p>
        <div className="filo">
            <div className="vincet">
                <p>1. Preamble</p>
                <p>1.1 The New Black (hereinafter referred to as the Operator) operates the website TheNewBlack.ai, a web application for generating AI clothing design images. These Tearms of Use apply to all users of the TheNweBlack.ai platform (hereinafter: the User).</p>
            </div>
            <div className="vincet">
                <p>2. Right of use</p>
                <p>2.1 The Operator has the right to restrict the use of the plaform without giving reasons or to block Users.</p>
                <p>2.2 By giving consent, the User agrees that the Operator may store the User's IP address to verify extensive use of the platform.</p>
            </div>
            <div className="vincet">
                <p>3. Rights and obligations of the User</p>
                <p>3.1 The User undertakes to refrain from any actions that endangers the functionality or operation of the software. In particular, the User is prohibited from carrying out any actons that scan or test weak points of the sofware, bypass security systems or access systems of the software or integrate malware into the software.</p>
                <p>3.2 The User guarantees that he has all the neccesary rights (such as copyright, ancillary copyright, indusrial property rights, trademark rights) for processing the uploaded photos.</p>
            </div>
            <div className="vincet">
                <p>4. Wrranty and liability</p>
                <p>4.1 Any warranty for the rsults of the software and its availability is excluded. If, nevertheless, a warranty claim should exist, the warranty period is 1 month.</p>
                <p>4.2 The Operator is not liable for the speed of the Software, its Availability, data loss or the correctness of the results. In addition, the liability of the Operator is excluded unless the damage has been caused intentionally or through gross negligence. This does not apply in cases of loss of life or damage to the health of a person.</p>
                <p>4.3 The liabilty of the Operator is in any case limited to $USD 100.</p>
            </div>
            <div className="vincet">
                <p>5. Confidentiality and data protection</p>
                <p>5.1 All information on data protectin is available to the user on TheNewBlack.ai. You can contact israelwilliams@gmail.ai for more information.</p>
            </div>
            <div className="vincet">
                <p>6. Concluding provisions</p>
                <p>6.1 Legit disputes arising from this Contract are governed exclusively by French law. Application of the UN Convention for the international Sale of Goods, the referral standards of the IPRG and the Regulation (EC) no 593/2008 of the European Parliament and of the Concil of June 17, 2008 on the law applicable to contractual obligations (Rome / Regulation) is excluded.</p>
                <p>6.2 The exclusive jurisdiction for disputes arising out of or in connection with this contact shall be the component court in Paris, France.</p>
                <p>6.3 Changes and/or additions to this Contract must be made in written form is also required for departure from this formal requirment.</p>
            </div>
            <div className="vincet">
                <p>7. Subscriptions</p>
                <p>7.1 Users may cancel their subscription at any time. This cancellation will be effective at the end of the current period. For example, for a monthly payment, the subscription will be cancelled at the end of the month. No refunds will be made for past or current periods.</p>
            </div>
        </div>
     </div> 
     <div>
        <Footer/>
     </div>
</div> 
    )
}
export default Terms