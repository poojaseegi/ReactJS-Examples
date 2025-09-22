import React, { useState } from 'react'

const Ternary = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    function toggle(){
        setIsLoggedIn(!isLoggedIn)
    }

  return (
    <div>
        <h1>{isLoggedIn ? <h1> welcome</h1>:
        <h1> please login</h1>}</h1>
        <button onClick={toggle}>
            {isLoggedIn?"Logout":"Login"}
            </button>
        </div>
  )
}

export default Ternary
