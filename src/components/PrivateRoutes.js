import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";



// const PrivateRoutes = ()=>{
//   let token = localStorage.getItem('token');
//      return (
//          token ? <Outlet/> : <Navigate to='/login'/>
//        )
// }

// module.exports = {PrivateRoutes}

export default function PrivateRoutes () {
    let token = localStorage.getItem('token');
  return (
      token ? <Outlet/> : <Navigate to='/login'/>
    )
  }