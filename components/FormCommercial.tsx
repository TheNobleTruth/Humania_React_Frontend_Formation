import { TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import FormCalcul from "./FormCalcul";

const FormCommercial = () => {
  // Variable filled by user

  const [nbOfAppartment, setNbOfAppartment] = useState<number>(0);
  const [nbOfFloor, setNbOfFloor] = useState<number>(0);
  const [nbOfBasement, setnbOfBasement] = useState<number>(0);
  const [nbOfBusiness, setnbOfBusiness] = useState<number>(0);
  const [nbOfParking, setNbOfParking] = useState<number>(0);
  const [nbOfElevator, setnbOfElevator] = useState<number>(0);

	// Set minimum user entry to O
	const inputProps = {
		min: 0,
	};
  // Variable sent to FormCalcul
  const [nbOfElevatorNeeded, setnbOfElevatorNeeded] = useState<number>(0);

  useEffect(() => {
    setnbOfElevatorNeeded(nbOfElevator);
  }, [nbOfAppartment, nbOfFloor, nbOfBasement, nbOfBusiness, nbOfElevator]);

  return (
    <>
      <h4> Commercial </h4>

      <div id="number-of-apartments">
        <TextField
          required
					inputProps={inputProps}
          label="Amount of apartment"
          type="number"
          variant="filled"
          color="secondary"
          placeholder="0"
          value={nbOfAppartment}
          onChange={(e) => setNbOfAppartment(parseInt(e.target.value))}
        />
      </div>

      <div id="number-of-floors">
        <TextField
          required
					inputProps={inputProps}
          label="Amount of floors"
          type="number"
          variant="filled"
          color="secondary"
          placeholder="0"
          value={nbOfFloor}
          onChange={(e) => setNbOfFloor(parseInt(e.target.value))}
        />
      </div>

      <div id="number-of-basements">
        <TextField
          required
					inputProps={inputProps}
          label="Amount of basements"
          type="number"
          variant="filled"
          color="secondary"
          placeholder="0"
          value={nbOfBasement}
          onChange={(e) => setnbOfBasement(parseInt(e.target.value))}
        />
      </div>

      <div id="number-of-companies">
        <TextField
          required
					inputProps={inputProps}
          label="Amount of compagnies"
          type="number"
          variant="filled"
          color="secondary"
          placeholder="0"
          value={nbOfBusiness}
          onChange={(e) => setnbOfBusiness(parseInt(e.target.value))}
        />
      </div>

      <div id="number-of-parking-spots">
        <TextField
          required
					inputProps={inputProps}
          label="Amount of parking spots"
          type="number"
          variant="filled"
          color="secondary"
          placeholder="0"
          value={nbOfParking}
          onChange={(e) => setNbOfParking(parseInt(e.target.value))}
        />
      </div>

      <div id="number-of-elevators">
        <TextField
					required
					inputProps={inputProps}
					// InputProps={{ inputProps: { min: 0, max: 10, step: "1" } }}
          label="Amount of elevators"
					type="number"
          variant="filled"
          color="secondary"
          placeholder="0"
          value={nbOfElevator}
					onChange={(e) => setnbOfElevator(parseInt(e.target.value))}
        />
      </div>

      <FormCalcul nbOfElevatorNeeded={nbOfElevatorNeeded} />
    </>
  );
};

export default FormCommercial;
