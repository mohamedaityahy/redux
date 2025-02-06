export const add = (newUser) =>{
    return { type: 'add' , payload:newUser }
}
export const edit = (editUser) =>{
    return { type: 'edit' , payload:editUser }
}
export const delet = (id) =>{
    return { type: 'delet' , payload:id }
}