export default function addProject() {
     const handleAddFormChange = (event) => {
          event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
  return (
    <div>
      <h2>Input new project</h2>
      <form>
        <input
          type="text"
          name="project_id"
          required="required"
          placeholder="Enter Project ID"
          onchange={handleAddFormChange}
        />
        <br />
        <input
          type="text"
          name="team_size"
          required="required"
          placeholder="Enter Team Size"
          onchange={handleAddFormChange}
        />
        <br />
        <input
          type="text"
          name="budget"
          required="required"
          placeholder="Enter Budget"
          onchange={handleAddFormChange}
        />
        <br />
        <input
          type="text"
          name="workload"
          required="required"
          placeholder="Enter workload"
          onchange={handleAddFormChange}
        />
        <br />
        <input
          type="text"
          name="cumulative_experience_years"
          required="required"
          placeholder="Enter Total Experience years"
          onchange={handleAddFormChange}
        />
        <br />
        <input
          type="text"
          name="completion_time"
          required="required"
          placeholder="Enter Estimated Completion Time"
          onchange={handleAddFormChange}
        />
        <br />
        {/* <button type="submit"> onClick{()=>handleSaveBook()}Add</button> */}
        <button
          type={"sumbit"}
          value="Save"
          onClick={() => handleSaveProject()}
        />
      </form>
    </div>
  );
}
