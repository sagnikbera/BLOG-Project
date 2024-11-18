import React from 'react'
import blog from '../Asset/images.jfif'

function Logo({width = '100px'}) {
  return (
    <div><img width={"60px"} height={"60px"} style={{borderRadius:"50%"}} 
    // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHXA4VHOc2vmU24xLL0wEzZnGctViY216Jrb643DGaHY4Yuvk096MMdoXEX1w4sNTLjz0&usqp=CAU" 
    src={blog}
    alt="Logo" />
    </div>
  )
}

export default Logo