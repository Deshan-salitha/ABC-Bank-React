import './css/User.css';
// import{handleAuth} from "./fetching/AuthFetch";
import { useState } from "react";
import { Nav, NavItem } from 'reactstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import NavBar from './NavBar';

const Home = () => {
    var user = localStorage.getItem("user")
    var userid = localStorage.getItem("userid")
    var jwt = localStorage.getItem("jwt")
    const navigate = useNavigate();
    const url = 'http://localhost:8080/usebyid/'
    // const signout = (e) => {

    //     localStorage.removeItem('jwt')
    //     localStorage.removeItem('user')
    //     localStorage.removeItem('userid')
    //     navigate("/")
    // }
    const getuser = (e) => {
        // console.log(jwt);

        axios.post(
            url + userid,
            null,
            {
                headers: {
                    'Authorization': `Bearer ` + jwt,
                    'Access-Control-Allow-Origin': '*'
                }
            }
        ).then(function (response) {
            var user = response.data;
            // console.log(user.accounts[0].transactins.length);
            localStorage.setItem('auth', response.data)
            const users = JSON.parse(localStorage.getItem('auth'))
            console.log(users)
            // navigator("/home");
            // user.userEmail

        })
    }
    return (
        <div className="flex flex-row">
            <div className=" bg-white h-screen">
                <NavBar />
                {/* <nav>
                    <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                    <li><button type='button' onClick={getuser}>Home</button></li>
                        <li>Transactions</li>
                        <li><button type='button' onClick={signout}>Sign out</button></li>
                    </ul>
                </nav> */}
            </div>
            <div className="w-screen login object-center h-screen items-center">
                <header className=" shadow">
                    <div className="max-w-7xl mx-0 py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                    </div>
                </header>
                <div className='welcomming'>
                    Welcome {user.userEmail}
                    <button onClick={getuser}>ji</button>
                </div>
                <div className='flex p-10 object-center space-x-4 pr-5 flex-row...'>
                    <div className='basis-5/12  bg-white p-8 inline card drop-shadow-xl ...'>
                        <span className='inline-flex space-x-2 items-baseline'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                            </svg>
                            <p className='"text-2xl ..."'>Balance</p>
                        </span>

                    </div>
                    <div className='basis-5/12 bg-white p-8 card drop-shadow-xl ...'>afalfnl</div>
                </div>
            </div>
        </div>
    );
}

export default Home;


