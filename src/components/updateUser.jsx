import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { update } from "../config/action";

export function Update() {
  const {id} = useParams()
  const user = useSelector(state => state.users.find((u)=>u.id === parseInt(id)))
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [form, setform] = useState({
    id:parseInt(id),
    name:user.name,
    email:user.email,
    number:user.number
  })

  function handlChange (e){
    setform({...form, [e.target.name]:[e.target.value]})
  }
  function handlSubmit (e){
    e.preventDefault()
    dispatch(update(form))
    navigate('/')
  }
  return (
    <div>
      <h1>Update this user</h1>
      <form onSubmit={handlSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input type="text" placeholder="name" value={form.name} name="name" onChange={handlChange}/>
        <input type="text" placeholder="email" value={form.email} name="email" onChange={handlChange}/>
        <input type="text" placeholder="number phone" value={form.number} name="number" onChange={handlChange}/>
        <button>update user</button>
      </form>
    </div>
  );
}
