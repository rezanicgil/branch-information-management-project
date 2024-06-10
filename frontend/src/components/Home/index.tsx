import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { DataView } from "primereact/dataview";

function Home() {
  const products = [
    {
      id: 1,
      name: "Branch 1",
      phone: "5345885555",
      longitude: "1231231231",
      latitude: "541123123123",
    },
    {
      id: 2,
      name: "Branch 2",
      phone: "5345885555",
      longitude: "1231231231",
      latitude: "541123123123",
    },
    {
      id: 3,
      name: "Branch 3",
      phone: "5345885555",
      longitude: "1231231231",
      latitude: "541123123123",
    },
    {
      id: 4,
      name: "Branch 4",
      phone: "5345885555",
      longitude: "1231231231",
      latitude: "541123123123",
    },
    {
      id: 5,
      name: "Branch 5",
      phone: "Description 5",
      longitude: "1231231231",
      latitude: "541123123123",
    },
    {
      id: 6,
      name: "Branch 6",
      phone: "Description 6",
      longitude: "1231231231",
      latitude: "541123123123",
    },
    {
      id: 7,
      name: "Branch 7",
      phone: "Description 7",
      longitude: "1231231231",
      latitude: "541123123123",
    },
    {
      id: 8,
      name: "Branch 8",
      phone: "Description 8",
      longitude: "1231231231",
      latitude: "541123123123",
    },
    {
      id: 9,
      name: "Branch 9",
      phone: "Description 9",
      longitude: "1231231231",
      latitude: "541123123123",
    },
    {
      id: 10,
      name: "Branch 10",
      phone: "Description 10",
      longitude: "1231231231",
      latitude: "541123123123",
    },
  ];

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <h2>Branch List</h2>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
          <Column field="id" header="Branch id"></Column>
          <Column field="name" header="Branch Name"></Column>
          <Column field="longitude" header="Category"></Column>
          <Column field="latitude" header="Quantity"></Column>
          <Column field="phone" header="Phone"></Column>
        </DataTable>
      </div>
    </div>
  );
}

export default Home;
