import { TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import FormCalcul from "./FormCalcul";
import CrudAdd from "./CrudAdd"

const FormCommercial = ({building_type, product_line}) => {
  // Variable filled by user

  const [num_apts, setNbOfAppartment] = useState<number>(0);
  const [num_floors, setNbOfFloor] = useState<number>(0);
  const [num_base, setnbOfBasement] = useState<number>(0);
  const [num_comp, setnbOfBusiness] = useState<number>(0);
  const [num_park, setNbOfParking] = useState<number>(0);
  const [nbOfElevator, setnbOfElevator] = useState<number>(0);

	// Set minimum user entry to O
	const inputProps = {
		min: 0,
	};
  // Variable sent to FormCalcul
  const [num_elev, setnbOfElevatorNeeded] = useState<number>(0);

  useEffect(() => {
    setnbOfElevatorNeeded(nbOfElevator);
  }, [num_apts, 
    num_floors, 
    num_base, 
    num_comp, 
    nbOfElevator, 
    product_line]);

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
          value={num_apts}
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
          value={num_floors}
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
          value={num_base}
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
          value={num_comp}
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
          value={num_park}
          onChange={(e) => setNbOfParking(parseInt(e.target.value))}
        />
      </div>

      <div id="number-of-elevators">
        <TextField
					required
					inputProps={inputProps}
          label="Amount of elevators"
					type="number"
          variant="filled"
          color="secondary"
          placeholder="0"
          value={nbOfElevator}
					onChange={(e) => setnbOfElevator(parseInt(e.target.value))}
        />
      </div>

      <FormCalcul num_elev={num_elev} />
      <CrudAdd num_apts={num_apts} building_type={building_type} num_floors={num_floors} num_base={num_base} num_comp={num_comp} num_park={num_park} num_elev={num_elev} product_line={product_line}/>
    </>
  );
};

export default FormCommercial;
