import React from 'react';
import './Appoinment.css'
const Appoinment = () => {
    return (
        <div className='my-5 appoinment-form' id='contact'>
            <h3>Make An <span className='text-warning'>Appoinment</span></h3>
            <form className='mx-auto mt-5 ' style={{width:'40rem'}}>
                <div className='d-flex justify-content-between flex-sm-column'>
                    <input type="date" placeholder='Pick a Date'/>
                    <input type="time" name="" id="" placeholder='Suitable time' />
                </div>
                <div className="d-flex justify-content-between flex-sm-column">
                    <select name="Department" id="">
                        <option value="dental">Dental</option>
                        <option value="alergic">Alergy</option>
                        <option value="fever">Fever</option>
                    </select>
                    <select name="" id="">
                        <option value="alim">Alim Siddique</option>
                        <option value="alim">Alim Siddique</option>
                        <option value="alim">Alim Siddique</option>
                    </select>
                </div>
                <div className="d-flex justify-content-between flex-sm-column">
                    <input type="text" placeholder='Name' />
                    <input type="text"  placeholder='Phone No.'/>
                </div>
                <input type="email" name="" id="email-input" placeholder='Email'/>
                <input type="submit" className='px-3 py-1 shadow' value="Submit" style={{background:'rgb(238 130 54)',color:'white',border:'none'}}/>
            </form>
        </div>
    );
};

export default Appoinment;