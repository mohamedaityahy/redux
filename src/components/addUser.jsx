import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../config/action";
import { useNavigate } from "react-router-dom";

export function AddUser() {
    const count = useSelector(state=> state.users.length)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [form,setform] = useState({
        id:count+1,
        name:"",
        email:"",
        number:""
    })
    function handlChange(e) {
        setform({...form, [e.target.name]:[e.target.value]})
    }
    function handlSubmit(e){
        e.preventDefault()
        dispatch(add(form))
        navigate('/')
    }
  return (
    <div>
      <h1>add new user</h1>
      <form onSubmit={handlSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input type="text" placeholder="name" name="name" onChange={handlChange}/>
        <input type="text" placeholder="email" name="email" onChange={handlChange}/>
        <input type="text" placeholder="number phone" name="number" onChange={handlChange}/>
        <button>new user</button>
      </form>
    </div>
  );
}
