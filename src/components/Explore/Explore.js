import React, { Component } from "react";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import "./Explore.css";

class Explore extends Component {
  render() {
    return (
      <section
        id="explore"
        className="section section-icons grey lighten-4 center"
      >
        <div className="container">
          <div className="row">
            <h4 className="center">
              <span className="black-text darken-1">Explore</span> LOGIST
            </h4>
            <div className="col s6 m3 fixedCardSize">
              <div className="card-panel">
              <span class="material-icons">
               local_shipping
                </span>
                <h4>POST LOADS</h4>
                <p>Lorem ipsum dolor sit amet consectetur, ad</p>
              </div>
            </div>
            <div className="col s6 m3 fixedCardSize">
              <div className="card-panel">
              <span class="material-icons">airport_shuttle</span>
              <h4>POST TRUCK</h4>
                <p>Lorem ipsum dolor sit amet consectetur.Readmore</p>
              </div>
            </div>
            <div className="col s6 m3 fixedCardSize">
              <div className="card-panel">
              <span class="material-icons">local_shipping</span>
               <h4>FIND TRUCKS</h4>
                <p>Lorem ipsum dolor sit con.jkj</p>
              </div>
            </div>
            <div className="col s6 m3 fixedCardSize">
              <div className="card-panel">
              <span class="material-icons">airport_shuttle</span>
                <h4>FIND BUSINESS</h4>
                <p>Lorem ipsum dolor sit amet </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Explore;
