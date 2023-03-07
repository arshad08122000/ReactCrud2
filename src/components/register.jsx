/* eslint-disable no-unused-vars */
import React from 'react';
import { useState,useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import {addData} from '../context/ContextProvider';

const Register=()=>{
 
 const {udata,setudata}=useContext(addData);

 const navigate=useNavigate();
 const [inpval,setINP]=useState({
   name:"",
   email:"",
   age:"",
   mobile:"",
   work:"",
   address:"",
   desc:""
 })

 const setdata=(e)=>{
   console.log(e.target.name,e.target.value);
   const {name,value}=e.target;
   setINP({...inpval,[name]:value});
 }


 const adduser=async(e)=>{
   e.preventDefault();
   const {name,email,work,address,mobile,desc,age}=inpval;

   const res=await fetch("https://reactcrudapi.onrender.com/Add",{
     method:"POST",
     headers:{
       "Content-Type":"application/json"
     },
     body:JSON.stringify({name,email,work,address,age,mobile,desc})
   });

   const data=await res.json; 
   console.log(data);

   if(res.status === 404 || !data)
   {
     alert("Error while loading data ");
     console.log("error");
   }
   else
   {
    //  alert("Data added Successfully");
     console.log("Data successfull");
     navigate('/users');
     setudata(data);
    }
  }
 

 return(
  <div className="container p-5 main-container">
   <div className="h4 text-center mb-5">Add User</div>
   <div className="row mt-4">
    <div className="col-lg-6 col-sm-12">
    <div className="mb-3">
    <label  className="form-label">Name*</label>
    <input type="email" className="form-control" value={inpval.name} onChange={(e)=>{setdata(e)}} name="name" id="name" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label className="form-label">Mobile No*</label>
    <input type="text" className="form-control"  value={inpval.mobile} onChange={(e)=>{setdata(e)}} name="mobile" id="mobile"/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Address*</label>
    <input type="text" className="form-control"  value={inpval.address} onChange={(e)=>{setdata(e)}} name="address" id="address"/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Occupation*</label>
    <input type="text" className="form-control" value={inpval.work} onChange={(e)=>{setdata(e)}} name="work" id="work"/>
  </div>
    </div>
    <div className="col-lg-6 col-sm">
    <div className="mb-3">
    <label  className="form-label">Email*</label>
    <input type="email" className="form-control" name="email" value={inpval.email}  onChange={(e)=>{setdata(e)}} id="email" />
  </div>
  <div className="mb-3">
    <label  className="form-label">Age*</label>
    <input type="text" className="form-control" id="age" name="age" value={inpval.age} onChange={(e)=>{setdata(e)}}/>
  </div>
  
     </div>
    </div>
    <div className="row">
     <div className="col">
      
     <div className="mb-3">
  <label className="form-label">Description</label>
  <textarea className="form-control" id="desc"  name="desc" value={inpval.desc} onChange={(e)=>{setdata(e)}} rows="4"></textarea>
</div>
<div className="mt-4 mb-4 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
    <label className="form-check-label" >By Clicking this terms you are selected our company guidlines</label>
  </div>
      </div>
    </div>

   <form>
  <button type="submit" onClick={adduser} className="btn btn-outline-primary">Submit</button>
</form>
   </div>
 )
}

export default Register;