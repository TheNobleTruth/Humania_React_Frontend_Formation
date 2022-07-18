import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from "react"

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


const DataGridId = ({idRequested}) => {
  const [url, setUrl] = useState(0)

  const basicUrl = "http://localhost:8080/api/quote/"
  setUrl(basicUrl + idRequested)

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


  return (
    <>
    </>
  );
}

export default DataGridId