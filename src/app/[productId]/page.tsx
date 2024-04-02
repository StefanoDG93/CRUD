'use client';
import { notFound, redirect } from "next/navigation";
import { FC } from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import NotFound from "./not-found";

interface ProductDetailsProps {
  params: {
    productId: number;
  }
}

interface Product {
  id: number,
  name: string,
}

const ProductDetails: FC<ProductDetailsProps> = ({ params }) => {

  const [product, setProduct] = useState<Product>({ id: params.productId, name: "" });
  const [error, setError] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);

  const getData = async () => {
    const response = await fetch(`http://localhost:5000/items/${params.productId}`)
    if (!response.ok) {
      setError(true)
    }
    const productData = await response.json()
    setProduct(productData)
    setLoader(true)
  }

  useEffect(() => {
    getData()
  }, []);

  if (error) {
    notFound()
  }

  return (
    <>
      {loader ?
        <main className="flex flex-col items-center p-10 text-white">
          <Navbar />
          <h1 className=" text-3xl mt-20">
            Details
          </h1>
          <p className="mt-10 mb-5">
            Product Id: {product.id}
          </p>
          <p>
            Product name: {product.name}
          </p>
        </main>
        : <p className="text-white">Loading...</p>
      }
    </>
  )
}

export default ProductDetails;