import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState();

  const passwordGenerator=useCallback(()=>{
    pass='';
    str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numberAllowed) str+='1234567890';
    if(charAllowed) str+='!@#$%^&*';

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.lenght()+1);
      pass=str.charAt(char);
    
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,password])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-green-300 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password_Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input type='text' placeholder='password' value={password}
    className='outline-none w-full py-1 px-3' readOnly
    />

    <button className='bg-sky-500 text-white shrink-0 px-3 py-0.5'>copy</button>
    </div>

    <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
    <input type='range' className='cursor-pointer' min={8} max={100} value={length}
    onChange={(e)=>{setLength(e.target.value)}}
    />
    <label >lenght : {length}</label>
    </div>

    <div
    className='flex items-center gap-x-1'>
      <input
      type='checkbox'
      defaultChecked={numberAllowed}
      id='numberInput'
      onChange={()=>{setNumberAllowed((prev)=>!prev)}} />
      <label>numberAllowed</label>
      </div>
      <div
    className='flex items-center gap-x-1'>
      <input
      type='checkbox'
      defaultChecked={charAllowed}
      id='numberInput'
      onChange={()=>{setCharAllowed((prev)=>!prev)}} />
      <label>charAllowed</label>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
