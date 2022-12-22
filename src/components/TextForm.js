import React, {useState}from 'react'

export default function TextForm(props) {
    // Function to convert upper case
    const handleUpClick = ()=>{
        // console.log('Uppercase was clicked: ' + text);
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase", "success");
    }

    // Function to convert lower case
    const handleLowClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase", "success");
    }

    // Function to clear all text
    const clearText = ()=>{
        let newText = ""
        setText(newText)
        props.showAlert("Text Cleared!", "success");
    }

    // Function to copy all text
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");

    }

    // Function to remove extra spaces
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success");

    }
    
    // Function to show on the go typing changes in text area
    const handleOnChnage = (event)=>{
        // console.log('Onchange');
        setText(event.target.value)
    }

    // useState Hook
    const [text, setText] = useState("")
    // text = "nasdasdonaosdnf"    // wrong way to change the state
    // setText("nasdasdonaosdnf")    // correct way to change the state
    return (
        <>
        <div className='container' style={{color: props.mode ==='light'? 'black': 'white'}}>
            <h1 className='mb-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode ==='light'? 'white': '#13466e', color: props.mode ==='light'? 'black': 'white'}} placeholder = "Enter your text here" value={text} onChange = {handleOnChnage} id="myBox" rows="10"></textarea>
                <button disabled={text.length===0} className='btn btn-primary mt-3' onClick={handleUpClick}>UPPERCASE</button>
                <button disabled={text.length===0} className='btn btn-secondary mt-3 mx-2' onClick={handleLowClick}>lowercase</button>
                <button disabled={text.length===0} className='btn btn-danger mt-3 mx-2' onClick={clearText}><i class="fa-regular fa-circle-check"></i> Clear All</button>
                <button disabled={text.length===0} className='btn btn-warning mt-3 mx-2' onClick={handleCopy}><i class="fa-regular fa-copy"></i> Copy All</button>
                <button disabled={text.length===0} className='btn btn-success mt-3 mx-2' onClick={handleExtraSpaces}><i class="fa-solid fa-trash-can"></i> Remove Extra Spaces</button>
            </div>
        </div>

        <div className='container my-3' style={{color: props.mode ==='light'? 'black': 'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((a1)=>{return a1.length!== 0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((a1)=>{return a1.length!== 0}).length} Minutes to Read</p>
            <h2>Preview</h2>
            <p className='border p-3 rounded'>{text.length>0? text: "Nothing to preview!"}</p>
        </div>
        </>
    )
}
