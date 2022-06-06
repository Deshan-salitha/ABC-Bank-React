import './css/Login.css';
// import{handleAuth} from "./fetching/AuthFetch";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
    const [userEmail, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [isPending, setIsPending] = useState(false);
    // const history = useNavigate();
    const navigate = useNavigate();
    // const jsonauthres = {};

    const handleAuth = (e) => {
        console.log("login data", userEmail)
        const url = 'http://localhost:8080/authenticate'
        axios.post(url, {
            userEmail: userEmail,
            password: password
        }).then((res) => {
            console.log("response", res.data.body.jwt)
            console.log("user", res.data.body.user.uFName)
            localStorage.setItem('jwt', res.data.body.jwt)
            localStorage.setItem('user', res.data.body.user)
            localStorage.setItem('userid', res.data.body.user.uID)
            if (res.data.body.user.userType == 'admin') {
                console.log("type: Admin")
                navigate("/home");
                // navigator('/home')
            } else if (res.data.body.user.userType == 'employee') {
                console.log("type: employee")
            } else if (res.data.body.user.userType == 'customer') {
                console.log("type: customer")
            } else {
                console.log("type: invalid")
            }
            // navigator("/home")

        })
    }
    const getuser = (e) => {

        axios.get('http://localhost:8080/allusers').then(function (response) {

            // response.forEach((el)=>{
            //     console.log(el)
            // })
            console.log(response.data);
            localStorage.setItem('auth', JSON.stringify(response))
            // navigator("/home");

        })
    }
    return (
        <div className="flex flex-row">
            <div className="basis-6/12 bg-white h-screen">
                <p className="cover-title">ABC Bank</p>
                <p className="cover-description">Secure, convenient banking anytime</p>
            </div>
            <div className="basis-6/12 login object-center h-screen items-center">
                <div className='container items-center'>
                    <p className="login-title">ABC Bank</p>
                    <p className="login-description">Secure, convenient banking anytime</p>
                </div>
                <div className='container object-center py-80 px-4 w-full  space-y-8 flex flex-col items-center'>
                    <form className="mt-8 space-y-6" method="post" onSubmit={handleAuth}>
                        {/* <input type="hidden" name="remember" defaultValue="true" /> */}
                        {/* <div className="rounded-md w-full shadow-sm "> */}
                        <div className='w-full'>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="input appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="input appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {/* </div> */}


                        <div className='items-center'>
                            <button
                                type="button"
                                onClick={() => handleAuth()}
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">

                                </span>
                                Sign in
                            </button>
                            <br></br>
                            <button
                                // type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                onClick={getuser}
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">

                                </span>
                                Register
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>

    );
}

export default Login;