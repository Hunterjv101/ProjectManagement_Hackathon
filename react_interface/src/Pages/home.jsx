import React from "react";
//import { Link } from "react-router-dom";
import Tasks from "./tasks";
import "./home.css";

const title = "Pretty Decent Project Management";
const footerText = "imagine travelers logo here";
const divStyle = {
  backgroundColor: "#FB5050",
  border: "1px black solid",
  margin: "10px",
  padding: "5px",
  textAlign: "center",
};

function Header(props) {
  return <h3>{props.text}</h3>;
}
function Body() {
  return (
    <div className="container">
      {/* <Link to="./projects">
        <button style={divStyle}>View All Projects</button>
      </Link>
      <br></br>
      <Link to="./add">
        <button style={divStyle}>Add New Project</button>
      </Link>
      <br></br>
      <Link to="./modify">
        <button style={divStyle}>Modify a Project</button>
      </Link>
      <br></br>
      <Link to="./delete">
        <button style={divStyle}>Delete a project</button>
      </Link> */}
      <div className="item">
        <Tasks />
      </div>
      <br></br>
      <div className="item">
        <Tasks />
      </div>
    </div>
  );
}
function Footer(props) {
  return (
    <div>
      <h4>{props.text}</h4>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Header text={title} />
      <Body />
      <Footer text={footerText} />
    </div>
  );
}
