import Head from "next/head"
import FormCommercial from "../components/FormCommercial"
import FormResidential from "../components/FormResidential"
import FormCorporate from "../components/FormCorporate"
import FormHybrid from "../components/FormHybrid"
import { useState } from "react"

const quoteform = () => {
    
    const [buildingType, setBuildingType] = useState(0)

    // Exemple for prop: From a parent
    const [testt, setTestt] = useState(0)
    const testFunction = (fromParent) => {
        setTestt(fromParent)
    }
    // ---

    // Give a value to the user choice
    const handleSelect = (event) => {    
        switch (event.target.value) {
            case "residential" :
                setBuildingType(1)
                break;
            case "commercial" :
                setBuildingType(2)
                break;
            case "corporate" :
                setBuildingType(3)
                break;
            case "hybrid" :
                setBuildingType(4)
                break;
        }
    }

    const handleSubmit = () => {
	}

    return (
    <div>
        <Head>
            <title>
                Quote form
            </title>
        </Head>

        {/* Always there */}
    <h1 style={{color: "red"}}>  
        Get a Quote 
    </h1>
      
    <label htmlFor="buildingtype">Building type  <br></br>
        <select id="building-type" name="building-type"  onChange={event => handleSelect(event)}>
            <option name="builtyp" value="Default">-- Select --</option>
            <option id="residential" name="builtyp" value="residential">Residential</option>
            <option id="commercial" name="builtyp" value="commercial">Commercial</option>
            <option id="corporate" value="corporate">Corporate</option>
            <option id="hybrid" name="builtyp" value="hybrid">Hybrid</option>
        </select>
    </label>

        {/* Depend on dropDown choice */}
        {buildingType === 0 && <div></div>}
        {buildingType === 1 && <FormResidential buildingType={buildingType} testFunction={testFunction}/>}
        {buildingType === 2 && <FormCommercial />} 
        {buildingType === 3 && <FormCorporate />}
        {buildingType === 4 && <FormHybrid />} 

        {/* Always there */}
        
        <br></br>


	   

    </div>
  )
}

export default quoteform
