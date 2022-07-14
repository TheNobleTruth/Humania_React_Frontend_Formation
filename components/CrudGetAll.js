
import React, { useEffect, useState } from 'react'
import MeterialUiList from "./GridGet"
import { clsx } from 'clsx';

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
