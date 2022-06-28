
const FormResidential = ({patate, testFunction}) => {
	let test = 1 + 1
	const itWorks = () => {
		testFunction(test)
	}
	return (
    <>
      <h4> Residential {patate}</h4>
		<button onClick={itWorks}>Press</button>
      <form name="quoteform" id="quoteform" action="#" method="">

				<div id="number-of-apartments">
					<label htmlFor="appartForResidential">Number of apartments  </label>
					<input type="number" name="appartForResidential" id="appartForResidential" />
				</div>

				<div id="number-of-floors">
					<label htmlFor="floorForResidential">Number of floors, excluding basements </label>
					<input type="number" name="floorForResidential" id="floorForResidential" />
				</div>

				<div id="number-of-basements">
					<label htmlFor="basementForResidential">Number of basements </label>
					<input type="number" name="basementForResidential" id="basementForResidential" />
				</div>

      </form>
    </>
  )
}

export default FormResidential
