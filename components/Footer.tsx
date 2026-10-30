import { connection } from "next/server";

export default async function Footer() {
  await connection();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4 mt-12">
      <div className="container mx-auto text-center">
        <p>Copyright &copy; {currentYear} | Nestor Rivera | All rights reserved</p>
      </div>
    </footer>
  );
}
