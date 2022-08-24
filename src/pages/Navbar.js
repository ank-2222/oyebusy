import "./Navbar.css";
import location from "../images/location.png";
import Downarrow from "../images/downarrow.png";
import playstore from '../images/playstore.png';
import shopping from '../images/shopping.png';
function Navbar() {
  return (
    <div>
      <nav className="nav" style={{backgroundColor:'#F6F6F6'}}>
        <div className="nav-div" style={{alignItems:'center'}}>
         <h3 style={{margin:'10px 20px',color:'#415859'}}>OyeBusy</h3>
         
         <div  className="nav-div" style={{margin:'10px 20px'}}>
            <img className="icon" src={location}></img><p >1st Floor, H 356, Block B, Sector 22, Noida, Uttar Pradesh 201301</p>
            <img style={{margin:'0px 20px'}} className="icon" src={Downarrow}></img>
            </div>
        </div>
        <div className="nav-div" style={{color:'#415859',margin:'10px 20px',alignItems:'center'}} >
        <h4>Blog</h4>
        <h4>Career</h4>
        <h4>My account </h4>

        <div className="nav-div" style={{alignItems:'center'}}>
            <img style={{margin:'10px 20px',width:'20px', height:'20px'}} className="icon" src={shopping}></img>
        <h4 style={{border:"2px solid #415859",padding:'5px',}}><img className="icon" style={{margin:'0px 5px'}} src={playstore}>
        </img>
            Download App
        </h4>

        </div>
        
        </div>
        <div  className="nav-div nav-loc" style={{margin:'10px 20px'}}>
            <img className="icon" src={location}></img><p >1st Floor, H 356, Block B, Sector 22, Noida, Uttar Pradesh 201301</p>
            <img style={{margin:'0px 20px'}} className="icon" src={Downarrow}></img>
            </div>
      </nav>
    </div>
  );
}

export default Navbar;
