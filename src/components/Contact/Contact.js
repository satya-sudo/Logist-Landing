import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import "./Contact.css";


class Contact extends Component {
  render() {
    return (
      <section id="contact" className="section section-contact scrollspy">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <div className="card-panel black white-text center">
                <i className="material-icons medium">email</i>
                <h5>LOGIST Address</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus sed praesentium delectus. Sit, mollitia
                  quo. Veniam repellat voluptas ipsum doloremque?</p>
              </div>
              <ul className="collection with-header">
                <li className="collection-header">
                  <h4>Main Office</h4>
                </li>
                <li className="collection-item">LOGIST Booking</li>
                <li className="collection-item"><i class="fas fa-map-marker-alt"></i> 123 Checkout rd, California, US</li>
                <li className="collection-item"><i class="fas fa-phone"></i> (800) 123-4567</li>
                <li className="collection-item"><i class="fas fa-envelope-square"></i> booking@LOGIST.com</li>
              </ul>
            </div>
            <div className="col s12 m6">
              <div className="card-panel grey lighten-3">
                <h5>Please fill out this form</h5>
                <form>
                  <div className="input-field">
                    <input type="text" id="name" className="validate" />
                    <label for="name" className="black-text">Name</label>
                  </div>
                  <div className="input-field">
                    <input type="email" id="email" />
                    <label for="email" className="black-text">Email</label>
                  </div>
                  <div className="input-field">
                    <input type="text" id="phone" />
                    <label for="phone" className="black-text">Phone</label>
                  </div>
                  <div className="input-field">
                    <textarea className="materialize-textarea" id="message" data-length="120"></textarea>
                    <label for="message" className="black-text">Message</label>
                  </div>
                  <input type="submit" value="Submit" className="btn black" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;