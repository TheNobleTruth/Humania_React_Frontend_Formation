import { useEffect, useState } from "react";
import FormCalcul from "./FormCalcul";
import TextField from "@material-ui/core/TextField";
import buildingType from "../pages/quoteform.js"
import CrudAdd from "./CrudAdd"


const FormResidential = ({building_type, product_line}) => {
  // Variable filled by user
  const [num_apts, setNbOfAppartment] = useState<number>(0);
  const [num_floors, setNbOfFloor] = useState<number>(0);
  const [num_base, setnbOfBasement] = useState<number>(0);
  // Variable sent to FormCalcul
  const [num_elev, setnbOfElevatorNeeded] = useState<number>(0);

	// Set minimum user entry to O
	const inputProps = {
		min: 0,
	};

  useEffect(() => {

    // Set variable for calculs of elevator needed
    const avOfDoorPerFloor: number = num_apts / (num_floors - num_base);

    let elevatorsPerSixAppartment: number = Math.ceil(avOfDoorPerFloor / 6);

    let nbOfColumsNeeded: number = Math.ceil(num_floors / 20);

    // Calcul of elevator Needed
    if (avOfDoorPerFloor === (Infinity || NaN)) {
      setnbOfElevatorNeeded(0);
    } else if (num_floors < 20) {
      setnbOfElevatorNeeded(elevatorsPerSixAppartment);
    } else {
      setnbOfElevatorNeeded(elevatorsPerSixAppartment * nbOfColumsNeeded);
    }
  }, [num_floors, num_base, num_apts]);

  

  return (
    <>
      <h4> Residential </h4>
      
      <div id="Amount-of-apartments">
        <TextField
          required
					inputProps={inputProps}
					data-testid="qualityRole"
          label="Amount of apartments"
          variant="filled"
					color="secondary"
          type="number"
          placeholder="0"
          value={num_apts}
          onChange={(e) => setNbOfAppartment(parseInt(e.target.value))}
        />
      </div>

      <div id="Amount-of-floors">
        <TextField
					required
					inputProps={inputProps}
          label="Amount of floors"
          variant="filled"
          color="secondary"
          type="number"
          value={num_floors}
          onChange={(e) => setNbOfFloor(parseInt(e.target.value))}
        />
      </div>

      <div id="Amount-of-basements">
        <TextField
					required
					inputProps={inputProps}
          label="Amount of basements"
          variant="filled"
          color="secondary"
          type="number"
          value={num_base}
          onChange={(e) => setnbOfBasement(parseInt(e.target.value))}
        />
      </div>

      <FormCalcul num_elev={num_elev} />
      <CrudAdd product_line={product_line} num_apts={num_apts} building_type={building_type} num_floors={num_floors} num_base={num_base} num_comp={0} num_park={0} num_elev={num_elev}/>
    </>
  );
};

export default FormResidential;
