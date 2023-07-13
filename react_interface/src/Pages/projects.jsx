import React from "react";
import { Link } from "react-router-dom";

export default function projects() {
  return (
    <div id={"projects"}>
      <h4>All Projects Page</h4>
      <Link to='/'>
        <button>
            Go Back
        </button>
      </Link>
    </div>
  );
}
