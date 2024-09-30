import React from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";


export default function LoginForm(){

   const { register, handleSubmit, formState:{errors}, watch } = useForm({
      defaultValues:{
         email:'',
         password:''
      }
  });
  //const navigate = useNavigate();
  const email = watch("email");
  return(
   <div className="text-center">
      <form onSubmit={handleSubmit(async (data) => {

   const options = {
   method: 'POST',
   url: 'http://localhost:3000/api/auth/login',
   headers: {
       'Content-Type': 'application/json'
   },
   body:JSON.stringify(data)
   };
           console.log(data);
           fetch("http://localhost:3000/api/auth/login", options).then((res) => {
               res.json().then((result) => {
                   console.warn(result);
                   Navigate('/');
               })
           })
      })}>

       <p>
           <label>Email</label><br/>
           <input {...register("email", {
                       required:{
                           value: true,
                           message: "Please enter email"
                       }
                   }
               )
           }
           name="email" placeholder="Enter your email"/>
           {errors.email && <p>{errors.email.message}</p>}
           
       </p>
       {email !== "" && <p>
           <label>Password</label><br/>
           <input type="password" {...register("password", {
                       required:{
                       value: true,
                       message: "Please enter password"
                   }
               })
           }
           name="password" placeholder="Enter password"/>
           {errors.password && <p>{errors.password.message}</p>}
       </p>}
       <p>
           <button id="sub_btn" type="submit">Login</button>
       </p>
   </form>
   </div>
)
}