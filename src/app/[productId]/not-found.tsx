import Navbar from "../components/Navbar";

export default function NotFound() {
    return (
        <div className="flex flex-col p-10 items-center">
            <Navbar></Navbar>
            <h2 className="text-white text-6xl mt-36">Product not found</h2>
        </div>
    );
}