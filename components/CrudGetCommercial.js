
import React, { useEffect, useState } from 'react'
import MeterialUiList from "./GridGet"
import { clsx } from 'clsx';

const CrudGetCommercial = () => {

  return (
   <div>    
      <div>
        <ul>
          <MeterialUiList quotesRequested={"commercialQuotes"}/>
        </ul>
      </div>
    </div>
  )
}

export default CrudGetCommercial