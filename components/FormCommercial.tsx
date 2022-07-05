import { useEffect, useState } from "react"
import FormCalcul from "./FormCalcul"

const FormCommercial = () => {
	
	// Variable filled by user
	const [nbOfAppartment, setNbOfAppartment] = useState<number>(0)
	const [nbOfFloor, setNbOfFloor] = useState<number>(0)
	const [nbOfBasement, setnbOfBasement] = useState<number>(0)
	const [nbOfBusiness, setnbOfBusiness] = useState<number>(0)
	const [nbOfParking, setNbOfParking] = useState<number>(0)
	const [nbOfElevator, setnbOfElevator] = useState<number>(0)

	// Variable sent to FormCalcul
	const [nbOfElevatorNeeded, setnbOfElevatorNeeded] = useState<number>(0)

	useEffect(() => {

		setnbOfElevatorNeeded(nbOfElevator)
		
	}, [nbOfAppartment, nbOfFloor, nbOfBasement, nbOfBusiness, nbOfElevator])

	return (
		<>
      
			<h4> Commercial </h4>

			<div id="number-of-apartments">
				<label htmlFor="appartForResidential">Number of apartments  </label>
				<input type="number" name="appartForResidential" id="appartForResidential" value={nbOfAppartment} onChange={e => setNbOfAppartment( parseInt(e.target.value))}/>
			</div>

			<div id="number-of-floors">
				<label htmlFor="floorForResidential">Number of floors, excluding basements </label>
				<input type="number" name="floorForResidential" id="floorForResidential" value={nbOfFloor} onChange={e => setNbOfFloor( parseInt(e.target.value))}/>
			</div>

			<div id="number-of-basements">
				<label htmlFor="basementForResidential">Number of basements </label>
				<input type="number" name="basementForResidential" id="basementForResidential" value={nbOfBasement} onChange={e => setnbOfBasement( parseInt(e.target.value))}/>
			</div>

			<div id="number-of-companies">
				<label htmlFor="distinctBusiness">Number of business </label>
				<input type="number" name="distinctBusiness" id="distinctBusiness" value={nbOfBusiness} onChange={e => setnbOfBusiness( parseInt(e.target.value))}/>
			</div>

			<div id="number-of-parking-spots">
				<label htmlFor="parking">Number of parking </label>
				<input type="number" name="parking" id="parking" value={nbOfParking} onChange={e => setNbOfParking( parseInt(e.target.value))}/>
			</div>

			<div id="number-of-elevators">
				<label htmlFor="numberOfElevator">Number of elevator </label>
				<input type="number" name="numberOfElevator" id="numberOfElevator" value={nbOfElevator} onChange={e => setnbOfElevator( parseInt(e.target.value))}/>				
			</div>

		<FormCalcul nbOfElevatorNeeded={nbOfElevatorNeeded}/> 
    </>
  )
}

export default FormCommercial
