import { useEffect, useState } from "react"
import FormCalcul from "./FormCalcul"

const FormResidential = () => {
	
	// Variable filled by user
	const [nbOfAppartment, setNbOfAppartment] = useState(0)
	const [nbOfFloor, setNbOfFloor] = useState(0)
	const [nbOfBasement, setnbOfBasement] = useState(0)

	// Variable sent to FormCalcul
	const [nbOfElevatorNeeded, setnbOfElevatorNeeded] = useState(0)

	useEffect(() => {
		
		// Parse int all user input
		nbOfAppartment = parseInt(nbOfAppartment)
		nbOfFloor = parseInt(nbOfFloor)
		nbOfBasement = parseInt(nbOfBasement)

		// Set variable for calculs of elevator needed
		let avOfDoorPerFloor = (nbOfAppartment / (nbOfFloor - nbOfBasement))
		let ElevatorsPerSixAppartment = (Math.ceil(avOfDoorPerFloor / 6))
		let nbOfColumsNeeded = Math.ceil(nbOfFloor / 20)

		// Calcul of elevator Needed
		if (nbOfFloor < 20) {
			setnbOfElevatorNeeded(parseInt(ElevatorsPerSixAppartment))
		} else {
			setnbOfElevatorNeeded(parseInt(ElevatorsPerSixAppartment * nbOfColumsNeeded))
		}
	}, [nbOfFloor, nbOfBasement, nbOfAppartment])

	return (
    <>
    

	  <h4> Residential </h4>

		<div id="number-of-apartments">
			<label htmlFor="appartForResidential">Number of apartments  </label>
			<input type="number" name="appartForResidential" id="appartForResidential" value={nbOfAppartment} onChange={e => setNbOfAppartment(e.target.value)} />
		</div>

		<div id="number-of-floors">
			<label htmlFor="floorForResidential">Number of floors, excluding basements </label>
			<input type="number" name="floorForResidential" id="floorForResidential" value={nbOfFloor} onChange={e => setNbOfFloor(e.target.value)}/>
		</div>

		<div id="number-of-basements">
			<label htmlFor="basementForResidential">Number of basements </label>
			<input type="number" name="basementForResidential" id="basementForResidential" value={nbOfBasement} onChange={e => setnbOfBasement(e.target.value)}/>
		</div>

	  <FormCalcul nbOfElevatorNeeded={nbOfElevatorNeeded}/> 
 
    </>
  )
}

export default FormResidential
