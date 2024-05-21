import './ContactUs.css';
import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { FaAt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function ContactUs(){
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/sent');
    }
    return(
        <div class="contactus">
            <div className='section1' >
            <h1 className='head'>Contattaci</h1>
                <input className='top' type="text" name="name"  placeholder='Nome' required />
                <input className='top' type="text" name="name"  placeholder='Cognome' required />
                <input className='top' type="text" name="email"  placeholder='Email' required />
                <input className='top' type="text" name="mobile"  placeholder='Telefono' required />
            </div>
            <div className='section2'>
                <form>
                <input className='list' type="text"  placeholder='list' required />
                <input className='message' type="text"  placeholder='Come possiamo aiutarla?' required />
                <input className='upload' type="images" />
                <button button className='submit' to="/homepage">Invia Messaggio </button>
                </form>
            </div>
            <div className='contactus2'>
            <div className='whatsapp'>
                <p className='logo'><FaWhatsapp /></p>
                <p>Preferisci usare WhatsApp?</p>
                <h4>+39 331 9467237</h4>
            </div>
            <div className='mail'>
                <p className='logo'><FaAt /></p>
                <p>Preferisci inviarci una Email?</p>
                <h4>info@mediartrade.com</h4>
            </div>
            </div>
        </div>
    )
};
export default ContactUs;