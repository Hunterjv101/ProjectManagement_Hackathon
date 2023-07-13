import React from "react";
import { Link } from "react-router-dom";

export default function del() {
  return (
    <div id={"delete"}>
      <h4>Delete Page</h4>
      <Link to='/'>
        <button>
            Go Back
        </button>
      </Link>
    </div>
  );
}