"use client";
import { useRouter } from "next/navigation";
const Products = ({ namaProduk, deskProduk, hargaProduk }) => {
  const router = useRouter();

  const handleClick = () => {
    // arahkan ke halaman pembayaran dengan query
    router.push(
      `/Payments?product=${encodeURIComponent(
        namaProduk
      )}&price=${hargaProduk}&id=WEB001`
    );
  };
  return (
    <div className="card bg-white rounded-xl shadow-md overflow-hidden">
      <div className="h-48 bg-blue-100 flex items-center justify-center">
        image
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{namaProduk}</h3>
        <p className="text-gray-600 mb-4">{deskProduk}</p>
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-3">
            <span className="font-bold text-blue-600">{hargaProduk}</span>
          </div>
          <button
            onClick={handleClick}
            className="beli-btn bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 w-full mx-auto"
            data-id="WEB001"
            data-nama="Pengembangan Website"
          >
            Pesan Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
