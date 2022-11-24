import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import {Link , useNavigate  } from 'react-router-dom'
import { AppContext } from "./AppContext";
import axios from "axios";

function Section() {
  // const [name,setName]=useState('Amal')
  
  const token = `9ee2a77e8ce49c20bfc020303ebacb58a1ccf26248862bc0726f6fbc361f8f28`;

  const [day, setday] = useState('');
  const [month, setmonth] = useState('')
  const [year, setyear] = useState()


  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    const bodyParameters = {
        ip_address:"90.194.40.83",
        device_type:"Android",
        browser_type:"Chrome",
        user_agent:"Mozilla/5.0 (Linux; Android 10; POT-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Mobile Safari/537.36" 		
    };

    axios.post(
      "https://dev.api.klaim.yousted.org/api/visitor/store",
      bodyParameters,
      config
    )
      .then((rsp)=>{ 
        setvisitorId(rsp.data.data.visitorId)
      })
      .catch();
  }, []);

  const { 
    name,
    setname,
    lastname,
    setLastName,
    dob ,
    setDob,
    visitorId,
    setvisitorId} = useContext(AppContext);

  const handleDobday = (e) => {
    setday(e.target.value)
  }
  const handleDobmonth = (e) => {
    setmonth(e.target.value)
  }
  const handleDobyear = (e) => {
    setyear(e.target.value)
  }

  const navigate = useNavigate();

  const handleCheckBasicDetails = () => {
    if(name != '' && lastname != "" && day != '' && month != ''&& month != ''){
      setDob(`${day}-${month}-${year}`)
      navigate('/section2')
    }else{
      alert('Please fill all the required fields')
    }
   
  }

  return (
    <div>
      <section className="bnrsection">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 p-0">
              <img src="./img/bnr.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="offset-lg-1 col-lg-10 col-md-12 col-12 text-center">
              <h1>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h1>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-12 text-center">
              <div className="formpart">
                
                   <form action="">
                  <div id="slide01">
                    <h3>Enter Your Personal Details</h3>
                    <div className="mb-3 text-start">
                      <label htmlFor="FormControlInput1" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="FormControlInput1"
                        placeholder="First Name"
                        onChange={e => setname(e.target.value)}
                      />
                    </div>
                    <div className="mb-3 text-start">
                      <label htmlFor="FormControlInput2" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="FormControlInput2"
                        placeholder="Last Name"
                        onChange={e => setLastName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3 text-start">
                      <label htmlFor="FormControlInput3" className="form-label">
                        Enter Your Date of Birth
                      </label>
                      <fieldset>
                        <legend> Date Of Birth</legend>
                        <div className="row">
                          <div className="form-group col-lg-4 col-md-4 col-sm-4 col-12 ">
                            <select
                              name="lstDobDay"
                              id="lstDobDay"
                              className="form-control watermark"
                              onChange={handleDobday}
                            >
                              <option value="">Day </option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                              <option value="13">13</option>
                              <option value="14">14</option>
                              <option value="15">15</option>
                              <option value="16">16</option>
                              <option value="17">17</option>
                              <option value="18">18</option>
                              <option value="19">19</option>
                              <option value="20">20</option>
                              <option value="21">21</option>
                              <option value="22">22</option>
                              <option value="23">23</option>
                              <option value="24">24</option>
                              <option value="25">25</option>
                              <option value="26">26</option>
                              <option value="27">27</option>
                              <option value="28">28</option>
                              <option value="29">29</option>
                              <option value="30">30</option>
                              <option value="31">31</option>
                            </select>
                            <i
                              className="validate "
                              aria-hidden="true"
                              style={{display:"none"}}
                            />
                            <span
                              id="dobDay_err"
                              className="error_msg error"
                            ></span>
                          </div>
                          <div className="form-group col-lg-4 col-md-4 col-sm-4 col-12 ">
                            <select
                              name="lstDobMonth"
                              id="lstDobMonth"
                              className="form-control watermark"
                              onChange={handleDobmonth}
                            >
                              <option value="">Month </option>
                              <option value="1">January</option>
                              <option value="2">February</option>
                              <option value="3">March</option>
                              <option value="4">April</option>
                              <option value="5">May</option>
                              <option value="6">June</option>
                              <option value="7">July</option>
                              <option value="8">August</option>
                              <option value="9">September</option>
                              <option value="10">October</option>
                              <option value="11">November</option>
                              <option value="12">December</option>
                            </select>
                            <i
                              className="validate "
                              aria-hidden="true"
                              style={{display:"none"}}
                            />
                            <span id="dobMonth_err" className="error_msg"></span>
                          </div>
                          <div className="form-group col-lg-4 col-md-4 col-sm-4 col-12">
                            <select
                              name="lstDobYear"
                              id="lstDobYear"
                              className="form-control"
                              onChange={handleDobyear}

                            >
                              <option value="">Year</option>
                              <option value="2002">2002</option>
                              <option value="2001">2001</option>
                              <option value="2000">2000</option>
                              <option value="1999">1999</option>
                              <option value="1998">1998</option>
                              <option value="1997">1997</option>
                              <option value="1996">1996</option>
                              <option value="1995">1995</option>
                              <option value="1994">1994</option>
                              <option value="1993">1993</option>
                              <option value="1992">1992</option>
                              <option value="1991">1991</option>
                              <option value="1990">1990</option>
                              <option value="1989">1989</option>
                              <option value="1988">1988</option>
                              <option value="1987">1987</option>
                              <option value="1986">1986</option>
                              <option value="1985">1985</option>
                              <option value="1984">1984</option>
                              <option value="1983">1983</option>
                              <option value="1982">1982</option>
                              <option value="1981">1981</option>
                              <option value="1980">1980</option>
                              <option value="1979">1979</option>
                              <option value="1978">1978</option>
                              <option value="1977">1977</option>
                              <option value="1976">1976</option>
                              <option value="1975">1975</option>
                              <option value="1974">1974</option>
                              <option value="1973">1973</option>
                              <option value="1972">1972</option>
                              <option value="1971">1971</option>
                              <option value="1970">1970</option>
                              <option value="1969">1969</option>
                              <option value="1968">1968</option>
                              <option value="1967">1967</option>
                              <option value="1966">1966</option>
                              <option value="1965">1965</option>
                              <option value="1964">1964</option>
                              <option value="1963">1963</option>
                              <option value="1962">1962</option>
                              <option value="1961">1961</option>
                              <option value="1960">1960</option>
                              <option value="1959">1959</option>
                              <option value="1958">1958</option>
                              <option value="1957">1957</option>
                              <option value="1956">1956</option>
                              <option value="1955">1955</option>
                              <option value="1954">1954</option>
                              <option value="1953">1953</option>
                              <option value="1952">1952</option>
                              <option value="1951">1951</option>
                              <option value="1950">1950</option>
                              <option value="1949">1949</option>
                              <option value="1948">1948</option>
                              <option value="1947">1947</option>
                              <option value="1946">1946</option>
                              <option value="1945">1945</option>
                              <option value="1944">1944</option>
                              <option value="1943">1943</option>
                              <option value="1942">1942</option>
                              <option value="1941">1941</option>
                              <option value="1940">1940</option>
                              <option value="1939">1939</option>
                              <option value="1938">1938</option>
                              <option value="1937">1937</option>
                              <option value="1936">1936</option>
                              <option value="1935">1935</option>
                              <option value="1934">1934</option>
                              <option value="1933">1933</option>
                              <option value="1932">1932</option>
                              <option value="1931">1931</option>
                              <option value="1930">1930</option>
                              <option value="1929">1929</option>
                              <option value="1928">1928</option>
                              <option value="1927">1927</option>
                              <option value="1926">1926</option>
                              <option value="1925">1925</option>
                              <option value="1924">1924</option>
                              <option value="1923">1923</option>
                              <option value="1922">1922</option>
                              <option value="1921">1921</option>
                              <option value="1920">1920</option>
                              <option value="1919">1919</option>
                              <option value="1918">1918</option>
                              <option value="1917">1917</option>
                              <option value="1916">1916</option>
                              <option value="1915">1915</option>
                              <option value="1914">1914</option>
                              <option value="1913">1913</option>
                              <option value="1912">1912</option>
                              <option value="1911">1911</option>
                              <option value="1910">1910</option>
                            </select>
                            <i
                              className="validate "
                              aria-hidden="true"
                              style={{display:"none"}}
                            />
                            <span id="dobYear_err" className="error_msg"></span>
                          </div>
                          <span id="dob_final_err" className="error_msg"></span>
                        </div>
                      </fieldset>
                    </div>
                    <div className="mb-3 text-center">
                      <button type="button" onClick={handleCheckBasicDetails} className="btn btn-warning next01">
                         
                            Next
                          
                            
        
                      </button>
                    </div>
                  </div>

                   </form>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section;
