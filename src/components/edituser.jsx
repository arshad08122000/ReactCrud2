/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useState,useEffect,useContext } from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import { updateData } from '../context/ContextProvider';
const Edit=()=>{

 const Navigate=useNavigate();
 const {updata,setupdata}=useContext(updateData);
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


 const {id}=useParams("");
 console.log('user id'+id);


 const getuser=async()=>{

  const res=await fetch(`/view/${id}`,{
    method:"GET",
    headers:{
      "Content-Type":"application/json"
    }
  });
 
  const data=await res.json();
  console.log(data);
   
  if(res.status===404 || !data)
  {
    console.log("error");
  }
  else
  {
    setINP(data);
    console.log("getuser : "+inpval.name);
  }
 }


 useEffect(()=>{getuser();},[])

 const updateuser=async(e)=>{
 
  e.preventDefault();

  const {name,email,work,address,mobile,desc,age}=inpval;
  const res2=await fetch(`/updateuser/${id}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name,email,work,address,mobile,desc,age
    })
  });
  const data2=await res2.json();
  if(res2.status===200)
  {
    Navigate('/users');
    setupdata(data2);
  }
  else
  {
    alert("failed");
  }
 }
 
 return(
  <div className="container p-5 main-container">
   <div className="h4 text-center mb-5">Edit User Details</div>
   <div className="row mt-4">
    <div className="col-lg-6 col-sm-12">
    <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="email" className="form-control" value={inpval.name} onChange={(e)=>{setdata(e)}} name="name" id="name" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label className="form-label">Mobile No</label>
    <input type="text" className="form-control"  value={inpval.mobile} onChange={(e)=>{setdata(e)}} name="mobile" id="mobile"/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Address</label>
    <input type="text" className="form-control"  value={inpval.address} onChange={(e)=>{setdata(e)}} name="address" id="address"/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Work</label>
    <input type="text" className="form-control" value={inpval.work} onChange={(e)=>{setdata(e)}} name="work" id="work"/>
  </div>
    </div>
    <div className="col-lg-6 col-sm">
    <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" name="email" value={inpval.email}  onChange={(e)=>{setdata(e)}} id="email" aria-describedby="emailHelp"/>
  </div>
  
  <div className="mb-3">
    <label  className="form-label">Age</label>
    <input type="text" className="form-control" id="age" name="age" value={inpval.age} onChange={(e)=>{setdata(e)}}/>
  </div>
  
     </div>
    </div>
    <div className="row">
     <div className="col">
      
     <div className="mb-3">
  <label className="form-label">Example textarea</label>
  <textarea className="form-control" id="desc"  name="desc" value={inpval.desc} onChange={(e)=>{setdata(e)}} rows="4"></textarea>
</div>
      </div>
    </div>

   <form>
  <button type="submit" onClick={updateuser} className="btn btn-outline-primary">Submit</button>
</form>
   </div>
 )
}

export default Edit;