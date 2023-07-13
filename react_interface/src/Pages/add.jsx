import React from "react";
import { Link } from "react-router-dom";

export default function add() {
  return (
    <div id={"add"}>
      <h4>Add Page</h4>
      <Link to='/'>
        <button>
            Go Back
        </button>
      </Link>
    </div>
  );
}