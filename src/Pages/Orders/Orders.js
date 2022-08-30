import React, { useState } from 'react';

import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import axiosPrivate from '../../Api/axiosPrivate';
const Orders = () => {
   const  [orders,setOrders] = useState([]);
   const [user] = useAuthState(auth);
   const navigate = useNavigate();

   const getOrders = async()=>{
    const email = user?.email;
        try{
            const {data} = await axiosPrivate.get(`http://localhost:5000/orders?email=${email}`);
            setOrders(data);
        }
        catch(err){
            console.log(err.message);
            if(err.response.status === 403 || err.response.status === 401){
                signOut(auth);
                navigate("/login");
                
            }
        }
   }

   getOrders();
   
    

    return (
        <div>
            Your orders  {orders.length}
        </div>
    );
};

export default Orders;