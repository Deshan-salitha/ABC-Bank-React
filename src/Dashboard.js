import './css/User.css';
// import{handleAuth} from "./fetching/AuthFetch";
import { useState } from "react";
import { Nav, NavItem } from 'reactstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

const Home = () => {
    var username = localStorage.getItem("user")
    var userid = localStorage.getItem("userid")
    var jwt = localStorage.getItem("jwt")
    const navigate = useNavigate();
    const url = 'http://localhost:8080/usebyid/'
    const signout = (e) => {

        localStorage.removeItem('jwt')
        localStorage.removeItem('user')
        localStorage.removeItem('userid')
        navigate("/")
    }
    const getuser = (e) => {

        axios.post(url + userid, { headers: {"Authorization" : `Bearer ${jwt}`} } ).then(function (response) {

            console.log(response.data);
            // localStorage.setItem('auth', JSON.stringify(response))
            // navigator("/home");

        })
    }
    return (
        <div className="flex flex-row">
            <div className="basis-1/12 bg-white h-screen">
                <nav>
                    <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                    <li><button type='button' onClick={getuser}>Home</button></li>
                        <li>Transactions</li>
                        <li><button type='button' onClick={signout}>Sign out</button></li>
                        {/* <li>4</li> */}
                    </ul>
                </nav>
            </div>
            <div className="basis-11/12 login object-center h-screen items-center">
                <div className='heading'>
                    Dashboard
                </div>
                <div className='welcomming'>
                    Welcome {username}
                </div>
                <div className='flex p-8 space-x-4 ...'>
                    <div className='basis-5/12 bg-white p-8 card drop-shadow-xl'  ></div>
                    <div className='basis-5/12  p-8 card drop-shadow-xl'></div>
                </div>
            </div>
        </div>
    );
}

export default Home;