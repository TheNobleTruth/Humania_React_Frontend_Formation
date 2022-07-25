import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import CrudEdit from "./CrudEdit"

const columns = [
  { field: "edit", headerName: "Edit", width: 70 },
  { field: "delete", headerName: "Delete", width: 70 },
  { field: "id", headerName: "ID", width: 70 },
  { field: "building_type", headerName: "Building Type", width: 130 },
  { field: "num_apts", headerName: "Appartment", width: 90 },
  { field: "num_floors", headerName: "Floor", width: 90 },
  { field: "num_base", headerName: "Basement", width: 90 },
  { field: "num_comp", headerName: "Compagnie", width: 90 },
  { field: "num_park", headerName: "Parking", width: 90 },
  { field: "num_elev", headerName: "Elevator", width: 90 },
  { field: "product_line", headerName: "Product Line", width: 90 },
];

const DataGridMUI = ({ quotesRequested }) => {
  const [quote, setQuote] = useState([]);
  const [finalClickInfo, setFinalClickInfo] = useState(null);
  const [dataToDisplay, setDataToDisplay] = useState(1);

  let url = "";

  switch (quotesRequested) {
    case "allQuotes":
      url = "http://localhost:8080/api/quote/allQuote";
      break;
    case "commercialQuotes":
      url = "http://localhost:8080/api/quote/allCommercialType";
      break;
    case "residentialQuotes":
      url = "http://localhost:8080/api/quote/allResidentialType";
      break;
  }

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setQuote(data);
    } catch (err) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnCellClick = (params) => {
    if (params.field === "edit") {
      setFinalClickInfo(params)
      setDataToDisplay(2)
    } else if (params.field === "delete") {
      setFinalClickInfo(params)
      console.log("else if")
    }

  };

  const rowData = quote.map((quote) => {
    return {
      edit: "edit",
      delete: "delete",
      id: quote.id,
      building_type: quote.building_type,
      num_apts: quote.num_apts,
      num_floors: quote.num_floors,
      num_base: quote.num_base,
      num_comp: quote.num_comp,
      num_park: quote.num_park,
      num_elev: quote.num_elev,
      product_line: quote.product_line,
    };
  });

  return (
    <>
      {dataToDisplay === 1 && 
    <div
      style={{
        height: "100vh",
        width: "80vw",
      }}
    >
      <DataGrid
        rows={rowData}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[6]}
        onCellClick={handleOnCellClick}
        />
    </div>
        }  

        {dataToDisplay === 2 && <CrudEdit quoteParams={finalClickInfo} setQuote={setFinalClickInfo} /> }
        </>
  );
};

export default DataGridMUI;
