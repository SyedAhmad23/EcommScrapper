import { useState } from 'react';
import LoginImage from '../images/login.webp';
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../context/authSlice';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const notify = () => toast.success('🦄 Login successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState("");

    const loading = useSelector(state => state.user.loading);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        let userCredentials = {
            username,
            password
        };

        console.log('Form submitted with data:', username, password);

        try {
            const result = await dispatch(loginUser(userCredentials));
            console.log('Response from server:', result);

            if (result.payload) {
                setUsername("");
                setPassword("");
                navigate('/');
            }
        } catch (error) {
            console.error("Error in handleSubmit:", error);
            setError("Username or password is incorrect");

        }
    };

    return (
        <div className="relative w-full h-screen flex flex-col md:flex-row">
            {/* Background Image (Mobile) */}
            <img
                src={LoginImage}
                alt=""
                className="sm:w-full h-full object-cover md:hidden absolute z-0"
                style={{ top: 0, left: 0 }}
            />

            {/* Image (Hidden on Medium and Larger Screens) */}
            <img
                src={LoginImage}
                alt=""
                className="md:w-1/2 h-full object-cover hidden md:block sm:block z-10"
            />

            {/* Form */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center items-center h-full relative z-20">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form
                    onSubmit={handleSubmit}
                    className="max-w-[400px] w-full mx-auto bg-white p-8"
                >
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your username"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div className="flex w-full">
                        <button
                            onClick={notify}
                            type="submit"
                            className="w-full bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            {loading ? "loading..." : "Login"}
                            <ToastContainer />
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Login;
