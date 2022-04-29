import React from "react";
import "./Insights.css";
import { MikoTwitter } from "../../../images";
import Feedback from "../../../components/Feedback/Feedback";
import SocialMediaUpdates from "../../../components/SocialMediaUpdates/SocialMediaUpdates";
const tweets = [
  {
    content: (
      <p>
        1/ Crabada economy and ROI update using some charts from @P2EAnalytics!{" "}
        <br />
        @PlayCrabada is the #1 #P2E game on @avalancheavax .<br /> <br />
        Also:
        <br />
        1) @P2EAnalytics Discord will be live tomorrow <br />
        2) Site will go live Tuesday/Wednesday <br /> <br />
        Inflation: it's been 0.20-0.45% this week which is good,
      </p>
    ),
    link: "https://twitter.com/mikocryptonft/status/1508221257774514181?s=20&t=jUSkswTpeKd2T7q9NPaYCA",
  },
  {
    content: (
      <>
        1/ Major improvements in the @PlayCrabada economy! <br />
        <br />
        A) Net inflation down to 0.2%! Driven by higher breeding and lower
        emission, likely due to more crabs either looting or renting. <br />
        B) Marketplace fees jumped. I added an annualized revenue metric in
        USD...
      </>
    ),
    link: "https://twitter.com/mikocryptonft/status/1504494608541265931?s=20&t=wz0bBW4rpKlfzFmaS6KOSQ",
  },
  {
    content: (
      <>
        Time for the weekly @PlayCrabada Economy update! <br />
        <br />
        A) Net inflation ticked up to 0.6%; good news is that breeding has
        stabilized <br />
        B) Both marketplace and tavern fees were higher, potentially pointing to
        increase in activity C) TUS holder count growth accelerated!
      </>
    ),
    link: "https://twitter.com/mikocryptonft/status/1500695179480731653?s=20&t=wz0bBW4rpKlfzFmaS6KOSQ",
  },
  {
    content: (
      <>
        As promised, I've pulled together the latest on the @PlayCrabada economy
        as well as an ROI guide. To start, let's look at $TUS inflation: <br />
        <br />
        A) Net inflation is flat at 0.5% compared to 2/20. Both emission and
        breeding are steady (surprisingly) <br />
        B) Marketplace activity has declined
      </>
    ),
    link: "https://twitter.com/mikocryptonft/status/1502709837762895883?s=20&t=wz0bBW4rpKlfzFmaS6KOSQ",
  },
  {
    content: (
      <>
        1/ As promised, a summarized comparison of @PlayCrabada and
        @AxieInfinity .<br />
        <br />
        In this thread I will cover gameplay, tokenomics, ROI impact and the
        teams. <br />
        This is my high level view and is not meant to be a comprehensive
        coverage.
      </>
    ),
    link: "https://twitter.com/mikocryptonft/status/1498184086472597505?s=20&t=wz0bBW4rpKlfzFmaS6KOSQ",
  },
];
function Insights() {
  return (
    <div className="insightsContainer">
      {tweets.map((tweet, index) => {
        return (
          <div key={index} className="insightTweet">
            <a
              className="disableLink"
              href={tweet.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="tweetProfile">
                <img src={MikoTwitter} className="tweetProfilePic" alt="" />
                <div className="twitterUsername">
                  <p>
                    <strong>Miko (🦀,🍕,🛸)🔺</strong>
                  </p>
                  <p style={{ color: "grey" }}>@mikocryptonft</p>
                </div>
              </div>
              <div className="tweetContent">
                {tweet.content}
                <div className="clickToSee">Click to see more {">"}</div>
              </div>
            </a>
          </div>
        );
      })}
      <Feedback />
      <SocialMediaUpdates />
    </div>
  );
}

export default Insights;
