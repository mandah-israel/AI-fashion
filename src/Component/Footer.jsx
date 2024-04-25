import { Link } from "react-router-dom"
import { LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";
import { WhatsappLogo } from "@phosphor-icons/react";
import { InstagramLogo } from "@phosphor-icons/react";
import { FacebookLogo } from "@phosphor-icons/react";
import { YoutubeLogo } from "@phosphor-icons/react";
import {Copyright} from "@phosphor-icons/react"
export default function Footer(){
    return(
      <div className="foot">
        <div className="bottom">
            <ul>
                <li><Link to="/features">About us</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
                <li><Link to="/terms">Terms of service</Link></li>
            </ul>
        </div>
        <div className="copy">
          <Link><Copyright size={32}/></Link>
          <span>The New Black. All rights reserved</span>
        </div>
        <div className="icon">
          <Link><YoutubeLogo size={32}/></Link>
          <Link><WhatsappLogo size={32}/></Link>
          <Link><TwitterLogo size={32}/></Link>
          <Link><LinkedinLogo size={32}/></Link>
          <Link><FacebookLogo size={32}/></Link>
        </div>
      </div>  
    )
}