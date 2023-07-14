import React, { useState } from "react";
//import { Link } from "react-router-dom";
import Tasks from "./tasks";
import "./home.css";
import Projects from "./projects";

const title = "Pretty Decent Project Management";
const footerText = "imagine travelers logo here";
// const divStyle = {
//   backgroundColor: "#FB5050",
//   border: "1px black solid",
//   margin: "10px",
//   padding: "5px",
//   textAlign: "center",
// };

function Header(props) {
  return <h3>{props.text}</h3>;
}
function Body() {
  const [project, setProject] = useState(0);
  return (
    <div className="container">
      <div className="item">
        <Projects project={project} setProject={setProject} />
      </div>
      <br></br>
      <div className="item">
        <Tasks project={project} />
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
