'use Client';
import React, { FC } from "react";
import { useState } from "react";
import { useFormState } from "react-dom";

interface Product {
   handleClick: () => void,
}

const AddProduct: FC<Product> = ({ handleClick }) => {

   const [text, setText] = useState('');

   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const formJson = Object.fromEntries(formData.entries());

      const requestOptions = {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(formJson),
      }
      fetch('http://localhost:5000/items', requestOptions)
         .then(async response => {
            if (!response.ok) {
               alert("Error");
            }
            handleClick();
         })
   }

   return (
      <>
         <form onSubmit={handleSubmit}>
            <input className="text-black h-10 rounded-md" placeholder=" New product"
               name="name"
               value={text}
               onChange={event => setText(event.target.value)}>
            </input>
            <button disabled={!text} type="submit" className="AddButton ml-4">Add new product</button>
         </form>
      </>
   )
}

export default AddProduct;
