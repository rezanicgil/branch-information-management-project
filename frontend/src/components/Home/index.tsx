import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./index.css";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


function Home() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();


  const handleRowClick = (id: string) => {
    navigate(`/branch-details/${id}`);
  };
  const products = [
    {
      id: 1,
      name: "Branch 1",
      phone: "5345885555",
      longitude: "1231231231",
      latitude: "541123123123",
      fullAddress: "Istanbul,Kartal",
      go: "➡️",
    },
    {
      id: 2,
      name: "Branch 2",
      phone: "5345885555",
      longitude: "1231231231",
      latitude: "541123123123",
      fullAddress: "Istanbul,Kartal",
      go: "➡️",
    },
    {
      id: 3,
      name: "Branch 3",
      phone: "5345885555",
      longitude: "1231231231",
      latitude: "541123123123",
      fullAddress: "Istanbul,Kartal",
      go: "➡️",
    },
    {
      id: 4,
      name: "Branch 4",
      phone: "5345885555",
      longitude: "1231231231",
      latitude: "541123123123",
      fullAddress: "Istanbul,Kartal",
      go: "➡️",
    },
    {
      id: 5,
      name: "Branch 5",
      phone: "Description 5",
      longitude: "1231231231",
      latitude: "541123123123",
      fullAddress: "Istanbul,Kartal",
      go: "➡️",
    },
    {
      id: 6,
      name: "Branch 6",
      phone: "Description 6",
      longitude: "1231231231",
      latitude: "541123123123",
      fullAddress: "Istanbul,Kartal",
      go: "➡️",
    },
    {
      id: 7,
      name: "Branch 7",
      phone: "Description 7",
      longitude: "1231231231",
      latitude: "541123123123",
      fullAddress: "Istanbul,Kartal",
      go: "➡️",
    },
    {
      id: 8,
      name: "Branch 8",
      phone: "Description 8",
      longitude: "1231231231",
      latitude: "541123123123",
      fullAddress: "Istanbul,Kartal",
      go: "➡️",
    },
    {
      id: 9,
      name: "Branch 9",
      phone: "Description 9",
      longitude: "1231231231",
      latitude: "541123123123",
      fullAddress: "Istanbul,Kartal",
      go: "➡️",
    },
    {
      id: 10,
      name: "Branch 10",
      phone: "Description 10",
      longitude: "1231231231",
      latitude: "541123123123",
      fullAddress: "Istanbul,Kartal",
      go: "➡️",
    },
  ];

  return (
    <div>
      {isAuthenticated ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <h2>Branch List</h2>
          </div>
          <hr></hr>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <DataTable
              value={products}
              tableStyle={{ minWidth: "50rem" }}
              scrollHeight="500px"
              onRowClick={(e) => handleRowClick(e.data.id)}
            >
              <Column field="id" header="Branch id"></Column>
              <Column field="name" header="Branch Name"></Column>
              <Column field="longitude" header="Longitude"></Column>
              <Column field="latitude" header="Latitude"></Column>
              <Column field="phone" header="Phone"></Column>
              <Column
                field="fullAddress"
                header="Address"
                className="truncate"
              ></Column>
              <Column
                field="go"
                header="View Details"
                className="view-branch-detail"
              ></Column>
            </DataTable>
          </div>
        </>
      ) : (
        <>
          <h3
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            You should signin to see branch list!
          </h3>
        </>
      )}
    </div>
  );
}

export default Home;
