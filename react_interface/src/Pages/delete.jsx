import { useState } from "react";
import React from "react";

export default function Delete(props) {
  const [projectToDelete, setProjectToDelete] = useState("");
  async function deleteProject(ID) {
    let newProjectsList = props.projects.filter(
      (project) => project.project_id != ID
    );
    console.log(newProjectsList);
    props.setProjects([...newProjectsList]);
    let myHeaders = new Headers({ "Content-Type": "application/json" });
    var myInit = { method: "DELETE", headers: myHeaders, mode: "cors" };
    let promise = await fetch("/projects/" + ID, myInit);
    let data = await promise.json();

    return data;
  }
  return (
    <div id="delete-proj">
      <h4>Delete project</h4>
      <form>
        <input
          type="text"
          name="project_id"
          required="required"
          placeholder="Enter a project ID"
          onChange={(e) => {
            setProjectToDelete(e.target.value);
          }}
        />
        <input
          type={"button"}
          value="Delete"
          onClick={() => deleteProject(projectToDelete)}
        />
      </form>
    </div>
  );
}
