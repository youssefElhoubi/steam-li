import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { authService } from '../services/Loginservice';
import { useNavigate } from 'react-router-dom';

// Define the shape of your form data
type FormInputs = {
    name?: string;
    email: string;
    password: string;
};

const LoginForm: React.FC = () => {
    const [state, setState] = useState<'login' | 'register'>('login');
    const [error, setError] = useState<string | null>(null);
    const naviagtor = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        try {
            if (state === 'login') {
                // Handle Login
                const user = authService.login(data);
                console.log(user);
                
            } else {
                // Handle Register
                const signUpData = {
                    id: Date.now().toString(),
                    name: data.name || '',
                    email: data.email,
                    password: data.password
                };
                const newUser = authService.register(signUpData);
                console.log(newUser);

            }
            naviagtor('/home');
        } catch (error: any) {
            // Show error message (you could also set this to a local state)
            console.log(error);
            setError(error.message);
            
        }
    };

    const toggleState = () => {
        reset(); // Clear errors and inputs when switching modes
        setState(prev => prev === "login" ? "register" : "login");
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-1/2 sm:w-87.5 text-center bg-gray-900/70 border border-white/10 rounded-2xl px-8"
        >
            <h1 className="text-white text-3xl mt-10 font-medium">
                {state === "login" ? "Login" : "Sign up"}
            </h1>

            <p className="text-gray-400 text-sm mt-2">
                {state === "login" ? "Please sign in to continue" : "Create your account"}
            </p>

            {/* NAME FIELD (Conditional) */}
            {state !== "login" && (
                <div className="mt-6">
                    <div className={`flex items-center w-full bg-white/5 ring-2 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all ${errors.name ? 'ring-red-500/60' : 'ring-white/10 focus-within:ring-indigo-500/60'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <circle cx="12" cy="8" r="5" /> <path d="M20 21a8 8 0 0 0-16 0" /> </svg>
                        <input
                            {...register("name", { required: state === "register" ? "Name is required" : false })}
                            type="text"
                            placeholder="Name"
                            className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none"
                        />
                    </div>
                    {errors.name && <p className="text-red-400 text-xs text-left ml-4 mt-1">{errors.name.message}</p>}
                </div>
            )}

            {/* EMAIL FIELD */}
            <div className="mt-4">
                <div className={`flex items-center w-full bg-white/5 ring-2 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all ${errors.email ? 'ring-red-500/60' : 'ring-white/10 focus-within:ring-indigo-500/60'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /> <rect x="2" y="4" width="20" height="16" rx="2" /> </svg>
                    <input
                        {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                        })}
                        type="email"
                        placeholder="Email id"
                        className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none"
                    />
                </div>
                {errors.email && <p className="text-red-400 text-xs text-left ml-4 mt-1">{errors.email.message}</p>}
            </div>

            {/* PASSWORD FIELD */}
            <div className="mt-4">
                <div className={`flex items-center w-full bg-white/5 ring-2 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all ${errors.password ? 'ring-red-500/60' : 'ring-white/10 focus-within:ring-indigo-500/60'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /> <path d="M7 11V7a5 5 0 0 1 10 0v4" /> </svg>
                    <input
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Minimum 6 characters" }
                        })}
                        type="password"
                        placeholder="Password"
                        className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none"
                    />
                </div>
                {errors.password && <p className="text-red-400 text-xs text-left ml-4 mt-1">{errors.password.message}</p>}
            </div>
            <div
                className="mt-2 min-h-[1.25rem]">
                {error && <p className="text-red-400 text-xs text-left ml-4 mt-1">{error}</p>}
            </div>

            <div className="mt-4 text-left">
                <button type="button" className="text-sm text-indigo-400 hover:underline">
                    Forget password?
                </button>
            </div>

            <button type="submit" className="mt-4 w-full h-11 rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition shadow-lg shadow-indigo-500/20" >
                {state === "login" ? "Login" : "Sign up"}
            </button>

            <p onClick={toggleState} className="text-gray-400 text-sm mt-3 mb-11 cursor-pointer" >
                {state === "login" ? "Don't have an account?" : "Already have an account?"}
                <span className="text-indigo-400 hover:underline ml-1">click here</span>
            </p>
        </form>
    );
};

export default LoginForm;