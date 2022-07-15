import React, { useEffect, useState } from 'react'


const CrudAdd = ({buildingType}) => {
  
  useEffect(() => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Post quote' })
    };
    fetch('https://reqres.in/api/posts', requestOptions)
        .then(response => response.json())
        .then(data => setPostId(data.id));
  }, []);

  return (
    <div>
      Building type : {buildingType}

      
    </div>
  )
}

export default CrudAdd
