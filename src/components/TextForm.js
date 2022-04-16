import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleLowClick=()=>{
        let newText =text.toLowerCase();
        setText(newText);
    }
    const handleClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleChange = (e) => {
        // e.target.value;
        setText(e.target.value);
    }
    return (

        <>
            <div className='container my-3'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea onChange={handleChange} value={text} className="form-control" id="myBox" rows="5"></textarea>
                </div>
                <div className='d-flex'>
                    <button onClick={handleClick} className='btn btn-secondary'>Convert To Uppercase</button>
                    <button onClick={handleLowClick} className='btn btn-info mx-2'>Convert To Lowercase</button>
                </div>
                
            </div>
            <div className='container my-3'>
                <h2>Your Text Summary</h2>
                <p>
                    {text.split(" ").filter((ele)=>{return ele.length!==0}).length} words and {text.length} chars
                </p>
                <p>
                    {0.008 * text.split(" ").filter((ele)=>{return ele.length!==0}).length} Minutes Read
                </p>

            </div>
            <div className='container my-3'>
                <h2>Preview </h2>
                <p>{text.length>0?text:"Nothing to Preview...!"}</p>
            </div>
        </>


    )
}
