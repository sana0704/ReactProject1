
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import { AppLayout1 } from './Components/Layout/UI/AppLayout1'; 
import { Dashboard } from "./Pages/Dashboard";
import { RegistrationPage } from "./Pages/RegistrationPage";

const Register=()=>{
  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout1 />,
      children:[
 {
      index:true,
      element:< RegistrationPage />
      
    },
    {
      path:"dashboard",
      element:<Dashboard />
    },],},]);
return <RouterProvider router={router} />;};
export default Register;
