import React, { useState } from "react";

async function addTaskToServer(newTaskData) {
  const myHeaders = new Headers({ "Content-Type": "application/json" });
  const myInit = {
    method: "POST",
    headers: myHeaders,
    mode: "cors",
    body: JSON.stringify(newTaskData),
  };
  const response = await fetch("/project_tasks", myInit);
  return response.json();
}

export default function AddTask(props) {
  const [addFormData, setAddFormData] = useState({
    project_id: "",
    task_id: "",
    status: "",
    person_assigned: "",
    due_date: "",
    estimated_duration_days: "",
  });

  const handleAddFormChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setAddFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const handleSaveTask = async (event) => {
    event.preventDefault();

    const newTask = {
      project_id: parseInt(addFormData.project_id),
      task_id: parseInt(addFormData.task_id),
      status: parseInt(addFormData.status),
      person_assigned: addFormData.person_assigned,
      due_date: parseInt(addFormData.due_date),
      estimated_duration_days: parseInt(addFormData.estimated_duration_days),
    };

    const updatedTaskList = await addTaskToServer(newTask);

    if (updatedTaskList) {
      props.setTasks(updatedTaskList);
      setAddFormData({
        project_id: "",
        task_id: "",
        status: "",
        person_assigned: "",
        due_date: "",
        estimated_duration_days: "",
      });
    } else {
      console.log("Error: Failed to add task to the server.");
    }
  };

  return (
    <div>
      <h4>Add or Edit a task</h4>
      <form>
        <input
          style={{ width: "100px" }}
          type="text"
          name="project_id"
          required
          placeholder="Project ID"
          onChange={handleAddFormChange}
          value={addFormData.project_id}
        />
        <br />
        <input
          style={{ width: "100px" }}
          type="text"
          name="task_id"
          required
          placeholder="Task id"
          onChange={handleAddFormChange}
          value={addFormData.task_id}
        />
        <br />
        <input
          style={{ width: "100px" }}
          type="text"
          name="status"
          required
          placeholder="Status"
          onChange={handleAddFormChange}
          value={addFormData.status}
        />
        <br />
        <input
          style={{ width: "150px" }}
          type="text"
          name="person_assigned"
          required
          placeholder="Person Assigned"
          onChange={handleAddFormChange}
          value={addFormData.person_assigned}
        />
        <br />
        <input
          style={{ width: "150px" }}
          type="text"
          name="due_date"
          required
          placeholder="Total Experience"
          onChange={handleAddFormChange}
          value={addFormData.due_date}
        />
        <br />
        <input
          style={{ width: "150px" }}
          type="text"
          name="estimated_duration_days"
          required
          placeholder="Est. Completion Time"
          onChange={handleAddFormChange}
          value={addFormData.estimated_duration_days}
        />
        <br />

        <button
          type="submit"
          value="Save"
          onClick={handleSaveTask}
          style={{ marginRight: "50px" }}
        >
          Save
        </button>
      </form>
    </div>
  );
}
