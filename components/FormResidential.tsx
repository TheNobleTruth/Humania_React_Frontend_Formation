import { useEffect, useState } from "react"
import FormCalcul from "./FormCalcul"

const FormResidential = () => {

	// Variable filled by user
	const [nbOfAppartment, setNbOfAppartment] = useState<number>(0)
	const [nbOfFloor, setNbOfFloor] = useState<number>(0)
	const [nbOfBasement, setnbOfBasement] = useState<number>(0)

	// Variable sent to FormCalcul
	const [nbOfElevatorNeeded, setnbOfElevatorNeeded] = useState<number>(0)

	useEffect(() => {

		console.log("nb of appartment : " + nbOfAppartment)
		console.log("nb of floor : " + nbOfFloor)
		console.log("nb of Basement : " + nbOfBasement)



		// Set variable for calculs of elevator needed
		const avOfDoorPerFloor : number = (nbOfAppartment / (nbOfFloor - nbOfBasement))
		console.log("---------------------------------")
		console.log("nb of avOfDoorPerFloor : " + avOfDoorPerFloor)
		
		
		let elevatorsPerSixAppartment : number = (Math.ceil(avOfDoorPerFloor / 6))
		console.log("nb of ElevatorsPerSixAppartment : " + elevatorsPerSixAppartment)
		
		let nbOfColumsNeeded : number = Math.ceil(nbOfFloor / 20)
		console.log("nb of nbOfColumsNeeded : " + nbOfColumsNeeded)

		// Calcul of elevator Needed
		if (avOfDoorPerFloor === (Infinity || NaN )) {
			setnbOfElevatorNeeded(0)
		} else if (nbOfFloor < 20) {
			setnbOfElevatorNeeded(elevatorsPerSixAppartment)
		} else {
			setnbOfElevatorNeeded(elevatorsPerSixAppartment * nbOfColumsNeeded)
		}

	}, [nbOfFloor, nbOfBasement, nbOfAppartment])

	return (
    <>
    

				<h4> Residential </h4>
			<form>
				<div id="number-of-apartments">
					<label htmlFor="appartForResidential">Number of apartments  </label>
					<input type="number" value={nbOfAppartment} onChange={e => setNbOfAppartment( parseInt(e.target.value))}/>
				</div>

				<div id="number-of-floors">
					<label htmlFor="floorForResidential">Number of floors, excluding basements </label>
					<input type="number" value={nbOfFloor} onChange={e => setNbOfFloor( parseInt(e.target.value))}/>
				</div>

				<div id="number-of-basements">
					<label htmlFor="basementForResidential">Number of basements </label>
					<input type="number" value={nbOfBasement} onChange={e => setnbOfBasement( parseInt(e.target.value))}/>
				</div>

				<FormCalcul nbOfElevatorNeeded={nbOfElevatorNeeded}/> 
			</form>
    </>
  )
}

export default FormResidential
