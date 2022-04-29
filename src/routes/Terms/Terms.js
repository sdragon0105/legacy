import React from "react";
import Footer from "../../components/Footer/Footer";
import NavbarContainer from "../../components/Navbar/NavbarContainer";

function Terms() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <NavbarContainer />
      <div
        style={{
          margin: "30px auto",
          width: "75%",
          height: "100%",
        }}
      >
        <strong style={{ fontSize: "20px", fontWeight: "600" }}>
          TERMS AND CONDITIONS{" "}
        </strong>
        <br />
        P2E Analytics and its members, officers, directors, owners, employees,
        agents, representatives, suppliers and service providers provides this
        website (the “Site”) for informational and entertainment purposes only.
        Use of and access to the Site and the information, materials, services,
        and other content available on or through the Site (“Content”) are
        subject to these terms of use and all applicable laws.
        <br /> <br />
        <strong style={{ fontSize: "20px", fontWeight: "600" }}>
          NOT INVESTMENT ADVICE <br />
        </strong>
        The Content is for informational and entertainment purposes only, you
        should not construe any such information or other material as
        investment, financial, or other advice. Nothing contained on our Site
        constitutes a solicitation, recommendation, endorsement, or offer by P2E
        Analytics or any third party service provider to buy or sell any
        securities or other financial instruments in this or in in any other
        jurisdiction in which such solicitation or offer would be unlawful under
        the securities laws of such jurisdiction. All Content on this site is
        information and for entertainment of a general nature and does not
        address the circumstances of any particular individual, entity, and/or
        asset. Nothing in the Site constitutes professional and/or financial
        advice, nor does any information on the Site constitute a comprehensive
        or complete statement of the matters discussed. P2E Analytics is not a
        fiduciary by virtue of any person’s use of or access to the Site or
        Content. You alone assume the sole responsibility of evaluating the
        merits and risks associated with the use of any information or other
        Content on the Site before making any decisions based on such
        information or other Content. In exchange for using the Site, you agree
        not to hold P2E Analytics, its affiliates or any third party service
        provider liable for any possible claim for damages arising from any
        decision you make based on information or other Content made available
        to you through the Site.
      </div>
      <div style={{ positon: "aboslute", bottom: "0" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Terms;
