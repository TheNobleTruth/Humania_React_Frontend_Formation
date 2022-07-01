import { useEffect, useState } from "react"

const FormCalcul = ({nbOfElevatorNeeded}) => {
  
    // Auto complete variable
    const [productLine, setProductLine] = useState("standard")
    const [allElevatorCost, setAllElevatorCost] = useState(0)
    const [installationFees, setInstallationFees] = useState(0)
    const [finalPrice, setFinalPrice] = useState(0)

    // Default select - Radio button
    const [selected, setSelected] = useState(true);
    const toggleRadioButton = (e) => {
      setSelected(!e.target.value)
    }

    let productLineValue = getUnitPrice(productLine)

    // Formater $
    function getFormat(toFormatt) {
      let formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
      return formatter.format(toFormatt) + " $"
          
    }
    // Get unit price
    function getUnitPrice(e) {
      switch (e) {
          case "standard":
            setProductLine(7565)
            break;
          case "prenium":
            setProductLine(12345)
            break;
          case "excelium":
            setProductLine(15400)
            break;
      }
    }

    // --------- Refresh auto-Complete fields ---------
    useEffect(() => {

      // 
      setAllElevatorCost(productLine * nbOfElevatorNeeded)

      // Get installation Fees
      switch (productLine) {
        case 7565:
          console.log(allElevatorCost)
          console.log("ddd" + typeof(productLine))
          setInstallationFees(allElevatorCost * 0.10)
          break;
        case 12345:
          setInstallationFees(allElevatorCost * 0.13)
          break;
        case 15400:
          setInstallationFees(allElevatorCost * 0.16)
          break;
      }
      

      // Get final price
      setFinalPrice(allElevatorCost + installationFees)

    }, [productLine, nbOfElevatorNeeded])

    return (
      <>
       <div>
			  
          <div id="quality">
              <br></br>
                <label htmlFor="standard" class="radio-inline">Standard - 7 565 $</label>
                <input id="standard" type="radio" value="standard" name="radiobutton" checked={selected} onClick={e => getUnitPrice(e.target.value)} onChange={toggleRadioButton} />
              <br></br>
                <label htmlFor="prenium" class="radio-inline">Premium - 12 345 $</label>
                <input id="premium" type="radio" value="prenium" name="radiobutton" checked={selected === false} onClick={e => getUnitPrice(e.target.value)}/>
              <br></br>
                <label htmlFor="excelium" class="radio-inline">Excelium - 15 400 $</label>
                <input id="excelium" type="radio" value="excelium" name="radiobutton" checked={selected === false} onClick={e => getUnitPrice(e.target.value)}/>
          </div>
          
          <h4> ------- Auto Complete fields ------- </h4>	
          
          <div id="elevator-amount">
              <label>Amount of elevator needed : </label>
              <input readOnly id="eleAmount" value={nbOfElevatorNeeded} />
          </div>

          <div id="elevator-unit-price">
              <label>Unit price : </label>
              <input readOnly id="unitPrice" value={getFormat(productLine)} />			
          </div>
      
          <div id="elevator-total-price">
              <label> Total price of the elevators : </label>
              <input readOnly id="elevPice" value={getFormat(allElevatorCost)}/>
          </div>
          
          <div id="instalation-fees">
              <label>Installation fees : </label>
              <input readreadOnly id="instFees" value={getFormat(installationFees)}/>
          </div>

          <div id="final-price">
              <label>Final price : </label>
              <input readOnly id="finalPrice" value={getFormat(finalPrice)}/>
          </div>

        </div>

      </>
  )
}

export default FormCalcul
