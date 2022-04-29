import React from "react";
import "./Mobile.css";
import { P2EIcon, Twitter, Discord } from "../../images";
function Mobile() {
  return (
    <div className="mobileContainer">
      <img src={P2EIcon} alt="" className="mobileBg" />
      <img src={P2EIcon} alt="" className="mobileLogo" />
      <h2>P2E ANALYTICS</h2>
      <p>Your GameFi Hub and ROI Guide</p>

      <div className="mobileOnItsWay">
        <h2>Mobile is on the way!</h2>
        <p>
          In the meantime, visit us on desktop, and join our community on
          Discord and Twitter.
        </p>
      </div>
      <div className="mobileOnItsWay">
        <h2>JOIN OUR COMMUNITIES FOR UPDATES</h2>
        <div className="mobileSocialRow">
          <a
            href="https://discord.gg/VDkTXHNrSp"
            target="_blank"
            rel="noreferrer"
            className="disableLink"
          >
            <div className="mobileSocialCol">
              <img src={Discord} alt="-" className="mobileSocialImage" />
              <p>Discord</p>
            </div>
          </a>

          <a
            href="https://twitter.com/P2EAnalytics"
            target="_blank"
            rel="noreferrer"
            className="disableLink"
          >
            <div className="mobileSocialCol">
              <img src={Twitter} alt="-" className="mobileSocialImage" />
              <p>Twitter</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
