import React,{ useMemo } from 'react';
import "./Profile.css"

export default function Profile({name,activityStatus}) {
  const text = useMemo(()=>{
    return name.split(" ").map((item) => item[0]).join("");
  },[name])
  const colors = ['#ff0000','#0CB44FFF','#F26A02FF','#054EC3FF'];
  const col = colors[Math.floor(Math.random()*colors.length)];
  console.log(activityStatus);
  
  return (
    <div className='usericon-container' style={{backgroundColor:col}}>
        <div className='usericon'>
            {text}
        </div>
        <div className={`user-status ${activityStatus && "available"}`}></div>
    </div>
  )
}