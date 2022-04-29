import React from "react";
import "./SocialMediaUpdates.css";
import { Twitter, Discord } from "../../images/index.js";

function SocialMediaUpdates() {
  return (
    <div className="updateContainer" id="community">
      <h2>JOIN OUR COMMUNITIES FOR UPDATES</h2>
      <div className="updateSocialMediaRow">
        <a
          href="https://discord.gg/VDkTXHNrSp"
          target="_blank"
          rel="noreferrer"
        >
          <div className="updateSocialMediaIcon">
            <img src={Discord} alt="-" className="updateSocialMediaIconImage" />
            <p>Discord</p>
          </div>
        </a>

        <a
          href="https://twitter.com/P2EAnalytics"
          target="_blank"
          rel="noreferrer"
        >
          <div className="updateSocialMediaIcon">
            <img src={Twitter} alt="-" className="updateSocialMediaIconImage" />
            <p>Twitter</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default SocialMediaUpdates;
