'use client';
import Image from "next/image";
import abs from "../img/abs.png";
import Link from "next/link";

function Navbar() {
    return (
        <>
            <div className="flex gap-40 w-full justify-center">
                <div>
                    <Link href={`/`}>
                        <button className="text-white border rounded-xl text-lg mt-3.5 hover:underline hover:text-black hover:bg-white">Home</button>
                    </Link>
                </div>
                <div >
                    <Image
                        src={abs}
                        alt=""
                        width={115}
                    />
                </div>
            </div>
        </>
    )
}

export default Navbar;