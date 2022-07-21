import { useEffect, useState, useContext } from "react";
import React from "react";

import Checkbox from "@material-ui/core/Checkbox";
import QuoteForm from "../pages/quoteform"
// import { makeStyles } from "@material-ui/core/styles"
import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";
import CrudAdd from "./CrudAdd";

const FormCalcul = ({ num_elev }) => {

  // const appContext = useContext(App);

  // Auto complete variable
  const [product_line, setProductLine] = useState<number>(7565);
  const [allElevatorCost, setAllElevatorCost] = useState<number>(0);
  const [installationFees, setInstallationFees] = useState<number>(0);
  const [finalPrice, setFinalPrice] = useState<number>(0);


  // Radio button
  const [selectedRadioBtn, setSelectedRadioBtn] = React.useState("standard");
  const isRadioSelected = (value: string): boolean =>
    selectedRadioBtn === value;
  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSelectedRadioBtn(e.currentTarget.value);

  // Formater $
  function getFormat(toFormatt: number) {
    let formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return formatter.format(toFormatt);
  }

  // --------- Refresh auto-Complete fields ---------
  useEffect(() => {

    // Get all elevators cost
    setAllElevatorCost(product_line * num_elev);
    console.log(product_line + " ------- This is the product line in calcul - Use effect")
    console.log(num_elev + " ------- This is the amount of elevator - Use effect")

    // Get installation Fees
    switch (product_line) {
      case 7565:
        console.log(allElevatorCost + " Product line ")
        setInstallationFees(allElevatorCost * 0.1);
        break;
      case 12345:
        setInstallationFees(allElevatorCost * 0.13);
        break;
      case 15400:
        setInstallationFees(allElevatorCost * 0.16);
        break;
    }

    // Get final price
    setFinalPrice(allElevatorCost + installationFees);
  }, [product_line, num_elev]);

  <QuoteForm product_line={product_line}/>


  return (
    <>
      <div>
        <Typography variant="body1">
          <div id="quality" role="qualityRole">
            <br></br>
            {/* <ButtonStyled /> <br></br> */}
            <label>Standard - 7 565 $</label>
            <Checkbox
              value="standard"
              checked={isRadioSelected("standard")}
              onChange={handleRadioClick}
              onClick={() => setProductLine(7565)}
            />
            <br></br>
            <label>Premium - 12 345 $</label>
            <Checkbox
              value="prenium"
              checked={isRadioSelected("prenium")}
              onChange={handleRadioClick}
              onClick={() => setProductLine(12345)}
            />
            <br></br>
            <label> Excelium - 15 400 $</label>
            <Checkbox
              value="excelium"
              checked={isRadioSelected("excelium")}
              onChange={handleRadioClick}
              onClick={() => setProductLine(15400)}
            />
          </div>

          <h4> ------- Auto Complete fields ------- </h4>

          <div id="elevator-amount">
            <label>Amount of elevator needed : </label>
            <input readOnly id="eleAmount" value={num_elev} />
          </div>

          <div id="elevator-unit-price">
            <label>Unit price : </label>
            <input readOnly id="unitPrice" value={getFormat(product_line)} />
          </div>

          <div id="elevator-total-price">
            <label> Total price of the elevators : </label>
            <input readOnly id="elevPice" value={getFormat(allElevatorCost)} />
          </div>

          <div id="instalation-fees">
            <label>Installation fees : </label>
            <input readOnly id="instFees" value={getFormat(installationFees)} />
          </div>

          <div id="final-price">
            <label>Final price : </label>
            <input readOnly id="finalPrice" value={getFormat(finalPrice)} />
          </div>
          <br></br>
        </Typography>
      </div>
    </>
  );
};

export default FormCalcul;
