import React, { useContext } from 'react'
import "./main.css"
import {Link} from 'react-router-dom'
import HeadName from './HeadName';




function Confirm() {
  return (
    <section class="bnrsection">
      <div className="container">
        <HeadName />
        <div className="row">
          <div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-12 text-center">
            <div className="formpart">
              <form action="">
                <div id="slide03" style={{ display: "block" }}>
                  <h3>Do you have a Previous Address?</h3>
                  <Link
                    to="/previousaddress"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                  <div className="form-check">

                    <label
                      className="form-check-label next02"
                      for="flexRadioDefault1"
                    >
                        Yes
                        </label>
                        </div>
                        </Link>
                  <Link
                    to="/thankyou"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <div className="form-check">

                      <label
                        className="form-check-label tothank"
                        for="flexRadioDefault2"
                      >
                        No
                      </label>
                    </div>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Confirm