import React, { useState, useEffect } from "react";
import "./tables.css";

function getProjects() {
  let myHeaders = new Headers({ "Content-Type": "application/json" });
  var myInit = { method: "GET", headers: myHeaders, mode: "cors" };
  let promise = fetch("/projects", myInit);
  return promise.then((response) => {
    return response.text();
  });
}

export default function Projects(props) {
  useEffect(() => {
    let promise = getProjects();

    promise.then((text) => {
      let projectArray = JSON.parse(text);
      props.setProjects(projectArray);
    });
  }, []);

  let filterProjects = props.projects.filter((proj) => proj.project_id < 6);
  console.log(props.projects);

  function handleClick(id) {
    props.setProject(id);
  }

  return (
    <div>
      <table style={{ width: "95%" }}>
        <thead>
          <tr>
            <th>Project id</th>
            <th>Team Size</th>
            <th>Budget</th>
            <th>Workload</th>
            <th>Total Experience in Years</th>
            <th>Completion Time in Days</th>
          </tr>
        </thead>
        <tbody>
          {filterProjects.map((project, index) => {
            return (
              <tr key={index} onClick={() => handleClick(project.project_id)}>
                <td style={{ padding: "2px" }}>{project.project_id}</td>
                <td>{project.team_size}</td>
                <td>{project.budget}</td>
                <td>{project.workload}</td>
                <td>{project.cumulative_experience_years}</td>
                <td>{project.completion_time_days}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
