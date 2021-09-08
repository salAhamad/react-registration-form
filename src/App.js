import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react';

function App() {

  // Technical Thapa youtube source

  const [formInput, setformInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setformInput({...formInput, [name]: value})
  }

  // useEffect(()=> {
    /*formData()*/
  // },[])
  const [records, setRecords] = useState([]);
  const formData = (e) => {
    e.preventDefault();
    if(formInput.name !== "" && formInput.email !== "" && formInput.phone !== "" && formInput.password !== "") {
      const newRecord = {...formInput, id: new Date().getTime().toString() }
      console.log(newRecord);
      setRecords([...records, newRecord])
      console.log(records);
      setformInput({name: "", email: "", phone: "", password: ""});
    } else {
      alert("fill the data");
    }
  }    
  
  

  return <section className="mainSection bg-dark p-5 d-flex justify-content-center align-items-center">
      <form action="" onSubmit={(e) => formData(e)} className="formContainer">
        <div className="mb-3">
          <label htmlFor="" className="form-label">Full Name</label>
          <input type="text" name="name" className="form-control" placeholder="Enter Full Name" value={formInput.name} onChange={(e)=> inputHandler(e)} />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">Email address</label>
          <input type="email" name="email" className="form-control" placeholder="Enter Email ID" value={formInput.email} onChange={(e)=> inputHandler(e)} />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">Phone Number</label>
          <input type="number" name="phone" className="form-control" placeholder="Enter Number" value={formInput.phone} onChange={(e)=> inputHandler(e)} />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">Password</label>
          <input type="password" name="password" className="form-control" placeholder="Enter Password" value={formInput.password} onChange={(e)=> inputHandler(e)} />
        </div>
        <button className="btn btn-primary">Register Now</button>
      </form>
  </section>
}

export default App;
