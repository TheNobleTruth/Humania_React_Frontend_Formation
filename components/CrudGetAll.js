
import React, { useEffect, useState } from 'react'
import MeterialUiList from "./GridGet"

const CrudGet = () => {

  return (
   <div>    
      <div>
        <ul>
          <MeterialUiList quotesRequested={"allQuotes"}/>
        </ul>
      </div>
    </div>
  )
}

export default CrudGet
