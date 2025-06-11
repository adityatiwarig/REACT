import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from './index.js'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  const create = async (data) => {
    setError("")
    try {
      const account = await authService.createAccount(data)
      if (account) {
        const userData = await authService.getCurrentUser()
        if (userData) {
          dispatch(login(userData))
          navigate("/")
        }
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white shadow-xl p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <span className="inline-block w-20">
            <Logo width="100%" />
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800">Create your account</h2>
        <p className="text-center text-sm text-gray-500 mt-2">
          Already have one?&nbsp;
          <Link
            to="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Sign In
          </Link>
        </p>

        {/* Error */}
        {error && (
          <p className="text-red-500 mt-4 text-center font-medium">{error}</p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(create)} className="mt-6 space-y-5">
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            {...register("name", { required: true })}
          />

          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            {...register("email", {
              required: true,
              validate: {
                matchPattern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Enter a valid email",
              },
            })}
          />

          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            {...register("password", { required: true })}
          />

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-2 font-semibold"
          >
            Create Account
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Signup
