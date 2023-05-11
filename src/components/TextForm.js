import React,{useState} from "react";

export default function TextForm(props) {

  const handleUpClick=()=>{
      // console.log('convert to upper case was clicked: '+ text)
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("converted to uppercase!","success");
  };
  const handleLowClick=()=>{
    // console.log('convert to smaller case was clicked: '+ text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!","success");
}

const handleCopyClick = ()=>{
  navigator.clipboard.writeText(text);
  props.showAlert("copied clipboard!","success");
}

const handleExtraSpaces=()=>{
  let newText = text.split( /[ ]+/);
  setText(newText.join(" "));
  props.showAlert("removed extra spaces!","success");
}
       
const handleClearClick=()=>{
  // console.log('convert to smaller case was clicked: '+ text)
  let newText = "";
  setText(newText);
  props.showAlert("clear all text!","success");
}


  const handleOnChange=(event)=>{
    //console.log("on change")

    setText(event.target.value)
  }

  const [text,setText]=useState('')
  // useState()
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#151642'}}>
      <div className="my-3">
      <h1 className="mb-4">{props.heading}</h1>
      <div className="mb-3 my-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#151642'}}
          id="myBox"
          rows="8"
        ></textarea>  
      </div>
      <button disabled={text.length ===0} type="button" className="btn btn-primary" onClick={handleUpClick}>convert to capital case</button>
      <button disabled={text.length ===0} type="button" className="btn btn-primary mx-2" onClick={handleLowClick}>convert to smaller case</button>
      <button disabled={text.length ===0} type="button" className="btn btn-primary mx-2" onClick={handleClearClick}>clear text</button>
      <button disabled={text.length ===0} type="button" className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy text</button>
      <button disabled={text.length ===0} type="button" className="btn btn-primary mx-2" onClick={handleExtraSpaces}>remove Extra spaces</button>
    </div>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'#151642'}}>
      <h2>Your Text Summury :</h2>
      <p><b>{text.length}</b> characters and <b>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} </b> words</p>
      <p><b>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length}</b> minutes to read</p>
      <h2>Preview :</h2>
      <p>{text.length>0?text:'Nothing to preview!'}</p>
    </div>
    </>
  );
}
