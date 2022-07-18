import { TextField } from "@material-ui/core"
import { useEffect, useState } from "react"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const CrudGetId = () => {

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
  
  const basicUrl = "http://localhost:8080/api/quote/"
  const [url, setUrl] = useState('')
  const [id, setId] = useState(0)
  const [quote, setQuote] = useState([])

  const fetchData = async () => {
    try {
      const ress = await fetch(url)
        .then(ress => ress.json())
        .then(hello => setQuote(...hello))
    } catch (err) {}
  }

  useEffect(() => {
    setUrl(basicUrl + id)
    fetchData()
  }, [id])

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
    <div>    
      <br>
      </br>
        <TextField 
          label= "Enter the ID :"
          type="number" 
          variant="filled" 
          color="secondary"
          placeholder="0" 
          value={id} 
          onChange={e => setId( parseInt(e.target.value))}/>
          
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
     </div> 
   )
}

export default CrudGetId