import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../../Hooks/useServiceDetails';
import { useForm } from "react-hook-form";
import "./Checkout.css"
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import {  toast } from 'react-toastify';
const Checkout = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetails(serviceId);
    const [user] = useAuthState(auth);
   
   
    const handleOrder = (event) => {
        event.preventDefault();
       const order = {
        name: event.target.name.value,
        email: event.target.email.value,
        serviceName: event.target.service.value,
        serviceId: serviceId,
        address: event.target.address.value,
        phone: event.target.phone.value,
       }
       

       axios.post('http://localhost:5000/order', order)
      .then(res => {
        const {data} = res;
        if(data.insertedId){
            toast("Your order is booked!!!")
        }
      })
      .catch(function (error) {
        console.log(error);
      });
       event.target.reset();
    }

    
  
    return (
        <div>
            <h2>Please Checkout your booking {service.name}</h2>

            <form className='order-form' onSubmit={handleOrder}>
            <input type="text" placeholder='name' value={user?.displayName} name="name" id="" disabled />
            <input type="text" placeholder='Email' value={user?.email} name="email" id="" disabled />
            <input type="text" placeholder='Service' value={service.name} name="service" id="" disabled />
            <input type="text" placeholder='Address' name="address" id="" />
            <input type="text" placeholder='Phone Number' name="phone" id="" />
            <input type="submit" value="Place order" />
    </form>
        </div>
    );
};

export default Checkout;