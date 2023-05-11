import React from 'react'

export default function About(props) {

	// const [myStyle, setMyStyle] = useState({
	// 	color:'black',
	// 	backgroundColor:'white'
	// })

let myStyle = {
  color:props.mode ==='dark'? 'white':'#042743',
  backgroundColor:props.mode ==='dark'? '#042743':'white',
}

  return (
	<div className='container' style={{color:props.mode ==='dark'? 'white':'#042743'}}>
    <h1 className='my-3'>About Us </h1>
		<div className="accordion" id="accordionExample">
  <div className="card" style={myStyle}>
    <div className="card-header" id="headingOne">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left" type="button" style={myStyle} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         <strong>Analyze your text</strong> 
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body" style={myStyle}>
        TextUtils gives you a way to analyze your text quickly and efficiantly.be it word count,character count or 
      </div>
    </div>
  </div>
  <div className="card" style={myStyle}>
    <div className="card-header" id="headingTwo">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed" style={myStyle} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         <strong>free to use</strong> 
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body" style={myStyle}>
        Some placeholder content for the second accordion panel. This panel is hidden by default.
      </div>
    </div>
  </div>
  <div className="card" style={myStyle}>
    <div className="card-header" id="headingThree">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed" style={myStyle} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          <strong>browser compatible</strong>
        </button>
      </h2>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body" style={myStyle}>
        And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
      </div>
    </div>
  </div>
</div>
</div>
  )
}
