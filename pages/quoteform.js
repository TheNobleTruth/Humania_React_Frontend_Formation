import Head from "next/head"
import FormCommercial from "../components/FormCommercial"
import FormDropDown from "../components/FormDropDown"
import FormResidential from "../components/FormResidential"
import FormCorporate from "../components/FormCorporate"
import FormHybrid from "../components/FormHybrid"
import FormAutoComplete from "../components/FormAutoComplete"
import FormQuality from "../components/FormQuality"
import { useState } from "react"

const quoteform = () => {
    const [testt, setTestt] = useState(0)
    const testFunction = (fromParent) => {
        setTestt(fromParent)
    }
    
    const [one, setOne] = useState(0)
    const handleSelect = (event) => {
        console.log(event.target.value)
        
        switch (event.target.value) {
            case "residential" :
                setOne(1)
                break;
            case "commercial" :
                setOne(2)
                break;
            case "corporate" :
                setOne(3)
                break;
            case "hybrid" :
                setOne(4)
                break;
        }
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
        Get a Quote {one}
    </h1>
        {testt}
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
        {one === 0 && <div></div>}
        {one === 1 && <FormResidential patate={one} testFunction={testFunction}/>}
        {one === 2 && <FormCommercial />}
        {one === 3 && <FormCorporate />}
        {one === 4 && <FormHybrid />}

        {/* Always there */}
        <FormQuality />
        <FormAutoComplete />

    </div>
  )
}

export default quoteform
