const FormAutoComplete = () => {

    const handleSubmit = () => {
        console.log("it print")
    }

  return (
    <div>
        <h4> ------- Auto Complete fields ------- </h4>
            
        <div id="elevator-amount">
            <label>Amount of elevator needed : </label>
            <input readOnly id="eleAmount" />
        </div>

        <div id="elevator-unit-price">
            <label>Unit price : </label>
            <input readOnly id="unitPrice" />			
        </div>
    
        <div id="elevator-total-price">
            <label> Total price of the elevators : </label>
            <input readOnly id="elevPice" />
        </div>
        
        <div id="instalation-fees">
            <label>Installation fees : </label>
            <input readreadOnly id="instFees" />
        </div>

        <div id="final-price">
            <label>Final price : </label>
            <input readOnly id="finalPrice" />
        </div>

        <button onClick={handleSubmit}>Submit quote</button>
    </div>
  )
}

export default FormAutoComplete
