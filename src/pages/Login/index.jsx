import { useState, useContext } from "react";

import api from "../../services/api";
import AuthContext from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const { isLoggedIn, user, login } = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async(e) => {
        e.preventDefault();

        setLoading(true);

        await api.post('/sessions/login', {
            username,
            password
        }).then(async(res) => {
            await login(res.data);

            setLoading(false);
            setErrorMessage('');

            navigate('/');

        }).catch(err => {
            setErrorMessage(err.response.data.message);
            setLoading(false);
        });

    };

    return (
        <div className="w-full h-screen bg-cyan-600 flex justify-center items-center">
            <div className="w-full max-w-md bg-white shadow-2xl rounded-md p-8">
                <div className="flex justify-center">
                    <div>
                        <img src="/images/logotipo_dark.png" className="w-16 h-auto" alt="" />
                    </div>
                </div>
                <h1 className="text-2xl text-center font-semibold mt-6">Sign In</h1>
                <div className="text-center">
                    <h3 className="text-gray-600 mt-2">Please, enter your credentials</h3>
                </div>
                {errorMessage && (
                    <div>
                        <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-2 my-3 text-center" role="alert">
                            <p>{errorMessage}</p>
                        </div>
                    </div>
                )}
                {!loading &&
                    <div>
                        <form onSubmit={handleLogin} className="mt-6">
                            <input type="text" className="w-full h-10 px-4 rounded-md mb-3" placeholder="Username or e-mail" onChange={(e) => setUsername(e.target.value)}  required/>
                            <input type="password" className="w-full h-10 px-4 rounded-md mb-3" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                            <small className="block text-right mb-3"><a href="#" className="text-cyan-600 underline">Forgot your password?</a></small>
                            <button className="w-full text-white py-2 rounded-md bg-cyan-600 font-semibold hover:shadow-lg" type="submit">Login</button>
                        </form>
                    </div>
                }
                {loading &&
                    <div className="w-full flex justify-center">
                        <div className="mt-6">
                            <img src="/images/loading.gif" className="w-10 h-10" alt="" />
                        </div>
                    </div>
                }
                <div className="text-center mt-4">
                    <p className="text-gray-600">Don't have an account yet? <a href="/register" className="text-cyan-600 underline">Sign Up</a></p>
                </div>
            </div>
        </div>
    );
}
