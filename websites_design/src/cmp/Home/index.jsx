import { Link } from "react-router-dom";
import React from "react";

function Home() {
  return (
    <>
      <div>
        {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div style={{ marginLeft: "3%" }}>
            <img src="/images/logo.png" />
          </div>
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            style={{ marginLeft: "20%", gap: "20%" }}
          >
            <Link to="/"> Home</Link>
            <Link to="/about-us"> Aboutus</Link>
            <Link to="/blog"> Blog</Link>
            <Link to="/contact"> Contact</Link>
          </div>
          <div style={{ marginLeft: "20%" }}>
            <img
              src="https://thumbs.dreamstime.com/b/user-icon-trendy-flat-style-isolated-grey-background-user-symbol-user-icon-trendy-flat-style-isolated-grey-background-123663211.jpg"
              style={{ width: "15%" }}
            />
            <button style={{borderRadius:"8px"}}>Login </button>
            <button style={{ backgroundColor:"lightblue", borderRadius: "8px" }}>
              Get Started
            </button>
          </div>
        </nav> */}
        <div className="main0">
            <nav className="row" style={{marginTop:"-7%",marginBottom:"1%"}}>
          <div  className="col">
            <img src="/images/logo.png"/>
          </div>
          <div  className="col" style={{padding:"8px"}}>
            <Link to="/"  style={{padding:"8px"}} > Home</Link>
            <Link to="/about-us"  style={{padding:"8px"}}> Aboutus</Link>
            <Link to="/blog"  style={{padding:"8px"}}> Blog</Link>
            <Link to="/contact"  style={{padding:"8px"}}> Contact</Link>
          </div>
          <div className="col">
            <img
              src="https://thumbs.dreamstime.com/b/user-icon-trendy-flat-style-isolated-grey-background-user-symbol-user-icon-trendy-flat-style-isolated-grey-background-123663211.jpg"
              style={{ width: "15%" }} />
            <button style={{borderRadius:"8px"}}>Login </button>
            <button style={{ backgroundColor:"lightblue", borderRadius: "8px" }}>
              Get Started
            </button>
          </div>
        </nav>
        </div>
        

        <div className="main1">
          <div className="main2">
            <p style={{ color: "blue" }}> Welcome To Appie</p>
            <h1> Manage it all, in this all new system. </h1>
            <p>
              Hanky panky lavatory up the duff jolly good cack brolly is chinwag
              zonked happy days sloshed.
            </p>
            <div>
              <tr>
                <button className="main5">Download for iOS </button>
                <button className="main6">Download for Android </button>
              </tr>
            </div>
          </div>

          <div className="main3">
            <div className="pos1">
              <img src="images/ellipse.png" className="pos2"></img>
              <img src="images/image.png" className="pos3"></img>
            </div>
          </div>
        </div>

        <div className="main8">
          .
          <div style={{ marginTop: "5%", textAlign: "center" }}>
            <h1> Designed with The applicant in mind.</h1>
            <p>
              {" "}
              The full monty spiffing good time no biggie cack grub fantastic
            </p>
          </div>
          <div class="container text-center">
            <div class="row align-items-center" style={{ gap: "2%" }}>
              <div class="col">
                <h1 style={{ marginTop: "25%" }}>Searching</h1>
                <p> Mucker plastered bugger all mate morish are.</p>
              </div>
              <div class="col">
                <h1 style={{ marginTop: "25%" }}> Designing</h1>
                <p> Mucker plastered bugger all mate morish are.</p>
              </div>
              <div class="col">
                <h1 style={{ marginTop: "25%" }}> Building</h1>
                <p> Mucker plastered bugger all mate morish are.</p>
              </div>
              <div class="col">
                <h1 style={{ marginTop: "25%" }}> Suporting</h1>
                <p> Mucker plastered bugger all mate morish are.</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "100%", height: "130vh" }}>
          <div className="main9">
            <div className="icon">
              <img
                src="images/settingicon.jpg"
                style={{ width: "8%", float: "left" }}
              />
              <button style={{ padding: "3px", marginLeft: "10%" }}>
                Setting
              </button>
            </div>
            <div className="icon" style={{ marginTop: "24px" }}>
              <img
                src="images/report.png"
                style={{ width: "8%", float: "left" }}
              />
              <button style={{ padding: "3px", marginLeft: "10%" }}>
                Report
              </button>
            </div>
            <div className="icon" style={{ marginTop: "24px" }}>
              <img
                src="images/safety.png"
                style={{ width: "8%", float: "left" }}
              />
              <button style={{ padding: "3px", marginLeft: "10%" }}>
                {" "}
                safety Notices
              </button>
            </div>
            <div className="icon" style={{ marginTop: "24px" }}>
              <img
                src="images/applock.png"
                style={{ width: "8%", float: "left" }}
              />
              <button style={{ padding: "3px", marginLeft: "10%" }}>
                {" "}
                App lock
              </button>
            </div>
          </div>

          <div style={{ marginTop: "5%", float: "left" }}>
            <img src="images/01_home_app_style_01.png " />
          </div>

          <div style={{ float: "left", marginTop: "15%" }}>
            <p style={{ color: "blue" }}> Custom Reacyions</p>
            <h1> Highlight</h1>
            <h1> the app features</h1>
            <p> Car boot absolutely bladdered posh burke the</p>
            <p> wireless mush some dodg.</p>

            <div className="main10">
              <Link to="/" style={{ color: "white" }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div style={{ marginLeft: "4%", width: "30%" }}>
            <p style={{ color: "blue" }}> Traffic</p>
            <h1>Stage reporting with 50k queries.</h1>
            <p>
              {" "}
              He nicked it tickety boo harry the cras bargy chap mush spiffing
              spend a penny the full monty burke butty
            </p>
          </div>

          <div className="container text-center">
            <div className="row">
              <div className="col-6 col-sm-3">
                <img
                  src="images/blue.jpg"
                  style={{ float: "left", width: "15%", Color: "blue" }}
                />
                <h2 style={{ float: "left" }}>Carefully</h2>
                <br />
                <br />
                <p> Mucker plastered bugger all mate morish are.</p>
              </div>
              <div className="col-6 col-sm-3">
                <img
                  src="images/red.jpg"
                  style={{ float: "left", width: "15%" }}
                />
                <h2 style={{ float: "left" }}> Seamless Sync</h2>
                <p> Mucker plastered bugger all mate morish are.</p>
              </div>

              <div className="w-100"></div>

              <div className="col-6 col-sm-3">
                <img
                  src="images/green.png"
                  style={{ float: "left", width: "15%" }}
                />
                <h2 style={{ float: "left" }}>Choose a App</h2>
                <p> Mucker plastered bugger all mate morish are.</p>
              </div>
              <div className="col-6 col-sm-3">
                <img
                  src="images/pink.png"
                  style={{ float: "left", width: "15%" }}
                />
                <h2 style={{ float: "left" }}>User Interactive</h2>
                <p> Mucker plastered bugger all mate morish are.</p>
              </div>
            </div>
          </div>

          <div className="more">
            <Link style={{ color: "black", float: "left" }} to="/">
              Learn More{" "}
            </Link>
            <img
              style={{ float: "left", width: "23%", marginTop: "2px" }}
              src="images/forward.png"
            />
          </div>
        </div>

        <div className="main11">
          <div className="main12">
            <br />
            <br />
            <br />
            <br />
            <br />
            <p> Jason Response </p>
            {/* <br /> */}
            <p style={{ color: "lightgray" }}> April 14 ,2022</p>
            <br />
            <br />
            <p>
              {" "}
              Why I say old chap that is spiffing lurgy Oxford cracking goal
              bleeder , bog-{" "}
            </p>
            <p>standered Harry brilliant much a blinding shot starkers </p>
            <img src="images/star.png" style={{ width: "2%" }} />
            <img src="images/star.png" style={{ width: "2%" }} />
            <img src="images/star.png" style={{ width: "2%" }} />
            <img src="images/star.png" style={{ width: "2%" }} />
            <img src="images/star.png" style={{ width: "2%" }} />

            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>

        <div className="main13">
          <div className="main14">
            <h1> Meet our Team Members</h1>
            <p> Different Layouts and styles for team sections </p>
          </div>

          <div>
            <div className="row align-items-start" style={{ gap: "0%" }}>
              <div className="col">
                <img
                  src="images/team-1-1.jpg"
                  style={{ borderRadius: "8px" }}
                />
                <div className="main16">
                  <h5> Benjamin Evalent</h5>
                  <p> CEO Founder </p>
                </div>
              </div>
              <div className="col">
                <img
                  src="images/team-2-1.jpg"
                  style={{ borderRadius: "8px" }}
                />
                <div className="main16">
                  <h5> Sarah Taylor</h5>
                  <p> Web Designer</p>
                </div>
              </div>
              <div className="col">
                <img
                  src="images/team-3-1.jpg"
                  style={{ borderRadius: "8px" }}
                />
                <div className="main16">
                  <h5> John Doe </h5>
                  <p> Reviewer</p>
                </div>
              </div>
              <div className="col">
                <img
                  src="images/team-4-1.jpg"
                  style={{ borderRadius: "8px" }}
                />
                <div className="main16">
                  <h5> Meg lanning</h5>
                  <p> web Developer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="main19">
            <div className="main17">
              <Link style={{ color: "black" }} to="/contact">
                {" "}
                View all Members{" "}
              </Link>
            </div>

            <div classname="main18">
              <img
                src="images/forward.png"
                style={{ float: "left", width: "20%", marginTop: "2%" }}
              />
            </div>
          </div>
        
        
        </div>
                
                {/* <div className="main20">
                  <div className="row align-items-start">
                    <div
                      className="col"
                      style={{
                        backgroundColor: "rgb(227, 224, 224)",
                        textAlign: "left",
                        marginLeft: "3%",
                      }}
                    >
                      <img src="images/logo.png" style={{ width: "50%" }} />
                        <div  className="main22">
                              <p>Appie WordPress is theme is the last theme you will ever have</p>
                          <Link to="/contact">Read More -- </Link>
                        </div>
                    </div>
                    <div
                      className="col"
                      style={{
                        backgroundColor: "rgb(227, 224, 224)",
                        textAlign: "left",
                      }}
                    >
                      <h3>Company</h3>
                      <div className="main22">
                        <p>About Us </p>
                        <p>Service</p>
                        <p>Case Studies </p>
                        <p>Blog</p>
                        <p>Contact </p>
                      </div>
                    </div>
                    <div
                      class="col"
                      style={{
                        backgroundColor: "rgb(227, 224, 224)",
                        textAlign: "left",
                      }}
                    >
                      <h3>Support</h3>
                      <div className="main22">
                        <p>Community </p>
                        <p>Resources</p>
                        <p>Faqs </p>
                        <p>Privacy Policy</p>
                        <p>Careers </p>
                      </div>
                    </div>
                    <div
                      class="col"
                      style={{
                        backgroundColor: "rgb(227, 224, 224)",
                        textAlign: "left",
                      }}
                    >
                      <h3>Get In Touch</h3>
                      <div className="main22">
                        <p>support@appie.com </p>
                        <p> +(642) 342 762 44</p>
                        <p>442 Belle Terre St Floor 7, Francisco </p>
                      </div>
                    </div>
                  </div>
                </div> */}
        
        <div className="container88" style={{backgroundColor:"rgb(227, 224, 224)"}}>
          <div className="row ">
            <div
              className="col"
              style={{
                backgroundColor: "rgb(227, 224, 224)",
              }}
            >
              <img src="images/logo.png" style={{ width: "50%" }} />
                 <div  className="main22">
                      <p>Appie WordPress is theme is the last theme you will ever have</p>
                  <Link to="/contact">Read More -- </Link>
                </div>
            </div>
            <div
              className="col"
              style={{
                backgroundColor: "rgb(227, 224, 224)",
              
              }}
            >
              <h3>Company</h3>
              <div className="main22">
                <p>About Us </p>
                <p>Service</p>
                <p>Case Studies </p>
                <p>Blog</p>
                <p>Contact </p>
              </div>
            </div>
            <div
              className="col"
              style={{
                backgroundColor: "rgb(227, 224, 224)",
               
              }}
            >
              <h3>Support</h3>
              <div className="main22">
                <p>Community </p>
                <p>Resources</p>
                <p>Faqs </p>
                <p>Privacy Policy</p>
                <p>Careers </p>
              </div>
            </div>
            <div
              className="col"
              style={{
                backgroundColor: "rgb(227, 224, 224)",
               
              }}
            >
              <h3>Get In Touch</h3>
              <div className="main22">
                <p>support@appie.com </p>
                <p> +(642) 342 762 44</p>
                <p>442 Belle Terre St Floor 7, Francisco </p>
              </div>
            </div>
          </div>
        </div>
         
        
      </div>
    </>
  );
}
export default Home;
