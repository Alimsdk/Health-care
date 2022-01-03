import React from 'react';
import Appoinment from '../Appoinment/Appoinment';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
              
    <Banner></Banner>
    <Services></Services>
    <Doctors></Doctors>
    <Appoinment></Appoinment>
    <Footer></Footer>
        </div>
    );
};

export default Home;