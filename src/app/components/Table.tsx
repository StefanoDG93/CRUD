'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import AddProduct from "./AddProduct";
import DeleteComponent from "./DeleteComponent";
import ViewProduct from "./ViewProduct";
import EditComponent from "./EditProduct";

function Table() {

  interface Product {
    id: number;
    name: string;
  }

  const [products, setProducts] = useState<Product[]>([]);

  const getData = async () => {
    const response = await fetch('http://localhost:5000/items')
      .then((response) => response.json());
    setProducts(response);
  }

  function handleClick() {
    getData();
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <>
      <table className="w-[60%] mt-10 text-center">
        <thead >
          <tr className="text-xl bold">
            <th>ID</th>
            <th>PRODUCT</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody >
          {products.map((item) => (
            <tr key={item.id}>
              <td className="py-5 px-10 ">{item.id} </td>
              <td className="py-5 px-10">{item.name} </td>
              <td className="flex gap-2 py-5 px-10 justify-center">
                <ViewProduct id={item.id} />
                <EditComponent id={item.id} item={item} handleClick={handleClick}></EditComponent>
                <DeleteComponent handleClick={handleClick} id={item.id}></DeleteComponent>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-col mt-10 items-center">
        <AddProduct handleClick={handleClick} />
      </div>
    </>
  )
}

export default Table;