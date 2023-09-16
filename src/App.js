import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {


  const [mode, setMode] = useState('light');


  const [alert, setAlert] = useState(null);
  const  showAlert =(message,type)=> {
        setAlert({
          msg : message,
          type : type
        })
        setTimeout(() => {
          setAlert(null);
        },1500);
  }


  const toggleMode =()=>{
    if(mode==='dark')
    {
      setMode ('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is Enable", "success")
    }
    else{
      setMode ('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode is Enable", "success") 
    }

  }


  return (
    <>

    {/* <Router> */}
      <Navbar title="textUtilis" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Routes> */}
            {/* <Route exact path="/About" element={<About/>}></Route> */}
        <TextForm  showAlert={showAlert} heading = "Enter the text to Analyze" mode={mode}/>
        {/* </Routes> */}
      </div>
      {/* </Router> */}
      
    </>
  );
}

export default App;
