import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';


class Explore extends Component {
  render() {
    return (
      <section id="explore" className="section section-icons grey lighten-4 center">
        <div className="container">
          <div className="row">
          <h4 className="center">
              <span className="black-text darken-1">Explore</span> LOGIST</h4>
            <div className="col s6 m3">
              <div className="card-panel">
                <i className="material-icons medium black-text">add_shopping_cart</i>
                <h4>POST LOADS</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
              </div>
            </div>
            <div className="col s6 m3">
              <div className="card-panel">
                <i class="material-icons medium black-text">restaurant</i>
                <h4>POST TRUCK</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
              </div>
            </div>
            <div className="col s6 m3">
              <div className="card-panel">
                <i className="material-icons medium black-text">local_cafe</i>
                <h4>FIND TRUCKS</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
              </div>
            </div>
            <div className="col s6 m3">
              <div className="card-panel">
                <i className="material-icons medium black-text">shopping_basket</i>
                <h4>FIND BUSINESS</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Explore;