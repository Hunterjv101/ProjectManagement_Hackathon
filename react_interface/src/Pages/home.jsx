import React, { useState } from "react";
import Tasks from "./tasks";
import "./home.css";
import Projects from "./projects";
import Delete from "./delete";
import Add from "./add";
import DeleteTask from "./deleteTask";
import AddTask from "./addTask";

const title = "PDPM: Pretty Decent Project Manager";
const footerText = "imagine travelers logo here";

function Header(props) {
  return (
    <header>
      <h3 className="h3">{props.text}</h3>
    </header>
  );
}

function Body() {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(0);
  return (
    <div className="container">
      <div>
        <div className="delete-container">
          <div className="delete-item">
            <Delete projects={projects} setProjects={setProjects} />
          </div>
          <div className="delete-item">
            <DeleteTask tasks={tasks} setTasks={setTasks} />
          </div>
        </div>

        <div className="item">
          <Add projects={projects} setProjects={setProjects} />
        </div>
        <br></br>
        <div className="item">
          <AddTask
            tasks={tasks}
            task={task}
            setTasks={setTasks}
            setTask={setTask}
          />
        </div>
        <br></br>
        <div className="item">
          <Projects
            projects={projects}
            project={project}
            setProject={setProject}
            setProjects={setProjects}
          />
        </div>
      </div>
      <div>
        <br></br>

        <div className="item">
          <Tasks project={project} />
        </div>
      </div>
    </div>
  );
}
function Footer(props) {
  return <div></div>;
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
