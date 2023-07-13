import React from "react";
import { Link } from "react-router-dom";

const title = "Pretty Decent Project Management";
const footerText = "imagine travelers logo here";
const divStyle = {
  backgroundColor: "#FB5050",
  border: "1px black solid",
  margin: "10px",
  padding: "5px",
  textAlign: "center",
};

// function vaProj() {
//     alert("Loading project list");
//   }
//   function maProj() {
//     alert("Loading project modification page");
//   }
//   function aaProj() {
//     alert("Loading new project input");
//   }
//   function daProj() {
//     alert("Loading project list to delete");
//   }

function Header(props) {
  return <h3>{props.text}</h3>;
}
function Body() {
  return (
    <div>
      <Link to="./projects">
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
      </Link>
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

export default function home() {
  return (
    <div
      className={"boxed"}
      style={{
        position: "absolute",
        top: "50%",
        left: "42%",
        transform: "translate(0px, -50%)",
      }}
    >
      <Header text={title} />
      <Body />
      <Footer text={footerText} />
    </div>
  );
}
