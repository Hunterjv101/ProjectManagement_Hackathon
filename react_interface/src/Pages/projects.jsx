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

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let promise = getProjects();

    promise.then((text) => {
      let projectArray = JSON.parse(text);
      setProjects(projectArray);
    });
  }, []);

  let filterProjects = projects.slice(0, 6);
  console.log(filterProjects);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Project id</th>
            <th>Team Size</th>
            <th>Budget</th>
            <th>Workload</th>
            <th>Total Experience(yrs)</th>
            <th>Completion Time</th>
          </tr>
        </thead>
        <tbody>
          {filterProjects.map((project, index) => {
            return (
              <tr key={index}>
                <td>{project.project_id}</td>
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

// import React, { useState, useEffect } from "react";
// import "./projects.css";

// export function deleteBook(ID) {
//   let myHeaders = new Headers({ "Content-Type": "application/json" });
//   var myInit = { method: "DELETE", headers: myHeaders, mode: "cors" };
//   let promise = fetch("/projects", myInit);
//   return promise.then((response) => {
//     return response.text();
//   });
// }

// //gets data from db
// function getProjects() {
//   let myHeaders = new Headers({ "Content-Type": "application/json" });
//   var myInit = { method: "GET", headers: myHeaders, mode: "cors" };
//   let promise = fetch("/projects", myInit);
//   return promise.then((response) => {
//     return response.text();
//   });
// }
// //code to help add a new proj
// export function addProject(newFormData) {
//   let myHeaders = new Headers({ "Content-Type": "application/json" });
//   var myInit = {
//     method: "POST",
//     headers: myHeaders,
//     mode: "cors",
//   };
//   let url = "/projects";
//   // let body = JSON.stringify(newFormData);

//   let promise = fetch(url, myInit);
//   return promise.then((response) => {
//     return response.text();
//   });
// }
// //should start building code to add
// const handleSaveProject = function (newFormData) {
//   let promise = addProject(newFormData);
//   promise.then(function (text) {
//     console.log("handleSaveProject.add");
//   });
// };

// export default function Projects() {
//   //gets data from mongo and displays onto table
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     let promise = getProjects();
//     promise.then((text) => {
//       let projectArray = JSON.parse(text);
//       setData(projectArray);
//     });
//   }, []);
//   console.log(data);
//   //should take inpt from forms and put into an array
//   const [addFormData, setAddFormData] = useState({
//     project_id: "",
//     team_size: "",
//     budget: "",
//     workload: "",
//     cumulative_experience_years: "",
//     completion_time: "",
//   });
//   const handleAddFormChange = (event) => {
//     event.preventDefault();

//     const fieldName = event.target.getAttribute("name");
//     const fieldValue = event.target.value;
//     const newFormData = { ...addFormData };
//     newFormData[fieldName] = fieldValue;

//     setAddFormData(newFormData);
//   };
//   // const projects = () => {
//   const [id, setID] = useState("");
//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             {/*creates table*/}
//             <th>Project id</th>
//             <th>Team Size</th>
//             <th>Budget</th>
//             <th>Workload</th>
//             <th>Total Experience(yr)</th>
//             <th>Completion Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((proj) => (
//             <tr>
//               {/* displays data from db into table format */}
//               <td>{proj.project_id}</td>
//               <td>{proj.team_size}</td>
//               <td>{proj.budget}</td>
//               <td>{proj.workload}</td>
//               <td>{proj.cumulative_experience_years}</td>
//               <td>{proj.completion_time}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <h2>Input new project</h2>
//       <form>
//         <input
//           type="text"
//           name="project_id"
//           required="required"
//           placeholder="Enter Project ID"
//           onchange={handleAddFormChange}
//         />
//         <br />
//         <input
//           type="text"
//           name="team_size"
//           required="required"
//           placeholder="Enter Team Size"
//           onchange={handleAddFormChange}
//         />
//         <br />
//         <input
//           type="text"
//           name="budget"
//           required="required"
//           placeholder="Enter Budget"
//           onchange={handleAddFormChange}
//         />
//         <br />
//         <input
//           type="text"
//           name="workload"
//           required="required"
//           placeholder="Enter workload"
//           onchange={handleAddFormChange}
//         />
//         <br />
//         <input
//           type="text"
//           name="cumulative_experience_years"
//           required="required"
//           placeholder="Enter Total Experience years"
//           onchange={handleAddFormChange}
//         />
//         <br />
//         <input
//           type="text"
//           name="completion_time"
//           required="required"
//           placeholder="Enter Estimated Completion Time"
//           onchange={handleAddFormChange}
//         />
//         <br />
//         {/* <button type="submit"> onClick{()=>handleSaveBook()}Add</button> */}
//         <button
//           type={"sumbit"}
//           value="Save"
//           onClick={() => handleSaveProject()}
//         />
//       </form>
//       <h3>Delete a project</h3>
//       <form>
//         <input
//           type="text"
//           name="project_id"
//           required="required"
//           placeholder="Enter a project ID to delete"
//           onChangne={(e) => {
//             setID(e.target.value);
//           }}
//         />
//         <input
//           type={"button"}
//           value="Delete"
//           // onClick={() => handleDeleteProject()}
//         />
//       </form>
//     </div>
//   );
// }
// // export default projects
