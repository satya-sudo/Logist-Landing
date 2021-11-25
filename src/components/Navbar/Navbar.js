import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import "./Navbar.css";




const SmoothScroll = () => {
  return (
    <section>
      <div className="navbar-fixed">
        <nav className="black">
          <div className="container">
            <div class="nav-wrapper">
              <AnchorLink href="!#" class="brand-logo">
                LOGIST
              </AnchorLink>
              <AnchorLink
                href="!#"
                data-target="mobile-demo"
                className="sidenav-trigger"
              >
                <i class="material-icons">menu</i>
              </AnchorLink>
              <ul class="right hide-on-med-and-down">
                <li>
                  <AnchorLink href="#home">Home</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#search">Contact Us</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#explore">Partner With Us</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#adventure">About US</AnchorLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul class="sidenav" id="mobile-demo">
        {/* <li>
            <div className="user-view">
              <div className="background">
                  <img src={Imgbackground} alt="ocean" />
              </div>
              <AnchorLink href="#user"><img className="circle" src={Imgperson} alt="person" /></AnchorLink>
              <AnchorLink href="#name"><span className="white-text name">John Doe</span></AnchorLink>
              <AnchorLink href="#email"><span className="white-text email">jdandturk@gmail.com</span></AnchorLink>
            </div>
          </li> */}
        <li>
          <AnchorLink href="#home">Home</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#search">Contact Us</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#explore">Partner With Us</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#adventure">About US</AnchorLink>
        </li>
      </ul>
    </section>
  );
};

class Navbar extends Component {
  render() {
    return (
      <section>
        <SmoothScroll />
      </section>
    );
  }
}

export default Navbar;
