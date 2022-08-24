import './Footer.css'
import insta from '../images/insta.png'
import facebook from '../images/facebook.png'
import youtube from '../images/youtube.png'
import twitter from '../images/twitter.png'
import pinterest from '../images/pinterest.png'
import linkedin from '../images/linkedin.png'



function Footer(){
    return(
        <div className="footer">
            <div className="justify related">
                <h5>RELATED SERVICES</h5>
                <p>Electrician  |  Plumber  |  Carpenter  |  Packers & Movers  |  Salon For Woman  |  Salon For Man  |  Electronic Appliances  |  CCTV Installation & Repair  |  Ro- repair & service  |  house Painter  |  Pest Control  |  Kitchen Cleaning  |  Bathroom Cleaning  |  Sofa Cleaning  |  Carpet Cleaning  |  Home Deep Cleaning </p>
            </div>
            <div className="justify location related">
                <h5>TOP LOCATIONS</h5>
                <p>Delhi  |  Gurgaon  |  Noida  |  Ghaziabad  |  Faridhabad  |  Greater Noida</p>
            </div>
            <div>
                <ul className="justify footer-nav">
                    <li>About us</li>
                    <li>Blog</li>
                    <li>Near me</li>
                    <li>Careers</li>
                    <li>Terms and condition</li>
                    <li>Privacy Policy</li>
                    <li>Offers & Gift Cards</li>
                    <li>Contact Us</li>
                    </ul>
            </div>
            <div style={{margin:'20px'}}>
                <h5 style={{color:'#56FBFF'}}>Contact Us</h5>
                <p>
                    Phone: +91 9990001089
                  <br>
                            </br>  
                Email: support@oyebusy.com
                
                </p>

            </div>

<div  className="justify social">
    <img  src={insta}></img>
    <img  src={twitter}></img>
    <img  src={youtube}></img>
    <img  src={linkedin}></img>
    <img  src={facebook}></img>
    <img  src={pinterest}></img>
</div>
<div>© 2021 OyeBusy Technologies Pvt. Ltd.</div>
<br></br>
<br></br>
        </div>
    );
}

export default Footer;