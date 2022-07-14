import React, { useEffect, useState } from 'react'
import axios from "axios"

const CrudAdd = () => {
  
  const urlAdd = "http://localhost:8080/api/quote/allQuote"
  const [allQuote, setAllQuote] = useState(null)
  
  useEffect(() => {
    axios.get(urlAdd)
      .then(response => {
        setAllQuote(response.data)
        
        // console.log("-------- response.data = " + response.data)
        // console.log("-------- allQuote type of = " + typeof(allQuote))
        // console.log(" -------------- allQuote --------------")
        // console.log(allQuote)
       
    })
  }, [urlAdd])


  return (
    <div>
      Adddd
      
    </div>
  )
}

export default CrudAdd
