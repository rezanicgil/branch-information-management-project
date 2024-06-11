import React, { useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./index.css";
import { RootState, AppDispatch } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userThunk } from "../../redux/userSlice";
import { fetchBranches } from "../../redux/branchSlice";

function Home() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user, isSuccess } = useSelector((state: RootState) => state.user);
  const { branches, loading } = useSelector((state: RootState) => state.branch);

  const goTemplate = () => {
    return <span>➡️ View Details</span>;
  };

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchBranches());
    }
  }, [dispatch, isAuthenticated]);

  const handleRowClick = async (id: string) => {
    await dispatch(userThunk());
    if(isSuccess){
      navigate(`/branch-details/${id}`);
    }
  };


  return (
    <div>
    {isAuthenticated ? (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2rem' }}>
          <div><h2>Branch List</h2></div>
          { user?.role === 'Owner' && <button className="btn btn-small btn-info" onClick={()=> {navigate(`/new-branch`)}}>Add new branch</button>}
        </div>
        <hr />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <DataTable
              value={branches || []}
              tableStyle={{ minWidth: '50rem' }}
              scrollHeight="500px"
              onRowClick={(e) => handleRowClick(e.data.branchId)}
            >
              <Column field="branchId" header="Branch id" />
              <Column field="name" header="Branch Name" />
              <Column field="longitude" header="Longitude" />
              <Column field="latitude" header="Latitude" />
              <Column field="phone" header="Phone" />
              <Column field="fullAddress" header="Address" className="truncate" />
              <Column field="go" body={goTemplate} header="View Details" className="view-branch-detail" />
            </DataTable>
          )}
        </div>
      </>
    ) : (
      <h3 style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        You should sign in to see branch list!
      </h3>
    )}
  </div>
  );
}

export default Home;
