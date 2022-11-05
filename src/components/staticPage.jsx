import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import image from "./images/img.jpg";
import slack from "./images/slack.png";
import github from "./images/github.png";
import Footer from "./footer";

import share1 from "./images/share1.png";
import share2 from "./images/share2.png";
import "./staticPage.css";
class Static extends Component {
  render() {
    const handleFocus = function () {
      alert("i have been entered");
    };
    return (
      <div>
        <div className="container ">
          <div onMouseEnter={handleFocus} className="share d-none d-lg-block">
            {" "}
            <Link to="#">
              <img src={share2} alt="share button one" />
            </Link>
          </div>
          <div
            onMouseEnter={handleFocus}
            className="d-block d-sm-none share-two"
          >
            <Link to="#">
              <img src={share1} alt="share button two" />
            </Link>
          </div>
          <div className="text-center m-4">
            <div className="rounded-circle">
              <img
                src={image}
                alt="my image"
                width={88}
                id="profile__img"
                className="rounded-circle"
              />
            </div>
            <h2 id="twitter" className="m-2 my-name">
              @azeez_alaba
            </h2>
            <h2 id="slack" className="d-none">
              Alaba
            </h2>
          </div>

          <Link
            to="https://twitter.com/azeez_alaba"
            className="btn  m-4"
            type="button"
          >
            Twitter Link
          </Link>

          <Link
            to="https://training.zuri.team/"
            className="btn  m-4"
            id="btn__zuri"
            type="button"
          >
            Zuri Team
          </Link>

          <Link
            to="https://books.zuri.team"
            className="btn  m-4"
            id="books"
            type="button"
            title="This is where i find books about design and coding"
          >
            Zuri Books
          </Link>

          <Link
            to="https://books.zuri.team/python-for-beginners?ref_id=Alaba"
            className="btn  m-4"
            id="book__python"
            type="button"
            title="This is where i feature in the interesting book"
          >
            Python Books
          </Link>

          <Link
            to="https://background.zuri.team "
            className="btn  m-4"
            id="pitch"
            type="button"
            title="I pitch a service for doing background checks on coders. My service is great and pocket friendly"
          >
            Background Check for Coders
          </Link>

          <Link
            to="https://books.zuri.team/design-rules "
            className="btn  m-4"
            id="book__design"
            type="button"
            title="I pitch the free design book offered by Zuri"
          >
            Design Books
          </Link>

          <Link
            to={`/contact`}
            className="btn  m-4"
            id="contact"
            type="button"
            title="This link takes you to the contact form"
          >
            Contact
          </Link>

          <div>
            <div className="text-center">
              <img src={slack} className="m-2" />
              <Link to="https://github.com/alaba-web/Static-page">
                <img src={github} className="m-2" />
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Static;
