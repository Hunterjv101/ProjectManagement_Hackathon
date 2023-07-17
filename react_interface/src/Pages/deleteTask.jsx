import { useState } from "react";
import React from "react";

export default function DeleteTask(props) {
  const [taskToDelete, setTaskToDelete] = useState("");
  async function deleteTask(ID) {
    let newTaskList = props.tasks.filter((task) => task.task_id != ID);
    console.log(newTaskList);
    props.setTasks([...newTaskList]);
    let myHeaders = new Headers({ "Content-Type": "application/json" });
    var myInit = { method: "DELETE", headers: myHeaders, mode: "cors" };
    let promise = await fetch("/project_tasks/" + ID, myInit);
    let data = await promise.json();

    return data;
  }
  return (
    <div id="delete-task">
      <h4>Delete Task</h4>
      <form>
        <input
          type="text"
          name="task_id"
          required="required"
          placeholder="Enter a task ID"
          onChange={(e) => {
            setTaskToDelete(e.target.value);
          }}
        />
        <input
          type={"button"}
          value="Delete"
          onClick={() => {
            deleteTask(taskToDelete);
          }}
        />
      </form>
    </div>
  );
}
