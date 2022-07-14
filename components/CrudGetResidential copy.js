
import React, { useEffect, useState } from 'react'
import MeterialUiList from "./GridGet"
import { clsx } from 'clsx';

const CrudGetResidential = () => {

  return (
   <div>    
      <div>
        <ul>

          <MeterialUiList quotesRequested={"residentialQuotes"}/>
        </ul>
      </div>
    </div>
  )
}

export default CrudGetResidential