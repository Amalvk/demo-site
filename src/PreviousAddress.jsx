import "./main.css";
import {Link, useNavigate} from "react-router-dom"
import HeadName from "./HeadName";
import React, { useContext, useState } from 'react';
import { AppContext } from "./AppContext";
import axios from "axios";

function PreviousAddress() {

  const token =`9ee2a77e8ce49c20bfc020303ebacb58a1ccf26248862bc0726f6fbc361f8f28`;

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

    let [count,setState]= useState(1)
    const navigate = useNavigate()
    const {userID } = useContext(AppContext) 	
    const [address, setaddress] = useState({
        "0":{
            prev_address_line1:"",
            prev_address_line2:"",
            prev_address_line3:""
        }
        
    })

  const addAddress=()=>{
    let current = {...address};
    let currentSize = Object.values(address).length;

    current[String(currentSize)] = {
        prev_address_line1:"",
        prev_address_line2:"",
        prev_address_line3:""
    }
    
    setaddress(current)
  }

  const removeAddress=()=>{
    let current = {...address};
    let currentSize = Object.values(address).length;
    
    delete current[String(currentSize-1)] 
    
    setaddress(current)
  }

  const handleAddressline1 = (text , index) => {
    let current = {...address};

    current[String(index)]["prev_address_line1"] = text;
    
    setaddress(current)
  }
  const handleAddressline2 = (text , index) => {
    let current = {...address};

    current[String(index)]["prev_address_line2"] = text;
    
    setaddress(current)
  }

  const handleAddressline3 = (text , index) => {
    let current = {...address};

    current[String(index)]["prev_address_line3"] = text;
    
    setaddress(current)
  }

  const handleSaveAddress  = () => {
    const bodyParameters = {
        user_id:String(userID),
        previousAddress:address
    };
      axios
        .post(
          "https://dev.api.klaim.yousted.org/api/pre-user/store",
          bodyParameters,
          config
        )
        .then((rsp) =>{
          if(rsp && rsp.status == 200 ){
            navigate('/thankyou')
          }else{
            alert("error")
          }
        });
  }

  return (
    <section class="bnrsection">
    <div className="w3-container">
    <HeadName/>
      <div
        style={{
          border: "1px solid #000",
          borderRadius: "8px",
          padding: "20",
          background: "#f5f5f5",
          boxSizing: "border-box",
          margin: "10%",
        }}
      >

        <h3             
        style={{
            paddingTop: "30px",
          }} >Enter your Previous Address</h3>
        <div className="mb-3 text-start">
          <div
            style={{
              padding: "30px",
            }}
          >
           {
            Object.values(address).map((item , index) => {
                return(
                    <div key={index}>
                    <label htmlFor="FormControlInput4" className="form-label">
                    Previous Address {index+1}
                    </label>
                      <input  onChange={(e)=>{handleAddressline1(e.target.value , index )}}  style={{marginTop: "10px",}} type="email" className="form-control" id="FormControlInput4" placeholder="Address line 1"/>
                    <div className="mb-3 text-start">
        
                     <input  onChange={(e)=>{handleAddressline2(e.target.value , index )}} style={{marginTop: "20px",}} type="text" className="form-control" id="FormControlInput5" placeholder="Address line 2" />
                    </div>
        
                    <div className="mb-3 text-start">
                     <input  onChange={(e)=>{handleAddressline3(e.target.value , index )}} style={{marginTop: "20px",marginBottom:'30px'}} type="text" className="form-control" id="FormControlInput5"placeholder="Address line 3"/>
                    </div>
                    </div>
                )
            })
           }

         



            
            <div className="mb-3 text-center">
            <button type="button" onClick={handleSaveAddress} className="btn btn-success" id="submit_claim">
            
                Submit 
            </button><br/><br/>
                 <div style={{color:'blue',cursor: "context-menu"}}onClick={addAddress}>Add Another Address</div> 
                {Object.values(address).length >1 ? <div style={{color:'blue',cursor: "context-menu"}}onClick={removeAddress}>Remove Address</div> : ''}
                 <br/>
                 <div style={{color:'blue',cursor: "context-menu"}} ><Link to={'/confirm'}>Back</Link></div> 

           
            </div>
          </div>
            
        </div>
      </div>
    </div>
    </section>
  );
}

export default PreviousAddress;
