import React, { useState } from 'react'

export default function TextForm(props) {
    const handelUpClick = () => {
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('convert to uppercase', 'success');
        
    }
    const handelLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('convert to lowercase', 'success');
        
    }

    const handelOnChange = (event) => {
        // console.log("on changed");
        setText(event.target.value);

    }
    const clear = () => {
        let newText = "";
        setText(newText);
        props.showAlert('clear', 'success');
    }
    const [text, setText] = useState('');
    return (
        <div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">Example textarea</label>


                    <textarea className="form-control" value={text} onChange={handelOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="7"></textarea>
                </div>
                <button type="button" className="btn btn-primary" onClick={handelUpClick}>convert to Uppercase</button>
                <button type="button" className="btn btn-primary mx-3" onClick={handelLowClick}>convert to Lowercase</button>
                <button type="button" className="btn btn-primary mx-3" onClick={clear}> clear</button>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h1>Your text summary</h1>
                <p> {text.split(" ").length}Words and {text.length}Charecters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something in the textbox above to preview it here'}</p>
            </div>

        </div>
    )
}
