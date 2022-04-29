import React from "react";
import "./Feedback.css";
function Feedback() {
  return (
    <div className="feedback">
      <p>
        Give direct feedback on our Discord channel and help shape the future
      </p>
      <a
        href="https://discord.gg/VDkTXHNrSp"
        target="_blank"
        rel="noreferrer"
        className="disableLink"
      >
        <div className="feedbackButton">GIVE FEEDBACK</div>
      </a>
    </div>
  );
}

export default Feedback;
