import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from "react"
import CrudAdd from "./CrudAdd"

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'building_type', headerName: 'Building Type', width: 130 },
  { field: 'num_apts', headerName: 'Appartment', width: 90 },
  { field: 'num_floors', headerName: 'Floor', width: 90 },
  { field: 'num_base', headerName: 'Basement', width: 90 },
  { field: 'num_comp', headerName: 'Compagnie', width: 90 },
  { field: 'num_park', headerName: 'Parking', width: 90 },
  { field: 'num_elev', headerName: 'Elevator', width: 90 },
  { field: 'product_line', headerName: 'Product Line', width: 90 },
];


const DataGridMUI = ({quotesRequested}) => {
  
  const [quote, setQuote] = useState([])

  let url =  ""

  switch (quotesRequested) {
    case "allQuotes" :
      url = "http://localhost:8080/api/quote/allQuote"
      break;
    case "commercialQuotes" :
      url = "http://localhost:8080/api/quote/allCommercialType"
      break;
    case "residentialQuotes" :
      url = "http://localhost:8080/api/quote/allResidentialType"
      break;
}
  const fetchData = async () => {
    try {
      const res = await fetch(url)
      const data = await res.json();
      setQuote(data);
    } catch (err) {}
  }

  useEffect(() => {
    fetchData();
  }, [])

  const rowData = quote?.map(quote => {
    return {
      id: quote.id,
      building_type: quote.building_type,
      num_apts: quote.num_apts,
      num_floors: quote.num_floors,
      num_base: quote.num_base,
      num_comp: quote.num_comp,
      num_park: quote.num_park,
      num_elev: quote.num_elev,
      product_line: quote.product_line,
    }
  })

  return (
    <div style={{
      height: '100vh', 
      width: '80vw',
      }}>
      <DataGrid
        rows={rowData}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[6]}
        checkboxSelection
      />
    </div>
  );
}

export default DataGridMUI