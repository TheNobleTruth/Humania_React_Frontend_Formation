import React, { useEffect, useState } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import DeleteIcon from "@material-ui/icons/Delete";

const CrudAdd = ({
  building_type,
  num_apts,
  num_floors,
  num_base,
  num_comp,
  num_park,
  num_elev,
  product_line,
}) => {

  switch (building_type) {
    case 1:
      building_type = "Residential";
      break;
    case 2:
      building_type = "Commercial";
      break;
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Stringify data with JSON.stringify()
      let res = await fetch("http://localhost:8080/api/quote/addQuote", {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          building_type: building_type,
          num_apts: num_apts,
          num_floors: num_floors,
          num_base: num_base,
          num_comp: num_comp,
          num_park: num_park,
          num_elev: num_elev,
          product_line: product_line
        }),
      });
      // let resJson = await res.json();

      // Request status
      if (res.status === 200) {
      } else {
        console.log("POST failed")
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <ButtonGroup size="large" variant="contained" color="primary">
        <Button
          startIcon={<SendIcon />}
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Send quotes
        </Button>

        <Button endIcon={<DeleteIcon />}>Reset</Button>
      </ButtonGroup>
      <h4>Data to send to API </h4>
      <h5>Building type : {building_type} </h5>
      <h5>Amount of apts : {num_apts} </h5>
      <h5>Amount of floors : {num_floors} </h5>
      <h5>Amount of basement : {num_base} </h5>
      <h5>Amount of compagnies : {num_comp} </h5>
      <h5>Amount of parking : {num_park} </h5>
      <h5>Amount of elevator : {num_elev} </h5>
      <h5>Product Line : {product_line} </h5>
    </div>
  );
};

export default CrudAdd;
