import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footerColumn">
        <div className="footerColumnTitle">About Us</div>
        <hr />
        <div className="footerColumnItem">Career</div>
        <div className="footerColumnItem">Press</div>
        <div className="footerColumnItem">APP</div>
        <div className="footerColumnItem">Covid-19 Safety</div>
      </div>
      <div className="footerColumn">
        <div className="footerColumnTitle">Social Media</div>
        <hr />
        <div className="footerColumnItem">Instagram</div>
        <div className="footerColumnItem">Twitter</div>
        <div className="footerColumnItem"> TikTok</div>
        <div className="footerColumnItem"> Spotify</div>
        <div className="footerColumnItem"> Facebook</div>
      </div>
      <div className="footerColumn">
        <div className="footerColumnTitle">Store</div>
        <hr />
        <div className="footerColumnItem"> Gift Cards</div>
        <div className="footerColumnItem"> Contact us</div>
        <div className="footerColumnItem"> FAQs</div>
        <div className="footerColumnItem">Catering</div>
      </div>
      <div className="footerColumn">
        <div className="footerColumnTitle">Terms + Conditions</div>
        <hr />
        <div className="footerColumnItem"> Privacy policy</div>
        <div className="footerColumnItem"> Terms + conditions</div>
        <div className="footerColumnItem">
          Do Not Sell My Personal Information
        </div>
        <div className="footerColumnItem"> Diversity, Equity, + Inclusion</div>
        <div className="footerColumnItem"> Fringe Benefits Claims MRFs</div>
      </div>
      <div className="copyright">©2022 sweetgreen</div>
    </div>
  );
}

export default Footer;
