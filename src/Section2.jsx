import React, { useContext } from 'react';
import "./main.css";
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import { AppContext } from './AppContext';
 
function Section2() {

  const token =`9ee2a77e8ce49c20bfc020303ebacb58a1ccf26248862bc0726f6fbc361f8f28`;

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const { email, setEmail , phone,  setPhone ,  name, lastname,  dob , visitorId   ,
    setuserID} = useContext(AppContext)

  const navigate = useNavigate();


  const submitAfterEmailValidation = () => {
    if (email !== "" && phone !== "") {
      const bodyParameters = {
        email: email,
        telephone: phone,
      };
      axios
        .post(
          "https://dev.api.klaim.yousted.org/api/duplicate-check",
          bodyParameters,
          config
        )
        .then((rsp) =>{
          if(rsp && rsp.status == 200 && rsp.data && rsp.data.status =="Success"){
            saveUserDetails()
          }else{
            alert(rsp.data.response)
          }
        });
    }
  };
 
  const saveUserDetails = () => {
    const bodyParameters = {
      visitor_id:visitorId,
      first_name:name,
      last_name:lastname,
      dob:dob,
      email: email,
      telephone: phone,
    };
    axios
      .post(
        "https://dev.api.klaim.yousted.org/api/user/store",
        bodyParameters,
        config
      )
      .then((rsp) =>{
        if(rsp && rsp.status == 200 ){
          setuserID(rsp.data.data.userId)
          navigate('/confirm')
        }else{
          alert("error")
        }
      });
  }

  return (
    <section className="bnrsection" >

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 p-0">
            <img src="./img/bnr.jpg" alt="" />
          </div>
        </div>
      </div>
      <form action=''>
      <div id="slide02" className="container">
        <div className="offset-lg-1 col-lg-10 col-md-12 col-12 text-center">
          <h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <div style={{     border: "1px solid #000",
                          borderRadius: "8px",
                          padding: "20px",
                          background: "#f5f5f5",
                          boxSizing: "border-box"}}>

        <h3>Enter Your Contact Details</h3>
        <div className="mb-3 text-start">
          <label htmlFor="FormControlInput4" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="FormControlInput4"
            placeholder="Email Address"
            onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>
        <div className="mb-3 text-start">
          <label htmlFor="FormControlInput5" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="FormControlInput5"
            placeholder="Phone Number"
            onChange={(e)=>{setPhone(e.target.value)}}

          />
        </div>
        <div className="mb-3 text-center">
          <button onClick={submitAfterEmailValidation} type="button" className="btn btn-success" id="submit_claim">
              Submit
          </button>
        </div>
        </div>
      </div>
      </form>
    </section>
  );
}

export default Section2