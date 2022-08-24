import React from 'react';
import useServices from '../Hooks/useServices';

const ManageServices = () => {
    const [services] = useServices();
    const handleDel = id => {
        const proceed = window.confirm("are you sure you want to delete?")
        if(proceed){
            fetch(`http://localhost:5000/service/${id}`, {
  method: 'DELETE',
})
.then(res => res.json()) // or res.json()
.then(result => console.log(result))
        }
    }
    return (
        <div>
            <h2>Manage your services</h2>
            <ol>
                {
                    services.map((service) => <li 
                    key={service._id}>{service.name} <button onClick={()=> handleDel(service._id)}>x</button>
                    
                    </li>
                
                )
                }
            </ol>
        </div>
    );
};

export default ManageServices;