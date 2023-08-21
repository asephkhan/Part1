import React from 'react'

function Content(props) {
  console.log(props)
  return (
    <div>

      {props.part.map((item) => {
        return(
          <>
        {item.name}
        <br/>
        {item.exercises}
        <br/>
        </>
        

        )
       
        
        })}
      
      
    </div>
  )
}

export default Content