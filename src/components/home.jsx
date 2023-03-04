/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import imgg from '../images/Home.png';
import imgtwo from '../images/logo1.jpg';


const Home=()=>{
 return(
  <div className="home-container">
   <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={imgg} className="d-block col-lg-12 w-100" alt="..."/>
    </div>
  </div>
</div>
<div className="container def ">
 <div className="shadow-lg m-4 pb-3">
  <p className="text-start px-4  fs-3 pt-3 mt-3 ">What is Crud?</p>
  <p className=" fs-6 m-3 px-3">CRUD refers to the four functions that are Create, Read, Update and Delete and it is the most basic operation of a web application. Here, the create function allows the client to create a new record into the database and the read function allows the client to get the particular data from the database. The other function named update is used to update the data and finally, the delete function is used to delete the data from the database.
 </p>
 <p className="text-start px-4  fs-3 pt-4 mt-3">What is MERN</p>
  <p className=" fs-6 m-3 px-3">MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.</p>
  <ul className="list-unstyled fs-6 mx-3 mb-2 px-2"><li><ul className="fs-6 mx-3 mb-2 px-2">
  <li><p className="fw-bold">MongoDB — document database</p></li>
  <li><p className="fw-bold">Express(.js) — Node.js web framework</p></li>
  <li><p className="fw-bold">React(.js) — a client-side JavaScript framework</p></li>
  <li><p className="fw-bold">Node(.js) — the premier JavaScript web server</p></li>
</ul>
</li>
</ul>
 </div>
  </div>
 <div className="container m-4 p-3 fw-bold fs-3 stages-head px-5 mx-5 ">Stages Of Development</div>

  <div className="cards m-4 mx-5 px-4">
  <div class="row px-4">
  <div class="col-sm-6 col-lg-3">
    <div class="card border-warning">
    <div class="card-header bg-transparent border-warning">Header</div>
      <div class="card-body">
        <h5 class="card-title fw-bold">Setting Up and Creating Environments</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-lg-3">
    <div class="card border-success">
    <div class="card-header bg-transparent border-success">Header</div>
      <div class="card-body">
        <h5 class="card-title fw-bold">Creating Client Side Setup</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-lg-3">
    <div class="card border-primary">
      <div class="card-header bg-transparent border-primary">Header</div>
      <div class="card-body">
        <h5 class="card-title fw-bold">Setting Up Server Side Setup</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-lg-3">
    <div class="card border-info">
    <div class="card-header bg-transparent border-info">Header</div>
      <div class="card-body">
        <h5 class="card-title fw-bold">Deploying the Site </h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>

</div>


   </div>

  </div>
 )
}

export default Home;