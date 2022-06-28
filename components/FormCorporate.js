
const FormCorporate = () => {
  return (
    <>
      <h4> Corporate </h4>

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
            <label htmlFor="parking">Maximum number of occupant per floor </label>
            <input type="number" name="parking" id="parking" />
        </div>
    </>
  )
}

export default FormCorporate
