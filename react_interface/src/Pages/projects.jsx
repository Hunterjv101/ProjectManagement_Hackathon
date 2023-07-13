import React, { useState } from "react";
import "./projects.css";
//import data from mongo
const data = "";

export default function projects() {
  //const [data, setData] =  usesState(py_data);
  // const projects = () => {
  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Project id</th>
            <th>Team Size</th>
            <th>Budget</th>
            <th>Workload</th>
            <th>Total Experience(yr)</th>
            <th>Completion Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1(row is hardcoded)</td>
            <td>1</td>
            <td>$17</td>
            <td>Heavy</td>
            <td>3 years</td>
            <td>103 weeks</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
// export default projects
