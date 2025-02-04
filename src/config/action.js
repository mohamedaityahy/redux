export const update =(newUser) =>{
    return {type:'update', payload:newUser}
}
export const add =(newUser) =>{
    return {type:'add', payload:newUser}
}
export const del =(id) =>{
    return {type:'delete', payload:id}
}