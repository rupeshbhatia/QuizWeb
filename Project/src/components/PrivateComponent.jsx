import { Navigate, Outlet } from "react-router-dom"

let PrivateComponent=()=>{
    let author=localStorage.getItem("user")
    return author?<Outlet/>:<Navigate to='/signup'/>
    
}
export default PrivateComponent;