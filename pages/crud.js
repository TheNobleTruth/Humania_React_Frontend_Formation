import React from 'react'
import "@fontsource/roboto"
import Typography from "@material-ui/core/Typography"
import { useState } from "react"
import CrudGetAll from '../components/CrudGetAll'
import CrudGetCommercial from '../components/CrudGetCommercial'
import CrudGetResidential from '../components/CrudGetResidential'
import CrudGetId from '../components/CrudGetId'
import CrudDeleteId from '../components/CrudDeleteId'


const Crud = () => {
  
  const [userRequest, setUserRequest] = useState(0)

      // Give a value to the user choice
      const handleSelect = (event) => {    
        switch (event.target.value) {
            case "allQuotes" :
              setUserRequest(1)
              break;
            case "commercialQuotes" :
              setUserRequest(2)
              break;
            case "residentialQuotes" :
              setUserRequest(3)
              break;
            case "getId" :
              setUserRequest(4)
              break;
            case "add" :
              setUserRequest(5)
              break;
        }
    }

  return (
    <>
        <Typography
            variant="body1">
            <label htmlFor="userRequest">What do you want?  <br></br>
              <select id="userRequest" onChange={event => handleSelect(event)}>
                  <option name="builtyp" value="Default">-- Select --</option>
                  <option id="allQuotes" value="allQuotes">Get all quotes</option>
                  <option id="commercial" value="commercialQuotes">Get all commercial Quote</option>
                  <option id="commercial" value="residentialQuotes">Get all residential Quote</option>
                  <option id="getId" value="getId">Get quote with ID</option>
                  <option id="add" value="add">Delete que by ID</option>
              </select>
          </label>
        </Typography>
          {userRequest === 0 && <div></div>}
          {userRequest === 1 && <CrudGetAll />}
          {userRequest === 2 && <CrudGetCommercial />}
          {userRequest === 3 && <CrudGetResidential />}
          {userRequest === 4 && <CrudGetId />}
          {userRequest === 5 && <CrudDeleteId />}
    </>
  )
}

export default Crud
