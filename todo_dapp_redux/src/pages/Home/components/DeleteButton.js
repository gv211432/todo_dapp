import React from 'react';

export default function DeleteButton({ state, setState }) {
  return (
    <div
      style={{ marginBottom: "" }}
      className=" d-grid ms-1 me-1 mx-auto"
    >
      <button
        className={`btn f-txt m-1 btn-sm ${!state?.on ? "btn-outline-danger" : "text-light btn-danger"}`}
        style={{ maxWidth: "30rem", minWidth: "10rem", borderRadius: "10px" }}
        onClick={() => {
          setState(p => ({ ...p, on: !p?.on }));
        }}>
        {!state?.on ? "Delete" : "Will be deleted!"}
      </button>
    </div>
  );
}
