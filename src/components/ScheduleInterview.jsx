import React, { useCallback } from 'react'
import {useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

const ScheduleInterview = () => {
    const [value,setValue]=useState();
    const navigate=useNavigate();
   
    const handleJoinRoom=useCallback(()=>{
    navigate(`/room/${value}`)
    },[navigate,value])
  return (
    <div className='container'>
        
        <form>
            <input type='text' placeholder='Enter Room Code' value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={handleJoinRoom}>Join</button>
        </form>
      
    </div>
  )
}

export default ScheduleInterview;