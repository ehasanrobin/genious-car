import React from 'react';
import { useForm } from "react-hook-form";
const Addservice = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        
        fetch('http://localhost:5000/service', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
}).then(res => res.json())
  .then(result => console.log(result));
    };
    return (
        <div>
            <h2>Please add a Service</h2>
             <form className='w-50 mx-auto d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-2' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
      <textarea className='mb-2' placeholder='description' {...register("description")} />
      <input className='mb-2' placeholder='price' type="number" {...register("price")} />
      <input className='mb-2' placeholder='photo URL' type="text" {...register("photoUrl")} />
      <input className='mb-2' placeholder='' type="submit" />
    </form>
        </div>
    );
};

export default Addservice;