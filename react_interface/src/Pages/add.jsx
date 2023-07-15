import React, { useState } from "react";

async function addProjectToServer(newProjectData) {
  const myHeaders = new Headers({ "Content-Type": "application/json" });
  const myInit = {
    method: "POST",
    headers: myHeaders,
    mode: "cors",
    body: JSON.stringify(newProjectData),
  };
  const response = await fetch("/projects", myInit);
  return response.json();
}

export default function AddProject(props) {
  const [addFormData, setAddFormData] = useState({
    project_id: "",
    team_size: "",
    budget: "",
    workload: "",
    cumulative_experience_years: "",
    completion_time_days: "",
  });

  const handleAddFormChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setAddFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const handleSaveProject = async (event) => {
    event.preventDefault();

    const newProject = {
      project_id: parseInt(addFormData.project_id),
      team_size: parseInt(addFormData.team_size),
      budget: parseInt(addFormData.budget),
      workload: addFormData.workload,
      cumulative_experience_years: parseInt(
        addFormData.cumulative_experience_years
      ),
      completion_time_days: parseInt(addFormData.completion_time_days),
    };

    const updatedProjectsList = await addProjectToServer(newProject);

    if (updatedProjectsList) {
      props.setProjects(updatedProjectsList); // Update the projects list in the parent component (Home)
      setAddFormData({
        project_id: "",
        team_size: "",
        budget: "",
        workload: "",
        cumulative_experience_years: "",
        completion_time_days: "",
      });
    } else {
      console.log("Error: Failed to add project to the server.");
    }
  };

  return (
    <div>
      <h4>Input new project</h4>
      <form>
        <input
          type="text"
          name="project_id"
          required
          placeholder="Enter Project ID"
          onChange={handleAddFormChange}
          value={addFormData.project_id}
        />
        <br />
        <input
          type="text"
          name="team_size"
          required
          placeholder="Enter Team Size"
          onChange={handleAddFormChange}
          value={addFormData.team_size}
        />
        <br />
        <input
          type="text"
          name="budget"
          required
          placeholder="Enter Budget"
          onChange={handleAddFormChange}
          value={addFormData.budget}
        />
        <br />
        <input
          type="text"
          name="workload"
          required
          placeholder="Enter workload"
          onChange={handleAddFormChange}
          value={addFormData.workload}
        />
        <br />
        <input
          type="text"
          name="cumulative_experience_years"
          required
          placeholder="Enter Total Experience years"
          onChange={handleAddFormChange}
          value={addFormData.cumulative_experience_years}
        />
        <br />
        <input
          type="text"
          name="completion_time_days"
          required
          placeholder="Enter Estimated Completion Time"
          onChange={handleAddFormChange}
          value={addFormData.completion_time_days}
        />
        <br />

        <button type="submit" value="Save" onClick={handleSaveProject}>
          Save
        </button>
      </form>
    </div>
  );
}
