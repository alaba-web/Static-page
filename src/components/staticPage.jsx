import React, { Component } from "react";
import image from "./images/img.jpg";
import slack from "./images/slack.png";
import github from "./images/github.png";
import zuriLogo from "./images/zuriLogo.png";
import I4G from "./images/I4G.png";
import share1 from "./images/share1.png";
import share2 from "./images/share2.png";
import "./staticPage.css";
class Static extends Component {
  render() {
    return (
      <div>
        <div className="container ">
          <div className="share d-none d-lg-block">
            {" "}
            <a href="#">
              <img src={share2} alt="share button one" />
            </a>
          </div>
          <div className="d-block d-sm-none share-two">
            <a href="#">
              <img src={share1} alt="share button two" />
            </a>
          </div>
          <div className="text-center m-4">
            <div className="rounded-circle">
              <img
                src={image}
                alt="my image"
                width={88}
                id="profile_img"
                className="rounded-circle"
              />
            </div>
            <h2 id="twitter" className="m-2 my-name">
              Azeez Alaba
            </h2>
            <h2 id="slack" className="d-none">
              Alaba
            </h2>
          </div>

          <a
            href="https://twitter.com/azeez_alaba"
            className="btn  m-2"
            type="button"
          >
            Twitter Link
          </a>

          <a
            href="https://training.zuri.team/"
            className="btn  m-2"
            id="btn_zuri"
            type="button"
          >
            Zuri Team
          </a>

          <a
            href="http://books.zuri.team"
            className="btn  m-2"
            id="books"
            type="button"
          >
            Zuri Books
          </a>

          <a
            href="https://books.zuri.team/"
            className="btn  m-2"
            id="book_python"
            type="button"
          >
            Python Books
          </a>

          <a
            href="https://background.zuri.team "
            className="btn  m-2"
            id="pitch"
            type="button"
          >
            Background Check for Coders
          </a>

          <a
            href="https://books.zuri.team/design-rules "
            className="btn  m-2"
            id="book_design"
            type="button"
          >
            Design Books
          </a>

          <div>
            <div className="text-center">
              <img src={slack} className="m-2" />
              <img src={github} className="m-2" />
            </div>
          </div>
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
        </div>
      </div>
    );
  }
}

export default Static;
