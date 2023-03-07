/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React,{useState,useEffect,useContext} from 'react';
import {useParams} from 'react-router-dom';
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import imgg from '../images/user.png';
import {Link,useNavigate} from 'react-router-dom';
import { deleteData} from '../context/ContextProvider.jsx';


const Detail=()=>{
  const navigate=useNavigate();
 
 
  const {dtdata,setdtdata}=useContext(deleteData);

 const [getUserdata,setUserdata]=useState([]);
 console.log("setuser"+setUserdata);

 const {id}=useParams("");
 console.log('user id'+id);


 const getuser=async()=>{

   const res = await fetch(`https://reactcrudapi.onrender.com/view/${id}`,{
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
    setUserdata(data);
    console.log("Data fetched successfully");
  }


 }

 const deleteuser = async (id) => {
   const res2 = await fetch(`https://reactcrudapi.onrender.com/deleteuser/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data3=await res2.json();
  if (res2.status === 404) {
    alert("failed to delete user");
  }
  else {
    alert("User Deleted Successfully");
    navigate('/users');
    setdtdata(data3);
  }

}


 useEffect(()=>
 {
   getuser();
  },[]);

 return(
  <div className="container mt-5">
   <h3>Welcome {getUserdata.name}</h3>
   <Card variant="outlined" sx={{maxWidth:600}}>
    <CardContent>
    <div className="add_btn ">
           <Link to={`https://reactcrudapi.onrender.com/edit/${getUserdata._id}`} className="btn btn-outline-primary mx-2"><i className="fa-regular fa-pen-to-square"></i></Link>
      <button type="button" onClick={()=>{deleteuser(getUserdata._id)}}  className="btn btn-outline-danger"><i className="fa-solid fa-circle-minus"></i></button>
      </div>

     <div className="row">
     <div className="leftview col-lg-6 col-md-6 col-12">
     <img src={imgg} alt="user"/>
     <h3 className="mt-3">Name : <span className="badge bg-secondary">{getUserdata.name}</span></h3>
     <p className="mt-3">Age : <span>{getUserdata.age}</span></p>
     <p className="mt-4"><i className="fa-regular fa-envelope"></i> Mail : <span>{getUserdata.email}</span></p>
     <p className="mt-4"><i className="fa-solid fa-briefcase"></i> Occupation : <span>{getUserdata.work}</span></p>
      </div>
      <div className="rightview col-lg-6 col-md-6">
      <p className="mt-3"><i className="fa-solid fa-phone"></i> Contact : <span>+91 {getUserdata.mobile}</span></p>
      <p className="mt-4"><i className="fa-solid fa-location-dot"></i> Location : <span>{getUserdata.address}</span></p>
       <p>
       Description:<span>{getUserdata.desc}</span>
       </p>
       </div>
     </div>
    </CardContent>
   </Card>
</div>
 )
}

export default Detail;