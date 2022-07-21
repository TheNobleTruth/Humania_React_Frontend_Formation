import Head from "next/head";
import FormCommercial from "../components/FormCommercial";
import FormResidential from "../components/FormResidential";
import { useState } from "react";
import React from 'react'
// For typo
import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";
// For flex box
import Container from "@material-ui/core/Container";
import CrudAdd from "../components/CrudAdd";


const quoteform = ({product_line}) => {
  const [building_type, setBuildingType] = useState(0);

  // Give a value to the user choice
  const handleSelect = (event) => {
    switch (event.target.value) {
      case "residential":
        setBuildingType(1);
        break;
      case "commercial":
        setBuildingType(2);
        break;
    }
  };

  return (
    <div>
      <Head>
        <title>Quote form</title>
      </Head>

      <Container maxWidth="lg">
        <Typography variant="h3">Get Quote</Typography>
        <Typography variant="subtitle1" color="secondary">Fast and Easy</Typography>
        <br></br>
        <Typography variant="body1">
          <label htmlFor="building_type">
            Building type <br></br>
            <select
              id="building-type"
              name="building-type"
              onChange={(event) => handleSelect(event)}
            >
              <option name="builtyp" value="Default">
                -- Select --
              </option>
              <option id="residential" name="builtyp" value="residential">
                Residential
              </option>
              <option id="commercial" name="builtyp" value="commercial">
                Commercial
              </option>
            </select>
          </label>
        </Typography>

        {/* Depend on dropDown choice */}
          {building_type === 0 && <div></div>}
          {building_type === 1 && <FormResidential building_type={building_type} product_line={product_line}/>}
          {building_type === 2 && <FormCommercial building_type={building_type} product_line={product_line}/> }

        <br></br>
  
      </Container>

    </div>
  );
};

export default quoteform;
