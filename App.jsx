import {useState} from 'react'

import React from 'react';

function App(){
    const [color, setColor] = useState("black");

    return (
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px,-0 " >
        <div className="flex flex-wrap justify-center gap-3 bg-white  px-3 py-2 shadow-lg rounded-3xl ">
   <button onClick={()=>setColor("red")} className="outline-none text-white  px-2 py-2 rounded-full shadow-lg"  style={{backgroundColor:"red"}}>red</button> 
          <button 
            onClick={()=>setColor("green")}  className="outline-none text-white px-2 py-2 rounded-full shadow-lg"  style={{backgroundColor:"green"}}>green</button>  
        <button  onClick={()=>setColor("blue")} className="outline-none text-white px-2 py-2 rounded-full shadow-lg"  style={{backgroundColor:"blue"}}>blue</button>  
          <button onClick={()=>setColor("grey")}
            className="outline-none px-2 text-white py-2 rounded-full shadow-lg"  style={{backgroundColor:"grey"}}>grey</button>   
          <button  onClick={()=>setColor("purple") }className="outline-none text-white px-2 py-2 rounded-full shadow-lg"  style={{backgroundColor:"purple"}}>purple</button>   
          <button  onClick={()=>setColor("orange") }className="outline-none text-white px-2 py-2 rounded-full shadow-lg"  style={{backgroundColor:"orange"}}>orange</button>  
          <button  onClick={()=>setColor("pink") }className="outline-none text-white px-2 py-2 rounded-full shadow-lg"  style={{backgroundColor:"pink"}}>pink</button>   
          <button  onClick={()=>setColor("white") }className="outline-none text-black px-2 py-2 rounded-full shadow-lg"  style={{backgroundColor:"white"}}>white</button>   
          
        </div>
      </div></div>
    );
  
}

export default App;
