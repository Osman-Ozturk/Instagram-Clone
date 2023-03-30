import React from 'react'
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to='/' style={{display:'flex'}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKo5XgOrtcaYXbgrtK6pgeyVVS7wf5bXQHUg&usqp=CAU" alt="logo" style={{width:'80px'}}/>
    </Link>
  )
}

export default Logo