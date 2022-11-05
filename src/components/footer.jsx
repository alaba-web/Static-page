import React, { Component } from "react";
import zuriLogo from "./images/zuriLogo.png";
import I4G from "./images/I4G.png";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="foot">
          <div>
            <img src={zuriLogo} alt="zuri logo" />
          </div>
          <p className="opacity-50">HNG Internship 9 Frontend Task</p>
          <div>
            <img src={I4G} alt="I4G logo" />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
