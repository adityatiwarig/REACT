import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const login = async (data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(authLogin(userData))
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#f0f2f5] px-4">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
                <div className="flex justify-center mb-6">
                    <span className="w-20 h-20">
                        <Logo width="100%" />
                    </span>
                </div>

                <h2 className="text-2xl font-bold text-center text-gray-800">Sign in to Twitter</h2>

                <p className="mt-2 text-sm text-center text-gray-500">
                    Don’t have an account?{" "}
                    <Link
                        to="/signup"
                        className="text-blue-500 font-medium hover:underline"
                    >
                        Sign up
                    </Link>
                </p>

                {error && (
                    <p className="text-red-600 mt-4 text-center text-sm">{error}</p>
                )}

                <form onSubmit={handleSubmit(login)} className="mt-6 space-y-5">
                    <Input
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPattern: (value) =>
                                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Invalid email address",
                            },
                        })}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", { required: true })}
                    />
                    <Button type="submit" className="w-full">
                        Sign in
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Login
