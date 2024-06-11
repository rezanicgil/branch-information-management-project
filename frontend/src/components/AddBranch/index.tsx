import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { createBranch } from "../../redux/createBranchSlice";

function AddBranch() {
  const [branchName, setBranchName] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [phone, setPhone] = useState("");
  const [fullAddress, setFullAddress] = useState("");



  const dispatch = useDispatch<AppDispatch>();

  const { loading, error, isSuccess } = useSelector(
    (state: RootState) => state.createOneBranch
  );

  const handleSave = () => {
    dispatch(createBranch({ name: branchName, longitude, latitude, phone, fullAddress }));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "inline-block",
        }}
      >
        <>
          <div>
            <h3>Add new branch</h3>
          </div>
          <div>
            <input
              type="text"
              placeholder="Branch Name"
              value={branchName}
              onChange={(e) => setBranchName(e.target.value)}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Full Address"
              value={fullAddress}
              onChange={(e) => setFullAddress(e.target.value)}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Latitude"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Longitude"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
            />
          </div>

          <div>
            <button
              onClick={handleSave}
              disabled={loading}
              className="btn btn-primary"
            >
              {loading ? "Saving..." : "Add Branch"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>

          <p className="text text-primary">
            {isSuccess && "Branch created successfully!"}
          </p>
        </>
      </div>
    </div>
  );
}

export default AddBranch;
