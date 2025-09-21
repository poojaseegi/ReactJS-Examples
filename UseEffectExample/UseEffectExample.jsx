
import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
    const [user,setUser] = useState([])

    useEffect(()=>{
        fetch("https://api.github.com/users")
        .then(res => res.json())
        .then(y => setUser(y))
        .catch(err => console.log(err))
    },[])
  return (
    <>
      <div  className="container">
    {user.map((x)=>(
 <div key={x.id} className="content">
            <h6>Id: {x.id}</h6>
            <h2>Name: {x.login}</h2>
            <img style={{height:"100px",width:"100%",borderRadius:"50%"}} src={x.avatar_url} alt="" />
        </div>

    ))}
    </div>
    </>
  )
}

export default UseEffectExample
