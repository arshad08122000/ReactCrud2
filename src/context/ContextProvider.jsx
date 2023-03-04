/* eslint-disable no-unused-vars */
import React, { createContext,useState } from 'react';

export const addData=createContext("");
export const updateData=createContext("");
export const deleteData=createContext("");

const ContextProvider=({children})=>{


 
 const [udata,setudata]=useState("");
 const [updata,setupdata]=useState("");
 const [dtdata,setdtdata]=useState("");


 return(

 <addData.Provider value={{udata,setudata}}>
  <updateData.Provider value={{updata,setupdata}}>
   <deleteData.Provider value={{dtdata,setdtdata}}>
    {children}
    </deleteData.Provider>
  </updateData.Provider>

  </addData.Provider>
  )
 

}
export default ContextProvider;