import React from "react";
import { Link } from "react-router-dom";

export default function Modify() {
  return (
    <div id={"modify"}>
      <h4>Modify Page</h4>
      <Link to='/'>
        <button>
            Go Back
        </button>
      </Link>
    </div>
  );
}