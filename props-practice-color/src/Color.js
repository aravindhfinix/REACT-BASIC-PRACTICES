import React from 'react'

const Color = ({colors ,status}) => {
  const bg = status?'black':'white'

  return (
    <div className='card'
     style= {{width:"300px",height:"300px",textAlign:"center",justifyContent:"center",backgroundColor:`${colors}`,color:`${bg}`}}
     >
      {colors}
      </div>

  )
}

export default Color