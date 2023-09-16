import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  };

  const handleDownClick = () => {
    // console.log("Downcase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  };
  
  const handleClearClick = () => {
    // console.log("Downcase was clicked " + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text is Cleared!","success");
  };

  const handleCopy = () => {
    // console.log("Downcase was clicked " + text);
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text is copied!","success");
  };

  const handleExtraSpace  = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces is deleted!","success");
  };
  

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <> 
       <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>{props.heading}</h2>
      <div className="form-group">
        <textarea className="form-control" id="myBox"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white' ,color : props.mode==='dark'?'white':'#042743'}}rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleDownClick}>Convert to lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>CopyText</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>Remove Extra spaces</button>
      <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
         <h4>Your Text Summary</h4>
         <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
         <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
         <h4>Preview</h4>
         <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
    </div>
    </>
    
  );
}
