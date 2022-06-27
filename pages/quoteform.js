import Head from "next/head"
import FormCommercial from "../components/FormCommercial"
import FormDropDown from "../components/FormDropDown"
import FormResidential from "../components/FormResidential"
import FormCorporate from "../components/FormCorporate"
import FormHybrid from "../components/FormHybrid"
import FormAutoComplete from "../components/FormAutoComplete"



const quoteform = () => {
    return (
    
    <div>
        
        <Head>
            <title>
                Quote form
            </title>
        </Head>

        <FormDropDown  />
        <FormResidential />
        <FormCommercial />
        <FormCorporate />
        <FormHybrid />
        <FormAutoComplete />

    </div>
  )
}

export default quoteform
