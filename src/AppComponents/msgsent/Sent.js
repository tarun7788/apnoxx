import './Sent.css';
import { TiTick } from "react-icons/ti";
import React from 'react';

function Sent(){
    return(
        <div className='sent'>
            <p><TiTick /></p>
            <h1> Messaggio inviato</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at risus mauris.</p>
            <button>CHIUDI</button>
        </div>
    )
};
export default Sent;
