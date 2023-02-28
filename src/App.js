import './App.css';
import Header from './Header';
import Section from './Section';
import Section2 from './Section2';
import Thank from './Thank';
import PreviousAddress from './PreviousAddress'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import Footer from './Footer';
import Confirm from './Confirm';
import { AppContext } from './AppContext';
import { useState } from 'react';



function App() {

  const [name, setname] = useState("")
  const [lastname,setLastName]=useState('')
  const [dob,setDob]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [visitorId,setvisitorId]=useState('')
  const [userID,setuserID]=useState('')



  
  

  const value = {
    name,
    setname,
    lastname,
    setLastName,
    dob ,
    setDob,
    setEmail,
    email,
    phone,
    setPhone,
    visitorId,
    setvisitorId,
    userID,
    setuserID
  }

  return (
    <div className="App">
    <AppContext.Provider value={value} >

    <BrowserRouter>

      <Header/>

       <Routes>
          <Route exact path="/" element={<Section/>}/>
        </Routes>

        <Routes>
          <Route exact path="/section2" element={<Section2/>}/>
        </Routes>

        <Routes>
         <Route exact path="/thankyou" element={<Thank/>}/>
        </Routes>

        <Routes>
          <Route exact path="/confirm" element={<Confirm/>}/>
        </Routes> 
        <Routes>
        <Route exact path="/previousaddress" element={<PreviousAddress/>}/>
      </Routes> 
        
      <Footer/>
    </BrowserRouter>
    </AppContext.Provider>

    </div>

  );
}

export default App;
