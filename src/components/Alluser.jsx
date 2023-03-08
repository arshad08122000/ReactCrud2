/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { addData, updateData,deleteData} from '../context/ContextProvider';

const Alluser = () => {


  // eslint-disable-next-line no-unused-vars
  const { udata, setudata } = useContext(addData);
  const { updata, setupdata } = useContext(updateData);
  const {dtdata,setdtdata} =useContext(deleteData);
  const [getUserdata, setUserdata] = useState([]);

  console.log(getUserdata, "get user data");

  const getalldata = async (e) => {

    const res = await fetch("https://reactcrudapi.onrender.com/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      console.log("error");
    }
    else {
      setUserdata(data);
      console.log(setUserdata);
    }

  }

  const deleteuser = async (id) => {
    const res2 = await fetch(`https://reactcrudapi.onrender.com/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (res2.status === 404) {
      alert("failed to delete user");
    }
    else {
      alert("User Deleted Successfully");
      getalldata();
    }

  }


  useEffect(() => {
    getalldata();
  }, [])

  return ( 
    <>
    {
      udata ?
      <>  
          <div class="alert alert-success alert-dismissible fade show" role="alert">  
          <strong>Data Added Successfully</strong> You should check in on some of those fields below.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
         </div>
      </> : ""
    }
    {
      updata ?
      <>
          <div class="alert alert-success alert-dismissible fade show" role="alert">  
          <strong>Data Updated Successfully</strong> You should check in on some of those fields below.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
         </div>
      </> : ""
    }
    {
      dtdata ?
      <>
          <div class="alert alert-success alert-dismissible fade show" role="alert">  
          <strong>User Deleted Successfully</strong> You should check in on some of those fields below.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
         </div>
      </> : ""
    }
    
   <div className="mt-5 mx-5">
    <div className="container">
     <div className="h1 text-center mb-5">List Of Users</div>
     <div className="row">
      <div className="col">
      <div className="h5 mt-2">All Users :</div>
      </div>
      <div className="col"> 
      <div className="add_btn">
      <Link to={'/Add'} className="btn btn-outline-success"><i className="fa-solid fa-plus"></i>Add User </Link>
      </div>
     </div>
     </div>
     
    
     <table className="table table-hover mt-5 p-5 ">
  <thead>
    <tr clasName="table-head fw-bold">
      <th scope="col">Id</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Job</th>
      <th scope="col">Age</th>
      <th scope="col">Phone No</th>
      <th scope="col mx-0">Action</th>
    </tr>
  </thead>
  <tbody>
    
    {
      getUserdata.map((element,id)=>{
        return(
          <tr>
          <th scope="row">{id+1}</th>
          <td>{element.name}</td>
          <td>{element.email}</td>
          <td>{element.work}</td>
          <td>{element.age}</td>
          <td>{element.mobile}</td>
          <td className="d-flex justify-content-between mx-0">
          <Link to={`/edit/${element._id}`} className="btn btn-outline-primary mx-0"><i className="fa-regular fa-pen-to-square"></i></Link>
          <Link to={`/view/${element._id}`} className="btn btn-outline-secondary mx-0"><i className="fa-regular fa-eye"></i></Link>
          <button type="button" onClick={()=>{deleteuser(element._id)}}  className="btn btn-outline-danger"><i className="fa-solid fa-circle-minus"></i></button>
           </td>
        </tr>
        )
      })
    }
   
  </tbody>
</table>
    </div>
   </div>
   </>

  )
}
export default Alluser;
