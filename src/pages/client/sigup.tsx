import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"


import React from "react";
import { ISignup } from "../../interfaces/auth";
import { useLogupMutation } from "../../api/auth";
const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ISignup>();
    console.log(register)
    const navigate = useNavigate();
    const [Register] = useLogupMutation();
    const omSubmit = async (value: void) => {
        try {
            await Register(value);
            alert("Register success");
            navigate("/login")
        } catch (error) {
            alert(error.response.data.message)
        }
    }
    return (
        <div>
            <section className="bg-white">
               

                            <form
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                onSubmit={handleSubmit(omSubmit as any)}
                                action="#"
                                className="mt-8 grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="LastName"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        full Name
                                    </label>

                                    <input
                                        type="text"
                                        {...register("name", { required: "Name is required" })}
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                    <div>{errors.name?.message}</div>
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        {...register("email", { required: "email is required" })}
                                        id="Email"
                                        name="email"
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                    <div>{errors.email?.message}</div>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="Password"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        {...register("password", { required: "password is required" })}
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                    <div>{errors.password?.message}</div>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="PasswordConfirmation"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Password Confirmation
                                    </label>

                                    <input
                                        type="password"
                                        {...register("confirmPassword", { required: "confirmPassword is required" })}
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                    <div>{errors.confirmPassword?.message}</div>
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="MarketingAccept" className="flex gap-4">
                                        <input
                                            type="checkbox"
                                            id="MarketingAccept"
                                            name="marketing_accept"
                                            className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                                        />

                                        <span className="text-sm text-gray-700">
                                            I want to receive emails about events, product updates and
                                            company announcements.
                                        </span>
                                    </label>
                                </div>

                                <div className="col-span-6">
                                    <p className="text-sm text-gray-500">
                                        By creating an account, you agree to our
                                        <Link to="" className="text-gray-700 underline">
                                            terms and conditions
                                        </Link>
                                        and
                                        <Link to="" className="text-gray-700 underline">privacy policy</Link>.
                                    </p>
                                </div>

                                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                    <button
                                        className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                    >
                                        Create an account
                                    </button>

                                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                        Already have an account?
                                        <Link to="" className="text-gray-700 underline">Log in</Link>.
                                    </p>
                                </div>
                            </form>
                        
                   
            </section>
        </div>
    )
}

export default Register