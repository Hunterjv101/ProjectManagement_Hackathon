import React, { useState, useEffect } from "react";
import "./tables.css";

function getTasks() {
  let myHeaders = new Headers({ "Content-Type": "application/json" });
  var myInit = { method: "GET", headers: myHeaders, mode: "cors" };
  let promise = fetch("/project_tasks", myInit);
  return promise.then((response) => {
    return response.text();
  });
}

export default function Tasks(props) {
  const [project_tasks, setTasks] = useState([]);

  useEffect(() => {
    let promise = getTasks();

    promise.then((text) => {
      let taskArray = JSON.parse(text);
      setTasks(taskArray);
    });
  }, []);

  let filterTasks = project_tasks.filter(
    (task) => task.project_id === props.project
  );
  console.log(filterTasks);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Project id</th>
            <th>Task id</th>
            <th>Status</th>
            <th>Person Assigned</th>
            <th>Due Date</th>
            <th>Estimated Duration Days</th>
          </tr>
        </thead>
        <tbody>
          {filterTasks.map((task, index) => {
            return (
              <tr key={index}>
                <td>{task.project_id}</td>
                <td>{task.task_id}</td>
                <td>{task.status}</td>
                <td>{task.person_assigned}</td>
                <td>{task.due_date}</td>
                <td>{task.estimated_duration_days}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
