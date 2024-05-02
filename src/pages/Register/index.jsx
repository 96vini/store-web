import { useState } from "react";

export default function Register() {
    const [step, setStep] = useState(1);
    const [signUpForm, setSignUpForm] = useState({});

    const handleRegister = (e) => {
        e.preventDefault();
        alert("Registration submitted!");
    };

    return (
        <div className="w-full h-screen bg-cyan-600 flex justify-center items-center">
            <div className="w-full max-w-md bg-white shadow-2xl rounded-md p-8">
                <div className="flex justify-center">
                    <div>
                        <img src="/images/logotipo_dark.png" className="w-16 h-auto" alt="" />
                    </div>
                </div>
                <h1 className="text-2xl text-center font-semibold mt-6">Sign Up</h1>
                <div className="text-center">
                    <h3 className="text-gray-600 mt-2">Please, enter your details</h3>
                </div>
                <form onSubmit={handleRegister} className="mt-6">
                    {step == 1 &&
                        <div className="w-full">
                            <input type="text" className="w-full h-10 px-4 rounded-md mb-3" onChange={(e) => setSignUpForm(e.target.value)} placeholder="First Name" />
                                <input type="text" className="w-full h-10 px-4 rounded-md mb-3" onChange={(e) => setSignUpForm(e.target.value)} placeholder="Last Name" />
                                <input type="email" className="w-full h-10 px-4 rounded-md mb-3" onChange={(e) => setSignUpForm(e.target.value)} placeholder="Username" />
                                <input type="password" className="w-full h-10 px-4 rounded-md mb-3" onChange={(e) => setSignUpForm(e.target.value)} placeholder="Password" />
                            <small className="block text-right mb-3"><a href="#" className="text-gray-800 underline">Forgot your password?</a></small>
                            <button className="w-full bg-cyan-600 text-white py-2 rounded-md hover:bg-gray-600" type="button" onClick={() => setStep(step+1)}>Next</button>
                        </div>
                    }
                    {step == 2 &&
                        <div className="w-full">
                            <input type="text" className="w-full h-10 px-4 rounded-md mb-3" placeholder="Zip Code" />
                            <input type="text" className="w-full h-10 px-4 rounded-md mb-3" placeholder="Address Line" />
                            <input type="text" className="w-full h-10 px-4 rounded-md mb-3" placeholder="District" />
                            <input type="email" className="w-full h-10 px-4 rounded-md mb-3" placeholder="City" />
                            <input type="password" className="w-full h-10 px-4 rounded-md mb-3" placeholder="State" />
                            <small className="block text-right mb-3"><a href="#" className="text-gray-800 underline">Forgot your password?</a></small>
                            <button className="w-full bg-cyan-600 text-white py-2 rounded-md hover:bg-blue-600" type="submit">Create account</button>
                        </div>
                    }
                </form>
                <div className="text-center mt-4">
                    <p className="text-gray-600">Already have an account? <a href="/login" className="text-gray-800 underline">Sign In</a></p>
                </div>
            </div>
        </div>
    );
}
