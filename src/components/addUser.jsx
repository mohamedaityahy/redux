import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../config/action";
import { useNavigate } from "react-router-dom";

export default function Adduser() {
    const count = useSelector(state=>state.users.length)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [newUser, setnewUser] = useState({
        id:count+1,
        name:"",
        email:"",
        number:""
    })

    function handlChange(e){
        setnewUser({...newUser, [e.target.name]:[e.target.value]})
    }

    function handlForm(e){
      e.preventDefault();
      if (!String(newUser.name).trim() || !String(newUser.email).trim() || !String(newUser.number).trim()) {
        alert("all input required");
        return
      }

      dispatch(add(newUser));
      navigate("/");
    }
  return (
    <div className="container mt-5 d-flex justify-content-center row" style={{width:'100%'}}>
        <h2>add new user</h2>
      <div style={{textAlign:'start',maxWidth:'60%'}}>
        <form className="container mt-3" onSubmit={handlForm}>
          <label className="form-label">Name</label>
          <input type="text" name="name" value={newUser.name} className="form-control mb-2" onChange={handlChange}/>

          <label className="form-label">Email</label>
          <input type="email" name="email" value={newUser.email} className="form-control mb-2" onChange={handlChange}/>

          <label className="form-label">Phone</label>
          <input type="tel" name="number" value={newUser.number} className="form-control mb-3" onChange={handlChange}/>

          <button className="btn btn-primary w-100">New User</button>
        </form>
      </div>
    </div>
  );
}
