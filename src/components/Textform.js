import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper-case", "success");
  };
  const handleLowClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower-case", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Successfully", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra-Spaces are removed", "success");
  };
  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  //   text = "New Text"; // Wrong way to update text
  //setText("New Text"); // Correct way to update text
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "#042743" : "white",
        }}
      >
        <div className="mb-3">
          <h1>{props.title}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white " : "grey",
              color: props.mode === "light" ? "#042743 " : "white",
            }}
            id="myBox"
            rows="8"
          ></textarea>
          <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>
            Convert to Upper-case
          </button>
          <button
            className="btn btn-primary my-2 mx-2"
            onClick={handleLowClick}
          >
            Convert to Lower-case
          </button>
          <button
            className="btn btn-primary my-2 mx-2"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>
            Copy Text
          </button>
          <button
            className="btn btn-primary my-2 mx-2"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "#042743" : "white",
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read the text</p>
        <h2>Text Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in above textbox to preview"}
        </p>
      </div>
    </>
  );
}
