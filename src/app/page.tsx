import Link from "next/link";
import Table from "./components/Table";
import Navbar from "./components/Navbar";

export default function Home() {

  return (
    <main className="flex flex-col items-center p-10 text-white">
      <Navbar />
      <Table />
    </main>
  );
}