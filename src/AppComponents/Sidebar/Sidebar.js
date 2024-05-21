import './Sidebar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { MdLogout } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { BiImages } from "react-icons/bi";
import { PiTelevisionSimple } from "react-icons/pi";
import { FaRegQuestionCircle } from "react-icons/fa";


function Sidebar(){
    return(
        <div class="sidebar">
            <div className='container'>
                <div className='first'>
                    < Link to="/homepage"><MdLogout /> </Link>
                </div>
                <div className='second'>
                < Link to="/contactus"><BiImages /> </Link>
                < Link to="/contactus"><PiTelevisionSimple /> </Link>
                < Link to="/contactus"> <FaRegQuestionCircle /></Link>
                </div>
                <div className='third'>
                < Link to="/contactus"><RiMessage2Line /> </Link>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;