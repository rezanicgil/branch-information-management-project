import React from "react";
import { useParams } from "react-router-dom";

import { useLocation } from "react-router-dom";

function BranchDetails() {
  const { id } = useParams();
  const location = useLocation();

  const user = location.state.user;
  const isSuccess = location.state.isSuccess;

  return (
    <>
      {isSuccess && (<p>User Role: { user?.role} </p>)}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h4>Branch Details</h4>
      </div>
      <hr></hr>
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "25px" }}
      >
        <label htmlFor="BranchId">Branch Id: </label>
        <p className="text" id="BranchId">
          {id}
        </p>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "25px" }}
      >
        <label htmlFor="BranchName">Branch Name: </label>
        <p className="text" id="BranchName">
          {id}
        </p>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "25px" }}
      >
        <label htmlFor="BranchPhone">Phone: </label>
        <p className="text" id="BranchPhone">
          {id}
        </p>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "25px" }}
      >
        <label htmlFor="BranchAddress">Address: </label>
        <p className="text" id="BranchAddress">
          {id}
        </p>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "25px" }}
      >
        <label htmlFor="BranchLongitude">Longitude: </label>
        <p className="text" id="BranchLongitude">
          {id}
        </p>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "25px" }}
      >
        <label htmlFor="BranchLatitude">Latitude: </label>
        <p className="text" id="BranchLatitude">
          {id}
        </p>
      </div>
    </>
  );
}

export default BranchDetails;
