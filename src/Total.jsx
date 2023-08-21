import React from 'react'

function Total(props) {
    console.log(props)
   // console.log(`${props.parts[0].exercises} + ${props.parts[1].exercises}`)
    
   let exc1  = props.parts[0].exercises 
    
   let exc2 = props.parts[1].exercises 
    
   let exc3 = props.parts[2].exercises 
    
   let total = exc1 + exc2 + exc3
  return (
    <>
      <p>Total number of exercises: {total}</p>  
    </>
     
  )
}

export default Total