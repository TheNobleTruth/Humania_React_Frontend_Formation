import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";


const CrudEdit = ({ quoteParams }) => {
  

  const initialValue = {
    id:
      "Quote ID : " + quoteParams.row.id,
    product_line:
      "PRODUCT LINE, Initial value : " + quoteParams.row.product_line,
    apts: "Appartments : " + quoteParams.row.num_apts,
    floors: "Floors : " + quoteParams.row.num_floors,
    bases: "Basements : " + quoteParams.row.num_base,
    compagnies: "Compagnies: " + quoteParams.row.num_comp,
    parkings: "Parking : " + quoteParams.row.num_park,
    elevators: "Elevators : " + quoteParams.row.num_elev,
    product_line: "Product Line : " + quoteParams.row.product_line,
    building_type: "Building Type : " + quoteParams.row.building_type
  };
  
  // Set minimum user entry to O
  const inputProps = {
    min: 0,
  };



    const updateQuote = (e) => {
      quoteParams.row.num_apts = e
      console.log("e :" +  e)
      console.log("quoteParams.numsApts " + quoteParams.row.num_apts)
    }
    


  return (
    <div>
       <Container maxWidth="lg">
      <div>
      <TextField
          // inputProps={inputProps}
          data-testid="qualityRole"
          label={initialValue.id}
          variant="filled"
          color="secondary"
          type="text"
          value={quoteParams.row.id}
        /> 
      <TextField
          // inputProps={inputProps}
          data-testid="qualityRole"
          label={initialValue.building_type}
          variant="filled"
          color="secondary"
          type="text"
          value={quoteParams.row.building_type}
          // onChange={(e) => setNbOfAppartment(parseInt(e.target.value))}
        />
      <TextField
          // inputProps={inputProps}
          data-testid="qualityRole"
          label={initialValue.product_line}
          variant="filled"
          color="secondary"
          type="text"
          value={quoteParams.row.product_line}
          // onChange={(e) => setNbOfAppartment(parseInt(e.target.value))}
        />
        <TextField
          inputProps={inputProps}
          data-testid="qualityRole"
          label={initialValue.apts}
          variant="filled"
          color="secondary"
          type="number"
          value={quoteParams.row.num_apts}
          onChange={(e) => updateQuote(parseInt(e.target.value))}
        />

        <TextField
          inputProps={inputProps}
          data-testid="qualityRole"
          label={initialValue.floors}
          variant="filled"
          color="secondary"
          type="number"
          value={quoteParams.row.num_floors}
        />
        <TextField
          inputProps={inputProps}
          data-testid="qualityRole"
          label={initialValue.bases}
          variant="filled"
          color="secondary"
          type="number"
          value={quoteParams.row.num_base}
          // onChange={(e) => setNbOfAppartment(parseInt(e.target.value))}
        />
        <TextField
          inputProps={inputProps}
          data-testid="qualityRole"
          label={initialValue.compagnies}
          variant="filled"
          color="secondary"
          type="number"
          value={quoteParams.row.num_comp}
          // onChange={(e) => setNbOfAppartment(parseInt(e.target.value))}
        />
        <TextField
          inputProps={inputProps}
          data-testid="qualityRole"
          label={initialValue.parkings}
          variant="filled"
          color="secondary"
          type="number"
          value={quoteParams.row.num_park}
          // onChange={(e) => setNbOfAppartment(parseInt(e.target.value))}
        />
        <TextField
          inputProps={inputProps}
          data-testid="qualityRole"
          label={initialValue.elevators}
          variant="filled"
          color="secondary"
          type="number"
          value={quoteParams.row.num_elev}
          // onChange={(e) => setNbOfAppartment(parseInt(e.target.value))}
        />
      </div>
      </Container>
    </div>
  );
};

export default CrudEdit;
