import React, { Component } from "react";
import "./home.css";
export default class Home extends Component {
  render() {
    return (
      <>
        <div className="container position-relative mb-4">
          <img
            src="https://picsum.photos/seed/picsum/200/300"
            alt="Girl in a jacket"
            className="w-100"
          />
          <div className="position-absolute topp">
            <h1 className="h1-name">Merehan Emad Ibrahim</h1>
            <p className="p-title">MEARN Stack Developer</p>
            <button type="button" class="btn btn-secondary">
              Contact
            </button>
          </div>
        </div>
      </>
    );
  }
}
