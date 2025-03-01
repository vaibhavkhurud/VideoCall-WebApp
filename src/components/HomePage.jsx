import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const HomePage = () => {

    const [input, setInput] = useState("");

   
           const navigate = useNavigate();
           const submitHandler = () => {
            navigate(`/room/${input}`);
    }

  return (
    <div>
        <div>
            <h3>Vaibhav</h3>
            <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Enter Your Name... ' />
            <button onClick={submitHandler}>Join</button>
        </div>
    </div>
  )
}

export default HomePage