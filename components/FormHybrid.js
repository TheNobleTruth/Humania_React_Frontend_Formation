
const FormHybrid = () => {
  return (
    <>
      <h4> Hybrid </h4>

        <div id="number-of-apartments">
            <label htmlFor="appartForResidential"> Number of apartments  </label>
            <input type="number" name="appartForResidential" id="appartForResidential" />
        </div>

        <div id="number-of-floors">
            <label htmlFor="floorForResidential">Number of floors, excluding basements </label> 
            <input type="number" name="floorForResidential" id="floorForResidential" />
        </div>

        <div id="number-of-basements">
            <label htmlFor="basementForResidential"> Number of basements </label> 
            <input type="number" name="basementForResidential" id="basementForResidential" />
        </div>	

        <div id="number-of-companies">
            <label htmlFor="distinctBusiness">Number of tenant compagnies </label>
            <input type="number" name="distinctBusiness" id="distinctBusiness" />
        </div>

        <div id="number-of-parking-spots">
            <label htmlFor="parking">Number of parking spots in your building</label>
            <input type="number" name="parking" id="parking" />
        </div>

        <div id="number-of-parking-spots">
            <label htmlFor="parking">Maximum number of occupant per floor </label>
            <input type="number" name="parking" id="parking" />
        </div>

        <div>
            <label htmlFor="business_hours">Enter the business hours</label>
            <input id="business_hours" type="range" step="1" min="0" max="24" onInput="this.nextElementSibling.value = this.value"></input>
        </div>
    </>
  )
}

export default FormHybrid
