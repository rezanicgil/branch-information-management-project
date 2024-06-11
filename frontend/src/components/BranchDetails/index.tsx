import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchOneBranch } from "../../redux/getOneBranchSlice";

function BranchDetails() {
  const { id } = useParams();

  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const { branch, loading } = useSelector(
    (state: RootState) => state.getOneBranch
  );
  useEffect(() => {
    if (isAuthenticated && id) {
      dispatch(fetchOneBranch({ branchId: id }));
    }
  }, [dispatch, isAuthenticated, id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h4>Branch Details</h4>
      </div>
      <hr></hr>
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "25px" }}
      >
        <label htmlFor="BranchId">Branch Id: </label>
        <p className="text" id="BranchId">
          {branch?.branchId}
        </p>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "25px" }}
      >
        <label htmlFor="BranchName">Branch Name: </label>
        <p className="text" id="BranchName">
          {branch?.name}
        </p>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "25px" }}
      >
        <label htmlFor="BranchPhone">Phone: </label>
        <p className="text" id="BranchPhone">
          {branch?.phone}
        </p>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "25px" }}
      >
        <label htmlFor="BranchAddress">Address: </label>
        <p className="text" id="BranchAddress">
          {branch?.fullAddress}
        </p>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "25px" }}
      >
        <label htmlFor="BranchLongitude">Longitude: </label>
        <p className="text" id="BranchLongitude">
          {branch?.longitude}
        </p>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "25px" }}
      >
        <label htmlFor="BranchLatitude">Latitude: </label>
        <p className="text" id="BranchLatitude">
          {branch?.latitude}
        </p>
      </div>
    </>
  );
}

export default BranchDetails;
