import React from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";


export default function RegisterForm(){

        const { register, handleSubmit, formState:{errors}, watch } = useForm({
            defaultValues:{
                firstName: '',
                lastName:'',
                email:'',
                category1:'',
                category2:'',
                password:''
            }
        });
        const category1 = watch("category1");
        //const navigate = useNavigate();

         return(
            <div className="text-center">
               <form onSubmit={handleSubmit(async (data) => {

            const options = {
            method: 'POST',
            url: 'http://localhost:3000/api/auth/register',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
            };
                    console.log(data);
                    fetch("http://localhost:3000/api/auth/register", options).then((res) => {
                        res.json().then((result) => {
                            console.warn(result);
                            Navigate('/');
                        })
                    })
               })}>
                <p>
                    <label>First Name</label><br/>
                    <input {...register("firstName", {
                                required:{
                                value: true,
                                message: "Please enter first name"
                            }
                        })
                    }
                    name="firstName"placeholder="Enter Fisrt Name"/>
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                </p>
                <p>
                    <label>Last Name</label><br/>
                    <input {...register("lastName", {
                                required:{
                                value: true,
                                message: "Please enter last name"
                            }
                        })
                    }
                    name="lastName" placeholder="Enetr Last Name"  />
                    {errors.lastName && <p>{errors.lastName.message}</p>}
                </p>
                <p>
                    <label>Email</label><br/>
                    <input {...register("email", {
                                required:{
                                    value: true,
                                    message: "Please enter email"
                                },
                                pattern:{
                                    value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                                    message: "Please enter valid email"
                                }
                            }
                        )
                    }
                    name="email" placeholder="Enter your email"/>
                    {errors.email && <p>{errors.email.message}</p>}
                    
                </p>
                <p>
                    <label>Catagory1</label>
                    <select {...register("category1")}>
                        <option value="">Select...</option>
                        <option value="A">Category A</option>
                        <option value="B">Category B</option>
                    </select>
                </p>
                { category1 === "A" && <p>
                    <label>Catagory2</label>
                    <select {...register("category2")}>
                        <option value="">Select...</option>
                        <option value="A">Category A</option>
                        <option value="B">Category B</option>
                    </select>
                </p>}
                <p>
                    <label>Password</label><br/>
                    <input type="password" {...register("password", {
                                required:{
                                value: true,
                                message: "Please enter password"
                            },
                            pattern:{
                                value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
                                message: "Please enter valid password"
                            }
                        })
                    }
                    name="password" placeholder="Enter password"/>
                    {errors.password && <p>{errors.password.message}</p>}
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            </div>
         )
    }