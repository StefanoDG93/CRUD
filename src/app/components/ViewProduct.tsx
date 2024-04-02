import Link from "next/link";
import { FC } from "react";

interface Product {
  id: number,
}

const ViewProduct: FC<Product> = ({ id }) => {
  return (
    <>
      <Link href={`http://localhost:3000/${id}`}>
        <button className="ViewButton">View</button>
      </Link>
    </>
  )
}

export default ViewProduct;
