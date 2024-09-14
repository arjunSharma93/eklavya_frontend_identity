import React from "react";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            category1: '',
            category2: '',
            password: ''
        }
    });

    const category1 = watch("category1");

    const onSubmit = async (data) => {
        try {
            // Send data to the server
            const response = await fetch("https://httpbin.org/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

           
            if (response.ok) {
                const result = await response.json();
                
                localStorage.setItem("token", result.token);

                console.log("Registration successful:", result);
            } else {
                console.error("Registration failed:", await response.text());
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };

    return (
        <div className="text-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>
                    <label>First Name</label><br />
                    <input
                        {...register("firstName", {
                            required: { value: true, message: "Please enter first name" }
                        })}
                        name="firstName"
                        placeholder="Enter First Name"
                    />
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                </p>
                <p>
                    <label>Last Name</label><br />
                    <input
                        {...register("lastName", {
                            required: { value: true, message: "Please enter last name" }
                        })}
                        name="lastName"
                        placeholder="Enter Last Name"
                    />
                    {errors.lastName && <p>{errors.lastName.message}</p>}
                </p>
                <p>
                    <label>Email</label><br />
                    <input
                        {...register("email", {
                            required: { value: true, message: "Please enter email" },
                            pattern: {
                                value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                                message: "Please enter a valid email"
                            }
                        })}
                        name="email"
                        placeholder="Enter your email"
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </p>
                <p>
                    <label>Category1</label>
                    <select {...register("category1")}>
                        <option value="">Select...</option>
                        <option value="A">Category A</option>
                        <option value="B">Category B</option>
                    </select>
                </p>
                {category1 === "A" && (
                    <p>
                        <label>Category2</label>
                        <select {...register("category2")}>
                            <option value="">Select...</option>
                            <option value="A">Category A</option>
                            <option value="B">Category B</option>
                        </select>
                    </p>
                )}
                <p>
                    <label>Password</label><br />
                    <input
                        type="password"
                        {...register("password", {
                            required: { value: true, message: "Please enter password" },
                            pattern: {
                                value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
                                message: "Please enter a valid password"
                            }
                        })}
                        name="password"
                        placeholder="Enter password"
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
        </div>
    );
}
