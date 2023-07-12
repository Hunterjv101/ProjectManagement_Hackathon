import logo from "./logo.svg";
import "./App.css";

const title = "Pretty Decent Project Management";
const footerText = "imagine travelers logo here";
const divStyle = {
  backgroundColor: "#FB5050",
  border: "1px black solid",
  margin: "10px",
  padding: "5px",
  textAlign: "center",
};

function App() {
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
function vaProj() {
  alert("Loading project list");
}
function maProj() {
  alert("Loading project modification page");
}
function aaProj() {
  alert("Loading new project input");
}
function daProj() {
  alert("Loading project list to delete");
}

function Header(props) {
  return <h3>{props.text}</h3>;
}
function Body(props) {
  return (
    <div>
      <button style={divStyle} onClick={vaProj}>
        View All Projects
      </button>
      <button style={divStyle} onClick={maProj}>
        Modify a Project
      </button>
      <button style={divStyle} onClick={aaProj}>
        Add New Project
      </button>
      <button style={divStyle} onClick={daProj}>
        Delete a project
      </button>
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

export default App;
