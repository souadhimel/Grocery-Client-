
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import "./AddProducts.css";
import 'react-toastify/dist/ReactToastify.css'

const AddProducts = () => {

    const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch('http://localhost:5000/vegetable',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then (res=>res.json())
    .then(data => {
        console.log("success",data);
        toast('Successfully added')
        reset()
    })

  };
    return (
        <div className="add-service m-5">
        <h2 className="text-center" style={{marginTop:'20px', color:'blue',fontSize:'30px'}}>Please add your desired items</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input style={{ height:"50px",border: "2px solid red"}}
            className="form-control"
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Product Name"
          />
            <input
            className="form-control"
            {...register("img")}
            placeholder="image url"
          />
          <textarea  className="text" {...register("description")} placeholder="Description" />
          <input
            className="form-control"
            type="number"
            {...register("price")}
            placeholder="Taka"
          />
          <input
            className="form-control"
            type="text"
            {...register("spName")}
            placeholder="Supplier Name"
          />
          <input
            className="form-control"
            type="number"
            {...register("quantity")}
            placeholder="Quantity"
          />
        
          <input className="add_button" type="submit" />
        </form>
        <ToastContainer/>
      </div>
    );
};

export default AddProducts;