import React, { useEffect } from "react";
import NavbarContainer from "../../components/Navbar/NavbarContainer.js";
import SocialMediaUpdates from "../../components/SocialMediaUpdates/SocialMediaUpdates.js";
import {
  Discord,
  Twitter,
  P2EIcon,
  P2ELogoWhite,
  CrabadaLogo,
  TUS,
  Crab,
  CRA,
} from "../../images/index.js";
import "./About.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer.js";
import { useNavigate } from "react-router-dom";

function About() {
  // let navigate = useNavigate();
  // useEffect(() => {
  //   if (cookie && cookie !== "home") {
  //     navigate(`../${cookie}`, { replace: true });
  //   }
  // }, []);

  return (
    <div className="aboutWrapper">
      <section className="aboutSection fixedHeight">
        <div className="aboutBlur">
          <img src={P2EIcon} className="backgroundP2E" alt="" />
          <div className="backgroundBlur" />
        </div>
        <NavbarContainer />
        <div className="aboutContent">
          <img src={P2ELogoWhite} className="aboutLogo" alt="P2E" />
          <p>Your GameFi Hub and ROI Guide.</p>
          <div className="socialMediaRow">
            <div className="socialMediaItem">
              <a
                className="socialMediaItem"
                href="https://discord.gg/VDkTXHNrSp"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Discord} className="socialMediaIcon" alt="" />
                <p className="socialMediaText">Discord</p>
              </a>
            </div>
            <div className="socialMediaItem">
              <a
                className="socialMediaItem"
                href="https://twitter.com/P2EAnalytics"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Twitter} className="socialMediaIcon" alt="" />
                <p className="socialMediaText">Twitter</p>
              </a>
            </div>
          </div>
          <Link to="/hub" className="disableLink">
            <div className="launchButton">Launch Tool</div>
          </Link>
        </div>
      </section>
      <div
        style={{
          width: "100%",
          height: "1px",
          border: "1px solde #494949",
          backgroundColor: "#494949",
        }}
      />
      <section className="aboutSection">
        <div id="about" className="about">
          <div className="aboutContent">
            <div className="aboutTitle">
              <div className="aboutSmallSeperator" />
              <h1>ABOUT P2E ANALYTICS</h1>
            </div>
            <p className="aboutText">
              We strive to be your GameFi Hub by providing comprehensive tools
              to help you analyze and discover games. We have a broader vision
              for our platform which we will share as we build out our
              application. Our mission is to help onboard the next wave of users
              to web 3.0, as such, our #1 focus is you, the community.
            </p>
          </div>
          <img src={P2EIcon} className="aboutImage" alt="P2E" />
        </div>

        <div className="roadmap">
          <h1>ROADMAP</h1>
          <div className="roadmapWrapper">
            <div className="roadmapCard">
              <div className="roadmapBackground">1</div>
              <h1 className="roadmapTitle">PHASE ONE</h1>
              <div className="roadmapContent">
                <div className="roadmapRow">
                  <img src={CrabadaLogo} className="roadmapRowImage" alt="" />
                  <h2 className="roadmapRowText">CURRENT BUILD</h2>
                  <img src={TUS} className="roadmapRowImage" alt="" />
                </div>
                <div className="roadmapProducts">
                  <div className="roadmapProductItem">TUS INFLATION</div>
                  <div className="roadmapProductItem">MARKETPLACE</div>
                  <div className="roadmapProductItem">CRAB PRICES</div>
                  <div className="roadmapProductItem">CRAB POPULATION</div>
                  <div className="roadmapProductItem">EGG HATCHING</div>
                  <div className="roadmapProductItem">MIKO'S INSIGHTS</div>
                </div>
              </div>
            </div>
            <div className="roadmapCard second">
              <div className="roadmapBackground second">2</div>
              <h1 className="roadmapTitle">PHASE TWO</h1>
              <div className="roadmapContent">
                <div className="roadmapRow">
                  <img src={Crab} className="roadmapRowImage" alt="" />
                  <h2 className="roadmapRowText">VERSION 2.0</h2>
                  <img src={CRA} className="roadmapRowImage" alt="" />
                </div>
                <div className="roadmapProducts second">
                  <div className="roadmapProductItem">PORTFOLIO</div>
                  <div className="roadmapProductItem">VALUE OF NFTS</div>
                  <div className="roadmapProductItem">P&L</div>
                  <div className="roadmapProductItem">ROI CALCULATOR</div>
                  <div className="roadmapProductItem">CRA TOKEN</div>
                  <div className="roadmapProductItem">PLAYER TAB</div>
                </div>
              </div>
            </div>
            <div className="roadmapCard third">
              <div className="roadmapBackground third">3</div>
              <h1 className="roadmapTitle">PHASE THREE</h1>
              <div className="roadmapContent">
                <h2 className="roadmapRowText">EXPANSION</h2>
                <p className="roadmapRowTextThird">
                  We will add more tools and expand to other popular titles!
                  Follow our Twitter and join our Discord to stay up to date on
                  what's coming next.
                </p>
                <p className="roadmapRowTextThird">
                  Know a game that needs our tool?
                </p>
                <a
                  className="disableLink"
                  href="https://discord.gg/QyfAKbQb"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="giveFeedback">RECOMMEND GAMES</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SocialMediaUpdates />
      <Footer />
    </div>
  );
}

export default About;
