import Head from "next/head"
import FormCommercial from "../components/FormCommercial"
import FormResidential from "../components/FormResidential"
import FormCorporate from "../components/FormCorporate"
import FormHybrid from "../components/FormHybrid"
import { useState } from "react"

// For typo
import "@fontsource/roboto"
import Typography from "@material-ui/core/Typography"
// For flex box
import Container from "@material-ui/core/Container"
// For grid
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"

const quoteform = () => {
    
    const [buildingType, setBuildingType] = useState(0)

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



    return (
    <div>
        <Head>
            <title>
                Quote form
            </title>
        </Head>

				<Container maxWidth="lg">
					
				{/* <Grid  container
					spacing={2}
					direction="row"
					justifyContent="center"
					alignItems="flex-end"> */}

					{/* <Grid item xs={5}> */}
						<Typography
								variant="h3">
									Get Quote
						</Typography>
						<Typography
								variant="subtitle1">
									Fast and Easy
						</Typography>
						<br></br>
					{/* </Grid> */}

					{/* <Grid item xs={4}> */}
							<Typography
								variant="body1">
								<label htmlFor="buildingtype">Building type  <br></br>
									<select id="building-type" name="building-type"  onChange={event => handleSelect(event)}>
											<option name="builtyp" value="Default">-- Select --</option>
											<option id="residential" name="builtyp" value="residential">Residential</option>
											<option id="commercial" name="builtyp" value="commercial">Commercial</option>
											{/* <option id="corporate" value="corporate">Corporate</option>
											<option id="hybrid" name="builtyp" value="hybrid">Hybrid</option> */}
									</select>
							</label>
							</Typography>
					{/* </Grid>								 */}

					{/* <Grid item xs={6}>					 */}
						{/* Depend on dropDown choice */}
						{buildingType === 0 && <div></div>}
						{buildingType === 1 && <FormResidential buildingType={buildingType}/>}
						{buildingType === 2 && <FormCommercial />} 
						{buildingType === 3 && <FormCorporate />}
						{buildingType === 4 && <FormHybrid />}
					{/* </Grid>  */}
				
				{/* </Grid> */}
					<br></br>
				</Container>
    </div>
  )
}

export default quoteform
