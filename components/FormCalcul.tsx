import { useEffect, useState } from "react";
import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
// import { makeStyles } from "@material-ui/core/styles"
import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";

const FormCalcul = ({ nbOfElevatorNeeded }: { nbOfElevatorNeeded: number }) => {
  // Auto complete variable
  const [productLine, setProductLine] = useState<number>(7565);
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
    console.log("-----------FormCalcul--------------------");

    console.log("productLine before switch case " + productLine);
    // Get installation Fees
    switch (productLine) {
      case 7565:
        console.log("productLine " + productLine);
        setInstallationFees(allElevatorCost * 0.1);
        console.log("installations fees " + allElevatorCost * 0.1);
        break;
      case 12345:
        setInstallationFees(allElevatorCost * 0.13);
        break;
      case 15400:
        setInstallationFees(allElevatorCost * 0.16);
        break;
    }

    // Get all elevators cost
    setAllElevatorCost(productLine * nbOfElevatorNeeded);

    console.log("nb of elevator " + nbOfElevatorNeeded);
    console.log("all elevators cost " + allElevatorCost);
    console.log(
      "setAllElevatorCost " +
        setAllElevatorCost(productLine * nbOfElevatorNeeded)
    );

    // Get final price
    setFinalPrice(allElevatorCost + installationFees);
  }, [productLine, nbOfElevatorNeeded]);

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
              onClick={() => setProductLine(12_345)}
            />
            <br></br>
            <label> Excelium - 15 400 $</label>
            <Checkbox
              value="excelium"
              checked={isRadioSelected("excelium")}
              onChange={handleRadioClick}
              onClick={() => setProductLine(15_400)}
            />
          </div>

          <h4> ------- Auto Complete fields ------- </h4>

          <div id="elevator-amount">
            <label>Amount of elevator needed : </label>
            <input readOnly id="eleAmount" value={nbOfElevatorNeeded} />
          </div>

          <div id="elevator-unit-price">
            <label>Unit price : </label>
            <input readOnly id="unitPrice" value={getFormat(productLine)} />
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

        <ButtonGroup size="large" variant="contained" color="primary">
          <Button
            startIcon={<SendIcon />}
            onClick={() => {
              alert("clicked");
            }}
          >
            Send quotes
          </Button>

          <Button endIcon={<DeleteIcon />}>Reset</Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default FormCalcul;
