import React, { useState } from 'react'

const Ifelse = () => {
    const [isLoggedIn,setIsLoggedin] = useState(false)
    let message;
    function toggle() {
        setIsLoggedin(!isLoggedIn)
    }
    if(isLoggedIn){
        message = <h1> welcome to home page</h1>
    }else{
        message = <h1> login</h1>
    }
  return (
    <div>
        <h1>{message}</h1>
        <button onClick={toggle}>Click</button>
    </div>
  )
}

export default Ifelse
