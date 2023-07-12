import logo from "./logo.svg";
import "./App.css";

const title = "Pretty Decent Project Management";

function Header() {
  return <h3>{title}</h3>;
}
function Body() {
  return (
    <div>
      <p>View all projects</p>
      <p>Modify existing project</p>
      <p>add a project</p>
      <p>delete a project</p>
    </div>
  );
}
function Footer() {
  return (
    <div>
      <h4>Empty footer</h4>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
