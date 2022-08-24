import "./Homepage.css";
import pic1 from "../images/Group 7075.png";
import pic2 from "../images/Group 7076.png";
import pic3 from "../images/Group 7077.png";
import pic4 from "../images/Group 7078.png";
import pic5 from "../images/Group 7079.png";
import pic6 from "../images/Group 7080.png";
import pic7 from "../images/Group 7081.png";
import pic8 from "../images/Group 7082.png";
import pic9 from "../images/Group 7083.png";
import pic10 from "../images/Group 7084.png";
import pic11 from "../images/Group 7085.png";
import pic12 from "../images/Group 7086.png";
import pic13 from "../images/1.png";
import pic14 from "../images/2.png";
import pic15 from "../images/5.png";

function Homepage() {
  return (
    <div>
      <div className="container">
        <div className="home-div home-search">
          <h1 style={{ margin: "200px 0 0 0 ", color: "white" }}>
            Home services, on demand
          </h1>
          <input
            className="search"
            type="text"
            placeholder="Search for a service"
          ></input>
          <p
            style={{
              color: "white",
              fontSize: "12pt",
              textShadow: "1px 1px 0px black",
            }}
          >
            Examples: Salon, Women’s hair, Men’s grooming & Many more..
          </p>
        </div>
        <div className="home-div second">
          <h2 style={{ color: "#353535", margin: "10px" }}>
            What are you looking for?
          </h2>
          <div>
            <div
              style={{
                backgroundColor: "#E8625D",
                margin: "10px ",
                padding: "5px",
                width: "200px",
                color: "white",
              }}
            >
              FLAT $400 OFF
            </div>
          </div>
          <div className="home-icon" style={{ margin: "20px" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ margin: "10px", width: "20%" }}>
                <img
                  style={{ width: "50px", height: "50px", margin: "10px 0" }}
                  src={pic5}
                ></img>
                <h4>House Painting</h4>
              </div>

              <div style={{ margin: "10px", width: "20%" }}>
                <img
                  style={{ width: "50px", height: "50px", margin: "10px 0" }}
                  src={pic6}
                ></img>
                <h4>Cleaning</h4>
              </div>

              <div style={{ margin: "10px", width: "20%" }}>
                <img
                  style={{ width: "70px", height: "50px", margin: "10px 0" }}
                  src={pic7}
                ></img>
                <h4>Packers & Movers</h4>
              </div>

              <div style={{ margin: "10px", width: "20%" }}>
                <img
                  style={{ width: "100px", height: "50px", margin: "10px 0" }}
                  src={pic8}
                ></img>
                <h4>AC service</h4>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ margin: "10px", width: "20%" }}>
                <img
                  style={{ width: "50px", height: "50px", margin: "10px 0" }}
                  src={pic9}
                ></img>
                <h4>Home Appliances</h4>
              </div>

              <div style={{ margin: "10px", width: "20%" }}>
                <img
                  style={{ width: "50px", height: "50px", margin: "10px 0" }}
                  src={pic10}
                ></img>
                <h4>Disinfection</h4>
              </div>

              <div style={{ margin: "10px", width: "20%" }}>
                <img
                  style={{ width: "50px", height: "50px", margin: "10px 0" }}
                  src={pic11}
                ></img>
                <h4>Pest Control</h4>
              </div>

              <div style={{ margin: "10px", width: "20%" }}>
                <img
                  style={{ width: "50px", height: "50px", margin: "10px 0" }}
                  src={pic12}
                ></img>
                <h4>Carpenter</h4>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ margin: "10px", width: "20%" }}>
                <img
                  style={{ width: "50px", height: "50px", margin: "10px 0" }}
                  src={pic1}
                ></img>
                <h4>Salon at Home</h4>
              </div>

              <div style={{ margin: "10px", width: "20%" }}>
                <img
                  style={{ width: "50px", height: "50px", margin: "10px 0" }}
                  src={pic2}
                ></img>
                <h4>Electrician</h4>
              </div>

              <div style={{ margin: "10px", width: "20%" }}>
                <img
                  style={{ width: "50px", height: "50px", margin: "10px 0" }}
                  src={pic3}
                ></img>
                <h4>Plumber</h4>
              </div>

              <div style={{ margin: "10px", width: "20%" }}>
                <img
                  style={{ width: "50px", height: "50px", margin: "10px 0" }}
                  src={pic4}
                ></img>
                <h4>CCTV</h4>
              </div>
            </div>
          </div>

          <div className="scroll">
            <img className="scroll-pic" src={pic13}></img>
            <img className="scroll-pic" src={pic14}></img>
            <img className="scroll-pic" src={pic15}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
