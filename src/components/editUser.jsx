import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { edit } from "../config/action";


export default function Edituser() {
  const navigate = useNavigate()
    const { id } = useParams()
    const user = useSelector(state => state.users.find((u)=>u.id === parseInt(id)))
    const dispatch = useDispatch()
    const [dtuser,setdtuser] = useState(
      {
        id:user.id,
        name:user.name,
        email:user.email,
        number:user.number
      }
    )

    function handlChange(e){
      setdtuser({...dtuser, [e.target.name]:[e.target.value]})
    }

    function handlForm(e){
      e.preventDefault()
      dispatch(edit(dtuser))
      navigate('/')
    }

  return (
    <div className="container mt-5 d-flex justify-content-center row" style={{width:'100%'}}>
        <h2>edit user information </h2>
      <div style={{textAlign:'start',maxWidth:'60%'}}>
        <form className="container mt-3" onSubmit={handlForm}>
          <label className="form-label">Name</label>
          <input type="text" name="name" value={dtuser.name} className="form-control mb-2" onChange={handlChange}/>

          <label className="form-label">Email</label>
          <input type="email" name="email" value={dtuser.email} className="form-control mb-2" onChange={handlChange}/>

          <label className="form-label">Phone</label>
          <input type="tel" name="number" value={dtuser.number} className="form-control mb-3" onChange={handlChange}/>

          <button className="btn btn-primary w-100">New User</button>
        </form>
      </div>
    </div>
  );
}
