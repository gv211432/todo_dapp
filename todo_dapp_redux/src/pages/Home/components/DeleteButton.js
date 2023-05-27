import React from 'react';

export default function DeleteButton({ state, setState }) {
  return (
    <div
      style={{ marginBottom: "0.5rem" }}
      className=" d-grid ms-1 me-1 mx-auto"
    >
      <input
        type="checkbox"
        className="btn-check"
        checked={state?.completed}
        id="btncheck"
        onChange={() => setState(p => ({ ...p, completed: !p?.completed }))}
      />
      <label
        className="btn f-txt m-1 btn-sm btn-outline-danger"
        style={{ maxWidth: "30rem", minWidth: "10rem" }}
        for="btncheck"
      >
        {state?.completed
          ? "Will be deleted"
          : "Delete"}
      </label>
    </div>);
}
